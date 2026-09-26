import type { ReactNode } from 'react';

/** Six-digit correlative folio stamped top right of every page. */
export function Folio(props: { number: number | string; digits?: number }): JSX.Element;

/** Controlled-document header repeated on every page: mark | type + purpose | Fecha / Versión / Hoja. */
export function DocHeader(props: {
  /** The institution's own logo (img or svg). Without it, `institution` is set in type. */
  mark?: ReactNode;
  institution?: string;
  /** Document type, e.g. "Informe técnico". Rendered uppercase. */
  type?: string;
  /** Purpose line, e.g. "Para la creación de programas en filiales". Rendered uppercase. */
  purpose: string;
  /** dd/mm/yyyy */
  date: string;
  version?: string;
  sheet: number;
  sheets: number;
}): JSX.Element;

/** Numbered heading: level 1 "V.- MERCADO EDUCATIVO", level 2 "5.1.- Demanda educativa", level 3 run-in "6.2.1. Necesidades locales:". */
export function SectionHeading(props: {
  level?: 1 | 2 | 3;
  /** "V", "5.1", "6.2.1" — the separator is added. */
  number?: string;
  title: string;
  /** Level 3 only: the paragraph the heading runs into. */
  children?: ReactNode;
}): JSX.Element;

/** Numbered data table: caption above, ruled grid, Fuente and notes below. */
export function DataTable(props: {
  number: number | string;
  title: string;
  /** First column is the row label ("Concepto"). */
  columns: string[];
  rows: (string | number)[][];
  /** Without the "Fuente: " prefix. */
  source?: string;
  /** Extra lines, e.g. "* Datos proyectados según …". */
  notes?: string[];
  /** "head" (default): dark green header row for figures. "band": pale header for text matrices. */
  tone?: 'head' | 'band';
  align?: 'right' | 'center';
}): JSX.Element;

/** The CONTENIDO page. */
export function Contents(props: {
  title?: string;
  items: { number?: string; title: string; page?: number; level?: 1 | 2 }[];
}): JSX.Element;

/** A4 cover: full-bleed photo behind a white title panel. */
export function ReportCover(props: {
  titleLines: string[];
  program?: string;
  date?: string;
  author?: string;
  photo?: string;
  photoAlt?: string;
}): JSX.Element;
