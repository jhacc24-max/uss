Pertinencia es el sistema visual de los informes técnicos institucionales: *informes de pertinencia*, expedientes de creación de programas y síntesis del mercado laboral que se presentan al directorio de la universidad y al ente regulador. La página es A4 vertical, impresa en blanco, y se lee como evidencia. Cada decisión sirve a la trazabilidad: cada página lleva un folio y un encabezado de documento controlado, y cada tabla indica su fuente.

## Fundamentos de contenido

- Redactar en español, en registro institucional impersonal: *«se ha focalizado en la identificación de la población interesada»*, *«el presente informe contiene las siguientes secciones»*. Sin primera persona del singular, sin segunda persona, sin signos de exclamación y sin emoji.
- Nombrar la institución y sus unidades completas la primera vez y luego la sigla entre paréntesis: *«Universidad Señor de Sipán S.A.C. (en adelante, USS)»*, *«Superintendencia Nacional de Educación Superior Universitaria»*.
- Citar cada cifra con su base de datos y año: *«De acuerdo con el BCRP (2023), Piura ha tenido un crecimiento anual promedio de 2%…»*. Dentro de las tablas, los números conservan el formato de la fuente (`1,280,594`, `63.1%`); en el texto se usa la lectura en español (*«1,9 millones de habitantes»*).
- Los títulos de capítulo van en mayúsculas con número romano (`V.- MERCADO EDUCATIVO`); las subsecciones, en tipo oración con número decimal (`5.1.- Demanda educativa`); los títulos de tercer nivel van en línea con el párrafo y terminan en dos puntos (`6.2.1. Necesidades locales:`).
- Marcar las proyecciones, nunca ocultarlas: un asterisco en la columna (`2023*`) y una nota bajo la tabla (`* Datos proyectados según información de APEIM para los años 2017-2022.`).

## Fundamentos visuales

**Color.** La página es `paper` con texto en `ink`. El color es institucional, no decorativo: `slate` corresponde al encabezado y a la portada; `slate-deep`, a los títulos y a CONTENIDO; `table-head` (un verde muy oscuro) rellena la fila de encabezado de toda tabla de datos, con etiquetas en `on-table-head`; `band` encabeza las matrices con mucho texto, con etiquetas en `ink`. El azul `folio` se reserva para el número de folio y nada más. Los gráficos usan de `chart-1` a `chart-5` en ese orden; cuando solo se comparan dos series, combinar `chart-1` con `chart-2`, que difieren en luminosidad además de en tono.

**Tipografía.** Dos familias, ambas sustitutas libres y métricamente compatibles con las fuentes de Office del original, para que los saltos de línea coincidan: `body` (Carlito ≈ Calibri) para el texto, los títulos y los títulos de tabla; `grotesk` (Arimo ≈ Arial) para el encabezado, el folio y todo lo que va dentro de una tabla. El texto corrido va en `body` con interlínea de 22pt, justificado. Las tablas son pequeñas y densas: `table-head` y `table-cell` son ambas de 8pt en negrita. Calibri Light no tiene equivalente libre; `contents-title` y `contents-entry` pasan a Carlito regular donde Calibri no está instalada.

**Diagramación.** Una sola columna de texto de `margin-start` a `margin-end` (ancho `measure`). Entre párrafos va una línea en blanco (`space-line`), nunca sangría de primera línea. El cuerpo de una sección entra con `indent-1`; los párrafos bajo un título en línea, con `indent-2`. Las tablas se centran en la columna y pueden ser más angostas que ella; el título de tabla va **encima**, centrado, como `caption`; la línea de Fuente va **debajo**, alineada al borde izquierdo de la tabla, como `source`.

**Líneas de estructura.** Los bordes son `hairline` en `rule`. Sin sombras, sin esquinas redondeadas (`radius-none` en todo) y sin tarjetas. El encabezado es una cuadrícula con filetes; las tablas también. Nada más va enmarcado.

**Imágenes.** Solo la portada lleva fotografía: una imagen a sangre del campus o del trabajo de campo detrás de un panel blanco con el título. Las páginas interiores llevan solo figuras y tablas.

**Estados y movimiento.** Es un sistema para impresión. En pantalla, un elemento interactivo con foco (un enlace en una línea de Fuente, una entrada de CONTENIDO) recibe un contorno sólido de 2px en `navy` separado 2px; no hay movimiento.

## Anatomía de la página

1. `Folio` arriba a la derecha, por encima de todo.
2. `DocHeader`: logo de la institución | tipo y propósito del documento | Fecha / Versión / Hoja N de M. Se repite en cada página, incluida la portada.
3. La columna de texto: `SectionHeading`, cuerpo de texto y `DataTable`.
4. Notas al pie en `footnote`, sobre el margen inferior.

## Iconografía

La fuente no usa ningún juego de íconos. Las únicas marcas son el logo de la institución en la primera celda del encabezado y un sello de aprobación del rectorado a su derecha. Ninguno de los dos se incluye aquí: `DocHeader` recibe el logo propio del usuario en su espacio `mark` y deja el sello para el impreso firmado. No sustituirlos por íconos ni emoji.
