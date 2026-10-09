import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";
import { BlogTopic } from "@/components/blog/blog-topic";
import { blogSlugs, readBlogArticle, readBlogTopic, readBlogTopics } from "@/lib/blog-content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const topics = await readBlogTopics();
  return [...blogSlugs, ...topics.map(topic => topic.slug)].map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await readBlogArticle(slug);
  if (article) {
    const opening = article.blocks.find(block => block.type === "paragraph")?.text ?? "";
    return { title: `${article.title} | Your House in Cash`, description: opening.slice(0, 155) };
  }

  const topic = await readBlogTopic(slug);
  return topic ? { title: `${topic.name} | Blog | Your House in Cash`, description: topic.description } : {};
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await readBlogArticle(slug);
  if (article) return <BlogArticle article={article} />;

  const topic = await readBlogTopic(slug);
  if (!topic) notFound();
  return <BlogTopic topic={topic} />;
}
