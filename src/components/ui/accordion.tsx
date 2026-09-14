"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./accordion.module.css";

export type AccordionItem = {
  answer: ReactNode;
  question: ReactNode;
};

type AccordionProps = {
  defaultOpenItem?: number;
  items: readonly AccordionItem[];
};

export function Accordion({ defaultOpenItem, items }: AccordionProps) {
  const accordionId = useId();
  const [openItem, setOpenItem] = useState<number | null>(
    defaultOpenItem ?? null,
  );

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openItem === index;
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div key={index} className={styles.item}>
            <button
              id={buttonId}
              className={styles.trigger}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenItem(isOpen ? null : index)}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.toggle} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              className={styles.panel}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              data-open={isOpen}
            >
              <div className={styles.panelInner}>
                <div className={styles.answer}>{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
