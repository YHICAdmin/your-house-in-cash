import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { BlogIndexNavigation } from "@/components/blog/blog-index-navigation";
import { BlogTopicPreviews } from "@/components/blog/blog-topic-previews";
import { SiteFooter } from "@/components/layout/site-footer";
import { TextLink } from "@/components/ui/text-link";
import { readBlogArticle, readBlogTopics, readRecentBlogTopics } from "@/lib/blog-content";
import styles from "./page.module.css";

const featuredArticleSlug = "how-much-money-will-you-net-when-you-sell-your-house";

export const metadata: Metadata = {
  title: "Blog | Your House in Cash",
  description: "Clear, practical guidance for homeowners considering a sale.",
};

export default async function BlogIndexPage() {
  const [article, topics, recentTopics] = await Promise.all([
    readBlogArticle(featuredArticleSlug),
    readBlogTopics(),
    readRecentBlogTopics(5, 4),
  ]);
  if (!article?.image) notFound();

  const summary = article.blocks.find((block) => block.type === "paragraph")?.text;
  if (!summary) notFound();

  const articleHref = `/blog/${featuredArticleSlug}`;
  const sortedTopics = [...topics].sort((first, second) => first.name.localeCompare(second.name));

  return (
    <>
      <main>
        <h1 className="visually-hidden">Blog</h1>
        <section className={`${styles.hero} system-lines-bg`}>
          <div className={styles.background} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.ribbon} src="/brand/blog-ribbon-background.svg" alt="" />
          </div>
          <div className={`${styles.layout} content-grid`}>
            <BlogIndexNavigation topics={sortedTopics} />
            <article className={styles.featuredArticle}>
              <div className={styles.articleContent}>
                <p className={`${styles.topic} text-body`}>
                  <Link className={styles.topicLink} href={`/blog/${article.topicSlug}`}>{article.mainTopic}</Link>
                </p>
                <h2 className={`${styles.articleTitle} text-heading-2`}>
                  <Link href={articleHref}>{article.title}</Link>
                </h2>
                <p className={`${styles.summary} text-body`}>{summary}</p>
                <TextLink className={styles.readLink} href={articleHref}>
                  Read article
                  <ArrowRight className={styles.readLinkArrow} size={16} aria-hidden="true" focusable="false" />
                </TextLink>
              </div>
              <div className={styles.media}>
                <Link className={styles.imageLink} href={articleHref} aria-label={`Read ${article.title}`}>
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(min-width: 1200px) 624px, 100vw"
                    priority
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>
        <BlogTopicPreviews topics={recentTopics} />
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
