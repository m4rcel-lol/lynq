import type { ReactNode } from "react";

export type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
};

export function DataTable<T extends { id: string }>({ rows, columns }: { rows: T[]; columns: Array<Column<T>> }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} style={{ borderBottom: "1px solid var(--border-default)", padding: 10, textAlign: "left" }}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key} style={{ borderBottom: "1px solid var(--border-subtle)", padding: 10 }}>
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
