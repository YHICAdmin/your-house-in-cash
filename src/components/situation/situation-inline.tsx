import type { ReactNode } from "react";
import { TextLink } from "@/components/ui/text-link";

export function renderSituationInline(text: string, references: Record<string, { href: string; title?: string }>): ReactNode[] {
    const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|\[([^\]]+)\]\[(\d+)\]|\[(\d+)\]/g;
    const nodes: ReactNode[] = [];
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      nodes.push(text.slice(cursor, match.index));
      if (match[1]) nodes.push(<strong key={match.index}>{renderSituationInline(match[1], references)}</strong>);
      else {
        const referenceKey = match[5] ?? match[6];
        const reference = referenceKey ? references[referenceKey] : { href: match[3] };
        if (!reference && match[6]) {
          nodes.push(match[0]);
          cursor = match.index! + match[0].length;
          continue;
        }
        if (!reference) throw new Error(`Missing article reference: ${referenceKey}`);
        const isDownloadableDocument = reference.href.startsWith("/documents/") && reference.href.endsWith(".pdf");
        nodes.push(<TextLink key={match.index} href={reference.href} title={"title" in reference ? reference.title : undefined} download={isDownloadableDocument || undefined}>{match[2] ?? match[4] ?? `[${match[6]}]`}</TextLink>);
      }
      cursor = match.index! + match[0].length;
    }
    nodes.push(text.slice(cursor));
    return nodes;
  }
