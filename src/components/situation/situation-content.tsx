import { situationSection } from "@/lib/situation-content";
import { parseSituationArticle } from "@/lib/situation-article";
import { ContentTable } from "@/components/ui/content-table";
import { renderSituationInline } from "./situation-inline";
import { SituationSidebar } from "./situation-sidebar";
import styles from "./situation-content.module.css";
import Image from "next/image";

export function SituationContent({ source, underlineInlineLinks = false }: { source: string; underlineInlineLinks?: boolean }) {
  if (!situationSection(source, "Article")) return null;
  const { blocks, headings, references } = parseSituationArticle(source);

  const firstHeading = blocks.findIndex(block => block.type === "heading");
  return (
    <section className={`section-spacing system-lines-bg ${styles.section}`}>
      <div className={`content-grid ${styles.layout}`}>
        <SituationSidebar headings={headings} />
        <article className={`text-body ${styles.article}`} id="situation-article">
          {blocks.map((block, index) => {
            const content = renderSituationInline(block.text, references, underlineInlineLinks ? styles.inlineLink : undefined);
            switch (block.type) {
              case "heading": return <h2 key={block.id} id={block.id} className="text-heading-3">{content}</h2>;
              case "subheading": return <h3 key={block.id} id={block.id} className="text-heading-4">{content}</h3>;
              case "quote": return <blockquote key={index}><p>{content}</p></blockquote>;
              case "image": return <figure key={index} className={styles.figure}>
                <Image src={block.src!} alt={block.text} width={1024} height={1536} sizes="(min-width: 1200px) 936px, 100vw" />
              </figure>;
              case "list": return <ul key={index}>{block.items!.map((item, i) => <li key={i}>{renderSituationInline(item, references, underlineInlineLinks ? styles.inlineLink : undefined)}</li>)}</ul>;
              case "table": {
                const heading = blocks.slice(0, index).findLast(item => item.type === "heading" || item.type === "subheading");
                return (
                  <ContentTable
                    key={index}
                    labelledBy={heading?.id}
                    longText={block.rows!.some(row => row.some(cell => cell.length >= 80))}
                    columns={block.columns!.map(cell => renderSituationInline(cell, references, underlineInlineLinks ? styles.inlineLink : undefined))}
                    rows={block.rows!.map(row => row.map(cell => renderSituationInline(cell, references, underlineInlineLinks ? styles.inlineLink : undefined)))}
                  />
                );
              }
              default: return <p key={index} className={index < firstHeading ? "text-body-large" : undefined}>{content}</p>;
            }
          })}
        </article>
      </div>
    </section>
  );
}
