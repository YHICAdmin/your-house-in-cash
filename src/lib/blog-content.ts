import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseSituationArticle, parseSituationFinalCta } from "@/lib/situation-article";

export const blogSlugs = ["maple-heights-rental-market-snapshot-2026", "how-to-keep-your-basement-dry", "how-much-money-will-you-net-when-you-sell-your-house"] as const;

export async function readBlogArticle(slug: string) {
  if (!blogSlugs.some(value => value === slug)) return null;
  const source = await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/blog", `${slug}.md`), "utf8");
  const title = /^# (.+)$/m.exec(source)?.[1];
  const publicationDate = /^Publication date: (\d{4}-\d{2}-\d{2})$/m.exec(source)?.[1];
  const mainTopic = /^Main topic: (.+)$/m.exec(source)?.[1];
  const relatedTopics = /^Topics covered: (.+)$/m.exec(source)?.[1]?.split(",").map(topic => topic.trim()).filter(Boolean);
  const imagePath = /^Image path: (\/images\/blog\/[a-z0-9.-]+)$/m.exec(source)?.[1];
  const imageAlt = /^Image alt: (.+)$/m.exec(source)?.[1];
  const imageSource = /^Image source: (https:\/\/\S+)$/m.exec(source)?.[1];
  const imageCredit = /^Image credit: (.+)$/m.exec(source)?.[1];
  const imageWidth = /^Image width: (\d+)$/m.exec(source)?.[1];
  const imageHeight = /^Image height: (\d+)$/m.exec(source)?.[1];
  if (!title || !publicationDate || !mainTopic || !relatedTopics?.length) throw new Error(`Blog article ${slug} needs a title, publication date, and topics`);
  if (imagePath && !imageAlt) throw new Error(`Blog article ${slug} needs image alt text`);
  const body = source.split(/^# Final CTA\s*$/m)[0].split(/^# .+$/m).slice(1).join("\n");
  const article = parseSituationArticle(`# Article\n${body}`);
  const cta = parseSituationFinalCta(source);
  const topicSlug = mainTopic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const image = imagePath ? { src: imagePath, alt: imageAlt!, source: imageSource, credit: imageCredit, width: imageWidth ? Number(imageWidth) : 1536, height: imageHeight ? Number(imageHeight) : 1024 } : null;
  return { title, publicationDate, mainTopic, topicSlug, relatedTopics, image, ...article, cta };
}
