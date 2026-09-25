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
    { p: 'La región Lambayeque se encuentra en la costa norte del Perú. Se extiende en una superficie de **14 479,52 km²**. Limita por el norte con Piura; por el este, con Cajamarca; por el sur, con La Libertad; y por el oeste, con el Océano Pacífico. Políticamente está dividida en **3 provincias (Chiclayo, Ferreñafe y Lambayeque) y 38 distritos**, siendo su capital la ciudad de Chiclayo.' },
    { p: `Según el Censo 2017, Lambayeque tenía **1 197 260 habitantes**, de los cuales la provincia de Chiclayo concentraba **799 675 (66,8 %)**. Las proyecciones del INEI ubican a la región por encima de **1,3 millones de habitantes hacia 2025** ${V}; la provincia de Chiclayo alcanzó **882 306 habitantes en 2024** (INEI). Chiclayo y Ferreñafe son las provincias más densamente pobladas (202,0 y 55,9 hab./km²) y Lambayeque la menos densa (23,2 hab./km²).` },
    { p: 'Lambayeque aporta alrededor del **2,5 % del PBI nacional (2024)**, con un PBI per cápita de **S/ 9 911** (PRODUCE). Los principales componentes de su Valor Agregado Bruto son: otros servicios (28,4 %), comercio (19,1 %), manufactura (11,0 %), agricultura (9,3 %), construcción (8,4 %) y transporte (7,8 %). De acuerdo con el BCRP, el comercio representó el 18,5 % de la actividad económica en el periodo 2015-2024, con un crecimiento promedio anual de 2,2 %; en ese periodo, Lambayeque fue el **tercer productor agrario nacional (12,8 %)**.' },
    { p: `La Población Económicamente Activa (PEA) regional fue de **721 994 personas (2022)**, con 97,9 % ocupada y **2,1 % desocupada**; la PEA con empleo adecuado representó el 54,4 % (MTPE). La **pobreza monetaria fue de 17,9 % en 2023**, una de las más bajas del país (INEI). ${P} Porcentaje de la PEA con estudios superiores universitarios y no universitarios (ENAHO).` },

    // IV
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
    { table: {
      titulo: 'Tabla 1. Evolución de la población de los niveles socioeconómicos B, C y D de Lambayeque',
      head: ['', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
      rows: [['Población de los niveles BCD en Lambayeque', ...vacio(7)], ['% de la población de Lambayeque', ...vacio(7)]],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: `Fuente: INEI – ENAHO; APEIM. * Proyectado. ${P}`,
    } },
    { table: {
      titulo: 'Tabla 2. Evolución de la población de 16 a 25 años en los niveles socioeconómicos B, C y D de Lambayeque',
      head: ['', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
      rows: [['Población de 16-25 años NSE BCD', ...vacio(7)], ['% de la población de Lambayeque', ...vacio(7)]],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: `Fuente: INEI – ENAHO. * Proyectado. ${P}`,
    } },
    { table: {
      titulo: `Tabla 3. Población objetivo proyectada (${años[0]}-${años[6]})`,
      head: ['', ...años], rows: [['Población objetivo proyectada', ...vacio(7)]],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: P,
    } },
    { table: {
      titulo: `Tabla 4. Demanda proyectada de la carrera de Farmacia y Bioquímica por el público objetivo ${años[0]}-${años[6]}`,
      head: ['', ...años],
      rows: [['Demanda educativa proyectada', ...vacio(7)], ['% población objetivo interesada en Farmacia y Bioquímica', ...vacio(7)]],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: `Datos proyectados según encuesta de intención vocacional (por realizar). ${P}`,
    } },
    { h2: '5.2.- Oferta educativa' },
    { p: 'En la región Lambayeque, la oferta licenciada de Farmacia y Bioquímica es reducida. Varias universidades que ofrecían la carrera o que operaban en Chiclayo no obtuvieron el licenciamiento institucional de la SUNEDU y se encuentran en proceso de cese.' },
    { table: {
      titulo: 'Tabla 5. Oferta educativa de Farmacia y Bioquímica en Lambayeque',
      head: ['TIPO', 'UNIVERSIDAD', 'LICENCIA SUNEDU', 'FARMACIA Y BIOQUÍMICA'],
      rows: [
        ['Privada', 'Universidad Tecnológica del Perú (UTP) – Chiclayo', 'Licenciada', `Sí ${V}`],
        ['Pública', 'Universidad Nacional Pedro Ruiz Gallo (UNPRG)', 'Licenciada (2023)', V],
        ['Privada', 'Universidad de Chiclayo (UDCH)', 'Denegada', 'Ofrecía – en cese'],
        ['Privada', 'Universidad de Lambayeque (UDL)', 'Denegada', 'En cese'],
        ['Privada', 'Universidad Privada Juan Mejía Baca (UMB)', 'Denegada', 'En cese'],
      ],
      widths: [900, 3700, 1700, 2000], firstColLeft: false,
      fuente: 'Fuente: SUNEDU; portales institucionales.',
    } },
    { p: 'Para estimar la oferta educativa se utilizarán las estadísticas registradas en los portales de transparencia de estas universidades (Tabla 6).' },
    { table: {
      titulo: 'Tabla 6. Ingresantes a Farmacia y Bioquímica en las universidades de Lambayeque',
      head: ['UNIVERSIDAD', '2023', '2024', '2025'],
      rows: [['Universidad Tecnológica del Perú (UTP) – Chiclayo', '', '', ''], ['Universidad Nacional Pedro Ruiz Gallo (si corresponde)', '', '', ''], ['Total', '', '', '']],
      widths: [4300, 1300, 1300, 1300],
      fuente: `Fuente: portal de transparencia de cada universidad; SIU-SUNEDU. ${P}`,
    } },
    { table: {
      titulo: 'Tabla 7. Brecha entre demanda y oferta educativa en Lambayeque',
      head: ['Concepto', ...años],
      rows: [['Demanda educativa proyectada', ...vacio(7)], ['Oferta educativa proyectada', ...vacio(7)], ['Brecha demanda/oferta', ...vacio(7)]],
      widths: [2700, 820, 820, 820, 820, 820, 820, 820],
      fuente: 'Fuente: elaboración propia (Tabla 4 − Tabla 6).',
    } },

    // VI
    { h1: 'VI.- JUSTIFICACIÓN DE LA CREACIÓN DEL PROGRAMA' },
    { h2: '6.1.- Justificación' },
    { p: 'Lambayeque es el principal polo comercial, de servicios y sanitario del nororiente peruano. Chiclayo concentra hospitales de referencia (Hospital Regional Lambayeque, Hospital Las Mercedes y Hospital Nacional Almanzor Aguinaga Asenjo de EsSalud) que reciben pacientes derivados de Cajamarca, San Martín, Amazonas y Piura. Solo EsSalud cuenta con **más de 598 000 asegurados** en la región y proyecta la construcción de tres hospitales (Almanzor Aguinaga, Naylamp y Ferreñafe); el nuevo Almanzor Aguinaga, de alta complejidad, atendería a unos 380 000 asegurados con una inversión estimada de S/ 450 a 500 millones. Cada uno de estos establecimientos requiere servicios de farmacia hospitalaria, farmacia clínica, farmacovigilancia y gestión del suministro de medicamentos a cargo de Químicos Farmacéuticos.' },
    { p: 'La Ley N.° 29459, Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios, y su reglamento exigen que **toda farmacia, botica, droguería y laboratorio cuente con un Químico Farmacéutico como director técnico**, presente durante el horario de funcionamiento. En consecuencia, la expansión del comercio farmacéutico genera una demanda directa y obligatoria de estos profesionales.' },
    { p: 'La región enfrenta, además, un problema persistente de comercio ilegal de medicamentos: la GERESA Lambayeque intervino más de 100 establecimientos en 14 operativos y **decomisó más de una tonelada de medicamentos falsificados, de contrabando o sin registro sanitario**, y se clausuraron boticas ubicadas junto a los hospitales Las Mercedes, Regional y Juan Pablo II. Contar con más farmacéuticos formados en la región fortalece la vigilancia sanitaria, la inspección y el uso racional de medicamentos.' },
    { p: `Asimismo, la carga de enfermedad regional exige atención farmacéutica sostenida: la **anemia afectó al 25,5 % de los niños de 6 a 59 meses en 2024** (INEI – ENDES 2024, Lambayeque, p. 67); el 41,8 % de la población de 15 años a más presenta al menos una comorbilidad asociada a obesidad, diabetes mellitus o hipertensión ${V}; y la epidemia de dengue de 2023 superó los 6 400 casos, con más de 130 hospitalizados y 16 fallecidos.` },
    { p: 'En ese sentido, concluimos que, por la exigencia legal, la demanda sanitaria y el crecimiento del sector, la creación del programa de Farmacia y Bioquímica en Chiclayo tiene una gran pertinencia social y se justifica para cubrir la demanda educativa y laboral insatisfecha de la región.' },

    { h2: '6.2.- Demanda insatisfecha de profesionales en el área de influencia' },
    { p: 'La demanda de Químicos Farmacéuticos se estima a partir de: (a) los establecimientos farmacéuticos autorizados, cada uno con al menos un director técnico obligatorio; (b) las plazas en establecimientos de salud públicos (MINSA/GERESA y EsSalud) y privados; y (c) la demanda ocupacional reportada por el MTPE.' },
    { table: {
      titulo: 'Tabla 8. Establecimientos farmacéuticos autorizados en Lambayeque',
      head: ['Tipo de establecimiento', '2023', '2024', '2025'],
      rows: [['Farmacias y boticas (privadas)', '', '', ''], ['Farmacias de establecimientos de salud', '', '', ''], ['Droguerías y almacenes especializados', '', '', ''], ['Laboratorios', '', '', ''], ['Total', '', '', '']],
      widths: [4300, 1300, 1300, 1300],
      fuente: `Fuente: DIGEMID – Boletín de establecimientos farmacéuticos (dic. 2024 y dic. 2025). ${P}`,
    } },
    { table: {
      titulo: 'Tabla 9. Demanda estimada de Químicos Farmacéuticos (directores técnicos)',
      head: ['Concepto', 'Fórmula / valor'],
      rows: [
        ['Establecimientos nuevos por año', 'Variación anual de la Tabla 8'],
        ['QF requeridos por establecimiento', '≥ 1 (≥ 2 si atiende en dos turnos)'],
        ['Demanda anual de QF por nuevos establecimientos', 'Establecimientos nuevos × QF requeridos'],
        ['Reposición (rotación, jubilación)', `% del stock de colegiados habilitados ${P}`],
      ],
      widths: [4300, 3900],
      fuente: 'Fuente: elaboración propia.',
    } },
    { p: `Según la Encuesta de Demanda Ocupacional del MTPE, Lambayeque requeriría **17 448 trabajadores para cubrir nuevos puestos en 2024**, y la carrera de Farmacia y Bioquímica figura entre las carreras técnicas más demandadas en la región. A nivel nacional, los técnicos y asistentes farmacéuticos constituyen la ocupación técnica más requerida (877 puestos) ${V}. Esta demanda técnica está ligada a la de Químicos Farmacéuticos, pues cada establecimiento que incorpora técnicos requiere un QF responsable. ${P} Brecha de Químicos Farmacéuticos por 10 000 habitantes (MINSA – INFORHUS).` },

    { h3: '6.2.1. Necesidades locales:' },
    { ul: [
      'Población y concentración urbana: más de 1,3 millones de habitantes, dos tercios en la provincia de Chiclayo (882 306 en 2024), que actúa como centro de referencia sanitaria del nororiente.',
      'Carga de enfermedad: anemia infantil de 25,5 % (ENDES 2024), comorbilidades crónicas en la población adulta y brotes recurrentes de dengue, que requieren atención farmacéutica, seguimiento farmacoterapéutico y educación sanitaria.',
      'Medicamentos ilegales: más de una tonelada decomisada y boticas clausuradas junto a hospitales; se necesitan profesionales para la dirección técnica, la inspección y la farmacovigilancia.',
      'Salida de estudiantes: con el cese de universidades no licenciadas de Chiclayo que ofrecían la carrera, muchos jóvenes se trasladan a Trujillo o Lima; un programa local reduce ese costo para las familias de los NSE B, C y D.',
    ] },
    { p: 'Un programa de Farmacia y Bioquímica ayudaría a satisfacer estas demandas formando profesionales locales con las habilidades y conocimientos necesarios.' },

    { h3: '6.2.2. Mejora de la gestión de las empresas públicas y privadas:' },
    { p: 'Lambayeque cuenta con **77 165 MYPE, 66,2 % dedicadas a comercio y servicios** (PRODUCE), donde el comercio minorista de productos farmacéuticos es uno de los rubros con mayor número de establecimientos. El Químico Farmacéutico contribuye a la gestión técnico-sanitaria de boticas, farmacias y droguerías (Buenas Prácticas de Almacenamiento, Dispensación y Farmacovigilancia; gestión de inventarios y cadena de frío; cumplimiento normativo ante DIGEMID y la GERESA); al control de calidad y la bioquímica de alimentos en la agroindustria; y, en el sector público, a la gestión del suministro de medicamentos en redes y hospitales (SISMED), los comités farmacoterapéuticos y el uso racional de antimicrobianos.' },

    { h3: '6.2.3. Desarrollo profesional y académico:' },
    { p: 'La creación del programa de Farmacia y Bioquímica en Chiclayo abre nuevas oportunidades de formación profesional para residentes locales y de la macrorregión, en un campo donde la oferta licenciada es muy reducida. Permite a los egresados prepararse en la región para el Examen Nacional de Farmacia y Bioquímica (ENAFB), requisito previo al SERUMS, y articularse con los demás programas de ciencias de la salud de la USS y con posgrados en farmacia clínica, gestión de servicios de salud y control de calidad.' },

    { h3: '6.2.4. Conexión con la investigación y la práctica:' },
    { p: 'El programa tendrá una sólida conexión entre la investigación y la práctica. Desde los primeros ciclos, el estudiante recibirá formación investigativa en líneas pertinentes a la región: productos naturales y fitoquímica de la flora del bosque seco y de la costa norte; farmacovigilancia y uso racional de medicamentos (automedicación y resistencia antimicrobiana); control de calidad y detección de medicamentos falsificados, en articulación con la GERESA y DIGEMID; bioquímica clínica aplicada a enfermedades crónicas y metabólicas y al dengue; y bromatología aplicada a la agroexportación. La práctica preprofesional (internado en farmacia comunitaria, hospitalaria e industrial) se desarrollará mediante convenios con la GERESA Lambayeque, EsSalud, clínicas privadas, cadenas de boticas y droguerías.' },

    { h3: '6.2.5. Potencial económico y social de la región donde se ubica el programa:' },
    { p: `La economía lambayecana acumuló un **crecimiento de 11,4 % entre 2020 y 2024** (PRODUCE) y en el cuarto trimestre de 2024 creció **10,3 %**, el segundo mayor crecimiento del país (INEI), impulsado por los cultivos agroindustriales y de exportación (arándano, uva, caña de azúcar) y por la construcción ${V}. A mediados de 2024, ProInversión identificó **31 proyectos de inversión por más de S/ 8 800 millones** en la región (BCRP), a los que se suman los hospitales proyectados por EsSalud.` },
    { p: 'La región presenta un considerable potencial económico y social. La implementación de un programa de Farmacia y Bioquímica puede contribuir significativamente a mejorar el acceso a medicamentos seguros y de calidad, a la formalización del comercio farmacéutico y al desarrollo de la industria regional de productos naturales y alimentos funcionales.' },

    { h2: '6.3. Análisis de la viabilidad del programa' },
    { p: `De las universidades y programas de formación universitaria en el departamento de Lambayeque, la oferta licenciada de Farmacia y Bioquímica se reduce a muy pocas instituciones (la UTP en Chiclayo y la UNPRG ${V}). Las universidades que ofrecían la carrera sin licencia (Universidad de Chiclayo) o que operaban en la región sin licencia (Universidad de Lambayeque y Universidad Juan Mejía Baca) se encuentran en cese, lo que deja una demanda regional desatendida y estudiantes que se trasladan a otras ciudades.` },
    { p: 'La Universidad Señor de Sipán ha demostrado un buen manejo de los recursos económicos y financieros, ya que cumple con los proveedores, los trabajadores y el Estado, pagando puntualmente sus obligaciones.' },
    { p: `Respecto de sus recursos humanos, los perfiles docentes exigen maestría y doctorado; para esta carrera se requiere contar con Químicos Farmacéuticos con grado de maestro o doctor y especialistas en farmacia clínica, farmacognosia, tecnología farmacéutica y bioquímica ${P}.` },
    { p: `En cuanto a los recursos materiales, además de la infraestructura moderna de la USS, el programa requiere laboratorios especializados (química general y orgánica, análisis instrumental, farmacognosia, tecnología farmacéutica, microbiología, bioquímica clínica y farmacia simulada) que cumplan las Condiciones Básicas de Calidad ${V}. Los recursos tecnológicos de la USS son desarrollados por sus técnicos y se hace un uso eficiente de las aplicaciones de la red.` },

    // VII
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
        ['Analista de control de calidad', 'Análisis de medicamentos, alimentos y cosméticos', 'Laboratorios farmacéuticos, agroindustria'],
        ['Bioquímico clínico', 'Análisis clínicos y bioquímicos', 'Laboratorios clínicos públicos y privados'],
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
    { p: 'El presente informe técnico sustenta la pertinencia de crear el programa de estudios de Farmacia y Bioquímica en la región Lambayeque (Chiclayo). La exigencia legal de un Químico Farmacéutico en cada establecimiento farmacéutico, la expansión hospitalaria de EsSalud, la carga de enfermedad regional y el comercio ilegal de medicamentos generan una demanda estructural de estos profesionales, mientras que la oferta licenciada en la región es muy reducida tras el cese de universidades no licenciadas de Chiclayo.' },
    { p: 'Lambayeque presenta un entorno económico favorable (alrededor del 2,5 % del PBI nacional, crecimiento destacado en 2024, amplia base de MYPE de comercio y servicios y una cartera de inversión superior a S/ 8 800 millones). La USS cuenta con sede en la región, respaldo financiero y experiencia en ciencias de la salud.' },
    { p: `La viabilidad final depende de completar el estudio de demanda (Tablas 1-4 y 6), el conteo de establecimientos farmacéuticos de DIGEMID (Tabla 8) y la confirmación de la inversión en laboratorios y de la plana docente ${P}.` },

    // Referencias
    { h1: 'REFERENCIAS' },
    { ul: [
      'BCRP. Caracterización del departamento de Lambayeque. Sucursal Piura.',
      'BCRP. Lambayeque: Síntesis de Actividad Económica (febrero 2024; enero 2025).',
      'INEI (2018). Resultados definitivos de los Censos Nacionales 2017 – Lambayeque.',
      'INEI (2025). Encuesta Demográfica y de Salud Familiar 2024 – Departamento de Lambayeque.',
      'INEI. Compendio Estadístico Lambayeque 2024; Avance Económico Departamental (marzo 2025).',
      'INEI (2024). Pobreza monetaria 2023.',
      'MTPE (2024). Demanda de ocupaciones en Lambayeque 2024; Indicadores laborales en el departamento de Lambayeque.',
      'PRODUCE (2025). Diagnóstico Productivo Regional Lambayeque 2024.',
      'DIGEMID – MINSA. Boletín de establecimientos farmacéuticos (diciembre 2024 y diciembre 2025); Registro Nacional de Establecimientos Farmacéuticos.',
      'GERESA Lambayeque. Notas de prensa sobre operativos contra medicamentos falsificados.',
      'SUNEDU. Resoluciones de licenciamiento institucional (Universidad de Chiclayo, Universidad de Lambayeque, Universidad Juan Mejía Baca, UNPRG).',
      'EsSalud. Anuncios de construcción de hospitales en Lambayeque.',
      'Congreso de la República. Ley N.° 29459 – Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios; Ley N.° 30220 – Ley Universitaria.',
    ] },
  ],
};
