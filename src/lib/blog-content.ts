import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseSituationArticle, parseSituationFinalCta } from "@/lib/situation-article";

export const blogSlugs = ["maple-heights-rental-market-snapshot-2026", "how-to-keep-your-basement-dry", "how-much-money-will-you-net-when-you-sell-your-house", "garfield-heights-point-of-sale-inspection"] as const;

const toSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
  const imagePaths = [...source.matchAll(/^Image (\d+) path: (\/images\/blog\/[a-z0-9.-]+)$/gm)];
  if (!title || !publicationDate || !mainTopic || !relatedTopics?.length) throw new Error(`Blog article ${slug} needs a title, publication date, and topics`);
  if (imagePath && !imageAlt) throw new Error(`Blog article ${slug} needs image alt text`);
  const images = imagePaths.map(([, index, src]) => {
    const alt = new RegExp(`^Image ${index} alt: (.+)$`, "m").exec(source)?.[1];
    const afterHeading = new RegExp(`^Image ${index} after heading: (.+)$`, "m").exec(source)?.[1];
    const width = new RegExp(`^Image ${index} width: (\\d+)$`, "m").exec(source)?.[1];
    const height = new RegExp(`^Image ${index} height: (\\d+)$`, "m").exec(source)?.[1];
    if (!alt) throw new Error(`Blog article ${slug} needs alt text for image ${index}`);
    return { src, alt, afterHeading, source: undefined, credit: undefined, width: width ? Number(width) : 1536, height: height ? Number(height) : 1024 };
  });
  const body = source.split(/^# Final CTA\s*$/m)[0].split(/^# .+$/m).slice(1).join("\n");
  const references = source.match(/^\[\d+\]:.+$/gm)?.join("\n") ?? "";
  const article = parseSituationArticle(`# Article\n${body}\n${references}`);
  const cta = parseSituationFinalCta(source);
  const topicSlug = toSlug(mainTopic);
  const image = imagePath ? { src: imagePath, alt: imageAlt!, source: imageSource, credit: imageCredit, width: imageWidth ? Number(imageWidth) : 1536, height: imageHeight ? Number(imageHeight) : 1024 } : null;
  return { slug, title, publicationDate, mainTopic, topicSlug, relatedTopics, image, images, ...article, cta };
}

export type BlogArticle = NonNullable<Awaited<ReturnType<typeof readBlogArticle>>>;

export async function readBlogArticles() {
  return (await Promise.all(blogSlugs.map(readBlogArticle))).filter((article): article is BlogArticle => article !== null);
}

export async function readRecentBlogTopics(topicLimit = 5, articlesPerTopic = 2) {
  const articles = (await readBlogArticles()).sort((first, second) => second.publicationDate.localeCompare(first.publicationDate));
  const topicSlugs = [...new Set(articles.map(article => article.topicSlug))].slice(0, topicLimit);

  return topicSlugs.map(slug => {
    const topicArticles = articles.filter(article => article.topicSlug === slug).slice(0, articlesPerTopic);
    return {
      name: topicArticles[0].mainTopic,
      slug,
      articles: topicArticles,
    };
  });
}

export async function readBlogTopic(slug: string) {
  const [source, articles] = await Promise.all([
    readFile(path.join(process.cwd(), "project-documentation/website-specification/content/blog/topics.md"), "utf8"),
    readBlogArticles(),
  ]);
  const topic = source
    .split(/^# /m)
    .slice(1)
    .map(section => {
      const [name, ...description] = section.trim().split("\n");
      return { name, slug: toSlug(name), description: description.join("\n").trim() };
    })
    .find(topic => topic.slug === slug);

  if (!topic) return null;

  const topicArticles = articles
    .filter(article => article.topicSlug === slug)
    .sort((a, b) => b.publicationDate.localeCompare(a.publicationDate));

  return topicArticles.length ? { ...topic, articles: topicArticles } : null;
}

export async function readBlogTopics() {
  const source = await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/blog/topics.md"), "utf8");
  const articles = await readBlogArticles();
  const articleTopicSlugs = new Set(articles.map(article => article.topicSlug));

  return source
    .split(/^# /m)
    .slice(1)
    .map(section => section.trim().split("\n")[0])
    .map(name => ({ name, slug: toSlug(name) }))
    .filter(topic => articleTopicSlugs.has(topic.slug));
}
