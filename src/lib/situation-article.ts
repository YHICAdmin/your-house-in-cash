export type ArticleBlock = {
  type: "heading" | "subheading" | "paragraph" | "quote" | "list";
  text: string;
  id?: string;
  items?: string[];
};

// The supported Markdown blocks are those used by the approved situation article.
function extractReferences(source: string) {
  const references: Record<string, { href: string; title?: string }> = {};
  const body = source.replace(/^\[(\d+)\]:\s+(\S+)(?:\s+"([^"]*)")?\s*$/gm, (_, key, href, title) => {
    references[key] = { href, title };
    return "";
  });
  return { body, references };
}

export function parseSituationArticle(source: string) {
  const { body, references } = extractReferences(source);
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

export function parseSituationFaq(source: string) {
  const { body, references } = extractReferences(source);
  const faq = /^# FAQ[^\S\r\n]*\r?\n([\s\S]*?)(?=^# |$(?![\s\S]))/m.exec(body)?.[1];
  if (faq === undefined) return null;
  const intro = /^## Section Intro\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(faq)?.[1];
  const questions = /^## Questions and Answers\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(faq)?.[1];
  if (!intro || !questions) throw new Error("FAQ requires Section Intro and Questions and Answers");
  const fields = new Map([...intro.matchAll(/^### (.+)\r?\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map(match => [match[1].trim(), match[2].trim()]));
  const field = (name: string) => {
    const value = fields.get(name);
    if (!value) throw new Error(`Missing FAQ intro field: ${name}`);
    return value;
  };
  const items = [...questions.matchAll(/^### (.+)\r?\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map(match => ({
    question: match[1].trim(),
    paragraphs: match[2].trim().split(/\r?\n\s*\r?\n/).map(paragraph => paragraph.replace(/\r?\n/g, " ")),
  }));
  if (!items.length || items.some(item => !item.paragraphs[0])) throw new Error("FAQ requires questions with answers");
  return { label: field("Section Label"), headline: field("Primary Headline"), supportingCopy: field("Supporting Copy"), items, references };
}
