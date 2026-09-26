A numbered data table with its caption above and its source below, the report's main evidence device.

- Consumer provides `number`, `title`, `columns` (the first is the row-label column, often "Concepto"), `rows` as preformatted strings, and `source` (the dataset and years, without "Fuente: ").
- Mark projected columns with `*` in the header and add the explanation to `notes`.
- `tone="head"` (default) fills the header row with `table-head`; use `tone="band"` for text-heavy matrices such as the Certificaciones progresivas table.
- Keep the source's number formatting (`1,280,594`, `63.1%`). Figures are right-aligned and tabular. Tables may be narrower than the text column and are centered in it.
- Never omit the Fuente line. Own calculations read "Fuente: Elaboración propia".
