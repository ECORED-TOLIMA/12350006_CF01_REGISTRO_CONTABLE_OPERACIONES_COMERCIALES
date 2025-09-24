<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Cuentas: tipos, Plan Único de Cuentas (PUC)   
    
    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    
    p Las cuentas contables son el eje del sistema financiero de cualquier organización, pues permiten registrar de manera ordenada y sistemática los movimientos económicos que afectan su patrimonio. Comprender su naturaleza, clasificación y dinámica es fundamental para interpretar adecuadamente los estados financieros y garantizar la transparencia de la información. En este apartado se abordan los diferentes tipos de cuentas, la aplicación del método de la partida doble y la representación gráfica en la cuenta T, así como la estructura y ventajas del Plan Único de Cuentas (PUC) en Colombia.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	 La cuenta contable
    
    p La cuenta contable es el registro donde se acumulan, de manera ordenada y sistemática, todas las operaciones de ingreso y egreso que afectan a una organización. Cada operación comercial debe asociarse a una cuenta específica, en el debe (débito) o en el haber (crédito), lo que permite determinar en todo momento su saldo.
    p.mb-5 Según Fierro (2011), las cuentas contables se agrupan en diferentes categorías, que reflejan la naturaleza de los bienes, derechos, obligaciones y resultados de la empresa.
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Tabla 5.
      i Clasificación general de las cuentas contables
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 40%;") Clasificación
                th(style="width: 60%;") Descripción / Ejemplos
            tbody
              tr(data-aos="fade-left")
                td Disponibilidad
                td Caja general, bancos, fondos.
              tr(data-aos="fade-left")
                td Inversiones a corto plazo
                td Títulos, acciones, cuotas, partes de interés social.
              tr(data-aos="fade-left")
                td Valores a recaudar
                td Clientes, ingresos por cobrar.
              tr(data-aos="fade-left")
                td Materias primas
                td Inventarios de materias y materiales.
              tr(data-aos="fade-left")
                td Mercancías
                td Productos no elaborados por la empresa.
              tr(data-aos="fade-left")
                td Valores con capacidad de ser realizables
                td Inventarios en general.
              tr(data-aos="fade-left")
                td Valores capitalizados en activos
                td Propiedades, planta y equipo, maquinaria, muebles y enseres.
              tr(data-aos="fade-left")
                td Obligaciones por pagar
                td Proveedores de bienes y servicios.
              tr(data-aos="fade-left")
                td Contribuciones al Estado
                td Impuestos, gravámenes y tasas nacionales o municipales.
              tr(data-aos="fade-left")
                td Obligaciones laborales
                td Sueldos, prestaciones sociales, aportes patronales y parafiscales.
              tr(data-aos="fade-left")
                td Cuentas por pagar
                td Gastos a terceros.
              tr(data-aos="fade-left")
                td Deudas con instituciones financieras
                td Obligaciones bancarias y crediticias.
              tr(data-aos="fade-left")
                td Patrimonio
                td Valor que corresponde a los dueños de la empresa.
              tr(data-aos="fade-left")
                td Pagos por valoración económica pendiente
                td Pagos derivados de la enajenación de activos o valoraciones económicas.
    
    separador
    #t3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Clasificación de las cuentas
    
    p.mb-5 De acuerdo con Fierro (2011), las cuentas pueden clasificarse según dos criterios: su naturaleza y el estado financiero en el que se presentan.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Según su naturaleza
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.dvprimario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen')
        h4.text-center Cuentas de naturaleza débito
        p Su saldo aumenta con los registros en el debe y disminuye con los registros en el haber. Generalmente corresponden a activos y gastos, es decir, derechos y bienes que controla la empresa. 
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')
        h4.text-center Cuentas de naturaleza crédito
        p Su saldo aumenta con los registros en el haber y disminuye con los del debe. Representan pasivos, patrimonio e ingresos, es decir, obligaciones o recursos aportados por terceros y propietarios.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Según los estados financieros
    br
    .titulo.mb-4(data-aos="fade-left")
      h5.mb-0 A. Cuentas reales o de balance

    p.mb-5 Son las utilizadas para elaborar el balance general y reflejan la situación de la empresa en un momento dado:
    
    .row.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Activo
              p.mb-0 Bienes y derechos que posee la empresa. Aumentan con débitos y disminuyen con créditos.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Pasivo
              p.mb-0 Obligaciones contraídas con terceros. Aumentan con créditos y disminuyen con débitos.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-center.p-4
              h5.text-center Patrimonio
              p.mb-0 Aportes de los propietarios y utilidades retenidas. Aumenta con créditos y disminuye con débitos.
    
    .titulo.mb-4(data-aos="fade-left")
      h5.mb-0 B. Cuentas nominales o de resultado
    
    p.mb-5 Se utilizan en el estado de resultados y se cancelan al final de cada periodo contable:
    
    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-5
              .imgg2.img31
          h5.text-center Ingresos
          p.mb-0 Generados por la venta de bienes o servicios. Disminuyen por devoluciones, rebajas o anulaciones.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-5
              .imgg2.img32
          h5.text-center Gastos
          p.mb-0 Desembolsos necesarios para la administración, distribución y ventas.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta--boton.color-primario.tarjeta--BG03.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-5
              .imgg2.img33
          h5.text-center Costos
          p.mb-0 Valor de la mercancía vendida o de la producción realizada. En empresas manufactureras incluyen materias primas, mano de obra y costos indirectos de fabricación.
    
    .titulo.mb-4(data-aos="fade-left")
      h5.mb-0 C. Cuentas de orden
    
    p.mb-5 No afectan directamente los estados financieros, pero registran hechos económicos que pueden tener consecuencias futuras.
    
    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--BG06.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img13.png', alt='Texto que describa la imagen')
          .p-4
            h5 De orden deudora
            p.mb-0 Registran derechos y situaciones de control interno, como activos bajo custodia o diferencias tributarias. Son de naturaleza débito.
      .col-lg-6(data-aos="fade-left")
        .tarjeta.tarjeta--BG06.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img14.png', alt='Texto que describa la imagen')         
          .p-4
            h5 De orden acreedora
            p.mb-0 Registran compromisos o contratos que pueden derivar en obligaciones futuras. Son de naturaleza crédito.

    separador
    #t3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	 Método de la partida doble 
    
    p.mb-5 El método de la partida doble es la base de la contabilidad moderna. Establece que cada transacción afecta al menos dos cuentas: una que se debita y otra que se acredita por el mismo valor. Esto garantiza que la ecuación contable siempre se mantenga en equilibrio: #[b Activo = Pasivo + Patrimonio.]
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
        h5 Tabla 6.
        i Dinámica de las cuentas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th Tipo de cuenta
                th Aumenta con
                th Disminuye con
                th Saldo normal
            tbody
              tr(data-aos="fade-left")
                td Activos
                td Débito
                td Crédito
                td Deudor
              tr(data-aos="fade-left")
                td Pasivos
                td Crédito
                td Débito
                td Acreedor
              tr(data-aos="fade-left")
                td Patrimonio
                td Crédito
                td Débito
                td Acreedor
              tr(data-aos="fade-left")
                td Ingresos
                td Crédito
                td Débito
                td Acreedor
              tr(data-aos="fade-left")
                td Gastos y costos
                td Débito
                td Crédito
                td Deudor
    
    .titulo.mb-4(data-aos="fade-left")
      h5.mb-0 Ejemplo de aplicación de la partida doble
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="A.	Compra de mercancías en efectivo por $1.000.000")
            .col-lg-5.col-12
              p - Débito: Inventarios $1.000.000 (aumenta el activo).
              p - Crédito: Caja $1.000.000 (disminuye el activo).
              p.mb-0 En esta transacción, el total de activos no varía, ya que disminuye el efectivo, pero aumenta el inventario en la misma proporción.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img15.png', alt='Texto que describa la imagen')
          .row(titulo="B.	Adquisición de mobiliario a crédito por $5.000.000")
            .col-lg-5.col-12
              p - Débito: Muebles y enseres $5.000.000 (aumenta el activo).
              p - Crédito: Proveedores $5.000.000 (aumenta el pasivo).
              p.mb-0 Aunque no hay salida inmediata de efectivo, se incrementa un activo (el mobiliario) y, al mismo tiempo, surge una obligación con terceros, manteniendo equilibrado el patrimonio.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img16.png', alt='Texto que describa la imagen')
          .row(titulo="C.	Ingreso por prestación de servicios en efectivo por $2.000.000")
            .col-lg-5.col-12
              p - Débito: Caja $2.000.000 (aumenta el activo).
              p - Crédito: Ingresos por servicios $2.000.000 (aumenta el patrimonio).
              p.mb-0 Este caso muestra cómo la partida doble no solo asegura el equilibrio del balance contable, sino que también refleja el resultado económico, al incrementar tanto el activo como el patrimonio de la empresa.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
    
    p.mb-5 La partida doble es el principio que da coherencia a toda la contabilidad. Según Muñoz Maza (2016), este método no solo organiza las operaciones, sino que clarifica el origen y la aplicación de los recursos. Ortiz Anaya (2018) destaca que su correcta aplicación garantiza la elaboración de estados financieros confiables y comparables, mientras que León García (2009) señala que sin ella sería imposible mantener un control contable que permita evaluar la sostenibilidad de un negocio.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 El método se fundamenta en que toda transacción afecta, al menos, dos cuentas: una que se debita y otra que se acredita. En operaciones simples puede intervenir un par de cuentas, mientras que en transacciones más complejas participan varias, siempre bajo la regla de que la suma de los débitos es igual a la suma de los créditos. Este principio asegura el equilibrio contable y la integridad de la información financiera.
    
    separador
    #t3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Método de la cuenta T
    
    p La cuenta T es una representación gráfica sencilla y tradicional que se utiliza para explicar cómo se registran las operaciones contables. Su nombre proviene de su forma, que asemeja a una gran letra “T” dividida en dos columnas.
    p.mb-5 En la parte superior se escribe el código y el concepto o nombre de la cuenta, mientras que cada lado de la “T” cumple una función específica:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imagen decorativa')
          .tarjeta.bgblanco2.p-3(x="28%" y="78%" numero="+")
            p Registra los valores que recibe la cuenta.
          .tarjeta.bgblanco2.p-3(x="72%" y="78%" numero="+")
            p Registra los valores que entrega la cuenta.
      .col-lg-10.movil(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img18_1.svg', alt='Imagen decorativa')
    
    p.mb-5 Cada cuenta T puede mostrar dos aspectos principales:
    
    .row.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta--BG06.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img19.png', alt='Texto que describa la imagen')
          .p-4
            h5 Movimientos
            p.mb-0 Anotaciones de los débitos y créditos que se registran durante un periodo.
      .col-lg-6(data-aos="fade-left")
        .tarjeta.tarjeta--BG06.h-100
          figure
            img(src='@/assets/curso/temas/tema3/img20.png', alt='Texto que describa la imagen')         
          .p-4
            h5 Saldo
            p.mb-0 Diferencia resultante entre los débitos y créditos acumulados.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Naturaleza de las cuentas y su efecto en la cuenta T
    
    p.mb-5 Las cuentas pueden ser de naturaleza débito o naturaleza crédito, y esto determina cómo afectan los registros en el debe y el haber dentro de la cuenta T.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Cuentas de naturaleza débito")
            .col-lg-12.order-lg-2.order-3
              p Aumentan cuando se registran en el debe y disminuyen cuando se registran en el haber.
              p Ejemplos:
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    |  #[b Activos:] aumentan con débitos y disminuyen con créditos.
                  li
                    i.fas.fa-circle
                    |  #[b Gastos:] aumentan con débitos y disminuyen con créditos.
                  li
                    i.fas.fa-circle
                    |  #[b Costos:] aumentan con débitos y disminuyen con créditos.   
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="Cuentas de naturaleza crédito")
            .col-lg-12.order-lg-2.order-3
              p Aumentan cuando se registran en el haber y disminuyen cuando se registran en el debe.
              p Ejemplos:
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    |  #[b Pasivos:] aumentan con créditos y disminuyen con débitos.
                  li
                    i.fas.fa-circle
                    |  #[b Patrimonio:] aumenta con créditos y disminuye con débitos.
                  li
                    i.fas.fa-circle
                    |  #[b Ingresos:] aumentan con créditos y disminuyen con débitos.
                  
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt="Imagen decorativa")
    
    p.mb-5 De esta manera, los activos, gastos y costos disminuyen con créditos y aumentan con débitos, mientras que pasivos, patrimonio e ingresos se comportan de forma contraria.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Dinámica de la cuenta T
    
    p Tradicionalmente, la cuenta T ha sido utilizada como una herramienta visual para representar los movimientos contables. Sin embargo, en la práctica contable actual, este método ha dejado de usarse para la elaboración formal de los registros contables.
    p.mb-5 Las cuentas T han sido sustituidas por registros oficiales que sirven de base para la elaboración de los comprobantes de contabilidad y los libros auxiliares correspondientes. Además, estos procesos están siendo cada vez más reemplazados por #[i software] especializado, que automatiza y facilita la gestión contable.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          i Dinámica de la cuenta T
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img52.svg' alt="Diagrama de la cuenta T con dos columnas. A la izquierda, lado débito: movimientos y saldos se registran como débitos. A la derecha, lado crédito: movimientos incluyen débitos y créditos, y los saldos se registran como créditos.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img52a.svg' alt="Diagrama de la cuenta T con dos columnas. A la izquierda, lado débito: movimientos y saldos se registran como débitos. A la derecha, lado crédito: movimientos incluyen débitos y créditos, y los saldos se registran como créditos.")


    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Método de la ecuación contable
    
    p.mb-4 Partiendo del método de la contabilidad de partida doble, se establece la ecuación contable fundamental, que muestra el equilibrio entre los activos y la suma de los pasivos y el patrimonio:
    p.mb-5 #[b ACTIVOS = PASIVOS + PATRIMONIO]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4
          .row.align-items-center
            .col-lg-2.col-4.mb-4.mb-lg-0
              figura
                img(src='@/assets/curso/temas/tema3/img24.svg', alt='Imagen decorativa')
            .col-lg-10
              p Según Contabilidad y Finanzas (2009), esta ecuación puede expresarse también de otras formas derivadas de la ecuación original, como:
              p.mb-0 - Activos + Costos + Gastos = Pasivos + Patrimonio + Ingresos.
              p.mb-0 - Activos = Pasivos + Patrimonio + (Ingresos - Costos - Gastos).
              p.mb-0 - Activos - Pasivos = Patrimonio + (Ingresos - Costos - Gastos).
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Estas variantes permiten un análisis más detallado de los elementos que afectan la situación financiera de una organización.
    
    separador
    #t3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Objetivo y estructura del Plan Único de Cuentas (PUC)
    
    p.mb-5 El Plan Único de Cuentas (PUC) es una herramienta fundamental en la contabilidad colombiana, establecida mediante el Decreto 2650 de 1993, como un modelo estandarizado para organizar y codificar las cuentas de todas las empresas. Su propósito es asegurar uniformidad en los registros contables, facilitar la preparación de estados financieros comparables y garantizar el cumplimiento de las disposiciones legales.
    
    .tarjeta-BG05.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img25.png', alt='Texto que describa la imagen')
        .col-lg-8
          p El PUC funciona como un catálogo que contiene todas las cuentas que pueden emplearse en los registros de una empresa, cada una identificada con un código numérico y un nombre específico. Esto evita ambigüedades, permite clasificar las operaciones de manera ordenada y sirve de guía para registrar hechos económicos con coherencia.
          p La importancia del PUC radica en que:
          ul.lista-ul--color.mb-5
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Garantiza la uniformidad en la presentación de la información contable.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Facilita el control y la fiscalización por parte de la DIAN y demás entes de vigilancia.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Permite la comparabilidad entre los estados financieros de diferentes organizaciones.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Proporciona un lenguaje común para contadores, auditores, revisores fiscales y entidades de control.
          .cajon.color-primario.p-4
            p.mb-0 Cada cuenta en el PUC está identificada por un código numérico y una denominación específica. El sistema está diseñado de forma jerárquica, lo que permite organizar las operaciones desde un nivel general hasta un nivel muy detallado según lo requiera cada empresa. Se puede usar dos o más columnas para diagramar el texto
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Estructura jerárquica del PUC
    
    p.mb-5 El PUC está conformado por niveles que determinan el grado de detalle:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
      h5 Tabla 7.
      i Niveles de la estructura del PUC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-b.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 20%;") Nivel
                th(style="width: 50%;") Características
                th(style="width: 30%;") Ejemplo
            tbody
              tr(data-aos="fade-left")
                td Clase
                td Identificada con un dígito. Representa los elementos principales de la contabilidad.
                td 1. Activo
              tr(data-aos="fade-left")
                td Grupo
                td Formado por dos dígitos. Subdivide a la clase en categorías más específicas.
                td 11. Disponible
              tr(data-aos="fade-left")
                td Cuenta
                td Se compone de cuatro dígitos. Señala conceptos definidos dentro de un grupo.
                td 1105. Caja
              tr(data-aos="fade-left")
                td Subcuenta
                td Con seis dígitos. Ofrece un nivel de desglose mayor.
                td 110505. Caja general
              tr(data-aos="fade-left")
                td Auxiliar
                td Se amplía a ocho o más dígitos. Permite el máximo nivel de detalle requerido por la empresa.
                td 11050501. Caja principal
    
    p.mb-5 De esta manera, el PUC asegura uniformidad en el registro y facilita el análisis, auditoría y comparación de estados financieros.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Clases de cuentas
    
    p.mb-5 El Plan Único de Cuentas en Colombia clasifica las cuentas contables en nueve clases, que se agrupan según su función en los estados financieros. Estas clases facilitan el registro ordenado y sistemático de las operaciones contables, además de apoyar la elaboración del balance general y el estado de resultados.
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
      h5 Tabla 8.
      i Niveles de la estructura del PUC
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-b.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 8%;") Clase
                th(style="width: 18%;") Nombre
                th(style="width: 12%;") Naturaleza
                th(style="width: 22%;") Presentación en estados
                th(style="width: 40%;") Ejemplos (grupos / cuentas típicas)
            tbody
              tr(data-aos="fade-left")
                td 1
                td Activo
                td Deudora
                td Balance general (Activo)
                td.
                  Disponible (p. ej., 1105 Caja, 1110 Bancos); Inversiones; Deudores (Clientes);
                  Inventarios (p. ej., 1435 Mercancías no fabricadas por la empresa);
                  Propiedad, planta y equipo (p. ej., 1528 Muebles y enseres, 1592 Depreciación acumulada);
                  Intangibles; Diferidos (prepagados).
              tr(data-aos="fade-left")
                td 2
                td Pasivo
                td Acreedora
                td Balance general (Pasivo)
                td.
                  Obligaciones financieras; Proveedores (p. ej., 2205 Proveedores);
                  Impuestos, gravámenes y tasas; Obligaciones laborales; Cuentas por pagar;
                  Anticipos y avances recibidos.
              tr(data-aos="fade-left")
                td 3
                td Patrimonio
                td Acreedora
                td Balance general (Patrimonio)
                td.
                  Capital social; Superávit de capital; Revalorización del patrimonio;
                  Resultado del ejercicio; Resultado de ejercicios anteriores;
                  Superávit por valorizaciones.
              tr(data-aos="fade-left")
                td 4
                td Ingresos
                td Acreedora
                td Estado de resultados (Ingresos)
                td.
                  Ingresos operacionales (ventas / servicios, p. ej., 4135 Ingresos por servicios);
                  Ingresos no operacionales (financieros, arrendamientos, dividendos,
                  utilidades en venta de activos).
              tr(data-aos="fade-left")
                td 5
                td Gastos
                td Deudora
                td Estado de resultados (Gastos)
                td.
                  Gastos de administración; Gastos de ventas; Gastos financieros;
                  Impuestos, tasas y contribuciones (como gasto).
              tr(data-aos="fade-left")
                td 6
                td Costos de ventas
                td Deudora
                td Estado de resultados (Costos)
                td Costo de mercancías vendidas (empresas comerciales).
              tr(data-aos="fade-left")
                td 7
                td Costos de producción u operación
                td Deudora
                td Estado de resultados (Costos)
                td.
                  Costos de producción/fabricación: materias primas, mano de obra directa y CIF;
                  costos de operación en servicios.
              tr(data-aos="fade-left")
                td 8
                td Cuentas de orden deudoras
                td Deudora
                td Notas / cuentas de control
                td.
                  Derechos contingentes; bienes en custodia; futuras utilizaciones;
                  diferencias en conciliaciones tributarias (naturaleza débito).
              tr(data-aos="fade-left")
                td 9
                td Cuentas de orden acreedoras
                td Acreedora
                td Notas / cuentas de control
                td.
                  Responsabilidades contingentes; compromisos y contratos;
                  diferencias en conciliaciones tributarias (naturaleza crédito).
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Dinámica y descripción de las cuentas
    
    p En el Plan Único de Cuentas (PUC), la dinámica y la descripción de las cuentas son dos conceptos clave para entender cómo funciona la contabilidad.
    p.mb-5 La #[b dinámica] explica cómo se deben usar las cuentas y cómo se registran los movimientos o cambios que afectan cada cuenta. Por otro lado, la #[b descripción] nos ayuda a comprender qué representa cada clase, grupo o cuenta dentro del catálogo, y qué tipo de operaciones se deben anotar en ellas. Según el PUC (2013), a continuación, veremos una explicación sencilla de las diferentes clases de cuentas que existen.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img26.svg' alt='Texto que describa la imagen')
      .col-lg-7
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Clase 1. Activo
        p Esta clase agrupa las cuentas que representan los bienes y derechos, tanto tangibles como intangibles, que posee la empresa y que pueden generar beneficios presentes o futuros.
        p Las cuentas de esta clase suelen tener saldo de naturaleza débito, salvo algunas excepciones como las provisiones, las depreciaciones, el agotamiento y las amortizaciones acumuladas, que se descuentan por separado dentro de los respectivos grupos de cuentas.
        p.mb-0 A continuación, se describen algunos de los principales grupos dentro de la clase 1: 
    
    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Disponible
              p.mb-0 Registra los recursos de liquidez inmediata, como el dinero en efectivo y depósitos en moneda nacional o extranjera, tanto en el país como en el extranjero. También incluye fondos a la vista o a término que pueden generar rendimientos.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img27.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Inversiones
              p.mb-0 Registra las inversiones temporales o permanentes, como acciones, cuotas sociales, títulos valores o documentos negociables. Se contabilizan al costo histórico o valor nominal, y las diferencias con el valor de mercado se controlan con cuentas auxiliares para cumplir con las normas contables.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img28.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Inventarios
              p.mb-0 Agrupa los bienes que la empresa utiliza en su actividad económica, tales como materias primas, productos en proceso, productos terminados, suministros y otros recursos que serán vendidos, consumidos o transformados.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img29.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Diferidos
              p.mb-0 Son gastos pagados por anticipado que generan beneficios para la empresa en varios períodos (cargos diferidos). Incluyen pagos por seguros, arrendamientos, campañas publicitarias, honorarios, contratos de mantenimiento, entre otros, y se amortizan sistemáticamente durante el tiempo que benefician a la empresa.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img30.png', alt='Imagen decorativa')
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Clase 2. Pasivo
    
    p Agrupa las cuentas que representan las obligaciones que la empresa ha adquirido para llevar a cabo sus actividades, las cuales deben ser canceladas en dinero, bienes o servicios. Todas las cuentas de esta clase tienen saldo de naturaleza crédito, ya que reflejan deudas o compromisos pendientes de pago.
    p.mb-5 Dentro de esta clase se encuentran los siguientes grupos principales:
    
    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img31.svg' alt='Imagen decorativa')
        h5.text-center Obligaciones financieras
        p.text-center.mb-0 Registra préstamos y créditos obtenidos de entidades financieras, que generan intereses y otros costos que deben ser contabilizados por separado.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img32.svg' alt='Imagen decorativa')
        h5.text-center Proveedores	
        p.text-center.mb-0 Registra las deudas por compra de bienes o servicios necesarios para la producción o comercialización, relacionadas con el objeto social de la empresa.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img33.svg' alt='Imagen decorativa')
        h5.text-center Cuentas por pagar
        p.text-center.mb-0 Incluye otras obligaciones con terceros, como órdenes de compra, acreedores oficiales, regalías, deudas con socios, dividendos, retenciones y aportes de nómina.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img34.svg' alt='Imagen decorativa')
        h5.text-center Impuestos, gravámenes y tasas
        p.text-center.mb-0 Registra las obligaciones fiscales con el Estado, incluyendo impuestos de renta, impuestos de años anteriores, tasas y gravámenes, descontando anticipos y retenciones.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img35.svg' alt='Imagen decorativa')
        h5.text-center Obligaciones laborales
        p.text-center.mb-0 Contabiliza los pasivos con trabajadores, como salarios, cesantías, primas, prestaciones sociales e indemnizaciones según la legislación vigente.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img36.svg' alt='Imagen decorativa')
        h5.text-center Pasivos estimados y provisiones
        p.text-center.mb-0 Montos apartados para cubrir gastos futuros o inciertos, como intereses, multas, litigios, indemnizaciones y reparaciones.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img37.svg' alt='Imagen decorativa')
        h5.text-center Diferidos	
        p.text-center.mb-0 Registra ingresos recibidos anticipadamente de clientes que aún no se han ganado, además de ajustes por contratos, utilidades diferidas e impuestos diferidos..
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img38.svg' alt='Imagen decorativa')
        h5.text-center Otros pasivos
        p.text-center.mb-0 Agrupa obligaciones especiales o particulares que no encajan en los grupos anteriores, pero que representan compromisos pendientes de la empresa.
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Clase 3. Patrimonio
    
    p La clase 3 agrupa las cuentas que representan el patrimonio neto de la empresa, es decir, la diferencia entre el total de activos y el pasivo externo. Este patrimonio está compuesto por los recursos netos aportados por los socios, accionistas o propietarios, así como por las utilidades acumuladas y otras reservas.
    p Según el PUC, el patrimonio incluye aportes de socios, superávit de capital, reservas, revalorización del patrimonio, dividendos o participaciones, resultados del ejercicio, resultados de ejercicios anteriores y superávit por valorizaciones.
    p.mb-5 A continuación, se describen los principales grupos dentro de esta clase:
    
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img39.png', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Capital social").p-3
            p.mb-0 Registra el valor total de los aportes iniciales y posteriores de los socios o accionistas, incluyendo aumentos o disminuciones autorizadas legalmente, según escrituras públicas y suscripciones.
          div(numero="2" titulo="Superávit de capital").p-3
            p.mb-0 Representa incrementos patrimoniales ocasionales como primas en colocación de acciones, donaciones, crédito mercantil, así como reservas legales, fiscales y para recapitalización.
          div(numero="3" titulo="Revalorización del patrimonio").p-3
            p.mb-0 Registra los incrementos en el patrimonio derivados de saneamientos fiscales, revalorización de activos u otros ajustes conforme a normas legales vigentes.
          div(numero="4" titulo="Resultado del ejercicio").p-3
            p.mb-0 Contabiliza las utilidades o pérdidas obtenidas al cierre del ejercicio contable o económico.
          div(numero="5" titulo="Resultado de ejercicios anteriores").p-3
            p.mb-0 Acumula las utilidades o pérdidas generadas en ejercicios anteriores que están disponibles para distribución o que aún no han sido asignadas.
          div(numero="6" titulo="Superávit por valorizaciones").p-3
            p.mb-0 Incluye la valorización contable de inversiones, propiedades, planta y equipo, y otros activos sujetos a revalorización según normativas contables y legales.
    
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Clase 4. Ingresos
    
    p Esta clase agrupa las cuentas que representan los beneficios operativos y financieros que la empresa percibe para desarrollar normalmente su actividad comercial durante un período determinado. Es importante destacar que todos estos ingresos deben registrarse en moneda nacional (pesos).
    p.mb-5 Los ingresos se clasifican en dos grandes grupos:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.dvprimario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img40.svg', alt='Texto que describa la imagen')
        h4.text-center Ingresos operacionales
        p Incluyen los valores recibidos o generados por las actividades propias del objeto social de la empresa, como la venta de bienes o la prestación de servicios. También comprenden dividendos, participaciones y otros ingresos relacionados con la intermediación financiera, siempre que estén vinculados al objeto principal de la entidad económica.
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img41.svg', alt='Texto que describa la imagen')
        h4.text-center Ingresos no operacionales
        p Corresponden a ingresos provenientes de actividades ajenas al objeto social de la empresa. Aquí se registran ingresos por operaciones financieras en moneda nacional o extranjera, arrendamientos, honorarios, utilidades en la venta de propiedades, planta y equipo, inversiones, indemnizaciones, recuperaciones, ingresos por ejercicios anteriores, entre otros.
    
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Clase 5. Gastos
    
    p Esta clase agrupa las cuentas que representan los costos operativos y financieros que la empresa incurre para llevar a cabo su actividad productiva.
    p El PUC establece que, mediante el sistema de causación, se registrarán los gastos causados, incluso si aún no se ha realizado el pago. Un gasto se considera causado cuando nace la obligación de pagarlo, independientemente de que se haya pagado efectivamente. 
    p.mb-5 Los gastos se clasifican en tres grandes grupos:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img42.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Operaciones de administración
            p.mt-3.px-4  Gastos relacionados con la gestión administrativa para desarrollar la actividad principal, como honorarios, impuestos, arrendamientos, seguros y servicios.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img43.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Operaciones de ventas
            p.mt-3.px-4  Gastos asociados a la comercialización y distribución de productos o servicios, incluyendo costos de personal, publicidad, promoción y servicios relacionados.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img44.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 No operacionales
            p.mt-3.px-4 Gastos no relacionados con la actividad principal, tales como gastos financieros, pérdidas por ventas de activos, gastos extraordinarios y otros gastos diversos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Clase 6. Costos de venta
        p Esta clase agrupa las cuentas que reflejan la acumulación de los costos directos e indirectos necesarios para fabricar los productos o prestar los servicios que la empresa vende, según la actividad económica que desarrolla, durante un período determinado.
        p.mb-5 #[b Costos de ventas y prestación de servicios:] aquí se registra el valor asignado a los artículos vendidos y a los servicios prestados durante el ejercicio contable.
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Clase 7. Costos de producción o de operación
        p Incluye las cuentas que representan las erogaciones y gastos directamente relacionados con la elaboración o producción de bienes o la prestación de servicios que generan ingresos para la empresa. Estas cuentas suelen tener saldo de naturaleza débito.
        p.mb-0 #[b Materia prima:] registra el valor de las materias primas o materiales que se utilizan directamente en la fabricación o producción de los bienes destinados a la venta, cuyo costo es fácilmente asignable y relevante para el producto final.
      .col-lg-5.col-8.order-1.order-lg-2.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img45.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img46.png', alt='Imagen decorativa')
      .col-lg-7
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Clase 8. Cuentas de orden deudoras
        p En este grupo se registran hechos o situaciones que pueden generar derechos futuros y que afectan la estructura financiera de la empresa. Además, el PUC incluye cuentas de orden para el control interno de activos, información general y seguimiento de posibles eventos financieros futuros, así como para conciliar diferencias entre registros contables y declaraciones tributarias.
        p #[b Derechos contingentes:] registra compromisos o contratos que podrían generar derechos para la empresa en el futuro.
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Clase 9. Cuentas de orden acreedoras
        p Esta clase agrupa las cuentas que registran compromisos o contratos relacionados con posibles obligaciones que podrían afectar la estructura financiera de la empresa. También incluye cuentas utilizadas para control interno de pasivos y patrimonio, para información general, y para la conciliación de diferencias entre registros contables y declaraciones tributarias.
        p.mb-0 #[b Responsabilidades contingentes:] registra compromisos o contratos que podrían derivar en obligaciones a cargo de la empresa.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Ventajas del uso del PUC
    p.mb-4 El Plan Único de Cuentas aporta múltiples beneficios para la contabilidad en Colombia:
    .tarjeta--BG07.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img47_1.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
        .col-lg-8(data-aos="fade-left")
          SlyderF.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img49.svg' alt='Imagen decorativa')
              p.text-center #[b Estandarización] en el registro de las operaciones en todas las empresas.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img50.svg' alt='Imagen decorativa')
              p.text-center #[b Comparabilidad] de los estados financieros entre distintas organizaciones.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img51.svg' alt='Imagen decorativa')
              p.text-center #[b Transparencia y] control, al facilitar la labor de los entes de vigilancia y auditoría.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img47.svg' alt='Imagen decorativa')
              p.text-center #[b Claridad] en la clasificación de las cuentas, evitando errores y confusiones.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img48.svg' alt='Imagen decorativa')
              p.text-center #[b Cumplimiento normativo], al estar alineado con los decretos que rigen la contabilidad en el país.


</template>
<script>
export default {
  name: 'Tema3',
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
