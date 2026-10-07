import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";
import { blogSlugs, readBlogArticle } from "@/lib/blog-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await readBlogArticle(slug);
  if (!article) return {};
  const opening = article.blocks.find(block => block.type === "paragraph")?.text ?? "";
  return { title: `${article.title} | Your House in Cash`, description: opening.slice(0, 155) };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await readBlogArticle(slug);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
