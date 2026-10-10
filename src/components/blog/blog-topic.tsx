import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { TextLink } from "@/components/ui/text-link";
import type { readBlogTopic } from "@/lib/blog-content";
import styles from "./blog-topic.module.css";

type Topic = NonNullable<Awaited<ReturnType<typeof readBlogTopic>>>;

export function BlogTopic({ topic }: { topic: Topic }) {
  return <>
    <main className={`${styles.main} system-lines-bg`}>
      <section className={`content-grid ${styles.introduction}`} aria-labelledby="topic-title">
        <div className={styles.introductionContent}>
          <TextLink className={styles.breadcrumbLink} href="/blog">Blog</TextLink>
          <h1 id="topic-title" className="text-display">{topic.name}</h1>
          <p className={`${styles.description} text-body-large`}>{topic.description}</p>
        </div>
      </section>
      <section className={`content-grid ${styles.articles}`} aria-label={`${topic.name} articles`}>
        {topic.articles.map(article => {
          const summary = article.blocks.find(block => block.type === "paragraph")?.text;
          if (!summary) throw new Error(`Blog article ${article.title} needs an opening paragraph`);

          return <article key={article.title} className={styles.preview}>
            <p className={`${styles.topic} text-body-large`}>{article.mainTopic}</p>
            <h2 className={`${styles.title} text-heading-2`}>
              <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </h2>
            <time className={`${styles.date} text-body-small`} dateTime={article.publicationDate}>
              {new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${article.publicationDate}T00:00:00Z`))}
            </time>
            <div className={styles.previewBody}>
              <p className={`${styles.summary} text-body`}>{summary}</p>
              <TextLink className={styles.readLink} href={`/blog/${article.slug}`}>
                Read article
                <ArrowRight className={styles.readLinkArrow} size={16} aria-hidden="true" focusable="false" />
              </TextLink>
            </div>
            {article.image && <div className={styles.media}>
              <Image src={article.image.src} alt={article.image.alt} fill sizes="(min-width: 1200px) 624px, 100vw" />
            </div>}
          </article>;
        })}
      </section>
    </main>
    <SiteFooter />
  </>;
}
