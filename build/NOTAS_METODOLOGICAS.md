# Notas metodológicas – Demanda Social de Farmacia y Bioquímica (Lambayeque, 2026)

Generado con `build/extract.py` → `calc.py` → `build.py` (plantilla: informe de Laboratorio Clínico).

## Promedios (Informe 1 + 2 + 3) / 3
- Tablas de muestra completa (3, 8-15): los tres informes comparten la misma encuesta (n = 588), por lo que los promedios coinciden con los valores originales; las frecuencias se recalcularon con n = 588 (método del mayor resto). Se corrigieron erratas de origen (p. ej. «No opina/No sabe» = 88, no 8 ni 887; total 587 del informe de Terapia).
- Tabla 4: la fila «Farmacia y Bioquímica» = promedio de la fila de la carrera propia de cada informe (2.4 %, 2.2 %, 2.6 % → 2.4 %; 14 estudiantes). Ocupa la fila de la carrera estudiada en la plantilla (sustituye a la de Laboratorio Clínico para no alterar el total ni el número de filas).
- Tablas 5-7 (subgrupo interesado en la carrera): % recalculados desde las frecuencias de cada informe (en Radiología la Tabla 5 impresa mostraba 42.9 % en «Sí», pero 12/14 = 85.7 %, que es lo que grafica el informe). Alternativas ausentes en un informe se promedian como 0. n = 14 (frecuencia de la Tabla 4). La Tabla 7 pasa a 7 alternativas (unión de las de los tres informes) y la Tabla 6 a 7 rangos.

## Datos base actualizados (fuentes en `fuentes/` y borrador previo)
| Dato | Valor | Fuente |
|---|---|---|
| Población Lambayeque 2026 | 1 412 900 | CPI Research, Market Report N° 003 |
| Población 2017 | 1 197 260 | INEI, Censo 2017 (BCRP: 1 197 mil) |
| NSE AB / C | 6.8 % / 29.9 % | APEIM 2025 (data ENAHO 2024) |
| Jóvenes 15-29 años (2025) | 308 638 | INEI-SIRTOD, en OSEL 2025 |
| Oferta UTP 2025 | 276 postulantes / 240 ingresantes | Portal de transparencia UTP |
| Establecimientos farmacéuticos / QF colegiados | 1 580 / 812 | DIGEMID jun-2026 / CQFD Lambayeque |

## Cálculos propios
- Población 16-25 años = 10/15 × 308 638 = 205 759 (14.6 %); supuesto de distribución uniforme por edad simple.
- Mercado objetivo = 205 759 × 2.4 % = 4 938; demanda efectiva = 4 938 × 62.4 % = 3 080; brecha = 3 080 − 240 = 2 840. Escenario conservador: 4 938 × 18.7 % = 923 → brecha 683.
- Serie de población 2017-2026 por interpolación geométrica (1.86 % anual).

## Pendiente de verificar (no accesible desde el entorno: ESCALE y carreras.pe bloqueados)
- Tablas 1-2 y 20 (matrícula de 5.º de secundaria por provincia, ESCALE 2022) y Figura 3 (instituciones de educación superior por provincia) se mantienen como en los informes originales.
- Listado de universidades que ofrecen Farmacia y Bioquímica (sección 2.2): referencial, no exhaustivo.
