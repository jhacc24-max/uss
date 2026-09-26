// Encuesta de intención vocacional – Farmacia y Bioquímica (Anexo del Informe de Pertinencia).
// Generar: CONTENIDO=contenido_encuesta.js node build.js ../Encuesta_Intencion_Vocacional_Farmacia_Lambayeque.docx
const base = require('./contenido.js');

const L5 = ['1', '2', '3', '4', '5'];
const likert = (titulo, items, fuente) => ({ table: {
  titulo, head: ['Ítem', ...L5],
  rows: items.map((t, i) => [`${i + 1}. ${t}`, '☐', '☐', '☐', '☐', '☐']),
  widths: [5400, 600, 600, 600, 600, 600],
  fuente,
} });
const op = arr => arr.map(x => `☐ ${x}`);

module.exports = {
  meta: base.meta,
  sinPortada: true,
  cuerpo: [
    { h1: 'ANEXO. ENCUESTA DE INTENCIÓN VOCACIONAL – FARMACIA Y BIOQUÍMICA' },
    { p: '**Región Lambayeque – estudiantes de 4.° y 5.° de secundaria**' },

    { h2: 'A. Ficha técnica' },
    { table: {
      head: ['Elemento', 'Descripción'],
      rows: [
        ['Objetivo', 'Estimar el porcentaje de escolares de Lambayeque interesados en estudiar Farmacia y Bioquímica y los factores que influyen en su elección, para validar la demanda educativa del Informe de Pertinencia (Tablas 3, 4 y 7).'],
        ['Población', 'Estudiantes de 4.° y 5.° de secundaria de instituciones educativas públicas y privadas de las provincias de Chiclayo, Lambayeque y Ferreñafe.'],
        ['Tamaño de muestra', 'n = 384 (nivel de confianza 95 %, margen de error ±5 %, p = 0,5; población grande). Se recomienda sumar 10 % por no respuesta: 423 encuestas.'],
        ['Muestreo', 'Estratificado proporcional por provincia, según la distribución de jóvenes de 15 a 29 años del Censo 2017 (OSEL, 2025, p. 13): Chiclayo 67,4 % (259), Lambayeque 25,2 % (97), Ferreñafe 7,4 % (28). Dentro de cada provincia, selección de colegios públicos y privados según la matrícula de ESCALE.'],
        ['Aplicación', 'Autoadministrada en aula (papel o formulario digital), 15 a 20 minutos, con consentimiento de la institución educativa y asentimiento informado del estudiante.'],
        ['Base metodológica', 'Dimensiones de orientación vocacional (personales, de agencia y ambientales) del cuestionario validado para escolares de Lambayeque de Villalobos Véliz et al. (2026), V de Aiken = 1,00 y alfa de Cronbach = 0,904. Para el diagnóstico completo, aplicar ese instrumento con autorización de sus autores.'],
        ['Indicador clave', 'Tasa de interés efectivo = % "Definitivamente sí" + 0,5 × % "Probablemente sí" en la pregunta 9. Este porcentaje reemplaza a los escenarios de la Tabla 4 del informe.'],
      ],
      widths: [2200, 6200],
    } },

    { h2: 'B. Presentación al estudiante' },
    { p: 'Estimado(a) estudiante: esta encuesta busca conocer tus planes de estudio después del colegio. Es anónima y voluntaria; tus respuestas solo se usarán con fines de investigación. No hay respuestas correctas ni incorrectas. Gracias por tu participación.' },

    { h2: 'C. Datos generales' },
    { table: {
      head: ['Pregunta', 'Respuesta'],
      rows: [
        ['1. Provincia donde estudias', op(['Chiclayo', 'Lambayeque', 'Ferreñafe']).join('   ')],
        ['2. Distrito', '______________________'],
        ['3. Tipo de colegio', op(['Público', 'Privado']).join('   ')],
        ['4. Grado', op(['4.° de secundaria', '5.° de secundaria']).join('   ')],
        ['5. Edad', '______ años'],
        ['6. Sexo', op(['Mujer', 'Hombre', 'Prefiero no decir']).join('   ')],
      ],
      widths: [3200, 5200],
    } },

    { h2: 'D. Planes después del colegio' },
    { h3: '7. Al terminar el colegio, ¿qué piensas hacer principalmente? (marca una opción)' },
    { opts: op(['Estudiar en una universidad', 'Estudiar en un instituto', 'Estudiar en un CETPRO', 'Trabajar', 'Trabajar y estudiar', 'Emprender un negocio', 'Todavía no lo sé']) },
    { h3: '8. ¿Qué carrera te gustaría estudiar? Marca tu primera opción (1) y tu segunda opción (2).' },
    { table: {
      head: ['Carrera', '1.ª', '2.ª', 'Carrera', '1.ª', '2.ª'],
      rows: [
        ['Farmacia y Bioquímica', '☐', '☐', 'Ingeniería Civil', '☐', '☐'],
        ['Medicina Humana', '☐', '☐', 'Ingeniería de Sistemas', '☐', '☐'],
        ['Enfermería', '☐', '☐', 'Ingeniería Industrial', '☐', '☐'],
        ['Obstetricia', '☐', '☐', 'Ingeniería Agroindustrial', '☐', '☐'],
        ['Tecnología Médica (laboratorio)', '☐', '☐', 'Derecho', '☐', '☐'],
        ['Nutrición', '☐', '☐', 'Administración', '☐', '☐'],
        ['Odontología', '☐', '☐', 'Contabilidad', '☐', '☐'],
        ['Psicología', '☐', '☐', 'Educación', '☐', '☐'],
        ['Biología / Biotecnología', '☐', '☐', 'Otra: ____________', '☐', '☐'],
      ],
      widths: [2800, 700, 700, 2800, 700, 700],
    } },

    { h2: 'E. Interés en Farmacia y Bioquímica' },
    { p: 'Farmacia y Bioquímica forma Químicos Farmacéuticos que trabajan en farmacias y boticas, hospitales y clínicas, laboratorios clínicos, industria farmacéutica y alimentaria, control de calidad e investigación.' },
    { h3: '9. ¿Considerarías estudiar Farmacia y Bioquímica?' },
    { opts: op(['Definitivamente sí', 'Probablemente sí', 'No estoy seguro(a)', 'Probablemente no', 'Definitivamente no']) },
    { h3: '10. Si respondiste "sí" o "no estoy seguro(a)": ¿qué campo te atrae más? (puedes marcar hasta dos)' },
    { opts: op(['Farmacia comunitaria (boticas y farmacias)', 'Farmacia hospitalaria y clínica', 'Laboratorio clínico y diagnóstico', 'Industria farmacéutica y cosmética', 'Control de calidad de alimentos y agroindustria', 'Investigación (productos naturales, biotecnología)', 'Toxicología y medio ambiente']) },
    { h3: '11. ¿En qué año te gustaría empezar tus estudios universitarios?' },
    { opts: op(['El próximo año', 'En dos años', 'Más adelante', 'No lo sé']) },

    { h2: 'F. Seguridad y factores de la elección' },
    { p: 'Marca del 1 al 5, donde 1 = totalmente en desacuerdo y 5 = totalmente de acuerdo.' },
    likert('Tabla E1. Factores personales', [
      'Conozco mis intereses y habilidades.',
      'Me gustan los cursos de Química, Biología y Matemática.',
      'Tengo claro qué carrera quiero estudiar.',
      'Me interesa trabajar en el área de la salud.',
    ]),
    likert('Tabla E2. Capacidad para tomar decisiones (agencia)', [
      'He buscado información sobre carreras y universidades.',
      'He realizado un test vocacional.',
      'Puedo tomar mi decisión de carrera por mí mismo(a).',
      'Me siento seguro(a) de la carrera que elegiré.',
    ]),
    likert('Tabla E3. Factores del entorno (ambientales)', [
      'Mi familia influye en la carrera que elegiré.',
      'Mis docentes o tutores me orientan sobre carreras.',
      'Mis amigos influyen en mi elección.',
      'La situación económica de mi familia limita mi elección.',
    ], 'Nota: dimensiones basadas en Villalobos Véliz et al. (2026). Ítems de elaboración propia.'),
    { h3: '12. ¿Qué tan importantes son estos aspectos al elegir tu carrera y universidad?' },
    likert('Tabla E4. Importancia de los factores de elección (1 = nada importante, 5 = muy importante)', [
      'Oportunidades de empleo al terminar la carrera',
      'Buenos ingresos',
      'Vocación o gusto por la carrera',
      'Prestigio de la universidad',
      'Laboratorios e infraestructura moderna',
      'Costo de la pensión',
      'Cercanía a mi casa',
      'Becas, descuentos o crédito educativo',
    ]),

    { h2: 'G. Conocimiento de la oferta y condiciones económicas' },
    { h3: '13. ¿Sabes qué universidades de Lambayeque ofrecen Farmacia y Bioquímica?' },
    { opts: op(['Sí, ¿cuál(es)? ____________________', 'No']) },
    { h3: '14. ¿Cuánto podría pagar tu familia como pensión mensual universitaria?' },
    { opts: op(['Menos de S/ 500', 'De S/ 500 a S/ 799', 'De S/ 800 a S/ 1 099', 'De S/ 1 100 a S/ 1 499', 'S/ 1 500 o más', 'No lo sé']) },
    { h3: '15. ¿Necesitarías una beca o crédito educativo para estudiar?' },
    { opts: op(['Sí', 'No', 'No lo sé']) },
    { h3: '16. ¿En qué turno preferirías estudiar?' },
    { opts: op(['Mañana', 'Tarde', 'Noche', 'Indistinto']) },
    { h3: '17. ¿Has recibido orientación vocacional? (puedes marcar varias)' },
    { opts: op(['En mi colegio', 'Plataforma "Mi Carrera en tu Cole" (GRE Lambayeque)', 'Portal "Ponte en Carrera" (MINEDU)', 'Ferias o charlas de universidades', 'No he recibido orientación']) },

    { h2: 'H. Procesamiento' },
    { ul: [
      'Tasa de interés efectivo (pregunta 9) por provincia, tipo de colegio y sexo; aplicarla a la población objetivo del informe (Tabla 3) para actualizar las Tablas 4 y 7.',
      'Porcentaje de estudiantes que eligen Farmacia y Bioquímica como primera o segunda opción (pregunta 8), comparado con Medicina, Enfermería y otras carreras de salud.',
      'Media y desviación estándar de las Tablas E1 a E4; alfa de Cronbach de cada dimensión.',
      'Distribución de la pensión que pueden pagar las familias (pregunta 14), para el análisis de viabilidad.',
    ] },
    { h2: 'Referencias' },
    { ul: [
      'Villalobos Véliz, L. del C., Hernández Fernández, B., et al. (2026). Orientación vocacional en escolares: diseño y validación de un instrumento diagnóstico. Areté, Revista Digital del Doctorado en Educación, 12(23).',
      'Estrategia de formación vocacional para la orientación vocacional (encuesta a estudiantes de 5.° de secundaria de colegios urbanos de Lambayeque). Revista EPT, Universidad Señor de Sipán.',
      'Villalobos Véliz, L. del C. Tesis sobre orientación vocacional en la I.E.P. Santa Lucía de Lambayeque. Repositorio USS.',
      'Aprendizaje basado en proyectos y toma de decisiones vocacionales en estudiantes de 5.° de secundaria de Chiclayo. Repositorio Académico UPC.',
      'Gerencia Regional de Educación Lambayeque. Plataforma "Mi Carrera en tu Cole".',
      'GRTPE Lambayeque – OSEL (2025). Mercado laboral de los jóvenes en la región Lambayeque.',
    ] },
  ],
};
