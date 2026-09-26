import type { ReactNode } from 'react';

/** Folio correlativo de seis dígitos estampado arriba a la derecha de cada página. */
export function Folio(props: { number: number | string; digits?: number }): JSX.Element;

/** Encabezado de documento controlado repetido en cada página: logo | tipo + propósito | Fecha / Versión / Hoja. */
export function DocHeader(props: {
  /** Logo propio de la institución (img o svg). Sin él, `institution` se compone en texto. */
  mark?: ReactNode;
  institution?: string;
  /** Tipo de documento, p. ej. "Informe técnico". Se muestra en mayúsculas. */
  type?: string;
  /** Línea de propósito, p. ej. "Para la creación de programas en filiales". Se muestra en mayúsculas. */
  purpose: string;
  /** dd/mm/aaaa */
  date: string;
  version?: string;
  sheet: number;
  sheets: number;
}): JSX.Element;

/** Título numerado: nivel 1 "V.- MERCADO EDUCATIVO", nivel 2 "5.1.- Demanda educativa", nivel 3 en línea "6.2.1. Necesidades locales:". */
export function SectionHeading(props: {
  level?: 1 | 2 | 3;
  /** "V", "5.1", "6.2.1": el separador se añade solo. */
  number?: string;
  title: string;
  /** Solo nivel 3: el párrafo con el que el título va en línea. */
  children?: ReactNode;
}): JSX.Element;

/** Tabla de datos numerada: título encima, cuadrícula con filetes, Fuente y notas debajo. */
export function DataTable(props: {
  number: number | string;
  title: string;
  /** La primera columna es la etiqueta de fila ("Concepto"). */
  columns: string[];
  rows: (string | number)[][];
  /** Sin el prefijo "Fuente: ". */
  source?: string;
  /** Líneas adicionales, p. ej. "* Datos proyectados según …". */
  notes?: string[];
  /** "head" (por defecto): fila de encabezado verde oscuro para cifras. "band": encabezado claro para matrices de texto. */
  tone?: 'head' | 'band';
  align?: 'right' | 'center';
}): JSX.Element;

/** La página CONTENIDO. */
export function Contents(props: {
  title?: string;
  items: { number?: string; title: string; page?: number; level?: 1 | 2 }[];
}): JSX.Element;

/** Portada A4: foto a sangre detrás de un panel blanco con el título. */
export function ReportCover(props: {
  titleLines: string[];
  program?: string;
  date?: string;
  author?: string;
  photo?: string;
  photoAlt?: string;
}): JSX.Element;
