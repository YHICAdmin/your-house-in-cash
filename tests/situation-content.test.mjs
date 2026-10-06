import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const file = fileURLToPath(new URL("../src/lib/situation-content.ts", import.meta.url));
const implementation = new Module(file);
implementation._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
}).outputText, file);
const { readSituationContent, situationSection, parseSituationHero } = implementation.exports;

test("each situation loads its own approved content", async () => {
  for (const slug of [
    "foreclosure", "inherited-property", "landlords", "major-repairs", "vacant-property", "relocation", "divorce",
    "liens", "fire-damage", "hoarder-house",
  ]) {
    const source = await readSituationContent(slug);
    assert.equal(source, fs.readFileSync(new URL(`../project-documentation/website-specification/content/situations/${slug}.md`, import.meta.url), "utf8"));
    assert.ok(parseSituationHero(source).headline);
  }
  for (const slug of ["foreclosure", "major-repairs", "liens", "fire-damage", "hoarder-house"])
    assert.ok(situationSection(await readSituationContent(slug), "Article"));
});

test("missing files and invalid paths return empty content safely", async () => {
  for (const slug of ["nonexistent-situation-test", "../inherited-property", "", "foreclosure/../../other"]) {
    assert.equal(await readSituationContent(slug), "");
  }
  for (const section of ["Article", "FAQ", "Final CTA"]) {
    assert.equal(situationSection("", section), "");
    assert.equal(situationSection(`# ${section}\n\n# Next\nText`, section), "");
  }
});

test("hero fields are optional and isolated from other sections", () => {
  assert.deepEqual(parseSituationHero(""), { headline: undefined, supportingCopy: undefined });
  const source = "# Hero\r\n\r\n## Primary Headline\r\n\r\nNew title\r\n\r\n# Article\r\n\r\n## Supporting Copy\r\n\r\nNot hero copy";
  assert.deepEqual(parseSituationHero(source), { headline: "New title", supportingCopy: undefined });
  assert.equal(situationSection(source, "Article"), "## Supporting Copy\n\nNot hero copy");
});
