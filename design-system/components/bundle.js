/* @ds-bundle: {"format":4,"namespace":"Pertinencia","components":[{"name":"Folio"},{"name":"DocHeader"},{"name":"SectionHeading"},{"name":"DataTable"},{"name":"Contents"},{"name":"ReportCover"}]} */
(function () {
  var h = window.React.createElement;
  var F = window.React.Fragment;

  function Folio(p) {
    var n = String(p.number == null ? '' : p.number);
    while (n.length < (p.digits || 6)) n = '0' + n;
    return h('span', { className: 'pt-folio', 'aria-label': 'Folio ' + n }, n);
  }

  function DocHeader(p) {
    return h('div', { className: 'pt-header', role: 'banner' },
      h('div', { className: 'pt-header__mark' }, p.mark || h('span', { className: 'pt-header__mark-empty' }, p.institution || 'Institución')),
      h('div', { className: 'pt-header__type' }, p.type || 'Informe técnico'),
      h('div', { className: 'pt-header__label', style: { gridColumn: 3, gridRow: 1 } }, 'Fecha:'),
      h('div', { className: 'pt-header__value', style: { gridColumn: 4, gridRow: 1 } }, p.date),
      h('div', { className: 'pt-header__purpose' }, p.purpose),
      h('div', { className: 'pt-header__label', style: { gridColumn: 3, gridRow: 2 } }, 'Versión:'),
      h('div', { className: 'pt-header__value', style: { gridColumn: 4, gridRow: 2 } }, p.version || '00'),
      h('div', { className: 'pt-header__label', style: { gridColumn: 3, gridRow: 3 } }, 'Hoja:'),
      h('div', { className: 'pt-header__value', style: { gridColumn: 4, gridRow: 3 } },
        h('span', { className: 'pt-n' }, p.sheet), ' de ', h('span', { className: 'pt-n' }, p.sheets))
    );
  }

  function SectionHeading(p) {
    var level = p.level || 1;
    var sep = level === 3 ? ' ' : '.- ';
    var num = p.number ? h('span', { className: 'pt-h__num' }, p.number + sep) : null;
    if (level === 3) {
      return h('p', { className: 'pt-runin' },
        h('strong', { className: 'pt-h pt-h--3' }, num, p.title, ':'), p.children ? ' ' : null, p.children);
    }
    return h(level === 1 ? 'h2' : 'h3', { className: 'pt-h pt-h--' + level }, num, p.title);
  }

  function DataTable(p) {
    var cols = p.columns || [];
    var notes = [].concat(p.source ? ['Fuente: ' + p.source] : [], p.notes || []);
    return h('figure', { className: 'pt-figure' },
      p.title ? h('figcaption', { className: 'pt-caption' }, 'Tabla ' + p.number + '. ' + p.title) : null,
      h('div', { className: 'pt-table-block' }, h('div', { className: 'pt-table-wrap' },
        h('table', { className: 'pt-table' + (p.tone === 'band' ? ' pt-table--band' : '') },
          h('thead', null, h('tr', null, cols.map(function (c, i) {
            return h('th', { key: i, scope: 'col', className: i === 0 ? 'pt-l' : null }, c);
          }))),
          h('tbody', null, (p.rows || []).map(function (r, ri) {
            return h('tr', { key: ri }, r.map(function (v, ci) {
              var cls = ci === 0 ? 'pt-l' : (p.align === 'center' ? 'pt-c' : null);
              return ci === 0 ? h('th', { key: ci, scope: 'row', className: cls }, v) : h('td', { key: ci, className: cls }, v);
            }));
          }))
        )
      ),
      notes.length ? h('div', { className: 'pt-source' }, notes.map(function (n, i) { return h('span', { key: i }, n); })) : null)
    );
  }

  function Contents(p) {
    return h('nav', { className: 'pt-contents', 'aria-label': p.title || 'Contenido' },
      h('h2', { className: 'pt-contents__title' }, p.title || 'CONTENIDO'),
      h('ol', null, (p.items || []).map(function (it, i) {
        return h('li', { key: i, className: it.level === 2 ? 'pt-sub' : null },
          h('span', { className: 'pt-contents__num' }, it.number),
          h('span', null, it.title),
          it.page != null ? h(F, null, h('span', { className: 'pt-contents__lead', 'aria-hidden': 'true' }), h('span', { className: 'pt-contents__page' }, it.page)) : null);
      }))
    );
  }

  function ReportCover(p) {
    return h('section', { className: 'pt-cover', 'aria-label': 'Portada' },
      p.photo ? h('img', { className: 'pt-cover__photo', src: p.photo, alt: p.photoAlt || '' }) : null,
      h('div', { className: 'pt-cover__panel' },
        h('h1', { className: 'pt-cover__title' }, (p.titleLines || []).map(function (l, i) { return h(F, { key: i }, i ? h('br') : null, l); })),
        p.program ? h('p', { className: 'pt-cover__program' }, p.program) : null,
        h('div', { className: 'pt-cover__meta' },
          p.date ? h('span', null, p.date) : null,
          p.author ? h('span', null, 'Elaborado por: ' + p.author) : null)
      )
    );
  }

  window.Pertinencia = { Folio: Folio, DocHeader: DocHeader, SectionHeading: SectionHeading, DataTable: DataTable, Contents: Contents, ReportCover: ReportCover };
})();
