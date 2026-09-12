import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import Module from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const file = fileURLToPath(new URL("../src/lib/phone.ts", import.meta.url));
const compiled = ts.transpileModule(fs.readFileSync(file, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const implementation = new Module(file);
implementation.filename = file;
implementation.paths = Module._nodeModulePaths(path.dirname(file));
implementation._compile(compiled, file);
const { formatPhone, normalizePhone, validUSPhone } = implementation.exports;

test("formats progressive US input and pasted country prefixes", () => {
  assert.equal(formatPhone("216"), "216");
  assert.equal(formatPhone("2165"), "216-5");
  assert.equal(formatPhone("+1 (216) 555-1234"), "216-555-1234");
  assert.equal(normalizePhone("+1 (216) 555-1234"), "2165551234");
});
test("accepts valid US numbers but rejects other NANP regions", () => {
  assert.equal(validUSPhone("216-555-1234"), true);
  assert.equal(validUSPhone("+1 (416) 555-1234"), false);
  assert.equal(validUSPhone("+44 20 7946 0958"), false);
});
test("does not turn invalid text or excess digits into valid numbers", () => {
  for (const value of ["", "216", "21655512345", "call 2165551234", "0000000000"]) {
    assert.equal(validUSPhone(value), false, value);
  }
  assert.equal(formatPhone("call 2165551234"), "call 2165551234");
});
