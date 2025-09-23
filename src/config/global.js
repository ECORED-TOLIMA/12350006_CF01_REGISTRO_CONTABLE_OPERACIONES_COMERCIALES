export default {
  global: {
    componenteFormativo: 'Fundamentos contables y clasificación documental',
    descripcionCurso:
      'Este componente formativo aborda la información financiera y las políticas contables como base de la gestión organizacional. Desarrolla el estudio de las cuentas, la partida doble, la cuenta T y el Plan Único de Cuentas (PUC). Además, incluye documentos comerciales, comprobantes y registros contables, integrando normativa, revisión cruzada y conciliación para asegurar información clara y confiable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1_1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1_2.svg'),
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
        titulo:
          'Documentos comerciales y comprobantes contables: definición, tipos, características, normativa',
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
      termino: 'Activo',
      significado:
        'bienes y derechos que posee una empresa y que representan beneficios económicos futuros.',
    },
    {
      termino: 'Clasificación documental',
      significado:
        'organización sistemática de los documentos según su tipo, origen y finalidad para facilitar su manejo y control.',
    },
    {
      termino: 'Cuenta T',
      significado:
        'herramienta gráfica que representa el débito y crédito de una cuenta para facilitar su análisis.',
    },
    {
      termino: 'Ciclo contable',
      significado:
        'proceso completo de registro, clasificación, resumen e interpretación de las operaciones financieras durante un período.',
    },
    {
      termino: 'Documento soporte',
      significado:
        'comprobante que respalda las transacciones contables, como facturas, recibos o contratos.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'informe financiero que muestra los ingresos, gastos y utilidad o pérdida en un período determinado.',
    },
    {
      termino: 'Gastos',
      significado:
        'costos o consumos que la empresa incurre para operar y generar ingresos.',
    },
    {
      termino: 'Ingresos',
      significado:
        'beneficios económicos que obtiene la empresa por la venta de bienes o prestación de servicios.',
    },
    {
      termino: 'Inventarios',
      significado:
        'conjunto de bienes disponibles para la venta o producción dentro de una empresa.',
    },
    {
      termino: 'Partida doble',
      significado:
        'principio contable que establece que toda transacción afecta al menos dos cuentas, manteniendo el equilibrio contable.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'recursos netos de la empresa, resultado de la diferencia entre activos y pasivos.',
    },
    {
      termino: 'Plan Único de Cuentas (PUC)',
      significado:
        'catálogo estandarizado de cuentas utilizado en Colombia para organizar y uniformar los registros contables.',
    },
    {
      termino: 'Registro contable',
      significado:
        'proceso de anotar y clasificar las transacciones económicas en las cuentas correspondientes.',
    },
    {
      termino: 'Cuentas por pagar',
      significado:
        'deudas u obligaciones financieras que la empresa tiene con terceros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). <em>Presupuestos: Un enfoque estratégico, gestión y control de recursos</em> (4.ª ed.). McGraw-Hill Latinoamericana.',
      link: '',
    },
    {
      referencia:
        'Fierro, H. (2011). <em>Contabilidad general: fundamentos y aplicaciones</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'González, J. (2021). <em>Fundamentos de contabilidad financiera</em>. Editorial Universidad Cooperativa de Colombia.',
      link: '',
    },
    {
      referencia:
        'León García, M. (2009). <em>Teoría contable y estados financieros</em>. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Muñoz Maza, J. (2016). <em>Contabilidad: teoría y práctica</em>. Fondo Editorial Universidad EAFIT.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, A. (2018). <em>Contabilidad financiera: una perspectiva práctica.</em> Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2023). <em>Clasificación Nacional de Ocupaciones: Diccionario ocupacional e índice alfabético de denominaciones ocupacionales.</em>',
      link: 'https://observatorio.sena.edu.co/clasificacion/cno',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2015). <em>Sistema Nacional de Formación para el Trabajo.</em>',
      link:
        'https://competencias.sena.edu.co/page?3,plantilla,productos-aprobados,O,es,0',
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
