import type { MetadataRoute } from "next";
import { areas, getAreaPagePath } from "@/data/areas";
import { situations } from "@/data/situations";
import { blogSlugs, readBlogArticle, readBlogTopic, readBlogTopics } from "@/lib/blog-content";

const siteUrl = "https://www.yourhouseincash.com";
const articlesPerTopicPage = 6;

const toAbsoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, topics] = await Promise.all([
    Promise.all(blogSlugs.map(readBlogArticle)),
    readBlogTopics(),
  ]);
  const topicPages = await Promise.all(topics.map(topic => readBlogTopic(topic.slug)));

  return [
    "",
    "/about-us",
    "/areas-we-buy-in",
    "/blog",
    "/contact",
    "/get-cash-offer",
    "/privacy-policy",
    "/sell-property-portfolio",
    "/terms-of-service",
    ...areas.map(area => getAreaPagePath(area.slug)),
    ...situations.map(situation => `/${situation.slug}`),
  ].map(url => ({ url: toAbsoluteUrl(url) })).concat(
    articles.flatMap(article => article
      ? [{
          url: toAbsoluteUrl(`/blog/${article.slug}`),
          lastModified: article.publicationDate,
        }]
      : []),
    topics.map(topic => ({ url: toAbsoluteUrl(`/blog/${topic.slug}`) })),
    topicPages.flatMap(topic => topic
      ? Array.from(
          { length: Math.max(0, Math.ceil(topic.articles.length / articlesPerTopicPage) - 1) },
          (_, index) => ({ url: toAbsoluteUrl(`/blog/${topic.slug}/page/${index + 2}`) }),
        )
      : []),
  );
}
