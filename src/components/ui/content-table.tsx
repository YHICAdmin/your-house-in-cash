import type { ReactNode } from "react";
import styles from "./content-table.module.css";

type ContentTableProps = {
  columns: ReactNode[];
  longText?: boolean;
  rows: ReactNode[][];
  labelledBy?: string;
};

export function ContentTable({ columns, longText = false, rows, labelledBy }: ContentTableProps) {
  const label = labelledBy ? { "aria-labelledby": labelledBy } : { "aria-label": "Content table" };

  return (
    <div className={`text-body ${styles.scroll}`} role="region" {...label} tabIndex={0}>
      <table className={`${styles.table}${longText ? ` ${styles.longText}` : ""}`} {...label}>
        <thead>
          <tr>{columns.map((cell, index) => <th key={index} scope="col">{cell}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, column) => column === 0
                ? <th key={column} scope="row">{cell}</th>
                : <td key={column}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
