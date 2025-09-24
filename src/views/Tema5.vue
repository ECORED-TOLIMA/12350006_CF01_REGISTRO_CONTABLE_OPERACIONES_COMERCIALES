<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Registros contables: concepto, tipos, normativa, revisión cruzada y conciliación  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-lg-flex.d-none(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen decorativa')
      .col-lg-10(data-aos="fade-left")
        p Los registros contables constituyen la evidencia formal del ciclo contable, pues a través de ellos se deja constancia escrita, sistemática y ordenada de todas las operaciones económicas que realiza una organización. No son solo una obligación legal, sino también una herramienta para garantizar la transparencia, la trazabilidad y la confiabilidad de la información financiera.
        p.mb-0 De acuerdo con el Decreto 2649 de 1993 y el Código de Comercio, los registros deben elaborarse en libros autorizados, físicos o electrónicos, cumpliendo requisitos de forma, oportunidad y veracidad.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img3.png', alt='Imagen decorativa')
      .col-lg-8
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Concepto de registros contables
        p Un registro contable es la anotación sistemática en los libros de contabilidad de cada transacción económica de la empresa, basada en un soporte documental válido. Estas anotaciones permiten identificar qué cuentas se afectan, si aumentan o disminuyen, y en qué cuantía, de acuerdo con el método de partida doble.
        p.mb-4 Su propósito es:
        ul.lista-ul--color.mb-0
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Proporcionar información veraz y verificable.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Garantizar la trazabilidad de las operaciones.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Servir de base para la elaboración de estados financieros.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            | Facilitar la toma de decisiones administrativas y financieras.
    
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tipos de registros contables
    
    p.mb-5 Los registros pueden clasificarse según su función y nivel de detalle:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
      h5 Tabla 11.
      i Tipos de registros contables
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-b.color-acento-contenido
          table
            thead
              tr(data-aos="fade-left")
                th(style="width: 25%;") Tipo de registro
                th(style="width: 50%;") Descripción
                th(style="width: 25%;") Ejemplo
            tbody
              tr(data-aos="fade-left")
                td Libro diario
                td.
                  Registro cronológico de todas las operaciones realizadas en la empresa, indicando fecha,
                  cuentas afectadas, valores y referencias a los comprobantes.
                td Asiento de compra de mercancías, venta de servicios, pago de nómina.
              tr(data-aos="fade-left")
                td Libro mayor
                td.
                  Reúne la información del diario por cada cuenta, mostrando débitos, créditos y saldo acumulado.
                td Cuenta 1105 Caja, con todos los movimientos de entrada y salida.
              tr(data-aos="fade-left")
                td Libros auxiliares
                td.
                  Permiten llevar un mayor detalle de las operaciones de ciertas cuentas.
                td Cuentas por cobrar a clientes específicos; inventarios de productos.
              tr(data-aos="fade-left")
                td Balances de comprobación
                td.
                  Cuadro de control que resume los saldos de las cuentas del mayor, con el fin de verificar
                  que la suma de débitos sea igual a la de créditos.
                td Balance mensual con saldos de activos, pasivos y patrimonio.

    separador
    #t5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Normativa aplicable
    
    p.mb-5 El marco legal que regula los registros contables en Colombia incluye:
    
    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Código de Comercio (Arts. 48-74)
              p.mb-0 Obliga a los comerciantes a llevar libros de contabilidad, define requisitos de conservación y validez probatoria.
              p.mb-0 #[b Aplicación:] llevanza de libros principales y auxiliares.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Decreto 2649 de 1993
              p.mb-0 Regula la contabilidad en general, establece principios de reconocimiento, medición y revelación.
              p.mb-0 #[b Aplicación:] base técnica de los registros contables.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Ley 1314 de 2009
              p.mb-0 Regula la convergencia hacia estándares internacionales (NIIF y NIA).
              p.mb-0 #[b Aplicación:] normas internacionales aplicables a la contabilidad.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Decreto 2270 de 2019
              p.mb-0 Actualiza el marco técnico normativo de las NIIF en Colombia.
              p.mb-0 #[b Aplicación:] adopción de políticas y revelaciones bajo NIIF.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img7.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Resoluciones DIAN
              p.mb-0 Regulan la facturación electrónica, el soporte de nómina electrónica y otros documentos equivalentes.
              p.mb-0 #[b Aplicación:] vinculación entre registros contables y soportes electrónicos.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img8.png', alt='Imagen decorativa')

    separador
    .tarjeta-BG05.px-md-5.px-4
      #t5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Revisión cruzada
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen decorativa')
        .col-lg-9(data-aos="fade-left")
          p La revisión cruzada es un procedimiento de control interno que busca garantizar que cada transacción registrada esté debidamente soportada y conciliada. Implica verificar que:
          p Este proceso reduce errores, detecta omisiones y asegura la coherencia de la información contable.
          ul.lista-ul--color.mb-0
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Los débitos y créditos estén equilibrados.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Los valores en libros auxiliares coincidan con los saldos del mayor.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Los comprobantes físicos o electrónicos respalden los asientos registrados.
            li(data-aos="fade-left")
              i.fas.fa-hand-point-right
              | Los reportes entregados a entes externos coincidan con los registros internos.
    p Este proceso reduce errores, detecta omisiones y asegura la coherencia de la información contable.
    separador
    #t5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Conciliación contable
    
    p.mb-5 La conciliación es el procedimiento mediante el cual se comparan y ajustan los registros contables con fuentes externas, con el fin de garantizar su exactitud. La más común es la conciliación bancaria, que confronta el saldo contable de caja y bancos con los extractos emitidos por la entidad financiera.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tipos de conciliación
    
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0(data-aos="fade-right")
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img10.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación bancaria
                p.mb-0 Saldo en libros vs. saldo en extractos bancarios.
        .col-6.col-md-3.mb-4.mb-xl-0(data-aos="flip-right")
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img11.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación de cuentas por cobrar
                p.mb-0 Registros internos vs. confirmación de clientes.
                br
                br
                br
        .col-6.col-md-3.mb-4.mb-xl-0(data-aos="flip-left")
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img12.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación de cuentas por pagar
                p.mb-0 Registros internos vs. confirmación de proveedores.
        .col-6.col-md-3.mb-4.mb-xl-0(data-aos="fade-left")
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img13.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación fiscal
                p.mb-0 Registros contables vs. declaraciones tributarias presentadas.
   
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema5/img10_1.png', alt='Imagen decorativa')
            h4 Conciliación bancaria
            p.mb-0 Saldo en libros vs. saldo en extractos bancarios.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema5/img11_1.png', alt='Imagen decorativa')
            h4 Conciliación de cuentas por cobrar
            p.mb-0 Registros internos vs. confirmación de clientes.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema5/img12_1.png', alt='Imagen decorativa')
            h4 Conciliación de cuentas por pagar
            p.mb-0 Registros internos vs. confirmación de proveedores.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema5/img13_1.png', alt='Imagen decorativa')
            h4 Conciliación fiscal
            p.mb-0 Registros contables vs. declaraciones tributarias presentadas.
            

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        p.mb-0 La conciliación periódica permite detectar diferencias por errores, pagos no registrados, notas bancarias no contabilizadas o irregularidades, y asegura que los estados financieros reflejen la realidad de la empresa.


</template>

<script>
export default {
  name: 'Tema5',
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
