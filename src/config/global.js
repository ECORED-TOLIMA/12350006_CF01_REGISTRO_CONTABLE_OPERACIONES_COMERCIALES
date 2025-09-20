export default {
  global: {
    componenteFormativo: 'Fundamentos contables y clasificación documental',
    descripcionCurso:
      'Este componente formativo aborda la información financiera y las políticas contables como base de la gestión organizacional. Desarrolla el estudio de las cuentas, la partida doble, la cuenta T y el Plan Único de Cuentas (PUC). Además, incluye documentos comerciales, comprobantes y registros contables, integrando normativa, revisión cruzada y conciliación para asegurar información clara y confiable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información financiera: concepto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de la información financiera en la gestión organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Usuarios internos y externos de la información financiera',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estados financieros básicos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Política contable: definición, estructura, principios aplicables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición de política contable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura de las políticas contables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios aplicables en Colombia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Referencia a estándares internacionales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cuentas y Plan Único de Cuentas (PUC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'La cuenta contable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de las cuentas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Método de la partida doble',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Método de la cuenta T',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Objetivo y estructura del Plan Único de Cuentas (PUC)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comprobantes contables internos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Documentos comerciales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Comprobantes contables internos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normativa aplicable',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Registros contables: concepto, tipos, normativa, revisión cruzada y conciliación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de registros contables',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normativa aplicable',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Revisión cruzada',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Conciliación contable',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Tipos de empresas y sociedades en Colombia',
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2023). Clasificación Nacional de Ocupaciones: Diccionario ocupacional e índice alfabético de denominaciones ocupacionales.',
      tipo: 'Documento institucional',
      link: 'https://observatorio.sena.edu.co/clasificacion/cno',
    },
    {
      tema: '1. Tipos de empresas y sociedades en Colombia',
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2015). Sistema Nacional de Formación para el Trabajo.',
      tipo: 'Documento institucional',
      link:
        'https://competencias.sena.edu.co/page?3,plantilla,productos-aprobados,O,es,0',
    },
    {
      tema: '4. Objetivo y estructura del Plan Único de Cuentas (PUC)',
      referencia:
        'República de Colombia. (1993). Decreto 2649 de 1993: Por el cual se reglamenta la contabilidad en general y se expiden los principios o normas de contabilidad generalmente aceptados en Colombia. Diario Oficial N.º 41.156.',
      tipo: 'Norma',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863',
    },
    {
      tema: '4. Objetivo y estructura del Plan Único de Cuentas (PUC)',
      referencia:
        'República de Colombia. (1993). Decreto 2650 de 1993: Por el cual se modifica el Plan Único de Cuentas para comerciantes. Diario Oficial N.º 41.148.',
      tipo: 'Norma',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1772403',
    },
  ],
  glosario: [
    {
      termino: 'Información financiera',
      significado:
        'conjunto de datos cuantitativos y cualitativos que describen la situación económica, patrimonial y de desempeño de una entidad.',
    },
    {
      termino: 'Partida doble',
      significado:
        'método contable que indica que toda transacción afecta al menos dos cuentas: una que se debita y otra que se acredita.',
    },
    {
      termino: 'Cuenta T',
      significado:
        'representación gráfica en forma de T que ayuda a ilustrar los débitos y créditos de una cuenta contable.',
    },
    {
      termino: 'Plan Único de Cuentas (PUC)',
      significado:
        'herramienta contable estandarizada en Colombia que permite codificar y clasificar las cuentas contables.',
    },
    {
      termino: 'Política contable',
      significado:
        'principios, reglas y procedimientos aplicados por una entidad para el registro y presentación de hechos económicos.',
    },
    {
      termino: 'Documentos comerciales',
      significado:
        'evidencia física o digital de las transacciones mercantiles de una empresa.',
    },
    {
      termino: 'Comprobantes contables',
      significado:
        'documentos internos que respaldan el registro de hechos económicos en la contabilidad.',
    },
    {
      termino: 'Registro contable',
      significado:
        'anotación sistemática de las transacciones económicas de una organización en libros autorizados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ortiz Anaya (2018). “Una información financiera clara y sistemática es la base para gestionar con eficiencia el capital de trabajo, maximizar el valor de la empresa y garantizar la confianza de los inversionistas” (p. 45).',
      link: '',
    },
    {
      referencia:
        'Muñoz Maza (2016). “La contabilidad, más que un requisito legal, es un sistema de información que refleja con veracidad la situación patrimonial y económica de la entidad, siendo indispensable para la planeación y el control” (p. 34).',
      link: '',
    },
    {
      referencia:
        'González (2021). “La contabilidad es un puente de confianza entre la organización y sus grupos de interés, pues a través de ella se demuestra la correcta administración de los recursos” (p. 89).',
      link: '',
    },
    {
      referencia:
        'Fierro (2011). Referente del ciclo contable y clasificación de cuentas en el PUC.',
      link: '',
    },
    {
      referencia:
        'Decreto 2649 de 1993. Normas contables generalmente aceptadas en Colombia.',
      link: '',
    },
    {
      referencia:
        'Código de Comercio (1971). Régimen legal de sociedades y contabilidad en Colombia.',
      link: '',
    },
    {
      referencia:
        'Ley 1314 de 2009. Convergencia hacia estándares internacionales (NIIF).',
      link: '',
    },
    {
      referencia:
        'Decreto 2650 de 1993. Establece el Plan Único de Cuentas (PUC).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Diaz Machuca ',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
