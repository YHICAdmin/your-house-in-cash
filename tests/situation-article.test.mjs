import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const file = fileURLToPath(new URL("../src/lib/situation-article.ts", import.meta.url));
const implementation = new Module(file);
implementation._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText, file);
const { parseSituationArticle, parseSituationFaq } = implementation.exports;

test("approved article preserves every heading and resolves every source reference", () => {
  const source = fs.readFileSync(new URL("../project-documentation/website-specification/content/situations/inherited-property.md", import.meta.url), "utf8");
  const result = parseSituationArticle(source);
  const expected = [...source.split("# Article")[1].split("# FAQ")[0].matchAll(/^## (.+)$/gm)].map(match => match[1].trim());
  assert.deepEqual(result.headings.map(heading => heading.label), expected);
  assert.equal(result.headings.length, 7);
  assert.equal(result.blocks.filter(block => block.type === "subheading").length, 4);
  assert.equal(result.blocks.filter(block => block.type === "list")[0].items.length, 5);
  assert.ok(result.blocks.some(block => block.type === "quote" && block.text.includes("The will says")));
  for (const [, key] of source.matchAll(/\]\[(\d+)\]/g)) assert.ok(result.references[key]?.href.startsWith("https://"));
  assert.ok(result.blocks.some(block => block.text.includes("[no-obligation as-is cash offer](/get-cash-offer)")));
  assert.ok(result.blocks.every(block => !/^\[\d+\]:/.test(block.text)));
});

test("heading anchors remain unique and CRLF/soft line breaks preserve words", () => {
  const result = parseSituationArticle("# Article\r\n\r\nOpening\r\nparagraph.\r\n\r\n## Same Title?\r\n\r\nText.\r\n\r\n## Same Title?\r\n\r\n> A quote\r\n> continued.");
  assert.deepEqual(result.headings.map(heading => heading.id), ["same-title", "same-title-2"]);
  assert.equal(result.blocks[0].text, "Opening paragraph.");
  assert.equal(result.blocks.at(-1).text, "A quote continued.");
});

test("article excludes group labels and FAQ while retaining shared references", () => {
  const result = parseSituationArticle("# Article\n\nIntro.\n\n## Topic\n\nRead [source][1].\n\n### Detail\n\nText.\n\n# FAQ\n\n## Question?\n\nFAQ answer.\n\n[1]: https://example.com/source");
  assert.deepEqual(result.headings, [{ id: "topic", label: "Topic" }]);
  assert.deepEqual(result.blocks.map(block => block.text), ["Intro.", "Topic", "Read [source][1].", "Detail", "Text."]);
  assert.equal(result.references[1].href, "https://example.com/source");
});

test("any following top-level section ends the article and a missing Article fails clearly", () => {
  assert.equal(parseSituationArticle("# Article\n\nBody.\n\n# Other\n\nUnrelated.").blocks.length, 1);
  assert.throws(() => parseSituationArticle("# FAQ\n\n## Question?"), /# Article/);
});

test("FAQ reads its own intro and four answers without including hero or article headings", () => {
  const source = fs.readFileSync(new URL("../project-documentation/website-specification/content/situations/inherited-property.md", import.meta.url), "utf8");
  const faq = parseSituationFaq(source);
  assert.equal(faq.label, "FAQ");
  assert.equal(faq.headline, "More questions about an inherited house?");
  assert.ok(faq.supportingCopy.includes("disagreements between heirs"));
  assert.deepEqual(faq.items.map(item => item.question), [
    "What if the heirs disagree about selling?",
    "Can I sell an inherited house from out of state?",
    "Do I need to empty the house before selling?",
    "Can I sell the house with a mortgage or liens?",
  ]);
  for (const item of faq.items) {
    assert.ok(item.paragraphs.every(paragraph => paragraph.length > 0 && !paragraph.includes("[1]:")));
    for (const [, key] of item.paragraphs.join(" ").matchAll(/\]\[(\d+)\]/g)) assert.ok(faq.references[key]?.href.startsWith("https://"));
  }
  assert.deepEqual(parseSituationFaq(source.replace(/\r?\n/g, "\r\n")), faq);
});

test("missing FAQ is optional but incomplete FAQ content fails clearly", () => {
  assert.equal(parseSituationFaq("# Hero\n\n## Primary Headline\n\nHeadline"), null);
  assert.throws(() => parseSituationFaq("# FAQ\n\n## Section Intro\n\nText"), /requires/);
});
