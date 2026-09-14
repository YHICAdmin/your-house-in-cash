export type ArticleBlock = {
  type: "heading" | "subheading" | "paragraph" | "quote" | "list";
  text: string;
  id?: string;
  items?: string[];
};

// The supported Markdown blocks are those used by the approved situation article.
export function parseSituationArticle(source: string) {
  const references: Record<string, { href: string; title?: string }> = {};
  const body = source.replace(/^\[(\d+)\]:\s+(\S+)(?:\s+"([^"]*)")?\s*$/gm, (_, key, href, title) => {
    references[key] = { href, title };
    return "";
  });
  const article = /^# Article[^\S\r\n]*\r?\n([\s\S]*?)(?=^# |$(?![\s\S]))/m.exec(body);
  if (!article) throw new Error("Situation content must contain a # Article section");
  const ids = new Map<string, number>();
  const blocks: ArticleBlock[] = article[1].trim().split(/\r?\n\s*\r?\n/).filter(Boolean).map(chunk => {
    const heading = /^(#{2,3}) (.+)$/.exec(chunk);
    if (heading) {
      const base = heading[2].toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
      const count = (ids.get(base) ?? 0) + 1;
      ids.set(base, count);
      return { type: heading[1] === "##" ? "heading" : "subheading", text: heading[2], id: count === 1 ? base : `${base}-${count}` };
    }
    if (chunk.startsWith("* ")) {
      return { type: "list", text: "", items: chunk.split(/\r?\n/).map(line => line.replace(/^\* /, "")) };
    }
    if (chunk.startsWith("> ")) {
      return { type: "quote", text: chunk.replace(/^> ?/gm, "").replace(/\r?\n/g, " ") };
    }
    return { type: "paragraph", text: chunk.replace(/\r?\n/g, " ") };
  });
  const headings = blocks.filter(block => block.type === "heading").map(block => ({ id: block.id!, label: block.text }));
  return { blocks, references, headings };
}
