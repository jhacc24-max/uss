// Genera la versión Markdown del informe a partir de contenido.js (misma fuente que el Word).
const fs = require('fs');
const path = require('path');
const C = require('./contenido.js');

const esc = t => String(t).replace(/\|/g, '\\|').replace(/\n/g, '<br>');
const out = [];
out.push(`# ${C.portada.titulo.join(' ')} — ${C.portada.programa}`, '');
out.push('| INFORME TÉCNICO – PARA LA CREACIÓN DE PROGRAMAS EN FILIALES | |', '|---|---|',
  `| Fecha | ${C.meta.fecha} |`, `| Versión | ${C.meta.version} |`, `| Elaborado por | ${C.portada.elaborado.replace('Elaborado por: ', '')} |`, '');
out.push('> Borrador generado desde `borradores/word/contenido.js`. Las marcas **[VERIFICAR]** y **[DATO PENDIENTE]** indican lo que falta confirmar o completar.', '');
for (const b of C.cuerpo) {
  if (b.h1) out.push(`## ${b.h1}`, '');
  else if (b.h2) out.push(`### ${b.h2}`, '');
  else if (b.h3) out.push(`#### ${b.h3}`, '');
  else if (b.p) out.push(b.p, '');
  else if (b.nota) out.push(`> ${b.nota}`, '');
  else if (b.opts) { b.opts.forEach(x => out.push(`- ${x}`)); out.push(''); }
  else if (b.ul) { b.ul.forEach(x => Array.isArray(x) ? x.forEach(y => out.push(`  - ${y}`)) : out.push(`- ${x}`)); out.push(''); }
  else if (b.table) {
    const t = b.table;
    if (t.titulo) out.push(`**${t.titulo}**`, '');
    out.push(`| ${t.head.map(esc).join(' | ')} |`, `|${t.head.map(() => '---').join('|')}|`);
    t.rows.forEach(r => out.push(`| ${r.map(esc).join(' | ')} |`));
    out.push('');
    if (t.fuente) out.push(`*${t.fuente}*`, '');
  }
}
const anexo = path.join(__dirname, 'anexo_correspondencia.md');
if (fs.existsSync(anexo)) out.push('---', '', fs.readFileSync(anexo, 'utf8'));
const dest = process.argv[2] || path.join(__dirname, '..', 'Informe_Pertinencia_Farmacia_Bioquimica_Lambayeque.md');
fs.writeFileSync(dest, out.join('\n'));
console.log('escrito', dest);
