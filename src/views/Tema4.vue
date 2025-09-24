<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Documentos comerciales y comprobantes contables: definición, tipos, características, normativa
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p Los documentos comerciales y comprobantes contables son la evidencia física o digital de los hechos económicos que realiza una organización. Constituyen el soporte legal, administrativo y financiero que permite verificar la autenticidad de las transacciones y garantizar su correcto registro contable.
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
          p.mb-0 En Colombia, la normatividad que regula estos documentos se encuentra en el Código de Comercio, el Estatuto Tributario, el Decreto 2649 de 1993, la Ley 1314 de 2009 y las disposiciones de la DIAN relacionadas con la facturación y comprobantes electrónicos.
        p La importancia de estos soportes radica en que:
        ul.lista-ul--color.mb-5
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Sirven como medio de prueba legal ante terceros.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Garantizan la transparencia y trazabilidad de las operaciones.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Respaldan el cumplimiento de normas contables y tributarias.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Facilitan auditorías y procesos de control interno.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Importancia de los documentos en el ciclo contable
    p.mb-5 Los documentos comerciales y comprobantes contables no solo respaldan legalmente las operaciones, sino que constituyen la #[b primera etapa del ciclo contable]. Cada hecho económico debe estar soportado por un documento válido que sirva de evidencia y garantice la trazabilidad de la información financiera.
  
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Etapas del ciclo contable
    p.mb-5 Según Fierro (2011), el ciclo contable se compone de varias fases: recolección de documentos, codificación, elaboración de comprobantes, registro en libros, ajustes contables, elaboración de estados financieros y presentación del informe de gestión .
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Recolección de documentos contables").p-3
            p.mb-0 Se reúnen todos los documentos que respaldan las operaciones de la empresa, como facturas, recibos, notas débito o crédito y extractos bancarios.
          div(numero="2" titulo="Codificación según PUC").p-3
            p.mb-0 Se codifican los documentos de acuerdo con el Plan Único de Cuentas (PUC), asegurando su correcta clasificación.
          div(numero="3" titulo="Comprobantes contables").p-3
            p.mb-0 Se elaboran documentos que respaldan cada asiento contable.
          div(numero="4" titulo="Registro en libros").p-3
            p.mb-0 Se contabiliza primero en libros auxiliares y luego en el diario y el mayor.
          div(numero="5" titulo="Ajustes contables").p-3
            p.mb-0 Incluyen provisiones, depreciaciones y reclasificaciones.
          div(numero="6" titulo="Estados financieros").p-3
            p.mb-0 Se preparan el balance general, el estado de resultados y el flujo de efectivo.
          div(numero="7" titulo="Informe de gestión").p-3
            p.mb-0 Evalúa el desempeño y la gestión administrativa, con base en los resultados reflejados en los estados financieros.
      .col-lg-4.col-8.mb-4.order-1.order-lg-2(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Recolección de documentos contables (entrada de la información)
    .tarjeta-BG05.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p El primer paso del ciclo contable consiste en la recolección y organización de los documentos que soportan las transacciones de la empresa. Estos documentos, llamados soportes contables, constituyen la evidencia física o digital de que un hecho económico realmente ocurrió, y son la base para su posterior registro en los libros de contabilidad.
          p.mb-4 La entrada de la información se asegura mediante un proceso sistemático que incluye:
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 1
              | La identificación del hecho económico (compra, venta, pago, cobro, etc.).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 2
              | La recolección de los soportes correspondientes (facturas, recibos, extractos, comprobantes).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 3
              | La clasificación preliminar de la operación de acuerdo con el Plan Único de Cuentas (PUC).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 4
              | La elaboración del comprobante de contabilidad, que traslada el soporte físico a un documento interno con validez legal y contable.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 5
              | El registro en los libros auxiliares, y posteriormente en el diario y el mayor, para mantener la trazabilidad de cada transacción.
    
    p Este proceso es crucial porque garantiza la transparencia y la trazabilidad: cada asiento contable debe poder comprobarse con un documento de soporte.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Documentos comerciales
    
    p.mb-5 Los documentos comerciales son aquellos que sustentan las operaciones mercantiles de la empresa. Algunos de los más relevantes son:
    
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 9.
      i Soportes contables externos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-b.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 25%;") Soporte
                th(style="width: 75%;") Descripción
            tbody
              tr(data-aos="fade-left")
                td Recibo de caja o comprobante de ingresos
                td.
                  Documento en el que se registran los ingresos en efectivo que recibe la empresa. El original
                  se entrega al cliente y las copias se archivan para control y registro contable (débito a Caja
                  y crédito a la cuenta que corresponda).
              tr(data-aos="fade-left")
                td Recibo de consignación
                td.
                  Formato emitido por el banco al momento de un depósito. El original queda en la entidad financiera
                  y la copia sellada sirve como soporte para registrar la consignación en la contabilidad de la empresa.
              tr(data-aos="fade-left")
                td Factura comercial
                td.
                  Documento que detalla la venta de bienes o servicios, impuestos aplicados y condiciones de pago.
                  El vendedor la emite como factura de venta y el comprador la recibe como factura de compra. Es el
                  soporte básico de ventas y compras, y debe cumplir con requisitos legales (Art. 617 E.T.).
              tr(data-aos="fade-left")
                td Comprobante de venta con tarjeta de crédito
                td.
                  Se utiliza cuando el cliente paga con tarjeta de crédito. La entidad financiera abona a la empresa
                  el valor de los comprobantes firmados.
              tr(data-aos="fade-left")
                td Cheque
                td.
                  Título valor en el que el girador ordena al banco pagar una suma determinada a un beneficiario.
                  Es soporte de pagos.
              tr(data-aos="fade-left")
                td Comprobante de egreso
                td.
                  También llamado orden de pago, respalda las salidas de dinero (en efectivo, cheque o transferencia).
                  El original se adjunta al comprobante diario y la copia se archiva en el consecutivo.
              tr(data-aos="fade-left")
                td Letra de cambio
                td.
                  Título valor que contiene una orden incondicional de pago. Para el emisor es una cuenta por cobrar
                  y para el aceptante es una cuenta por pagar.
              tr(data-aos="fade-left")
                td Nota débito
                td.
                  Documento usado para cargar al cliente valores adicionales, como intereses de mora o ajustes en facturación.
              tr(data-aos="fade-left")
                td Nota crédito
                td.
                  Documento que respalda descuentos, rebajas o devoluciones de mercancía. El original se entrega al cliente
                  y las copias se archivan en la empresa.
              tr(data-aos="fade-left")
                td Recibo de caja menor
                td.
                  Documento que soporta gastos pequeños pagados en efectivo con fondos de caja menor, hasta un monto máximo establecido.
    p La factura comercial merece una mención especial, pues según el Estatuto Tributario (art. 617), debe cumplir con requisitos como: denominación expresa, identificación del vendedor y comprador, numeración consecutiva autorizada por la DIAN, fecha, descripción de productos o servicios, valor total, impuestos aplicados y condiciones de pago.
    
    separador
    #t4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Comprobantes contables internos
    
    p Además de los soportes externos, como facturas, extractos bancarios o recibos de caja, las organizaciones generan soportes contables internos. Estos documentos son creados dentro de la empresa para registrar operaciones que no siempre cuentan con un respaldo externo, pero que igualmente deben quedar documentadas en la contabilidad.
    p.mb-5 Su función principal es garantizar que todas las operaciones, incluidas las de ajuste, reclasificación o corrección, cuenten con un documento válido que justifique el asiento contable.
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.dvprimario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Texto que describa la imagen')
        h4.text-center Nota de contabilidad
        p.mb-0 Documento elaborado para registrar operaciones que no tienen soporte externo, como asientos de corrección, provisiones, depreciaciones, amortizaciones o registros de cierre contable. Sirve de respaldo interno y asegura que los ajustes queden debidamente documentados.
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='Texto que describa la imagen')
        h4.text-center Comprobante diario de contabilidad 
        p.mb-0 Documento preparado antes de registrar cualquier operación en los libros. Incluye número consecutivo, fecha, origen de la operación, descripción, valor y las cuentas afectadas. Debe acompañarse siempre de los soportes correspondientes (internos o externos) que den validez al asiento.
    
    p Estos comprobantes son indispensables para mantener la trazabilidad y legalidad de todas las operaciones, incluso aquellas que surgen por ajustes internos.
    
    separador
    #t4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Normativa aplicable
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-left")
        p.mb-4 El manejo de documentos comerciales y comprobantes contables en Colombia está regulado por un conjunto de disposiciones legales que buscan garantizar la transparencia, uniformidad y confiabilidad de la información financiera. Estas normas establecen los requisitos mínimos de forma y contenido que deben cumplir los soportes, así como los criterios para su conservación, validez probatoria y aceptación tributaria. Cumplir con este marco normativo no solo asegura la legalidad de los registros, sino que también fortalece la confianza de los usuarios internos y externos de la información financiera y facilita los procesos de auditoría y control por parte de las entidades competentes.
      .col-lg-2.col-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img5.svg', alt='Imagen decorativa')
    
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 10.
      i Normativa aplicable a documentos comerciales y comprobantes contables en Colombia
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 25%;") Norma
                th(style="width: 50%;") Contenido principal
                th(style="width: 25%;") Aplicación
            tbody
              tr(data-aos="fade-left")
                td Código de Comercio (1971)
                td.
                  Regula los actos mercantiles y establece la obligación de los comerciantes de llevar
                  contabilidad y conservar los soportes de sus operaciones.
                td Marco general de la actividad empresarial y contable.
              tr(data-aos="fade-left")
                td Decreto 2649 de 1993
                td.
                  Define los principios y normas de contabilidad generalmente aceptados en Colombia, incluyendo
                  reglas sobre el reconocimiento, medición y revelación de hechos económicos.
                td Aplicación de principios contables y elaboración de estados financieros.
              tr(data-aos="fade-left")
                td Estatuto Tributario (Art. 617 y ss.)
                td.
                  Establece los requisitos de la factura de venta y documentos equivalentes, como numeración
                  autorizada por la DIAN, identificación de las partes, valor, impuestos y condiciones de pago.
                td Facturación y documentos soporte para efectos fiscales.
              tr(data-aos="fade-left")
                td Decreto 2650 de 1993
                td.
                  Establece el Plan Único de Cuentas (PUC) como modelo estandarizado para la codificación y
                  registro de operaciones contables en Colombia.
                td Uniformidad en los registros contables.
              tr(data-aos="fade-left")
                td Ley 1314 de 2009
                td.
                  Regula la convergencia hacia estándares internacionales de contabilidad, información financiera
                  y aseguramiento (NIIF y NIA).
                td Adopción de políticas contables acordes con estándares internacionales.
              tr(data-aos="fade-left")
                td Resoluciones DIAN sobre facturación electrónica (2019 en adelante)
                td.
                  Regulan la expedición, validación y conservación de la factura electrónica, el documento soporte
                  de adquisiciones y el documento soporte de pago de nómina electrónica.
                td Obligaciones de facturación digital y validez probatoria de los documentos electrónicos.

</template>

<script>
export default {
  name: 'Tema4',
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
