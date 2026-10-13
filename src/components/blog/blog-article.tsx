import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import { Banknote, Clock } from "lucide-react";
import { FinalCta } from "@/components/ui/final-cta";
import { ContentTable } from "@/components/ui/content-table";
import { TextLink } from "@/components/ui/text-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { renderSituationInline } from "@/components/situation/situation-inline";
import { getExternalLinkProps } from "@/lib/link-target";
import type { readBlogArticle } from "@/lib/blog-content";
import styles from "./blog-article.module.css";

type Article = NonNullable<Awaited<ReturnType<typeof readBlogArticle>>>;

export function BlogArticle({ article }: { article: Article }) {
  const firstHeading = article.blocks.findIndex(block => block.type === "heading");
  const images = article.images.length ? article.images : article.image ? [article.image] : [];
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
            <li><TextLink className={styles.breadcrumbLink} href="/blog">Blog</TextLink></li>
            <li aria-hidden="true">→</li>
            <li><TextLink className={styles.breadcrumbLink} href={`/blog/${article.topicSlug}`}>{article.mainTopic}</TextLink></li>
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
            const displayText = block.text.startsWith("\\* Prices are estimates") ? block.text.slice(1) : block.text;
            const content = renderSituationInline(displayText, article.references);
            let element: ReactNode;
            switch (block.type) {
              case "heading": element = <h2 id={block.id} className="text-heading-3">{content}</h2>; break;
              case "subheading": element = <h3 id={block.id} className="text-heading-4">{content}</h3>; break;
              case "quote": element = <blockquote><p>{content}</p></blockquote>; break;
              case "list": element = <ul>{block.items!.map((item, itemIndex) => <li key={itemIndex}>{renderSituationInline(item, article.references)}</li>)}</ul>; break;
              case "table": {
                const heading = article.blocks.slice(0, index).findLast(item => item.type === "heading" || item.type === "subheading");
                element = <ContentTable
                  labelledBy={heading?.id}
                  longText={block.rows!.some(row => row.some(cell => cell.length >= 80))}
                  columns={block.columns!.map(cell => renderSituationInline(cell, article.references))}
                  rows={block.rows!.map(row => row.map(cell => renderSituationInline(cell, article.references)))}
                />;
                break;
              }
              default: element = <p className={displayText.startsWith("* Prices are estimates") ? `${styles.priceNote} text-caption` : index < firstHeading ? "text-body-large" : undefined}>{content}</p>;
            }
            const sectionHeading = article.blocks.slice(0, index + 1).findLast(item => item.type === "heading")?.text;
            const sectionEnds = index === article.blocks.length - 1 || article.blocks[index + 1].type === "heading";
            const sectionImages = sectionEnds && sectionHeading ? images.filter(image => "afterHeading" in image && image.afterHeading === sectionHeading) : [];
            const openingImages = index === firstHeading ? images.filter(image => !("afterHeading" in image) || !image.afterHeading) : [];
            const renderImages = (items: typeof images) => items.length > 0 && <div className={items.length > 1 ? styles.articleImages : undefined}>
                {items.map(image => <figure key={image.src} className={styles.articleImage}>
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={images.length > 1 ? "(min-width: 1200px) 260px, (min-width: 768px) 30vw, 100vw" : "(min-width: 1200px) 800px, (min-width: 768px) 90vw, 100vw"} />
                  {image.credit && <figcaption className="text-caption">{image.source ? <>Photo: <a href={image.source} {...getExternalLinkProps(image.source)}>{image.credit}</a></> : image.credit}</figcaption>}
                </figure>)}
              </div>;
            return <Fragment key={block.id ?? index}>
              {renderImages(openingImages)}
              {element}
              {renderImages(sectionImages)}
            </Fragment>;
          })}
        </article>
      </div>
    </main>
    <FinalCta content={{ ...cta, benefits }} background="soft" />
    <SiteFooter />
  </>;
}
