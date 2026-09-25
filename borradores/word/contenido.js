// Contenido del Informe de Pertinencia – Farmacia y Bioquímica – Lambayeque/Chiclayo.
// Para actualizar el Word: editar este archivo y ejecutar `node build.js salida.docx`.
// Marcas [VERIFICAR ...] y [DATO PENDIENTE ...] se resaltan en amarillo en el documento.

const V = '[VERIFICAR]';
const P = '[DATO PENDIENTE]';
const años = ['2027', '2028', '2029', '2030', '2031', '2032', '2033'];
const vacio = n => Array(n).fill('');

module.exports = {
  meta: { fecha: '25/09/2026', version: '00' },

  portada: {
    titulo: ['INFORME DE', 'PERTINENCIA', 'SEDE CHICLAYO'],
    programa: 'Farmacia y Bioquímica',
    fecha: 'Septiembre 2026',
    elaborado: 'Elaborado por: Programa Académico de Farmacia y Bioquímica',
  },

  indice: [
    ['I.', 'PRESENTACIÓN'],
    ['II.', 'OBJETIVOS', ['a.    Objetivo general', 'b.    Objetivos específicos']],
    ['III.', 'ÁMBITO DE INFLUENCIA'],
    ['IV.', 'METODOLOGÍA'],
    ['V.', 'MERCADO EDUCATIVO', ['a.    Demanda educativa', 'b.    Oferta educativa']],
    ['VI.', 'JUSTIFICACIÓN DE LA CREACIÓN DEL PROGRAMA'],
    ['VII.', 'PROPUESTA USS'],
    ['VIII.', 'CONCLUSIONES'],
  ],

  cuerpo: [
    // I
    { h1: 'I. PRESENTACIÓN' },
    { p: 'La Universidad Señor de Sipán S.A.C. (en adelante, USS), de acuerdo con la normativa vigente y los objetivos institucionales, establece ampliar su oferta educativa con programas pertinentes a las necesidades del territorio, previo acuerdo de la Junta General de Accionistas y, cuando corresponda, la autorización de la Superintendencia Nacional de Educación Superior Universitaria (SUNEDU) como resultado de la evaluación de la modificación de licencia institucional.' },
    { nota: `${V} Encuadre institucional: la plantilla corresponde a la creación de programas en filiales. La sede principal de la USS se ubica en la región Lambayeque (Chiclayo/Pimentel); confirmar con la Dirección Académica si corresponde tramitarlo como programa nuevo en la sede.` },
    { p: 'Los cambios que la sociedad actual requiere exigen que las universidades se mantengan enfocadas en responder a las nuevas tendencias, los cambios tecnológicos y los desafíos sanitarios. En el campo farmacéutico, esto implica formar profesionales capaces de garantizar el acceso, la calidad y el uso racional de los medicamentos, la atención farmacéutica y la vigilancia sanitaria, en un contexto de expansión de las cadenas de boticas y de persistencia del comercio ilegal de medicamentos.' },
    { p: 'Es por ello que el presente informe contiene las siguientes secciones: objetivos, ámbito de influencia del programa, metodología, demanda laboral, demanda y oferta formativa, pertinencia social y conclusiones.' },
    { p: 'La justificación del programa de Farmacia y Bioquímica en la modalidad presencial se centra en la necesidad sanitaria regional, el crecimiento del mercado farmacéutico, la exigencia normativa de contar con un Químico Farmacéutico en cada establecimiento farmacéutico, el componente práctico de laboratorio que la carrera requiere y la calidad académica.' },

    // II
    { h1: 'II. OBJETIVOS' },
    { h2: '2.1.- Objetivo general' },
    { p: 'Justificar la pertinencia del programa de pregrado presencial de Farmacia y Bioquímica en la región Lambayeque (provincia de Chiclayo) con base en el análisis del mercado laboral, sanitario y formativo.' },
    { h2: '2.2.- Objetivos específicos' },
    { ul: [
      'Analizar el estado de la oferta y demanda educativa respecto del Programa de Farmacia y Bioquímica en Lambayeque.',
      'Establecer la relevancia y pertinencia social, sanitaria y académica del programa en la modalidad presencial con base en las políticas nacionales (Política Nacional de Medicamentos; Ley N.° 29459), internacionales y regionales vigentes.',
    ] },

    // III
    { h1: 'III.- ÁMBITO DE INFLUENCIA' },
    { p: 'La región Lambayeque se encuentra al noroeste del Perú. Se extiende en una superficie de **14 231 km²**, correspondiente al 1,1 % del territorio nacional. Limita por el norte con Piura; por el este, con Cajamarca; por el sur, con La Libertad; y por el oeste, con el Océano Pacífico. Políticamente está dividida en **3 provincias (Chiclayo, Lambayeque y Ferreñafe) y 38 distritos**, siendo su capital la ciudad de Chiclayo (BCRP, Caracterización del departamento de Lambayeque, p. 1).' },
    { p: 'La región cuenta con una población de **1 356 202 habitantes**, de los cuales el 49,4 % son hombres y el 50,6 % mujeres; la población de hasta 14 años representa el 25,8 % del total (PRODUCE, Diagnóstico Productivo Regional Lambayeque 2024, p. 2). En el Censo 2017 la región registró 1 197 mil habitantes, el 81 % en el área urbana (BCRP, p. 2-3). La provincia de Chiclayo concentra la mayor parte de la población regional (882 306 habitantes en 2024, según INEI).' },
    { p: 'De acuerdo con el BCRP, Lambayeque creció a un promedio anual de **2,7 % en el periodo 2015-2024**, por encima del promedio nacional (2,3 %), y fue la octava región con mayor crecimiento de la última década. En 2024 su PBI alcanzó **S/ 14 065 millones**, con un crecimiento de **5,2 %** respecto de 2023, y aportó el **2,7 % del PBI nacional**; el PBI per cápita fue de **S/ 10 371** (PRODUCE, p. 1). Los principales sectores que aportan a su producción son otros servicios (28,0 %), comercio (18,5 %), agropecuario (9,7 %), manufactura (9,7 %) y construcción (8,4 %) (Tabla A).' },
    { table: {
      titulo: 'Tabla A. Lambayeque: Valor Agregado Bruto, 2015-2024',
      head: ['Actividades', 'Estructura porcentual promedio', 'Crecimiento promedio anual (%)'],
      rows: [
        ['Agropecuario', '9,7', '6,1'], ['Pesca y acuicultura', '0,3', '-1,9'], ['Minería y petróleo', '0,3', '1,0'],
        ['Manufactura', '9,7', '0,9'], ['Electricidad y agua', '1,1', '5,7'], ['Construcción', '8,4', '0,8'],
        ['Comercio', '18,5', '2,2'], ['Transporte y comunicaciones', '7,6', '2,4'], ['Alojamiento y restaurantes', '2,3', '0,5'],
        ['Telecomunicaciones', '6,9', '6,4'], ['Administración pública y defensa', '7,1', '3,6'], ['Otros servicios', '28,0', '2,2'],
        ['Lambayeque', '100,0', '2,7'],
      ],
      widths: [3600, 2300, 2300],
      fuente: 'Fuente: BCRP – Sucursal Piura, Caracterización del departamento de Lambayeque (2025), Cuadro N° 2, p. 4.',
    } },
    { p: 'En 2022, la Población en Edad de Trabajar (PET) fue de 1 031 427 personas y la **PEA de 721 994**, de la cual el 97,9 % estaba ocupada y el **2,1 % desocupada**; el empleo adecuado alcanzó al 54,4 % de los ocupados y el subempleo al 43,5 % (MTPE – OSEL Lambayeque, Tríptico N° 02-2024). Dentro de la PEA ocupada, el **16,6 % cuenta con estudios superiores no universitarios y solo el 13,9 % con estudios superiores universitarios**, mientras que el 46,9 % tiene secundaria y el 19,3 % primaria. Esta baja proporción de profesionales universitarios se asocia con la persistencia de problemas sanitarios y de gestión en la región.' },
    { p: 'La **pobreza monetaria** en la región es de **17,9 %** y la pobreza extrema de 0,8 %; sin embargo, existen fuertes diferencias entre provincias: Chiclayo registra 17,8 %, Lambayeque 31,4 % y Ferreñafe 46,7 % (INEI, CEPLAN; en PRODUCE, p. 2).' },

    { h1: 'IV.- METODOLOGÍA' },
    { p: 'Para el análisis del mercado educativo y el mercado laboral de la carrera de Farmacia y Bioquímica en Lambayeque se han establecido las siguientes precisiones relativas al alcance geográfico:' },
    { ul: [
      'El mercado educativo se evaluó en toda la región Lambayeque, debido a que los estudiantes provienen de las tres provincias y de regiones vecinas (Cajamarca, Amazonas, norte de Piura y San Martín), que tienen en Chiclayo su polo educativo y de servicios de salud.',
      'El mercado laboral se evaluó a nivel de la región Lambayeque, debido a que los egresados se desplazan dentro de toda la región y el macro norte (farmacias y boticas, droguerías, hospitales del MINSA, EsSalud y clínicas privadas).',
    ] },
    { p: 'Respecto de las fuentes, se realizó una revisión documentaria de información oficial: INEI (censos, proyecciones, ENAHO, ENDES y avance económico departamental), BCRP (caracterización departamental y síntesis de actividad económica), DIGEMID/MINSA (boletines y Registro Nacional de Establecimientos Farmacéuticos), GERESA Lambayeque, MTPE (demanda de ocupaciones e indicadores laborales), PRODUCE (diagnóstico productivo regional), SUNEDU (licenciamiento) y EsSalud.' },
    { p: 'La demanda se calcula con la misma lógica del informe de referencia: (1) población objetivo = población de Lambayeque de los NSE B, C y D, de 16 a 25 años, que cursa 5.° de secundaria o tiene secundaria completa sin estudios superiores; (2) demanda educativa = población objetivo × porcentaje interesado en estudiar Farmacia y Bioquímica (encuesta propia); (3) brecha = demanda educativa − oferta (ingresantes anuales de las universidades licenciadas que ofrecen la carrera en la región).' },

    // V
    { h1: 'V.- MERCADO EDUCATIVO' },
    { h2: '5.1.- Demanda educativa' },
    { p: 'La demanda formativa se refiere al interés o la necesidad que tienen tanto individuos como instituciones de adquirir conocimientos, habilidades o competencias en un área educativa específica. En este contexto, se ha focalizado en la identificación de la población interesada en seguir la carrera de Farmacia y Bioquímica. Para delimitar este grupo objetivo, se han establecido los siguientes criterios:' },
    { ul: [
      'Población de Lambayeque de los niveles socioeconómicos B, C y D.',
      'Que tenga entre 16 y 25 años de edad.',
      'Que se encuentre cursando el 5.° de secundaria, o tenga secundaria completa, pero que no se encuentre cursando estudios superiores.',
    ] },
    { p: `Para la estimación se utilizan fuentes oficiales y de mercado disponibles. Dado que no se cuenta aún con una encuesta propia de intención vocacional, las cifras de las Tablas 1 a 4 son **estimaciones referenciales** construidas con supuestos explícitos, que deberán reemplazarse con los resultados de dicha encuesta ${V}.` },
    { table: {
      titulo: 'Tabla 1. Población de Lambayeque según nivel socioeconómico',
      head: ['Concepto', 'NSE AB', 'NSE C', 'NSE D', 'NSE E', 'Total'],
      rows: [
        ['Estructura socioeconómica (%)', '10,5', '23,8', '30,7', '35,0', '100,0'],
        ['Población estimada 2024 (hab.)', '142 401', '322 776', '416 354', '474 671', '1 356 202'],
      ],
      widths: [3000, 1050, 1050, 1050, 1050, 1200],
      fuente: `Fuente: población total, PRODUCE (2025) sobre INEI; estructura NSE, CPI (en SINEACE, Caracterización de la región Lambayeque). La estructura NSE corresponde a una medición anterior; actualizar con CPI "Perú: Población 2024" ${V}.`,
    } },
    { table: {
      titulo: 'Tabla 2. Población de 15 a 24 años en los niveles socioeconómicos C y D de Lambayeque, 2024',
      head: ['Concepto', 'Valor', 'Sustento'],
      rows: [
        ['Población total de Lambayeque', '1 356 202', 'PRODUCE (2025)'],
        ['% de población de 15 a 24 años', '15,3 %', 'ENDES 2024: hombres 15,9 %, mujeres 14,7 % (p. 15)'],
        ['Población de 15 a 24 años', '207 401', 'Cálculo propio'],
        ['% en NSE C y D', '54,5 %', 'CPI (23,8 % + 30,7 %)'],
        ['Población de 15 a 24 años en NSE C y D (2024)', '113 034', 'Cálculo propio'],
      ],
      widths: [3600, 1300, 3300],
      fuente: 'Nota: se usa el tramo de 15 a 24 años de la ENDES como aproximación al rango de 16 a 25 años del criterio. No se incluye el NSE B por no contar con su valor separado del A; su inclusión elevaría la población objetivo.',
    } },
    { table: {
      titulo: `Tabla 3. Población objetivo proyectada (${años[0]}-${años[6]})`,
      head: ['', ...años],
      rows: [['Población objetivo proyectada', '115 424', '116 232', '117 046', '117 865', '118 690', '119 521', '120 357']],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: 'Fuente: elaboración propia. Proyección con la tasa de crecimiento poblacional intercensal 2007-2017 de Lambayeque (0,7 % anual; BCRP, p. 2).',
    } },
    { table: {
      titulo: `Tabla 4. Demanda proyectada de la carrera de Farmacia y Bioquímica por el público objetivo ${años[0]}-${años[6]} (escenarios)`,
      head: ['Escenario de interés', ...años],
      rows: [
        ['Conservador (1 %)', '1 154', '1 162', '1 170', '1 179', '1 187', '1 195', '1 204'],
        ['Medio (2 %)', '2 308', '2 325', '2 341', '2 357', '2 374', '2 390', '2 407'],
        ['Alto (3 %)', '3 463', '3 487', '3 511', '3 536', '3 561', '3 586', '3 611'],
      ],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: `Fuente: elaboración propia. Porcentajes de interés supuestos: en el estudio DQE Norte 2025 de Arellano, Medicina concentra el 13 % de las preferencias y Farmacia no figura entre las cinco primeras (< 6 %). Reemplazar por el resultado de la encuesta propia ${V}.`,
    } },
    { h3: '5.1.1. Validación de las fuentes de mercado e interés vocacional' },
    { p: 'Los datos sobre la preferencia vocacional y el posicionamiento institucional se sustentan en tres fuentes principales del sector educativo y laboral peruano:' },
    { p: `**a) Arellano Consultoría – estudio "Dónde Quiero Estudiar (DQE) Norte y Sur 2025: Pregrado universidades".** Es la primera edición del estudio y recoge la opinión de jóvenes de 15 a 23 años egresados o por egresar del colegio en los principales departamentos del norte (Piura, La Libertad, **Lambayeque** y Áncash; 1 264 casos) y del sur. En el norte, las primeras opciones de carrera son Medicina (13 %), Derecho (13 %), Administración de Empresas (11 %), Ingeniería Civil (9 %) e Ingeniería de Sistemas (6 %), lo que confirma que las ciencias de la salud encabezan la preferencia vocacional. Los jóvenes priorizan las oportunidades laborales, una carrera bien remunerada y una amplia variedad de cursos o campos de especialización. En Chiclayo, la UTP figura en el primer lugar de preferencia, asociada a la búsqueda de rápida inserción laboral, infraestructura moderna (laboratorios) y pensiones escalonadas. ${V} Cifras tomadas de la difusión del estudio en Gestión y en medios institucionales; adjuntar el informe de Arellano.` },
    { p: `**b) Oferta universitaria reciente (SUNEDU/portales de transparencia) y portal "Ponte en Carrera" (MINEDU).** La UTP abrió la carrera de Farmacia y Bioquímica en 2025 y en su primer año registró **276 postulantes y 240 ingresantes** a nivel nacional (201 y 186 en 2025-1; 75 y 54 en 2025-2), con **158 matriculados** en 2025-I y 144 en 2025-II (UTP, Postulantes e ingresantes pregrado 2022-2025, pp. 1 y 3). Ello evidencia una demanda efectiva inmediata por la carrera. Las disciplinas de la salud se posicionan de forma consistente entre las tres áreas con mayor número de postulantes en la macrorregión norte, junto con Administración/Negocios e Ingenierías ${V} (consultar el portal Ponte en Carrera).` },
    { p: `**c) Observatorio Ocupacional del Ministerio de Trabajo (MTPE).** Para Lambayeque, la Encuesta de Demanda Ocupacional 2023 ubica a **Farmacia y Bioquímica como la segunda carrera técnica más demandada en 2024** (técnicos de 1 a 2 años), y a Medicina y Enfermería entre las carreras universitarias más requeridas (MTPE, Demanda de ocupaciones en Lambayeque 2024, pp. 14-15). Esto muestra una demanda sostenida de personal especializado en salud, diagnóstico y gestión de medicamentos, impulsada por la expansión de las redes hospitalarias públicas y privadas en Chiclayo.` },
    { h2: '5.2.- Oferta educativa' },
    { p: 'En la región Lambayeque, la oferta licenciada de Farmacia y Bioquímica es reducida. Varias universidades que ofrecían la carrera o que operaban en Chiclayo no obtuvieron el licenciamiento institucional de la SUNEDU y se encuentran en proceso de cese.' },
    { table: {
      titulo: 'Tabla 5. Oferta educativa de Farmacia y Bioquímica en Lambayeque',
      head: ['TIPO', 'UNIVERSIDAD', 'LICENCIA SUNEDU', 'FARMACIA Y BIOQUÍMICA'],
      rows: [
        ['Privada', 'Universidad Tecnológica del Perú (UTP) – Chiclayo', 'Licenciada', 'Sí, desde 2025'],
        ['Pública', 'Universidad Nacional Pedro Ruiz Gallo (UNPRG)', 'Licenciada (2023)', `No figura entre sus facultades ${V}`],
        ['Privada', 'Universidad de Chiclayo (UDCH)', 'Denegada', 'Ofrecía – en cese'],
        ['Privada', 'Universidad de Lambayeque (UDL)', 'Denegada', 'En cese'],
        ['Privada', 'Universidad Privada Juan Mejía Baca (UMB)', 'Denegada', 'En cese'],
      ],
      widths: [900, 3700, 1700, 2000], firstColLeft: false,
      fuente: 'Fuente: SUNEDU; portales institucionales.',
    } },
    { p: 'Para estimar la oferta educativa se utilizan las estadísticas publicadas en el portal de transparencia de la UTP, única universidad licenciada identificada con la carrera en la región (Tabla 6). La UTP reporta sus cifras consolidadas para todas sus sedes, por lo que el total nacional se toma como **tope superior** de la oferta en Chiclayo.' },
    { table: {
      titulo: 'Tabla 6. Postulantes e ingresantes a Farmacia y Bioquímica – UTP (todas las sedes), 2025',
      head: ['Concepto', '2025-1', '2025-2', 'Total 2025'],
      rows: [
        ['Postulantes', '201', '75', '276'],
        ['Ingresantes', '186', '54', '240'],
        ['Matriculados', '158', '144', '–'],
      ],
      widths: [3400, 1600, 1600, 1600],
      fuente: `Fuente: UTP, Postulantes, ingresantes, matriculados y egresados pregrado 2022-2025 (datos al 31.10.2025), pp. 1 y 3. Falta el desagregado de la sede Chiclayo ${P}.`,
    } },
    { table: {
      titulo: 'Tabla 7. Brecha entre demanda y oferta educativa en Lambayeque (escenario medio)',
      head: ['Concepto', ...años],
      rows: [
        ['Demanda educativa proyectada (2 %)', '2 308', '2 325', '2 341', '2 357', '2 374', '2 390', '2 407'],
        ['Oferta educativa proyectada (tope)', '240', '240', '240', '240', '240', '240', '240'],
        ['Brecha demanda/oferta', '2 068', '2 085', '2 101', '2 117', '2 134', '2 150', '2 167'],
      ],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: 'Fuente: elaboración propia (Tabla 4 − Tabla 6). La oferta se mantiene constante en el total de ingresantes 2025 de la UTP (tope superior).',
    } },
    { p: 'Aun con el escenario conservador (1 % de interés) y tomando como oferta regional el total nacional de ingresantes de la UTP, para 2027 habría una brecha de más de 900 jóvenes interesados en estudiar Farmacia y Bioquímica que no encontrarían una vacante en una universidad licenciada de la región. En el escenario medio, la brecha supera los 2 000 jóvenes por año.' },
    { h1: 'VI.- JUSTIFICACIÓN DE LA CREACIÓN DEL PROGRAMA' },
    { h2: '6.1.- Justificación' },
    { p: 'Lambayeque es el principal polo comercial, de servicios y sanitario del nororiente peruano; su ubicación estratégica le permite conectar los flujos económicos y poblacionales de la costa, la sierra y la selva norte (BCRP, p. 3). La región cuenta con **194 establecimientos de salud** (PRODUCE, p. 2) y Chiclayo concentra hospitales de referencia (Hospital Regional Lambayeque, Hospital Las Mercedes y Hospital Nacional Almanzor Aguinaga Asenjo de EsSalud) que reciben pacientes derivados de Cajamarca, San Martín, Amazonas y Piura. EsSalud cuenta con más de 598 000 asegurados en la región y proyecta la construcción de tres hospitales (Almanzor Aguinaga, Naylamp y Ferreñafe). Cada uno de estos establecimientos requiere servicios de farmacia hospitalaria, farmacia clínica, farmacovigilancia, laboratorio clínico y gestión del suministro de medicamentos a cargo de Químicos Farmacéuticos.' },
    { p: 'La Ley N.° 29459, Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios, y el Reglamento de Establecimientos Farmacéuticos (D.S. N.° 014-2011-SA) exigen que **toda farmacia, botica, droguería y laboratorio cuente con un Químico Farmacéutico como director técnico**. En consecuencia, cada nuevo establecimiento farmacéutico genera una demanda directa y obligatoria de estos profesionales.' },
    { p: 'La región enfrenta, además, un problema persistente de comercio ilegal de medicamentos: la GERESA Lambayeque intervino más de 100 establecimientos en 14 operativos y **decomisó más de una tonelada de medicamentos falsificados, de contrabando o sin registro sanitario**, y se clausuraron boticas ubicadas junto a los hospitales Las Mercedes, Regional y Juan Pablo II. Contar con más farmacéuticos formados en la región fortalece la vigilancia sanitaria, la inspección y el uso racional de medicamentos.' },
    { p: `Asimismo, la carga de enfermedad regional exige atención farmacéutica y diagnóstico de laboratorio sostenidos: la **anemia afectó al 25,5 % de los niños de 6 a 59 meses en 2024** (INEI – ENDES 2024, Lambayeque, p. 67); el **41,2 % de la población de 15 años a más presenta al menos una comorbilidad** (obesidad, diabetes mellitus y/o hipertensión), 43,5 % en el área urbana, y la **hipertensión arterial afecta al 21,3 %** de ese grupo (INEI – ENDES 2024, Enfermedades No Transmisibles y Transmisibles, Lambayeque, pp. 9 y 17); y la epidemia de dengue de 2023 superó los 6 400 casos, con más de 130 hospitalizados y 16 fallecidos.` },
    { p: 'En ese sentido, concluimos que, por la exigencia legal, la demanda sanitaria y el crecimiento del sector, la creación del programa de Farmacia y Bioquímica en Chiclayo tiene una gran pertinencia social y se justifica para cubrir la demanda educativa y laboral insatisfecha de la región.' },

    { h2: '6.2.- Demanda insatisfecha de profesionales en el área de influencia' },
    { p: 'La creación del programa de Farmacia y Bioquímica en Chiclayo se justifica teniendo en cuenta la demanda de Químicos Farmacéuticos derivada de: (a) los establecimientos farmacéuticos autorizados, cada uno con al menos un director técnico obligatorio; (b) las plazas en establecimientos de salud públicos (MINSA/GERESA y EsSalud) y privados; y (c) la demanda ocupacional reportada por el MTPE.' },
    { table: {
      titulo: 'Tabla 8. Boticas y farmacias privadas en Lambayeque, 2024-2025',
      head: ['Concepto', 'Dic. 2024 (1)', 'Dic. 2025 (2)'],
      rows: [
        ['Distritos con boticas o farmacias privadas (de 38)', '35', '34'],
        ['Boticas y farmacias de cadena', '195', '196'],
        ['Boticas y farmacias independientes', '1 708', '1 334'],
        ['Total boticas y farmacias privadas', '1 903', '1 530'],
        ['Participación en el total nacional', '6,45 %', '5,23 %'],
      ],
      widths: [4600, 1800, 1800],
      fuente: 'Fuente: DIGEMID – Boletín de Establecimientos Farmacéuticos, Año 5, Ed. 8 (dic. 2024) y Ed. 10 (dic. 2025), p. 6. (1) Establecimientos con condición "activos". (2) Establecimientos con estado "vigente"; el cambio de criterio explica parte de la reducción.',
    } },
    { p: 'A nivel nacional, al 31 de diciembre de 2025 había **35 565 establecimientos farmacéuticos privados vigentes**: 29 249 boticas y farmacias (82,2 %), 5 209 droguerías (14,6 %), 931 farmacias de establecimientos de salud (2,6 %) y 176 laboratorios (0,5 %). Solo durante 2025 se autorizaron **4 982 nuevos establecimientos farmacéuticos privados** en el país (DIGEMID, Ed. 10, pp. 2-3). Lambayeque es el **sexto departamento** con más boticas y farmacias privadas (5,23 % del total nacional).' },
    { table: {
      titulo: 'Tabla 9. Demanda estimada de Químicos Farmacéuticos como directores técnicos en Lambayeque',
      head: ['Concepto', 'Valor', 'Sustento'],
      rows: [
        ['Boticas y farmacias privadas vigentes (2025)', '1 530', 'DIGEMID, Tabla 8'],
        ['QF directores técnicos requeridos (mínimo)', '1 530', '1 QF por establecimiento (Ley N.° 29459)'],
        ['Nuevos EE.FF. privados autorizados por año en Lambayeque (estimado)', '≈ 260', '4 982 nacionales × 5,23 % regional'],
        ['Demanda anual de QF por nuevos establecimientos (estimado)', '≈ 260', '1 QF por establecimiento nuevo'],
        ['Reposición (rotación, jubilación)', P, 'Colegio Químico Farmacéutico de Lambayeque'],
      ],
      widths: [3700, 1100, 3400],
      fuente: 'Fuente: elaboración propia con datos de DIGEMID (2025). No incluye droguerías, laboratorios, farmacias de clínicas ni plazas del sector público.',
    } },
    { p: `Según la Encuesta de Demanda Ocupacional del MTPE, en 2024 Lambayeque demandaría **17 448 trabajadores para nuevos puestos**, de los cuales 1 525 serían de naturaleza permanente; los profesionales universitarios abarcarían el 14,8 % de esta demanda. **Farmacia y Bioquímica sería la segunda carrera técnica más demandada** en la región (MTPE, 2024, pp. v y 15). Esta demanda técnica está ligada a la de Químicos Farmacéuticos, pues cada establecimiento que incorpora técnicos en farmacia requiere un QF responsable. ${P} Brecha de Químicos Farmacéuticos por 10 000 habitantes (MINSA – INFORHUS).` },
    { p: 'De lo expuesto se observa que la mayor demanda corresponde a Químicos Farmacéuticos para la dirección técnica de establecimientos farmacéuticos, con alrededor de 260 nuevos establecimientos por año en la región, a los que se suman las plazas en hospitales, clínicas y laboratorios.' },

    { h3: '6.2.1. Necesidades locales:' },
    { ul: [
      'Población y concentración urbana: 1 356 202 habitantes, 81 % urbanos, con Chiclayo como centro de referencia sanitaria del nororiente.',
      'Carga de enfermedad: anemia infantil de 25,5 %, 41,2 % de adultos con obesidad, diabetes o hipertensión y 21,3 % con hipertensión arterial (ENDES 2024) y brotes recurrentes de dengue, que requieren atención farmacéutica, diagnóstico de laboratorio y educación sanitaria.',
      'Desigualdad territorial: la pobreza en Ferreñafe (46,7 %) y Lambayeque (31,4 %) supera ampliamente la de Chiclayo (17,8 %); en 2025 cuatro distritos de la región no contaban con ninguna botica o farmacia privada (DIGEMID).',
      'Medicamentos ilegales: más de una tonelada decomisada y boticas clausuradas junto a hospitales; se necesitan profesionales para la dirección técnica, la inspección y la farmacovigilancia.',
      'Baja proporción de profesionales: solo el 13,9 % de la PEA ocupada tiene educación universitaria (MTPE, 2022).',
    ] },
    { p: 'Un programa de Farmacia y Bioquímica ayudaría a satisfacer estas demandas formando profesionales locales con las habilidades y conocimientos necesarios.' },

    { h3: '6.2.2. Mejora de la gestión de las empresas públicas y privadas:' },
    { p: 'Lambayeque cuenta con **79 085 MYPE, el 89,0 % dedicadas a comercio y servicios**, y el 84,0 % de ellas son informales (PRODUCE, p. 1). El comercio minorista de productos farmacéuticos, con 1 334 boticas independientes, es uno de los rubros con mayor número de establecimientos. El Químico Farmacéutico contribuye a la gestión técnico-sanitaria de boticas, farmacias y droguerías (Buenas Prácticas de Almacenamiento, Dispensación y Farmacovigilancia; gestión de inventarios y cadena de frío; cumplimiento normativo ante DIGEMID y la GERESA), a la formalización del sector y, en el sector público, a la gestión del suministro de medicamentos en redes y hospitales (SISMED), los comités farmacoterapéuticos y el uso racional de antimicrobianos.' },

    { h3: '6.2.3. Desarrollo profesional y académico:' },
    { p: 'La creación del programa de Farmacia y Bioquímica en Chiclayo abre nuevas oportunidades de formación profesional para residentes locales y de la macrorregión, en un campo donde la oferta licenciada es muy reducida. Permite a los egresados prepararse en la región para el Examen Nacional de Farmacia y Bioquímica (ENAFB), requisito previo al SERUMS, y articularse con los demás programas de ciencias de la salud de la USS y con posgrados en farmacia clínica, gestión de servicios de salud, análisis clínicos y control de calidad.' },

    { h3: '6.2.4. Conexión con la investigación y la práctica:' },
    { p: 'El programa tendrá una sólida conexión entre la investigación y la práctica. Desde los primeros ciclos, el estudiante recibirá formación investigativa en líneas pertinentes a la región: productos naturales y fitoquímica de la flora del bosque seco y de la costa norte; farmacovigilancia y uso racional de medicamentos; control de calidad y detección de medicamentos falsificados, en articulación con la GERESA y DIGEMID; bioquímica clínica y molecular aplicada a enfermedades crónicas, metabólicas y tropicales; y bromatología aplicada a la agroexportación. La práctica preprofesional (internado en farmacia comunitaria, hospitalaria, clínica e industrial) se desarrollará mediante convenios con la GERESA Lambayeque, EsSalud, clínicas privadas, laboratorios, cadenas de boticas y droguerías.' },

    { h3: '6.2.5. Relación directa con la Bioquímica:' },
    { p: 'Dentro del macrogrupo de ciencias de la salud, Farmacia y Bioquímica ocupa un nicho distinto al de Medicina o Enfermería. Mientras estas últimas se enfocan prioritariamente en el cuidado clínico directo del paciente, la orientación bioquímico-farmacéutica responde a un perfil técnico-científico e industrial. En el contexto de Chiclayo y la región Lambayeque, el componente bioquímico se vincula con la demanda del mercado en cuatro ejes clave:' },
    { table: {
      titulo: 'Tabla 10. Ejes de demanda del componente bioquímico en Lambayeque',
      head: ['Eje', 'Aplicación', 'Impacto o rol en la región'],
      rows: [
        ['Diagnóstico analítico y biología molecular', 'Diagnóstico clínico en laboratorios de análisis biológicos, inmunológicos y hematológicos (redes MINSA, EsSalud y clínicas privadas).', 'Chiclayo es centro de referencia médico para Cajamarca, Amazonas y San Martín, y concentra la toma y el procesamiento de muestras de alta complejidad.'],
        ['Biotecnología y control microbiológico agroindustrial', 'Análisis microbiológico, fisicoquímico y de inocuidad en la industria alimentaria y agroexportadora del norte (Olmos, Zaña).', 'Control de calidad de insumos, evaluación de residuos químico-biológicos y análisis de agua y alimentos. Los arándanos representan el 46,5 % de las exportaciones regionales (PRODUCE, 2024).'],
        ['Toxicología y farmacovigilancia', 'Estudio de los efectos de sustancias químicas en organismos vivos y análisis toxicológicos forenses.', 'Control del impacto ambiental de agroquímicos y metales pesados en las cuencas del norte.'],
        ['Investigación biológica y sanitaria', 'Epidemiología molecular y monitoreo de enfermedades endémicas o tropicales (dengue, leptospirosis).', 'Técnicas bioquímicas de diagnóstico rápido y caracterización de patógenos.'],
      ],
      widths: [2000, 3200, 3200],
    } },
    { p: 'El atractivo vocacional de la carrera radica en que la Bioquímica aporta la base científica sólida (laboratorio, investigación y desarrollo) que complementa el ejercicio farmacéutico (gestión del medicamento, dispensación y regulación sanitaria), ampliando el campo laboral más allá de la farmacia asistencial o de cadena.' },

    { h3: '6.2.6. Potencial económico y social de la región donde se ubica el programa:' },
    { p: 'De acuerdo con el BCRP, Lambayeque creció a un promedio anual de 2,7 % en 2015-2024, principalmente por los sectores agropecuario y telecomunicaciones. En 2024 su PBI creció 5,2 % y sus exportaciones aumentaron 13,7 %, lideradas por arándanos (46,5 %), café sin tostar (10,8 %), paltas (10,2 %) y uvas (6,8 %) (PRODUCE, p. 1). En enero de 2025, la actividad mantuvo su dinamismo: el sector agropecuario creció 6,2 %, la construcción 12,7 %, las exportaciones 33,6 % y la inversión pública 61,0 % (BCRP, Síntesis de Actividad Económica, enero 2025, p. 3).' },
    { p: 'A mediados de 2024, ProInversión identificó **31 proyectos en la región por más de S/ 8 800 millones**, orientados a transporte, energía, **salud**, irrigación, vivienda e industria, entre ellos el parque industrial de Reque, de aproximadamente 3 000 hectáreas (BCRP, Caracterización, p. 11). La implementación de un programa de Farmacia y Bioquímica puede contribuir significativamente a mejorar el acceso a medicamentos seguros y de calidad, a la formalización del comercio farmacéutico y al desarrollo de la agroindustria y la industria regional de productos naturales.' },

    { h2: '6.3. Análisis de la viabilidad del programa' },
    { p: `De las universidades y programas de formación universitaria en el departamento de Lambayeque, la única universidad licenciada identificada con Farmacia y Bioquímica es la UTP en Chiclayo, que abrió la carrera recién en 2025 (240 ingresantes en todas sus sedes); la UNPRG no ofrece la carrera ${V}. Las universidades que ofrecían la carrera sin licencia (Universidad de Chiclayo) o que operaban en la región sin licencia (Universidad de Lambayeque y Universidad Juan Mejía Baca) se encuentran en cese, lo que deja una demanda regional desatendida y estudiantes que se trasladan a otras ciudades.` },
    { p: 'La Universidad Señor de Sipán ha demostrado un buen manejo de los recursos económicos y financieros, ya que cumple con los proveedores, los trabajadores y el Estado, pagando puntualmente sus obligaciones.' },
    { p: `Respecto de sus recursos humanos, los perfiles docentes exigen maestría y doctorado; para esta carrera se requiere contar con Químicos Farmacéuticos con grado de maestro o doctor y especialistas en farmacia clínica, farmacognosia, tecnología farmacéutica, análisis clínicos y bioquímica ${P}.` },
    { p: `En cuanto a los recursos materiales, además de la infraestructura moderna de la USS, el programa requiere laboratorios especializados (química general y orgánica, análisis instrumental, farmacognosia, tecnología farmacéutica, microbiología, bioquímica clínica y biología molecular, y farmacia simulada) que cumplan las Condiciones Básicas de Calidad ${V}. Los recursos tecnológicos de la USS son desarrollados por sus técnicos y se hace un uso eficiente de las aplicaciones de la red.` },


    { h1: 'VII.- PROPUESTA USS' },
    { p: '**Misión:** "Formar Químicos Farmacéuticos con perfil emprendedor, competitivos, éticos y comprometidos con la salud pública y la responsabilidad social".' },
    { p: '**Visión:** "Ser la Escuela Profesional de Farmacia y Bioquímica líder del norte del país, con proyección internacional, con base en la excelencia académica, la investigación, la infraestructura de laboratorios y la tecnología, que responda a las necesidades sanitarias de la sociedad".' },
    { h2: '7.1.- OBJETIVOS ACADÉMICOS' },
    { ul: [
      'Formar profesionales en Farmacia y Bioquímica caracterizados por su excelencia académica, su mentalidad emprendedora y su capacidad de discernimiento.',
      'Formar Químicos Farmacéuticos competentes y éticos en el diseño, la producción, el control de calidad, la dispensación y el seguimiento del uso de medicamentos, a fin de contribuir a la mejora de la salud y la calidad de vida.',
      'Promover la investigación en productos naturales, farmacología, bioquímica y salud pública.',
      'Fomentar la Responsabilidad Social Universitaria mediante campañas de uso racional de medicamentos y prevención de la automedicación.',
      'Impulsar la participación de docentes y estudiantes en iniciativas de internacionalización.',
    ] },
    { h2: '7.2.- OBJETIVOS EDUCACIONALES' },
    { table: {
      head: ['COMPETENCIA', 'OBJETIVO EDUCACIONAL'],
      rows: [
        ['OE1. Emprendedora', 'Genera empresa o participa en iniciativas emprendedoras del sector farmacéutico (boticas, droguerías, laboratorios de productos naturales).'],
        ['OE2. Colaborativa', 'Participa en equipos multidisciplinarios de salud.'],
        ['OE3. Responsabilidad social', 'Aplica principios de responsabilidad social y sanitaria en las organizaciones donde labora.'],
        ['OE4. Disciplinar', 'Aplica conocimientos de las ciencias farmacéuticas y bioquímicas con sentido crítico.'],
        ['OE5. Comunicativa', 'Se comunica de manera efectiva, oral y escrita, con pacientes y equipos de salud.'],
        ['OE6. Analítica', 'Diseña y ejecuta análisis de control de calidad de medicamentos, alimentos y muestras biológicas.'],
        ['OE7. Asistencial', 'Brinda atención farmacéutica y seguimiento farmacoterapéutico con sentido ético.'],
        ['OE8. Gestión', 'Gestiona el suministro de medicamentos y los establecimientos farmacéuticos cumpliendo la normativa sanitaria.'],
      ],
      widths: [2500, 5900],
    } },
    { h2: '7.3.- PERFIL DE INGRESO' },
    { p: 'Los futuros estudiantes del programa de estudios de Farmacia y Bioquímica deberán reunir como mínimo el siguiente perfil:' },
    { ul: [
      'a) Resuelve problemas contextualizados de la vida cotidiana para tomar decisiones y comunicar resultados en un lenguaje matemático.',
      'b) Comprende textos escritos para comunicarse de manera efectiva en contextos diversos.',
      'c) Aplica habilidades de trabajo en equipo y aprendizaje autónomo en entornos académicos.',
      'd) Comprende de manera interdisciplinaria los eventos históricos, las características geográficas y los principios cívicos.',
      'e) Demuestra interés por las ciencias químicas y biológicas y vocación de servicio en salud.',
    ] },
    { h2: '7.4.- PERFIL DE EGRESO/GRADUADO' },
    { p: '**A.- Competencias genéricas:** se mantienen las competencias institucionales de la USS: CG1 Emprendedora, CG2 Glocal, CG3 Pensamiento crítico, CG4 Investigativa, CG5 Responsabilidad social y CG6 Digital.' },
    { p: '**B.- Competencias específicas (propuesta):**' },
    { table: {
      head: ['COMPETENCIA', 'DESCRIPCIÓN DEL PERFIL'],
      rows: [
        ['CE1. Disciplinar', 'Integra fundamentos de química, biología, fisiología y farmacología para comprender la acción de los medicamentos y los procesos bioquímicos del organismo.'],
        ['CE2. Tecnología farmacéutica', 'Diseña, elabora y controla formas farmacéuticas y productos naturales según las Buenas Prácticas de Manufactura.'],
        ['CE3. Análisis y control de calidad', 'Ejecuta análisis fisicoquímicos, microbiológicos y bioquímico-clínicos de medicamentos, alimentos y muestras biológicas con rigor científico.'],
        ['CE4. Atención farmacéutica', 'Dispensa, brinda seguimiento farmacoterapéutico y realiza farmacovigilancia para promover el uso racional de medicamentos.'],
        ['CE5. Gestión', 'Gestiona establecimientos farmacéuticos y el suministro de medicamentos en los sectores público y privado según la normativa sanitaria (Ley N.° 29459).'],
      ],
      widths: [2500, 5900],
    } },
    { h2: '7.5.- CONTENIDOS GENERALES Y ESPECÍFICOS' },
    { p: '**a. Contenidos generales:** se mantienen los institucionales (emprendimiento, escenarios locales y globales, investigación científica, responsabilidad social, tecnologías de la información, realidad virtual e inteligencia artificial).' },
    { p: '**b. Contenidos específicos (propuesta):**' },
    { ul: [
      'Química general, inorgánica, orgánica y analítica', 'Bioquímica', 'Fisiología y anatomía', 'Microbiología y parasitología',
      'Farmacognosia y fitoquímica', 'Farmacología y toxicología', 'Tecnología farmacéutica', 'Biofarmacia y farmacocinética',
      'Análisis de medicamentos y control de calidad', 'Bromatología', 'Bioquímica clínica', 'Farmacia clínica y atención farmacéutica',
      'Farmacia hospitalaria', 'Legislación farmacéutica y gestión de establecimientos', 'Salud pública', 'Investigación en ciencias farmacéuticas',
    ] },
    { h2: '7.6.- ACTITUDES Y VALORES' },
    { p: '**a. Actitudes y valores generales:** enfoque de género, inclusivo y diferencial; actitud positiva basada en un enfoque intercultural; postura racional, crítica y objetiva; actuación ética; trabajo autónomo y colaborativo; tolerancia y vocación de servicio.' },
    { p: '**b. Actitudes y valores propios de la disciplina:** responsabilidad sanitaria, compromiso con la seguridad del paciente, rigor analítico, cumplimiento de la normativa farmacéutica, respeto por la interdisciplinariedad y trabajo en equipo.' },
    { h2: '7.7.- Desempeño y campo laboral' },
    { p: 'El egresado del programa de estudios de Farmacia y Bioquímica está capacitado para desempeñarse en los siguientes campos ocupacionales:' },
    { table: {
      head: ['CAMPO OCUPACIONAL', 'FUNCIONES', 'INSTITUCIÓN O ÁREA DONDE SE DESEMPEÑARÁ'],
      rows: [
        ['Director técnico', 'Dirección técnica, dispensación, gestión y cumplimiento normativo', 'Farmacias, boticas, cadenas, droguerías'],
        ['Farmacéutico hospitalario y clínico', 'Gestión del suministro, farmacia clínica, farmacovigilancia, preparación de mezclas', 'Hospitales del MINSA/GERESA, EsSalud, clínicas'],
        ['Analista de control de calidad', 'Análisis de medicamentos, alimentos y cosméticos; control microbiológico e inocuidad', 'Laboratorios farmacéuticos, agroindustria y agroexportación'],
        ['Bioquímico clínico', 'Análisis clínicos, inmunológicos, hematológicos y de biología molecular', 'Laboratorios clínicos públicos y privados'],
        ['Toxicólogo', 'Análisis toxicológicos, forenses y ambientales', 'Laboratorios forenses, ambientales y agroindustriales'],
        ['Inspector sanitario', 'Inspección, control y vigilancia de productos farmacéuticos', 'DIGEMID, GERESA/DIREMID'],
        ['Docencia e investigación', 'Docencia universitaria e investigación', 'Universidades y centros de investigación'],
      ],
      widths: [2300, 3300, 2800],
    } },
    { table: {
      titulo: 'Actores estratégicos',
      head: ['Tipo de actor', 'Actor clave', 'Nivel'],
      rows: [
        ['Demandante', 'Farmacias, boticas, cadenas, droguerías, clínicas', 'Alto'],
        ['Tomador de decisión – Normativo', 'MINSA – DIGEMID', 'Alto'],
        ['Tomador de decisión – Regulador', 'SUNEDU; Ministerio de Educación', 'Medio'],
        ['Autoridad regional', 'GERESA Lambayeque (DIREMID)', 'Alto'],
        ['Prestador público', 'EsSalud – Red Asistencial Lambayeque', 'Alto'],
        ['Gremio profesional', 'Colegio Químico Farmacéutico de Lambayeque', 'Medio'],
        ['Organismo internacional', 'OPS/OMS', 'Bajo'],
      ],
      widths: [3000, 4400, 1000],
    } },
    { h2: '7.8.- Certificaciones progresivas' },
    { table: {
      head: ['NOMBRE DE LA CERTIFICACIÓN', 'COMPETENCIAS DE LA CERTIFICACIÓN', 'CICLO', 'CURSO INTEGRADOR', 'PRODUCTO'],
      rows: [
        ['1.ª Asistente de laboratorio de análisis químico', 'Ejecuta análisis químicos básicos con bioseguridad.', 'IV', 'Análisis químico', 'Proyecto'],
        ['2.ª Asistente en dispensación y gestión de boticas', 'Apoya la dispensación y la gestión de inventarios según Buenas Prácticas.', 'VI', 'Legislación y gestión farmacéutica', 'Proyecto'],
        ['3.ª Analista de control de calidad de medicamentos', 'Realiza el control de calidad de productos farmacéuticos.', 'VIII', 'Análisis de medicamentos', 'Proyecto'],
      ],
      widths: [2200, 2700, 700, 1700, 1100],
      fuente: 'Base legal: Ley Universitaria N.° 30220, art. 40. Los créditos mínimos se definirán en el plan de estudios.',
    } },

    // VIII
    { h1: 'VIII.- CONCLUSIONES' },
    { p: 'El presente informe técnico sustenta la pertinencia de crear el programa de estudios de Farmacia y Bioquímica en la región Lambayeque (Chiclayo). La exigencia legal de un Químico Farmacéutico en cada uno de los 1 530 establecimientos farmacéuticos privados de la región (y en los cerca de 260 que se abren cada año), la expansión hospitalaria de EsSalud, la demanda de diagnóstico analítico y control agroindustrial, la carga de enfermedad regional y el comercio ilegal de medicamentos generan una demanda estructural de estos profesionales, mientras que la oferta licenciada en la región es muy reducida tras el cese de universidades no licenciadas de Chiclayo.' },
    { p: 'Lambayeque presenta un entorno económico favorable: aporta el 2,7 % del PBI nacional, creció 5,2 % en 2024, cuenta con 79 085 MYPE (89 % en comercio y servicios) y una cartera de inversión superior a S/ 8 800 millones que incluye proyectos de salud. La USS cuenta con sede en la región, respaldo financiero y experiencia en ciencias de la salud.' },
    { p: `La estimación referencial de demanda muestra una brecha de entre 900 y 3 200 jóvenes por año según el escenario (Tablas 4 y 7). La viabilidad final depende de validar esa estimación con una encuesta propia de intención vocacional y de la confirmación de la inversión en laboratorios y de la plana docente ${P}.` },

    // Referencias
    { h1: 'REFERENCIAS' },
    { ul: [
      'BCRP – Sucursal Piura (2025). Caracterización del departamento de Lambayeque.',
      'BCRP – Sucursal Piura (2025). Lambayeque: Síntesis de Actividad Económica, enero 2025.',
      'DIGEMID – MINSA (2024). Boletín de Establecimientos Farmacéuticos, Año 5, Edición 8 (diciembre 2024).',
      'DIGEMID – MINSA (2026). Boletín de Establecimientos Farmacéuticos, Año 5, Edición 10 (diciembre 2025).',
      'PRODUCE – OGEIEE (2025). Diagnóstico Productivo Regional Lambayeque 2024.',
      'MTPE – GRTPE Lambayeque, OSEL (2024). Tríptico N° 02: Indicadores laborales en el departamento de Lambayeque.',
      'MTPE – DGPE (2024). Demanda de ocupaciones en Lambayeque 2024 (Encuesta de Demanda Ocupacional 2023).',
      'INEI (2025). Encuesta Demográfica y de Salud Familiar 2024 – Departamento de Lambayeque.',
      'INEI (2025). ENDES 2024 – Lambayeque: Enfermedades No Transmisibles y Transmisibles.',
      'UTP (2025). Postulantes, ingresantes, matriculados y egresados pregrado 2022-2025 (datos al 31.10.2025).',
      'CPI. Estructura socioeconómica de Lambayeque (citado en SINEACE, Caracterización de la región Lambayeque).',
      'INEI (2018). Resultados definitivos de los Censos Nacionales 2017 – Lambayeque.',
      'GERESA Lambayeque. Notas de prensa sobre operativos contra medicamentos falsificados.',
      'SUNEDU. Resoluciones de licenciamiento institucional (Universidad de Chiclayo, Universidad de Lambayeque, Universidad Juan Mejía Baca, UNPRG).',
      'EsSalud. Anuncios de construcción de hospitales en Lambayeque.',
      'Arellano Consultoría (2025). Dónde Quiero Estudiar (DQE) Norte y Sur 2025: Pregrado universidades (difusión en Gestión) [informe completo por adjuntar].',
      'MTPE/MINEDU. Portal "Ponte en Carrera".',
      'Congreso de la República. Ley N.° 29459 – Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios; Ley N.° 30220 – Ley Universitaria.',
    ] },
  ],
};
