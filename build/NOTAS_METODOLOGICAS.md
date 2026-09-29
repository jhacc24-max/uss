# Notas metodológicas – Demanda Social de Farmacia y Bioquímica (Lambayeque, 2026)

Generado con `build/extract.py` → `calc.py` → `build.py` (plantilla: informe de Laboratorio Clínico).

## Promedios (Informe 1 + 2 + 3) / 3
- Tablas de muestra completa (3, 8-15): los tres informes comparten la misma encuesta (n = 588), por lo que los promedios coinciden con los valores originales; las frecuencias se recalcularon con n = 588 (método del mayor resto). Se corrigieron erratas de origen (p. ej. «No opina/No sabe» = 88, no 8 ni 887; total 587 del informe de Terapia).
- Tabla 4: por instrucción del usuario, «Farmacia y Bioquímica» se inserta en el 6.º lugar (antes de Negocios Internacionales) con f = 34 (5.8 %). La fila de Tecnología Médica – Laboratorio Clínico se conserva sin cambios (14; 2.4 %) y las demás filas se reescalan proporcionalmente (mayor resto) para que el total sea 588. n de las Tablas 5-7 = 34.
- Tablas 5-7 (subgrupo interesado en la carrera): % recalculados desde las frecuencias de cada informe (en Radiología la Tabla 5 impresa mostraba 42.9 % en «Sí», pero 12/14 = 85.7 %, que es lo que grafica el informe). Alternativas ausentes en un informe se promedian como 0. n = 14 (frecuencia de la Tabla 4). La Tabla 7 pasa a 7 alternativas (unión de las de los tres informes) y la Tabla 6 a 7 rangos.

## Datos base actualizados (fuentes en `fuentes/` y borrador previo)
| Dato | Valor | Fuente |
|---|---|---|
| Población Lambayeque 2026 | 1 412 900 | CPI Research, Market Report N° 003 |
| Población 2017 | 1 197 260 | INEI, Censo 2017 (BCRP: 1 197 mil) |
| NSE AB / C | 6.8 % / 29.9 % | APEIM 2025 (data ENAHO 2024) |
| Jóvenes 15-29 años (2025) | 308 638 | INEI-SIRTOD, en OSEL 2025 |
| Matrícula 5.º secundaria 2025 | 21 255 estudiantes; 466 I.E. (239 públicas, 227 privadas) | MINEDU, SIAGIE Reporte de Matrícula 2025 (`demanda/01. SIAGIE…rar`, Lambayeque, secundaria EBR, grado QUINTO; resumen en `build/siagie_lambayeque_5to.json`) |
| Oferta UTP 2025 (sede Chiclayo) | 276 postulantes / 240 ingresantes (201 y 75; 186 y 54) | Portal de transparencia UTP; cifras de Chiclayo según indicación del usuario, no consolidadas de todas las sedes |
| Establecimientos farmacéuticos / QF colegiados | 1 580 / 812 | DIGEMID jun-2026 / CQFD Lambayeque |

## Cálculos propios
- Población 16-25 años = 10/15 × 308 638 = 205 759 (14.6 %); supuesto de distribución uniforme por edad simple.
- Mercado objetivo = 205 759 × 5.8 % = 11 934; demanda efectiva = 11 934 × 62.4 % = 7 445; brecha = 7 445 − 240 = 7 205. Escenario conservador: 11 934 × 18.7 % = 2 232 → brecha 1 992.
- Serie de población 2017-2026 por interpolación geométrica (1.86 % anual).

## Tablas 1-3 y 20 (SIAGIE 2025)
- Tabla 1 y Tabla 20 se recalcularon con la matrícula 2025. Tabla 2: Wh = Ni/N; n = N·z²·ΣWhPhQh / (N·e² + z²·ΣWhPhQh) con z = 1.96 y e = 3.985 % (error del informe original, ≈ 4 %; n0 = 605), lo que da n = 588, igual que en los informes originales; ni por estrato con el método del mayor resto. Tabla 3 sale de la Tabla 2.
- La imagen de la fórmula (recuadros de texto n0 = 605, n = 588, V = 0.000413375, e = 0.03985, Z = 1.96) coincide con la Tabla 2 (588). Corrección: en una versión previa del informe se indicó por error que la imagen mostraba 584; era un efecto de un reemplazo automático intermedio. Se agregó bajo la imagen una línea con N = 21 255, ΣWhPhQh, e, Z, V, n0 y n.

## Pendiente de verificar
- Figura 3: datos aportados por el usuario (oferta 2026 de institutos): provincia de Chiclayo 6 (Manuel Mesones Muro – Master System, Pedro Cieza de León, Santa María Mazzarello – ISMA, Cayetano Heredia, ICH y, en Pimentel, Instituto Politécnico); Lambayeque y Ferreñafe 0.
- «Fuentes consultadas» (pág. 9) actualizadas a las fuentes efectivamente usadas.
- Listado de universidades que ofrecen Farmacia y Bioquímica (sección 2.2): referencial, no exhaustivo.
