import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogTopic } from "@/components/blog/blog-topic";
import { readBlogTopic, readBlogTopics } from "@/lib/blog-content";

const articlesPerPage = 6;

export const dynamicParams = false;

export async function generateStaticParams() {
  const topics = await Promise.all((await readBlogTopics()).map(topic => readBlogTopic(topic.slug)));
  return topics.flatMap(topic => topic
    ? Array.from(
      { length: Math.max(0, Math.ceil(topic.articles.length / articlesPerPage) - 1) },
      (_, index) => ({ slug: topic.slug, page: String(index + 2) }),
    )
    : []);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; page: string }> }): Promise<Metadata> {
  const { slug, page } = await params;
  const topic = await readBlogTopic(slug);
  return topic ? { title: `${topic.name} | Blog | Your House in Cash`, description: topic.description, alternates: { canonical: `/blog/${slug}/page/${page}` } } : {};
}

export default async function BlogTopicPaginationPage({ params }: { params: Promise<{ slug: string; page: string }> }) {
  const { slug, page } = await params;
  const topic = await readBlogTopic(slug);
  const pageNumber = Number(page);
  const totalPages = topic ? Math.ceil(topic.articles.length / articlesPerPage) : 0;
  if (!topic || !Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) notFound();
  return <BlogTopic topic={topic} page={pageNumber} />;
}
