import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/text-link";
import type { readRecentBlogTopics } from "@/lib/blog-content";
import styles from "./blog-topic-previews.module.css";

type TopicPreview = Awaited<ReturnType<typeof readRecentBlogTopics>>[number];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogTopicPreviews({ topics }: { topics: TopicPreview[] }) {
  return (
    <section className={`${styles.section} system-lines-bg`} aria-label="Latest articles by topic">
      <div className={`content-grid ${styles.content}`}>
        {topics.map(topic => (
          <section key={topic.slug} className={styles.topic} aria-labelledby={`${topic.slug}-title`}>
            <header className={styles.topicHeader}>
              <h2 id={`${topic.slug}-title`} className="text-heading-3">{topic.name}</h2>
              <TextLink href={`/blog/${topic.slug}`}>View all</TextLink>
            </header>
            <div className={styles.articles}>
              {topic.articles.map(article => {
                const image = article.image ?? article.images[0];
                const summary = article.blocks.find(block => block.type === "paragraph")?.text;
                if (!summary) throw new Error(`Blog article ${article.title} needs an opening paragraph`);

                return (
                  <article key={article.slug} className={styles.article}>
                    {image && <Link className={styles.imageLink} href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 600px, 100vw" />
                    </Link>}
                    <time className={`${styles.date} text-body-small`} dateTime={article.publicationDate}>
                      {formatDate(article.publicationDate)}
                    </time>
                    <h3 className={`${styles.articleTitle} text-heading-4`}>
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className={`${styles.summary} text-body`}>{summary}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
