The controlled-document header block that repeats on every page, cover included.

- Four columns on a hairline grid: the institution's mark (spans three rows) | document type over its purpose | Fecha / Versión / Hoja labels | their values.
- Consumer provides `purpose`, `date` (dd/mm/yyyy), `version` (two digits, `00` for the first issue), `sheet` and `sheets`, and the `mark` as an `<img>` or `<svg>` of their own logo. With no `mark`, `institution` is set in type; never draw a logo.
- All text is `slate` in `grotesk` bold; only the page numbers in "Hoja: 10 de 25" are regular weight.
- Width is the sheet minus `page-inset` on both sides, wider than the text column.
