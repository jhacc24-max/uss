const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  Header, AlignmentType, WidthType, BorderStyle, ShadingType, VerticalAlign,
  PageNumber, LevelFormat, PageBreak, HorizontalPositionRelativeFrom,
  VerticalPositionRelativeFrom, TextWrappingType, HeightRule,
} = require('docx');
const C = require('./contenido.js');

const IMG = path.join(__dirname, 'img');
const logo = fs.readFileSync(path.join(IMG, 'logo.png'));
const logoPie = fs.readFileSync(path.join(IMG, 'logo_pie.png'));
const portada = fs.readFileSync(path.join(IMG, 'portada.png'));

// Paleta tomada del PDF original
const VERDE = '1F4E2C';     // encabezado de tablas
const PIZARRA = '44546A';   // títulos de portada
const TITULO = '323E4F';    // títulos de sección
const BODY = 'Calibri';
const TAB = 'Arial';

// A4, márgenes similares al original
const PAGE_W = 11906, PAGE_H = 16838, MARGIN_LR = 1701, MARGIN_T = 1134;
const CONTENT_W = PAGE_W - 2 * MARGIN_LR; // 8504

const thin = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
const allThin = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };

// "texto **negrita** [VERIFICAR] ..." -> TextRuns; marcas entre corchetes resaltadas en amarillo
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\[(?:VERIFICAR|DATO PENDIENTE)[^\]]*\])/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ text: t.slice(2, -2), ...base, bold: true }));
    else out.push(new TextRun({ text: t, ...base, bold: true, shading: { type: ShadingType.CLEAR, fill: 'FFFF00', color: 'auto' } }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

const body = (t, o = {}) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED, spacing: { after: 120, line: 360 },
  children: runs(t, { font: BODY, size: 24 }), ...o,
});

const h1 = t => new Paragraph({
  spacing: { before: 240, after: 160 }, keepNext: true,
  children: [new TextRun({ text: t, font: BODY, size: 28, color: TITULO })],
});
const h2 = t => new Paragraph({
  spacing: { before: 200, after: 120 }, indent: { left: 284 }, keepNext: true,
  children: [new TextRun({ text: t, font: BODY, size: 26, color: TITULO })],
});
const h3 = t => new Paragraph({
  alignment: AlignmentType.JUSTIFIED, spacing: { before: 160, after: 100, line: 360 }, keepNext: true,
  children: [new TextRun({ text: t, font: BODY, size: 24, bold: true })],
});

const bullet = (t, level = 0) => new Paragraph({
  numbering: { reference: 'vinetas', level }, alignment: AlignmentType.JUSTIFIED,
  spacing: { after: 80, line: 360 }, children: runs(t, { font: BODY, size: 24 }),
});

const caption = t => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 160, after: 60 }, keepNext: true,
  children: [new TextRun({ text: t, font: BODY, size: 22 })],
});
const fuente = t => new Paragraph({
  spacing: { after: 160 }, indent: { left: 300 },
  children: runs(t, { font: TAB, size: 14, italics: true, bold: true }),
});

function dataTable({ head, rows, widths, firstColLeft = true }) {
  const total = widths.reduce((a, b) => a + b, 0);
  const mk = (txt, i, isHead) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    borders: allThin, verticalAlign: VerticalAlign.CENTER,
    shading: isHead ? { fill: VERDE, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    margins: { top: 20, bottom: 20, left: 60, right: 60 },
    children: String(txt).split('\n').map(line => new Paragraph({
      alignment: (i === 0 && firstColLeft && !isHead) ? AlignmentType.LEFT : AlignmentType.CENTER,
      children: runs(line, { font: TAB, size: 15, bold: true, color: isHead ? 'FFFFFF' : '000000' }),
    })),
  });
  return new Table({
    alignment: AlignmentType.CENTER,
    width: { size: total, type: WidthType.DXA }, columnWidths: widths,
    rows: [
      new TableRow({ tableHeader: true, children: head.map((h, i) => mk(h, i, true)) }),
      ...rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, i) => mk(c, i, false)) })),
    ],
  });
}

// Encabezado idéntico al del PDF: logo | INFORME TÉCNICO / PARA LA CREACIÓN... | Fecha / Versión / Hoja
function encabezado() {
  const W = [3020, 3150, 1000, 1334];
  const cell = (children, w, extra = {}) => new TableCell({
    width: { size: w, type: WidthType.DXA }, borders: allThin,
    verticalAlign: VerticalAlign.CENTER, margins: { left: 60, right: 60 }, children, ...extra,
  });
  const t = (txt, o = {}) => new Paragraph({
    alignment: o.align || AlignmentType.LEFT,
    children: [new TextRun({ text: txt, font: TAB, size: 15, bold: o.bold !== false, color: '404040' })],
  });
  return new Table({
    width: { size: W.reduce((a, b) => a + b), type: WidthType.DXA }, columnWidths: W,
    rows: [
      new TableRow({ height: { value: 280, rule: HeightRule.ATLEAST }, children: [
        cell([new Paragraph({ children: [new ImageRun({ type: 'png', data: logo, transformation: { width: 178, height: 44 } })] })], W[0], { rowSpan: 3 }),
        cell([t('INFORME TÉCNICO', { align: AlignmentType.CENTER })], W[1]),
        cell([t('Fecha:')], W[2]),
        cell([t(C.meta.fecha)], W[3]),
      ] }),
      new TableRow({ height: { value: 280, rule: HeightRule.ATLEAST }, children: [
        cell([t('PARA LA CREACIÓN DE', { align: AlignmentType.CENTER }), t('PROGRAMAS EN FILIALES', { align: AlignmentType.CENTER })], W[1], { rowSpan: 2 }),
        cell([t('Versión:')], W[2]),
        cell([t(C.meta.version)], W[3]),
      ] }),
      new TableRow({ height: { value: 280, rule: HeightRule.ATLEAST }, children: [
        cell([t('Hoja:')], W[2]),
        cell([new Paragraph({ children: [
          new TextRun({ children: [PageNumber.CURRENT], font: TAB, size: 15, color: '404040' }),
          new TextRun({ text: ' de ', font: TAB, size: 15, bold: true, color: '404040' }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: TAB, size: 15, color: '404040' }),
        ] })], W[3]),
      ] }),
    ],
  });
}

// Portada: foto de campus a sangre + recuadro blanco con el título, como en el original
function portadaChildren() {
  const cuadro = new Table({
    width: { size: 4700, type: WidthType.DXA }, columnWidths: [4700],
    rows: [new TableRow({ height: { value: 9300, rule: HeightRule.EXACT }, children: [new TableCell({
      width: { size: 4700, type: WidthType.DXA },
      borders: { top: none, bottom: none, left: none, right: none },
      shading: { fill: 'FFFFFF', type: ShadingType.CLEAR, color: 'auto' },
      margins: { left: 500, right: 300, top: 400 },
      children: [
        ...C.portada.titulo.map(l => new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: l, font: BODY, size: 44, bold: true, color: PIZARRA })] })),
        new Paragraph({ spacing: { before: 700, after: 0 }, children: [new TextRun({ text: C.portada.programa, font: TAB, size: 26, bold: true, color: PIZARRA })] }),
        new Paragraph({ spacing: { before: 3600 }, children: [new TextRun({ text: C.portada.fecha, font: BODY, size: 20, bold: true, color: PIZARRA })] }),
        new Paragraph({ spacing: { before: 300 }, children: [new TextRun({ text: C.portada.elaborado, font: BODY, size: 20, bold: true, color: PIZARRA })] }),
      ],
    })] })],
  });
  return [
    new Paragraph({ children: [new ImageRun({
      type: 'png', data: portada, transformation: { width: 794, height: 603 },
      floating: {
        horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
        verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 1445000 },
        behindDocument: true, wrap: { type: TextWrappingType.NONE },
      },
    })] }),
    new Paragraph({ spacing: { before: 500 }, children: [] }),
    cuadro,
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 900 }, children: [new ImageRun({ type: 'png', data: logoPie, transformation: { width: 190, height: 48 } })] }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

function indice() {
  const out = [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 400 }, children: [new TextRun({ text: 'CONTENIDO', font: BODY, size: 36, color: TITULO })] })];
  for (const [num, txt, subs] of C.indice) {
    out.push(new Paragraph({ indent: { left: 1700 }, spacing: { after: 200 }, children: [
      new TextRun({ text: num, font: BODY, size: 24, color: TITULO }), new TextRun({ text: txt, font: BODY, size: 24, color: '404040' }) ] }));
    (subs || []).forEach(s => out.push(new Paragraph({ indent: { left: 2600 }, spacing: { after: 200 }, children: [new TextRun({ text: s, font: BODY, size: 24, color: '404040' })] })));
  }
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function render(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.h1) out.push(h1(b.h1));
    else if (b.h2) out.push(h2(b.h2));
    else if (b.h3) out.push(h3(b.h3));
    else if (b.p) out.push(body(b.p));
    else if (b.nota) out.push(body(b.nota, { shading: { fill: 'FFF8DC', type: ShadingType.CLEAR, color: 'auto' } }));
    else if (b.ul) b.ul.forEach(x => Array.isArray(x) ? x.forEach(y => out.push(bullet(y, 1))) : out.push(bullet(x)));
    else if (b.table) {
      if (b.table.titulo) out.push(caption(b.table.titulo));
      out.push(dataTable(b.table));
      out.push(b.table.fuente ? fuente(b.table.fuente) : new Paragraph({ spacing: { after: 120 }, children: [] }));
    } else if (b.pb) out.push(new Paragraph({ children: [new PageBreak()] }));
  }
  return out;
}

const doc = new Document({
  creator: 'Programa Académico de Farmacia y Bioquímica',
  title: 'Informe de Pertinencia – Farmacia y Bioquímica – Lambayeque/Chiclayo',
  styles: { default: { document: { run: { font: BODY, size: 22 } } } },
  numbering: { config: [{ reference: 'vinetas', levels: [
    { level: 0, format: LevelFormat.BULLET, text: '▪', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
    { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
  ] }] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN_T + 1100, bottom: 1134, left: MARGIN_LR, right: MARGIN_LR, header: 700 } } },
    headers: { default: new Header({ children: [encabezado(), new Paragraph({ children: [] })] }) },
    children: [...portadaChildren(), ...indice(), ...render(C.cuerpo)],
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = process.argv[2] || 'informe.docx';
  fs.writeFileSync(out, buf);
  console.log('escrito', out, buf.length, 'bytes');
});
