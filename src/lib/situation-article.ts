export type ArticleBlock = {
  type: "heading" | "subheading" | "paragraph" | "quote" | "list" | "table" | "image";
  text: string;
  id?: string;
  items?: string[];
  columns?: string[];
  rows?: string[][];
  src?: string;
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
    const image = /^!\[([^\]]*)\]\((\/[^\s)]+)\)$/.exec(chunk);
    if (image) return { type: "image", text: image[1], src: image[2] };
    const lines = chunk.split(/\r?\n/);
    if (lines.every(line => /^[-*] /.test(line))) {
      return { type: "list", text: "", items: lines.map(line => line.replace(/^[-*] /, "")) };
    }
    // Pipe tables are supported; malformed rows remain readable as prose.
    if (lines.length >= 2 && lines.every(line => /^\|.*\|$/.test(line.trim()))) {
      const cells = lines.map(line => line.trim().slice(1, -1).split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, "|")));
      const [columns, separator, ...rows] = cells;
      if (columns.length > 1 && cells.every(row => row.length === columns.length) && separator.every(cell => /^:?-{3,}:?$/.test(cell))) {
        return { type: "table", text: "", columns, rows };
      }
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

export function parseSituationFinalCta(source: string) {
  const { body } = extractReferences(source);
  const section = /^# Final CTA[^\S\r\n]*\r?\n([\s\S]*?)(?=^# |$(?![\s\S]))/m.exec(body)?.[1];
  if (section === undefined) return null;
  const fields = new Map([...section.matchAll(/^## (.+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(match => [match[1].trim(), match[2].trim()]));
  const field = (name: string) => {
    const value = fields.get(name);
    if (!value) throw new Error(`Missing Final CTA field: ${name}`);
    return value;
  };
  const link = /^\[([^\]]+)\]\(([^\s)]+)\)$/.exec(field("Primary CTA"));
  if (!link || !/^(\/(?!\/)|https?:\/\/|mailto:|tel:|#)/i.test(link[2])) throw new Error("Invalid Final CTA link");
  const benefits = [...field("Supporting Benefits").matchAll(/^### Benefit \d+\r?\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map(match => {
    const icon = /^- Icon: `([^`]+)`\s*$/m.exec(match[1])?.[1];
    const heading = /^- Heading: (.+)$/m.exec(match[1])?.[1].trim();
    const supportingCopy = /^- Supporting Copy: (.+)$/m.exec(match[1])?.[1].trim();
    if (!icon || !heading || !supportingCopy) throw new Error("Incomplete Final CTA benefit");
    return { icon, heading, supportingCopy };
  });
  if (benefits.length !== 2) throw new Error("Final CTA requires exactly two benefits");
  return {
    label: field("Section Label"), headline: field("Primary Headline"), supportingCopy: field("Supporting Copy"),
    cta: { label: link[1], href: link[2] }, reassurance: field("Reassurance Row"),
    benefits: [benefits[0], benefits[1]] as const,
  };
}
