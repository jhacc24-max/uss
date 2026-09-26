El bloque de encabezado de documento controlado que se repite en cada página, portada incluida.

- Cuatro columnas sobre una cuadrícula de filetes: el logo de la institución (ocupa tres filas) | el tipo de documento sobre su propósito | las etiquetas Fecha / Versión / Hoja | sus valores.
- Quien lo usa proporciona `purpose`, `date` (dd/mm/aaaa), `version` (dos dígitos, `00` para la primera emisión), `sheet` y `sheets`, y en `mark` un `<img>` o `<svg>` con su propio logo. Sin `mark`, `institution` se compone en texto; nunca dibujar un logo.
- Todo el texto va en `slate` con `grotesk` en negrita; solo los números de «Hoja: 10 de 25» van en regular.
- Su ancho es el de la hoja menos `page-inset` a cada lado, más ancho que la columna de texto.
