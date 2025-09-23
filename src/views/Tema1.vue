<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Información financiera: concepto    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    
    p La información financiera es el conjunto de datos cuantitativos y cualitativos, debidamente medidos, clasificados y revelados, que describen la situación económica, patrimonial y de desempeño de una entidad en un período determinado. Su propósito es servir como base confiable para la toma de decisiones, la planeación estratégica y la rendición de cuentas.
    p De acuerdo con el Decreto 2649 de 1993, la información contable debe ser clara, completa y fidedigna, reflejando la historia de los hechos económicos de manera verificable.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Importancia de la información financiera en la gestión organizacional
    p.mb-5 La información financiera es el insumo básico que permite a una organización conocer, interpretar y comunicar su realidad económica. Su importancia radica en que se convierte en la base sobre la cual se construyen las decisiones estratégicas, administrativas, operativas y de control.
    
    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              p.mb-0 En primer lugar, favorece la planeación y el control de recursos. Gracias a la información financiera, la gerencia puede anticipar necesidades de liquidez, proyectar presupuestos y establecer políticas de inversión y financiación. Sin datos financieros claros, la toma de decisiones se vuelve especulativa y aumenta el riesgo de pérdidas.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              p.mb-0 En segundo lugar, garantiza la transparencia y la rendición de cuentas. Las organizaciones, sin importar su tamaño o naturaleza, deben responder ante diferentes grupos de interés: propietarios, empleados, inversionistas, proveedores, entidades financieras y organismos de control. La información financiera confiable permite demostrar la correcta utilización de los recursos y el cumplimiento de obligaciones tributarias y legales.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              p.mb-0 Un tercer aspecto es su papel en la evaluación del desempeño. A través de los estados financieros se puede medir la rentabilidad, la eficiencia y la capacidad de crecimiento de la empresa. Estos indicadores no solo son útiles para la administración interna, sino también para terceros interesados en invertir o conceder crédito.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              p.mb-0 Además, la información financiera apoya la sostenibilidad y continuidad de las organizaciones. El análisis oportuno de ingresos, gastos, activos y pasivos facilita identificar desequilibrios, anticipar problemas de solvencia y tomar decisiones correctivas que aseguren la permanencia en el mercado.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-left
          h4.mb-2 Una información financiera clara y sistemática es la base para gestionar con eficiencia el capital de trabajo, maximizar el valor de la empresa y garantizar la confianza de los inversionistas
          span - Ortiz Anaya (2018) 
          i.fas.fa-quote-right
      .col-lg-5
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-left
          h4.mb-2 La contabilidad, más que un requisito legal, es un sistema de información que refleja con veracidad la situación patrimonial y económica de la entidad, siendo indispensable para la planeación y el control
          span - Muñoz Maza (2016) 
          i.fas.fa-quote-right
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
      .col-lg-6
        p En el ámbito actual, caracterizado por mercados globalizados y competitivos, la información financiera se ha convertido en un lenguaje universal de los negocios, que facilita la comparación entre organizaciones y países. Normas como las NIIF refuerzan la necesidad de uniformidad y transparencia, ampliando el acceso a capital y oportunidades de financiamiento.
        p.mb-5 En síntesis, la información financiera es esencial porque:
        ul.lista-ul--color
          li
            i.fas.fa-hand-point-right
            | Sirve como herramienta para planear, organizar, dirigir y controlar.
          li
            i.fas.fa-hand-point-right
            | Fortalece la confianza de los grupos de interés.
          li
            i.fas.fa-hand-point-right
            | Orienta la toma de decisiones estratégicas y operativas.
          li
            i.fas.fa-hand-point-right
            | Permite cumplir con las exigencias legales y tributarias.
          li
            i.fas.fa-hand-point-right
            | Asegura la sostenibilidad y competitividad de la organización en el largo plazo.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Usuarios internos y externos de la información financiera
    p.mb-5 La información financiera adquiere sentido en la medida en que responde a las necesidades de quienes la consultan. Cada grupo de usuarios requiere datos específicos para orientar sus decisiones, lo que convierte a la contabilidad en un sistema de comunicación entre la organización y su entorno. La calidad de la información —en términos de confiabilidad, pertinencia y oportunidad— determina la utilidad que cada actor puede darle.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Usuarios internos
        p Son aquellos que pertenecen a la organización y utilizan la información financiera para la gestión diaria y estratégica:
    .row.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Alta gerencia y directivos
              p Toman decisiones de inversión, expansión, reducción de costos, fijación de precios y formulación de políticas.
      .col-lg-4.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Áreas administrativas y operativas
              p Necesitan información para planear recursos, programar actividades y evaluar el cumplimiento de metas.
      .col-lg-4.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Contadores y auditores internos
              p Emplean los estados financieros para verificar la exactitud de los registros y proponer mejoras en los procesos contables y de control interno.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Usuarios externos
        p Incluyen a los agentes que, sin pertenecer a la organización, dependen de la información financiera para evaluar su relación con ella:
    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='Imagen decorativa')
        h5.text-center Propietarios y accionistas
        p.text-center.mb-0 Determinan la rentabilidad de su inversión y deciden mantener, aumentar o retirar su participación en el negocio.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='Imagen decorativa')
        h5.text-center Inversionistas potenciales
        p.text-center.mb-0 Analizan la estabilidad y perspectivas de crecimiento de la entidad antes de comprometer capital.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='Imagen decorativa')
        h5.text-center Proveedores y acreedores
        p.text-center.mb-0 Necesitan conocer la liquidez y solvencia de la empresa para definir condiciones de crédito o continuidad en la relación comercial.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='Imagen decorativa')
        h5.text-center Entidades financieras
        p.text-center.mb-0 Evalúan la capacidad de pago de los préstamos otorgados o solicitados.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='Imagen decorativa')
        h5.text-center Estado y entes de control
        p.text-center.mb-0 Utilizan la información para verificar el cumplimiento de normas contables, tributarias y legales.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='Imagen decorativa')
        h5.text-center Sociedad en general
        p.text-center.mb-0 Puede interesarse en la transparencia de las operaciones, el aporte al desarrollo económico y la responsabilidad social empresarial.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Según González (2021), “la contabilidad es un puente de confianza entre la organización y sus grupos de interés, pues a través de ella se demuestra la correcta administración de los recursos” (p. 89). Esta interacción evidencia que la información financiera no es un fin en sí misma, sino un instrumento que conecta a la empresa con su entorno y la legitima en el mercado.
 
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tipos de empresas y sociedades en Colombia
    p.mb-5 La estructura empresarial en Colombia responde a marcos legales y económicos que buscan ordenar la actividad productiva. Conocer los tipos de empresas y sociedades es fundamental para comprender cómo se organizan los recursos, cuáles son sus objetivos y de qué manera se relacionan con la normatividad vigente. Este conocimiento permite identificar las particularidades jurídicas, administrativas y contables que definen a cada entidad, así como su impacto en el desarrollo económico y social.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Clasificación de las empresas
      .col-lg-4.col-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
      .col-lg-6
        p En Colombia, una empresa se define como una unidad económica y social organizada para producir bienes o prestar servicios, con el objetivo de satisfacer las necesidades del mercado y generar valor para sus propietarios o para la comunidad. De acuerdo con el Código de Comercio, una empresa implica la coordinación de recursos humanos, materiales y financieros para alcanzar objetivos económicos o sociales.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 La empresa es el escenario donde se materializa la actividad económica organizada, actuando como motor de desarrollo productivo y social
            i.fas.fa-quote-right
            br
            span González (2021) 
    p Esto evidencia que las empresas no solo son fuentes de riqueza, sino también espacios clave para la generación de empleo y el progreso social.
    p.mb-5 A partir de estos criterios, las empresas pueden clasificarse según su tamaño, su finalidad y su actividad económica.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      i Clasificación de las empresas
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr
            th Criterio de clasificación
            th Tipo
            th Descripción
        tbody
          //- Según su tamaño
          tr
            td(rowspan="4") Según su tamaño (Ley 590 de 2000 y Ley 905 de 2004)
            td Microempresa
            td Bajos ingresos y pocos empleados.
          tr
            td Pequeña empresa
            td Estructura organizacional simple e ingresos moderados.
          tr
            td Mediana empresa
            td Mayor capacidad operativa y más empleados.
          tr
            td Gran empresa
            td Alto volumen de operaciones y cobertura amplia.

          //- Según su finalidad
          tr
            td(rowspan="2") Según su finalidad
            td Con ánimo de lucro
            td Buscan generar utilidades. Incluyen actividades comerciales, industriales y de servicios.
          tr
            td Sin ánimo de lucro
            td Propósito social, cultural o comunitario (fundaciones, asociaciones).

          //- Según su actividad económica
          tr
            td(rowspan="5") Según su actividad económica (Muñoz Maza, 2016)
            td Extractivas
            td Explotación de recursos naturales.
          tr
            td Agropecuarias
            td Producción agrícola y ganadera.
          tr
            td Industriales
            td Transforman materias primas en productos terminados.
          tr
            td Comerciales
            td Compra y venta de bienes.
          tr
            td De servicios
            td Prestan servicios intangibles (salud, educación, transporte, etc.).
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Sociedades comerciales en Colombia
    p.mb-4 Las sociedades comerciales son formas jurídicas que permiten a dos o más personas asociarse para desarrollar actividades económicas. De acuerdo con el Código de Comercio colombiano, estas sociedades se diferencian principalmente por la responsabilidad de los socios, los requisitos legales y la estructura de capital.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .bloque-texto-c.color-primario.p-4.mb-4
          i.fas.fa-quote-left
          h4.mb-2 El marco legal de las sociedades comerciales en Colombia busca equilibrar la libertad empresarial con la protección de los socios y terceros vinculados a la actividad económica
          span - Muñoz Maza (2016) 
          i.fas.fa-quote-right
        p Entre las más utilizadas se destacan la Sociedad por Acciones Simplificada (S.A.S.), reconocida por su flexibilidad y facilidad de constitución, y la Sociedad Anónima (S.A.), que requiere capital dividido en acciones y un mínimo de cinco accionistas. 
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Elegir el tipo societario adecuado es clave para definir las obligaciones contables, fiscales y legales de la organización
            i.fas.fa-quote-right
            br
            span González (2021)

      .col-lg-3.col-6.order-1.order-lg-2.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      i Clasificación legal
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr
            th Clasificación legal
            th Tipo de sociedad
            th Descripción
        tbody
          //- Sociedades civiles y comerciales
          tr
            td(rowspan="2") Sociedades civiles y sociedades comerciales
            td Sociedades civiles
            td No incluyen actos mercantiles en su objeto social (Art. 23 del Código de Comercio).
          tr
            td Sociedades comerciales
            td Se forman para ejecutar actos mercantiles, definidos en los artículos 20 y 21 del Código de Comercio.

          //- Sociedades nacionales, extranjeras y mixtas
          tr
            td(rowspan="3") Sociedades nacionales, extranjeras y mixtas
            td Sociedad nacional
            td No cumple las condiciones para ser considerada extranjera.
          tr
            td Sociedad extranjera
            td Constituida bajo leyes extranjeras, con domicilio principal fuera del país. (Art. 469 del Código de Comercio).
          tr
            td Sociedad de economía mixta
            td Combinación de capital público y privado (Art. 461 del Código de Comercio).
    p.mb-4 La clasificación de las sociedades según su forma de asociarse permite identificar sus características jurídicas, económicas y operativas. Este enfoque facilita comprender cómo se estructuran y administran, así como las responsabilidades que asumen sus socios, lo que resulta clave para elegir la modalidad societaria más adecuada a los objetivos y recursos disponibles.
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 3.
      i Clasificación de sociedades según su forma de asociarse
    .tabla-b.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th Tipo de sociedad
            th Características
        tbody
          tr
            td Sociedad Colectiva
            td.
              Constitución mediante escritura pública entre dos o más socios. Todos responden de forma
              solidaria e ilimitada. Nombre suele usar “y compañía”.
          tr
            td Sociedad de Responsabilidad Limitada
            td.
              Entre 2 y 25 socios; la responsabilidad de cada uno se limita al aporte realizado. La razón social
              debe incluir “Limitada” o “LTDA.”. Puede permitirse mayor responsabilidad si así lo determinan los estatutos.
          tr
            td Sociedad Anónima
            td.
              Requiere mínimo cinco accionistas; el capital está dividido en acciones negociables. La responsabilidad
              se limita al aporte de cada accionista.
          tr
            td Sociedad por Acciones Simplificada
            td.
              Creada por la Ley 1258 de 2008. Puede constituirse con un solo socio natural o jurídico. Se constituye
              mediante documento privado inscrito en Cámara de Comercio. Alta flexibilidad y rapidez de constitución.
          tr
            td Sociedad en Comandita simple
            td.
              Formada por socios gestores (responsabilidad ilimitada) y socios comanditarios (responsabilidad limitada al aporte).
              Se define la duración y administración en escritura pública.
          tr
            td Sociedad en Comandita por Acciones
            td.
              Similar a la comandita simple, pero con capital dividido en acciones. Requiere al menos un socio gestor y cinco
              comanditarios. Los socios gestores tienen responsabilidad ilimitada; los comanditarios responden hasta el aporte.
          tr
            td Sociedad de Economía Mixta
            td.
              Aportes públicos y privados; constituida para actividades industriales, comerciales o de gestión administrativa;
              sujeta a derecho privado o público según la naturaleza de su objeto (Art. 461 C. de Comercio).
          tr
            td Empresa Unipersonal
            td.
              Constituye una persona jurídica por una sola persona natural o jurídica. Responde hasta el valor de sus activos.
              Puede constituirse mediante documento privado o escritura pública.
          tr
            td Sociedad de Comercialización Internacional
            td.
              Orientada a comercio exterior; figura regulada principalmente por el Decreto 1740 de 1994 y puede adoptar cualquier
              forma societaria reconocida en la Ley.
          tr
            td Sociedad de Hecho
            td.
              No requiere escritura pública y carece de personería jurídica. Los socios responden solidaria e ilimitadamente.
              Sus derechos y obligaciones son asumidos por todos los socios.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Diferencias entre empresas públicas, privadas y mixtas
    p.mb-4 Las empresas también se diferencian por la propiedad de su capital:
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Empresas públicas
            p.mt-3.px-4  Propiedad del Estado; orientadas a la prestación de servicios esenciales como energía, agua o transporte.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Empresas privadas
            p.mt-3.px-4  Propiedad de particulares; buscan principalmente generar utilidades.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img20.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Empresas mixtas
            p.mt-3.px-4 Combinan capital público y privado para proyectos estratégicos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img20_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según Muñoz Maza (2016):
          br
          br
          | “El origen del capital y los objetivos de cada tipo de empresa determinan sus obligaciones contables, fiscales y de control” (p. 83).
          br
          br
          | González (2021) resalta que la colaboración público-privada permite aprovechar recursos estatales y experiencia privada, generando beneficios compartidos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          i Diferencias según propiedad del capital
        .tabla-b.color-acento-contenido(data-aos="zoom-in")
          table
            thead
              tr
                th Tipo de empresa
                th Propiedad del capital
                th Enfoque principal
            tbody
              tr
                td Pública
                td Estado
                td Garantizar acceso universal a servicios básicos.
              tr
                td Privada
                td Particulares
                td Generar beneficios económicos.
              tr
                td Mixta
                td Estado + particulares
                td Desarrollar proyectos estratégicos compartidos.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Clasificación de empresas según su función social
    p Además de su finalidad económica, las empresas pueden clasificarse según su aporte al bienestar colectivo.
    p.mb-5 A continuación, se presentan las diferentes funciones sociales y sus respectivos enfoques:

    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Con ánimo de lucro
                p Generar utilidades para propietarios o accionistas.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.png')})`}")

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img22.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Trabajo asociado
                p Propiedad colectiva de los trabajadores; decisiones democráticas.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img23.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Sin ánimo de lucro
                p Entidades con fines sociales, culturales o comunitarios; reinvierten excedentes en sus objetivos misionales en lugar de repartir ganancias.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Sector cooperativo
                p Organizaciones solidarias con gestión democrática; excedentes destinados al bienestar colectivo.
   
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img21_1.png', alt='Imagen decorativa')
            h4 Con ánimo de lucro
            p Generar utilidades para propietarios o accionistas.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img22_1.png', alt='Imagen decorativa')
            h4 Trabajo asociado
            p Propiedad colectiva de los trabajadores; decisiones democráticas.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img23_1.png', alt='Imagen decorativa')
            h4 Sin ánimo de lucro
            p Entidades con fines sociales, culturales o comunitarios; reinvierten excedentes en sus objetivos misionales en lugar de repartir ganancias.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img24_1.png', alt='Imagen decorativa')
            h4 Sector cooperativo
            p Organizaciones solidarias con gestión democrática; excedentes destinados al bienestar colectivo.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Importancia de la contabilidad y su función organizacional
    p.mb-5 La contabilidad, en Colombia y en el mundo, no es únicamente una obligación legal, sino un sistema de información esencial para la gestión empresarial. Su función es organizar, analizar y comunicar la realidad económica de las organizaciones, permitiendo tomar decisiones informadas, garantizar la transparencia y asegurar el cumplimiento de la normativa vigente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 La contabilidad no solo es un requisito normativo, sino un sistema de información que refleja con veracidad la situación patrimonial y económica de la entidad, siendo indispensable para el control y la planeación
            i.fas.fa-quote-right
            br
            span - Muñoz Maza (2016) (p. 34)
      .col-lg-5
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 La contabilidad es fundamental para la administración de los recursos, pues permite evaluar la eficiencia operativa y la rentabilidad de cada área de la organización
            i.fas.fa-quote-right
            br
            span González (2021) (p. 58)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 De este modo, la contabilidad es reconocida como el lenguaje de los negocios, clave para la sostenibilidad de las organizaciones y la generación de confianza frente a inversionistas, proveedores, empleados, entidades de control y la sociedad.
	
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Concepto y objetivos de la contabilidad
    p.mb-4 El Decreto Reglamentario 2649 de 1993, en su artículo 1°, define la contabilidad como el conjunto de conceptos básicos y reglas que permiten identificar, medir, clasificar, registrar, interpretar, analizar, evaluar e informar, de manera clara, completa y fidedigna, la historia de los movimientos contables de una organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
      .col-lg-7
        .titulo.mb-4(data-aos="fade-left")
          h5.mb-0 Objetivos principales
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-hand-point-right
            | Ofrecer información financiera confiable sobre el estado y desempeño económico.
          li
            i.fas.fa-hand-point-right
            | Garantizar la transparencia en la rendición de cuentas.
          li
            i.fas.fa-hand-point-right
            | Servir como herramienta para la planeación estratégica.
          li
            i.fas.fa-hand-point-right
            | Facilitar la evaluación de la gestión administrativa.
          li
            i.fas.fa-hand-point-right
            | Asegurar el cumplimiento normativo y tributario.
        .bloque-texto-c.color-primario.p-4.mb-4
          i.fas.fa-quote-left
          h4.mb-2 La información contable, organizada y clasificada adecuadamente, es el punto de partida para un análisis financiero riguroso que permita tomar decisiones acertadas en inversión, financiamiento y operación
          span - Ortiz Anaya (2018) (p. 21)
          i.fas.fa-quote-right
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Funciones de la contabilidad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
      .col-lg-7
        p La contabilidad no se limita a registrar hechos económicos: cumple múltiples funciones de carácter legal, administrativo, financiero y social. 
        p.mb-4 Las funciones de la contabilidad pueden dividirse en cinco procesos fundamentales: #[b identificación, registro, clasificación, resumen e interpretación.] Cada una de estas funciones está interconectada y da soporte a la gestión de la empresa.
        .titulo.mb-4(data-aos="fade-left")
          h5.mb-0 Funciones básicas
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-hand-point-right
            | Identificar hechos económicos que afectan a la organización.
          li
            i.fas.fa-hand-point-right
            | Registrar de manera sistemática las operaciones.
          li
            i.fas.fa-hand-point-right
            | Clasificar la información según categorías contables.
          li
            i.fas.fa-hand-point-right
            | Resumir los datos en informes y estados financieros.
          li
            i.fas.fa-hand-point-right
            | Interpretar la información para orientar decisiones.
    p.mb-4 Además de registrar operaciones, la contabilidad cumple funciones administrativas y sociales. Sirve como herramienta para planificar, dirigir y evaluar los recursos disponibles, ofreciendo una visión clara de la rentabilidad, la liquidez y la solvencia de la organización. Esto fortalece la transparencia y genera confianza frente a terceros. González (2021) resalta que la contabilidad es un instrumento de gestión que optimiza procesos internos y genera valor para los diferentes grupos de interés. En un entorno empresarial cambiante y competitivo, estas funciones hacen de la contabilidad un pilar estratégico para garantizar la sostenibilidad y el éxito de cualquier negocio. 

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              .imgg2.img1

          h5.text-center Función legal
          p Cumplir con las normas fiscales y regulatorias.  

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              .imgg2.img2

          h5.text-center Función financiera
          p Producir estados financieros confiables para terceros. 

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              .imgg2.img3

          h5.text-center Función administrativa
          p Apoyar la planificación, organización y control de la gestión interna. 

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              .imgg2.img4
          h5.text-center Función social
          p Generar confianza, transparencia y sostenibilidad frente a la comunidad.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Clases de contabilidad según usuarios y fines
    .tarjeta.tarjeta--BG01.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Contabilidad financiera
            p Es la rama que se ocupa de elaborar y presentar los estados financieros básicos (balance general, estado de resultados, estado de cambios en el patrimonio, flujo de efectivo). Está dirigida a usuarios externos como accionistas, entidades financieras, inversionistas y entes de control. Su objetivo principal es mostrar la situación económica, liquidez, solvencia y rentabilidad de la empresa de forma clara, comparable y verificable. 
            p #[b Ejemplo:] un banco que estudia un préstamo revisa el balance y el estado de resultados para evaluar si la empresa puede cumplir con sus obligaciones.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img35.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Contabilidad fiscal
            p Se orienta a dar cumplimiento a las obligaciones tributarias establecidas en la legislación colombiana. Permite calcular impuestos como el IVA, el impuesto de renta, retenciones en la fuente, entre otros. Además, asegura que las declaraciones se presenten dentro de los plazos y con la información correcta, evitando sanciones. 
            p #[b Ejemplo:] una compañía que debe liquidar y pagar el IVA sobre las ventas mensuales, aplicando la normatividad vigente.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img36.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Contabilidad de gestión
            p Está destinada al uso interno de la administración. Proporciona información detallada para planear, controlar y tomar decisiones estratégicas. A diferencia de la financiera, no está regulada de manera estricta, lo que le da flexibilidad para adaptarse a las necesidades de la empresa. 
            p #[b Ejemplo:] un gerente de producción usa reportes de gestión para decidir si aumentar la producción de un producto específico según su margen de rentabilidad.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img37.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Contabilidad de costos
            p Es una extensión de la contabilidad de gestión y se centra en registrar, clasificar y analizar los costos reales y previstos de producción. Su finalidad es calcular el costo unitario de los bienes o servicios y detectar oportunidades de optimización. 
            p #[b Ejemplo:] una empresa textil determina cuánto cuesta producir una camiseta sumando materias primas, mano de obra y costos indirectos, para establecer un precio de venta competitivo.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img38.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Contabilidad administrativa
            p Integra información financiera y no financiera para apoyar la planeación, la elaboración de presupuestos, el control interno y la evaluación de objetivos estratégicos. Permite medir el desempeño de áreas, departamentos o proyectos. 
            p #[b Ejemplo:] en una institución educativa, se emplea la contabilidad administrativa para elaborar presupuestos anuales y controlar el cumplimiento de metas académicas y financieras.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img39.png' alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La contabilidad cumple una función integral: asegura el cumplimiento de la ley, genera confianza, organiza la información y sirve como guía para la toma de decisiones. Sus objetivos, funciones y clases muestran que se trata de un instrumento vivo, que conecta el pasado con el presente y proyecta el futuro de las organizaciones.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Estados financieros básicos
    p.mb-5 Los estados financieros son informes estructurados que presentan en un periodo determinado, la situación y el desempeño de la entidad. Deben elaborarse con criterios de #[b claridad, relevancia, confiabilidad y comparabilidad] (Decreto 2649/1993; marco NIIF) y estar acompañados por notas que revelen políticas contables y detalles necesarios para su adecuada interpretación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Balance general (o Estado de situación financiera)")
            .col-lg-5.col-12
              p Muestra, en una fecha de corte, los activos (recursos controlados), pasivos (obligaciones) y patrimonio (residuo entre activos y pasivos). Permite evaluar liquidez, solvencia y estructura financiera.
              p Componentes usuales: efectivo y equivalentes, cuentas por cobrar, inventarios, propiedades, planta y equipo (y su depreciación), cuentas por pagar, obligaciones financieras, provisiones y patrimonio (capital, reservas, resultados).
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img40.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de resultados (o de resultados integrales)")
            .col-lg-5.col-12
              p Informa, para el periodo, ingresos, costos y gastos, determinando la utilidad o pérdida. Sirve para analizar rentabilidad, márgenes y eficiencia operativa.
              p Incluye ingresos operacionales y no operacionales, costos de ventas o de prestación del servicio, gastos de administración, ventas y financieros, e impuestos.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img41.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de cambios en el patrimonio")
            .col-lg-5.col-12
              p Explica las variaciones de cada rubro patrimonial entre el inicio y el cierre del periodo: aportes, reservas, resultados acumulados, resultado del ejercicio, distribuciones y otros movimientos. Conecta el resultado del periodo con el patrimonio y evidencia decisiones como capitalizaciones o dividendos.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img42.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de flujos de efectivo")
            .col-lg-5.col-12
              p Presenta entradas y salidas de efectivo y equivalentes, clasificadas en operación, inversión y financiación. Permite evaluar la capacidad de generar efectivo, cumplir obligaciones y financiar crecimiento.
              p Métodos: directo (cobros y pagos brutos) o indirecto (conciliando utilidad con flujo operativo).
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img43.png', alt='Texto que describa la imagen')
          .row(titulo="Notas a los estados financieros")
            .col-lg-5.col-12
              p Revelan políticas contables aplicadas, estimaciones, juicios significativos, desgloses por rubro, contingencias y hechos posteriores. Son parte integral de los estados y dan contexto para su lectura.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img44.png', alt='Texto que describa la imagen')
          .row(titulo="Relación entre los estados")
            .col-5.col-12
              p El estado de resultados genera la utilidad neta, que se incorpora al estado de cambios en el patrimonio; este, a su vez, explica las variaciones presentadas en el balance general. El estado de flujos de efectivo concilia la utilidad con el efectivo generado o usado, mostrando la “realidad de caja” del periodo.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img45.png', alt='Texto que describa la imagen')
          .row(titulo="Buenas prácticas de presentación")
            .col-lg-5.col-12
              p Incluir comparativos entre periodos, mantener la consistencia en las políticas contables aplicadas, garantizar cortes oportunos de la información y realizar conciliaciones periódicas. Asimismo, es fundamental presentar revelaciones claras y completas en las notas a los estados financieros, de manera que se asegure la transparencia, la trazabilidad y la adecuada interpretación de la información.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img46.png', alt='Texto que describa la imagen')




















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
