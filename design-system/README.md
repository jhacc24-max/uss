Pertinencia is the visual system for institutional technical reports: *informes de pertinencia*, program-creation dossiers and labour-market syntheses that go to a university board and to the regulator. The page is A4 portrait, printed white, and read as evidence. Every choice serves traceability: each page carries a folio and a controlled-document header, and each table names its source.

## Content fundamentals

- Write in Spanish, in the impersonal institutional register: *"se ha focalizado en la identificación de la población interesada"*, *"el presente informe contiene las siguientes secciones"*. No first person singular, no second person, no exclamation marks, no emoji.
- Name the institution and its units in full on first use, then the abbreviation in parentheses: *"Universidad Señor de Sipán S.A.C. (en adelante, USS)"*, *"Superintendencia Nacional de Educación Superior Universitaria"*.
- Cite every figure to its dataset and year: *"De acuerdo con el BCRP (2023), Piura ha tenido un crecimiento anual promedio de 2%…"*. Numbers keep the source's own formatting inside tables (`1,280,594`, `63.1%`); prose uses the Spanish reading (*"1,9 millones de habitantes"*).
- Chapter titles are uppercase with a Roman numeral (`V.- MERCADO EDUCATIVO`); subsections are sentence case with a decimal number (`5.1.- Demanda educativa`); third-level headings run into the paragraph and end with a colon (`6.2.1. Necesidades locales:`).
- Mark projections, never hide them: an asterisk on the column (`2023*`) and a note under the table (`* Datos proyectados según información de APEIM para los años 2017-2022.`).

## Visual foundations

**Colour.** The page is `paper` with `ink` text. Colour is institutional, not decorative: `slate` belongs to the header block and the cover; `slate-deep` to headings and CONTENIDO; `table-head` (a very dark green) fills every data-table header row with `on-table-head` labels; `band` heads text-heavy matrices with `ink` labels. `folio` blue is reserved for the folio number and nothing else. Charts use `chart-1` to `chart-5` in that order; pair `chart-1` with `chart-2` when only two series are compared, since they differ in lightness as well as hue.

**Type.** Two families, both metric-compatible open stand-ins for the source's Office fonts so line breaks match: `body` (Carlito ≈ Calibri) for prose, headings and captions; `grotesk` (Arimo ≈ Arial) for the header block, the folio and everything inside a table. Set running text in `body` on a 22pt line, justified. Tables are small and dense: `table-head` and `table-cell` are both 8pt bold. Calibri Light has no open twin; `contents-title` and `contents-entry` fall back to Carlito regular where Calibri is not installed.

**Layout.** One text column from `margin-start` to `margin-end` (`measure` wide). Paragraph spacing is one empty line (`space-line`), never an indent. Section bodies step in by `indent-1`; paragraphs under a run-in heading by `indent-2`. Tables are centered on the column and may be narrower than it; the caption sits **above**, centered, as `caption`; the Fuente line sits **below**, left-aligned to the table's edge, as `source`.

**Structure lines.** Borders are `hairline` in `rule`. No shadows, no rounded corners (`radius-none` everywhere), no cards. The header block is a ruled grid; tables are ruled grids. Nothing else is boxed.

**Imagery.** Only the cover carries a photograph: a full-bleed campus or field image behind a white title panel. Interior pages carry figures and tables only.

**States and motion.** This is a print system. On screen, a focused interactive element (a link in a Fuente line, a CONTENIDO entry) gets a solid 2px `navy` outline offset 2px; there is no motion.

## Page anatomy

1. `Folio` top right, above everything.
2. `DocHeader`: the institution's mark | document type and purpose | Fecha / Versión / Hoja N de M. Repeated on every page, including the cover.
3. The text column: `SectionHeading`s, body, `DataTable`s.
4. Footnotes in `footnote` above the bottom margin.

## Iconography

The source uses no icon set. The only marks are the institution's logo in the header block's first cell and a rector's approval seal to its right. Neither is included here: `DocHeader` takes the consumer's own logo as its `mark` slot and leaves the seal to the signed print. Do not substitute icons or emoji.
