import { situationSection } from "@/lib/situation-content";
import { parseSituationArticle } from "@/lib/situation-article";
import { renderSituationInline } from "./situation-inline";
import { SituationSidebar } from "./situation-sidebar";
import styles from "./situation-content.module.css";

export function SituationContent({ source }: { source: string }) {
  if (!situationSection(source, "Article")) return null;
  const { blocks, headings, references } = parseSituationArticle(source);

  const firstHeading = blocks.findIndex(block => block.type === "heading");
  return (
    <section className={`section-spacing system-lines-bg ${styles.section}`}>
      <div className={`content-grid ${styles.layout}`}>
        <SituationSidebar headings={headings} />
        <article className={`text-body ${styles.article}`} id="situation-article">
          {blocks.map((block, index) => {
            const content = renderSituationInline(block.text, references);
            switch (block.type) {
              case "heading": return <h2 key={block.id} id={block.id} className="text-heading-3">{content}</h2>;
              case "subheading": return <h3 key={block.id} id={block.id} className="text-heading-4">{content}</h3>;
              case "quote": return <blockquote key={index}><p>{content}</p></blockquote>;
              case "list": return <ul key={index}>{block.items!.map((item, i) => <li key={i}>{renderSituationInline(item, references)}</li>)}</ul>;
              default: return <p key={index} className={index < firstHeading ? "text-body-large" : undefined}>{content}</p>;
            }
          })}
        </article>
      </div>
    </section>
  );
}
