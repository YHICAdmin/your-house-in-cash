import Link from "next/link";
import { Banknote, Clock } from "lucide-react";
import { FinalCta } from "@/components/ui/final-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { renderSituationInline } from "@/components/situation/situation-inline";
import type { readBlogArticle } from "@/lib/blog-content";
import styles from "./blog-article.module.css";

type Article = NonNullable<Awaited<ReturnType<typeof readBlogArticle>>>;

export function BlogArticle({ article }: { article: Article }) {
  const firstHeading = article.blocks.findIndex(block => block.type === "heading");
  const cta = article.cta;
  if (!cta) throw new Error("Blog article needs a Final CTA");
  const icons = { Banknote, Clock };
  const benefits = cta.benefits.map(benefit => {
    const icon = icons[benefit.icon as keyof typeof icons];
    if (!icon) throw new Error(`Unsupported blog CTA icon: ${benefit.icon}`);
    return { ...benefit, icon };
  }) as [typeof cta.benefits[0] & { icon: typeof Banknote }, typeof cta.benefits[1] & { icon: typeof Clock }];

  return <>
    <main className={`${styles.main} system-lines-bg`}>
      <div className={`content-grid ${styles.breadcrumbGrid}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <ol>
            <li><Link href="/blog">Blog</Link></li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">{article.title}</li>
          </ol>
        </nav>
      </div>
      <div className={`content-grid ${styles.readingGrid}`}>
        <header className={styles.articleHeader}>
          <h1 className="text-display">{article.title}</h1>
          <time dateTime={article.publicationDate}>{new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${article.publicationDate}T00:00:00Z`))}</time>
        </header>
        <aside className={styles.topics} aria-label="Article topics">
          <div className={styles.topicPrimary}>
            <h2 className="text-heading-3">{article.mainTopic}</h2>
          </div>
          <div className={styles.topicRelated}>
            <h3 className="text-body-small">Also covered</h3>
            <ul className="text-body-small">{article.relatedTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          </div>
        </aside>
        <article id="blog-article" className={`text-body ${styles.body}`}>
          {article.blocks.map((block, index) => {
            const content = renderSituationInline(block.text, article.references);
            switch (block.type) {
              case "heading": return <h2 key={block.id} id={block.id} className="text-heading-3">{content}</h2>;
              case "subheading": return <h3 key={block.id} id={block.id} className="text-heading-4">{content}</h3>;
              case "quote": return <blockquote key={index}><p>{content}</p></blockquote>;
              case "list": return <ul key={index}>{block.items!.map((item, itemIndex) => <li key={itemIndex}>{renderSituationInline(item, article.references)}</li>)}</ul>;
              default: return <p key={index} className={index < firstHeading ? "text-body-large" : undefined}>{content}</p>;
            }
          })}
        </article>
      </div>
    </main>
    <FinalCta content={{ ...cta, benefits }} background="soft" />
    <SiteFooter />
  </>;
}
