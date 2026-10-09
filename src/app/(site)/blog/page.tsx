import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { readBlogArticle } from "@/lib/blog-content";
import styles from "./page.module.css";

const featuredArticleSlug = "how-much-money-will-you-net-when-you-sell-your-house";

export const metadata: Metadata = {
  title: "Blog | Your House in Cash",
  description: "Clear, practical guidance for homeowners considering a sale.",
};

export default async function BlogIndexPage() {
  const article = await readBlogArticle(featuredArticleSlug);
  if (!article?.image) notFound();

  const summary = article.blocks.find((block) => block.type === "paragraph")?.text;
  if (!summary) notFound();

  const articleHref = `/blog/${featuredArticleSlug}`;

  return (
    <>
      <main>
        <section className={`${styles.hero} system-lines-bg`} aria-labelledby="blog-heading">
          <div className={`${styles.layout} content-grid`}>
            <h1 id="blog-heading" className={`${styles.heading} text-body-small`}>Blog</h1>
            <article className={styles.featuredArticle}>
              <div className={styles.articleContent}>
                <p className={`${styles.topic} text-body`}>
                  <Link className={styles.topicLink} href={`/blog/${article.topicSlug}`}>{article.mainTopic}</Link>
                </p>
                <h2 className={`${styles.articleTitle} text-heading-2`}>
                  <Link href={articleHref}>{article.title}</Link>
                </h2>
                <p className={`${styles.summary} text-body`}>{summary}</p>
                <Link className={styles.readLink} href={articleHref}>
                  Read article
                  <ArrowRight className={styles.readLinkArrow} size={16} aria-hidden="true" focusable="false" />
                </Link>
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
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
