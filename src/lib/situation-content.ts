import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readSituationContent(slug: string): Promise<string> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return "";
  try {
    return await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/situations", `${slug}.md`), "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return "";
    throw error;
  }
}

export function situationSection(source: string, name: string) {
  return source.replace(/\r\n/g, "\n").split(/^# /m).slice(1)
    .find(section => section.split("\n", 1)[0].trim() === name)
    ?.split("\n").slice(1).join("\n").trim() ?? "";
}

export function parseSituationHero(source: string) {
  const hero = situationSection(source, "Hero");
  const fields = new Map([...hero.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)]
    .map(match => [match[1].trim(), match[2].trim()]));
  return {
    headline: fields.get("Primary Headline") || undefined,
    supportingCopy: fields.get("Supporting Copy") || undefined,
  };
}
