import type { ReactNode } from "react";
import { TextLink } from "@/components/ui/text-link";

export function renderSituationInline(text: string, references: Record<string, { href: string; title?: string }>): ReactNode[] {
    const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|\[([^\]]+)\]\[(\d+)\]/g;
    const nodes: ReactNode[] = [];
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      nodes.push(text.slice(cursor, match.index));
      if (match[1]) nodes.push(<strong key={match.index}>{renderSituationInline(match[1], references)}</strong>);
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
