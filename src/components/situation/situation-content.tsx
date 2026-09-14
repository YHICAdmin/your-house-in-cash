import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
import { parseSituationArticle } from "@/lib/situation-article";
import { TextLink } from "@/components/ui/text-link";
import { SituationSidebar } from "./situation-sidebar";
import styles from "./situation-content.module.css";

export async function SituationContent({ slug }: { slug: string }) {
  if (slug !== "inherited-property") return null;
  const source = await readFile(path.join(process.cwd(), "project-documentation/website-specification/content/situations/inherited-property.md"), "utf8");
  const { blocks, headings, references } = parseSituationArticle(source);

  function inline(text: string): ReactNode[] {
    const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|\[([^\]]+)\]\[(\d+)\]/g;
    const nodes: ReactNode[] = [];
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      nodes.push(text.slice(cursor, match.index));
      if (match[1]) nodes.push(<strong key={match.index}>{inline(match[1])}</strong>);
      else {
        const reference = match[5] ? references[match[5]] : { href: match[3] };
        if (!reference) throw new Error(`Missing article reference: ${match[5]}`);
        nodes.push(<TextLink key={match.index} href={reference.href} title={"title" in reference ? reference.title : undefined}>{match[2] ?? match[4]}</TextLink>);
      }
      cursor = match.index! + match[0].length;
    }
    nodes.push(text.slice(cursor));
    return nodes;
  }

  const firstHeading = blocks.findIndex(block => block.type === "heading");
  return (
    <section className={`section-spacing system-lines-bg ${styles.section}`}>
      <div className={`content-grid ${styles.layout}`}>
        <SituationSidebar headings={headings} />
        <article className={`text-body ${styles.article}`} id="situation-article">
          {blocks.map((block, index) => {
            const content = inline(block.text);
            switch (block.type) {
              case "heading": return <h2 key={block.id} id={block.id} className="text-heading-3">{content}</h2>;
              case "subheading": return <h3 key={block.id} id={block.id} className="text-heading-4">{content}</h3>;
              case "quote": return <blockquote key={index}><p>{content}</p></blockquote>;
              case "list": return <ul key={index}>{block.items!.map((item, i) => <li key={i}>{inline(item)}</li>)}</ul>;
              default: return <p key={index} className={index < firstHeading ? "text-body-large" : undefined}>{content}</p>;
            }
          })}
        </article>
      </div>
    </section>
  );
}
