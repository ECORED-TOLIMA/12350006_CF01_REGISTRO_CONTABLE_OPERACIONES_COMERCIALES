<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Registros contables: concepto, tipos, normativa, revisión cruzada y conciliación  
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen decorativa')
      .col-lg-10
        p Los registros contables constituyen la evidencia formal del ciclo contable, pues a través de ellos se deja constancia escrita, sistemática y ordenada de todas las operaciones económicas que realiza una organización. No son solo una obligación legal, sino también una herramienta para garantizar la transparencia, la trazabilidad y la confiabilidad de la información financiera.
        p De acuerdo con el Decreto 2649 de 1993 y el Código de Comercio, los registros deben elaborarse en libros autorizados, físicos o electrónicos, cumpliendo requisitos de forma, oportunidad y veracidad.
    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img3.png', alt='Imagen decorativa')
      .col-lg-8
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Concepto de registros contables
        p Un registro contable es la anotación sistemática en los libros de contabilidad de cada transacción económica de la empresa, basada en un soporte documental válido. Estas anotaciones permiten identificar qué cuentas se afectan, si aumentan o disminuyen, y en qué cuantía, de acuerdo con el método de partida doble.
        p.mb-4 Su propósito es:
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-hand-point-right
            | Proporcionar información veraz y verificable.
          li
            i.fas.fa-hand-point-right
            | Garantizar la trazabilidad de las operaciones.
          li
            i.fas.fa-hand-point-right
            | Servir de base para la elaboración de estados financieros.
          li
            i.fas.fa-hand-point-right
            | Facilitar la toma de decisiones administrativas y financieras.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Documentos comerciales
    p.mb-4 Los registros pueden clasificarse según su función y nivel de detalle:
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 11.
      i Tipos de registros contables
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-b.color-acento-contenido(data-aos="zoom-in")
          table
            thead
              tr
                th Tipo de registro
                th Descripción
                th Ejemplo
            tbody
              tr
                td Libro diario
                td.
                  Registro cronológico de todas las operaciones realizadas en la empresa, indicando fecha,
                  cuentas afectadas, valores y referencias a los comprobantes.
                td Asiento de compra de mercancías, venta de servicios, pago de nómina.
              tr
                td Libro mayor
                td.
                  Reúne la información del diario por cada cuenta, mostrando débitos, créditos y saldo acumulado.
                td Cuenta 1105 Caja, con todos los movimientos de entrada y salida.
              tr
                td Libros auxiliares
                td.
                  Permiten llevar un mayor detalle de las operaciones de ciertas cuentas.
                td Cuentas por cobrar a clientes específicos; inventarios de productos.
              tr
                td Balances de comprobación
                td.
                  Cuadro de control que resume los saldos de las cuentas del mayor, con el fin de verificar
                  que la suma de débitos sea igual a la de créditos.
                td Balance mensual con saldos de activos, pasivos y patrimonio.

    separador
    #t5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Comprobantes contables internos
    p.mb-4 El marco legal que regula los registros contables en Colombia incluye:
    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Código de Comercio (Arts. 48–74)
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
        h2 5.3 Normativa aplicable
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen decorativa')
        .col-lg-9(data-aos="fade-left")
          p La revisión cruzada es un procedimiento de control interno que busca garantizar que cada transacción registrada esté debidamente soportada y conciliada. Implica verificar que:

          p Este proceso reduce errores, detecta omisiones y asegura la coherencia de la información contable.
          ul.lista-ul--color.mb-5
            li
              i.fas.fa-hand-point-right
              | Los débitos y créditos estén equilibrados.
            li
              i.fas.fa-hand-point-right
              | Los valores en libros auxiliares coincidan con los saldos del mayor.
            li
              i.fas.fa-hand-point-right
              | Los comprobantes físicos o electrónicos respalden los asientos registrados.
            li
              i.fas.fa-hand-point-right
              | Los reportes entregados a entes externos coincidan con los registros internos.
    separador
    #t5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Conciliación contable
    p.mb-4 La conciliación es el procedimiento mediante el cual se comparan y ajustan los registros contables con fuentes externas, con el fin de garantizar su exactitud. La más común es la conciliación bancaria, que confronta el saldo contable de caja y bancos con los extractos emitidos por la entidad financiera.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tipos de conciliación
      
      
      
      
    
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación bancaria
                p Saldo en libros vs. saldo en extractos bancarios.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img22.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación de cuentas por cobrar
                p Registros internos vs. confirmación de clientes.
                br
                br
                br

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img23.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación de cuentas por pagar
                p Registros internos vs. confirmación de proveedores.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Conciliación fiscal
                p Registros contables vs. declaraciones tributarias presentadas.
   
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img21_1.png', alt='Imagen decorativa')
            h4 Conciliación bancaria
            p Saldo en libros vs. saldo en extractos bancarios.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img22_1.png', alt='Imagen decorativa')
            h4 Conciliación de cuentas por cobrar
            p Registros internos vs. confirmación de clientes.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img23_1.png', alt='Imagen decorativa')
            h4 Conciliación de cuentas por pagar
            p Registros internos vs. confirmación de proveedores.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img24_1.png', alt='Imagen decorativa')
            h4 Conciliación fiscal
            p Registros contables vs. declaraciones tributarias presentadas.
            

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        p La conciliación periódica permite detectar diferencias por errores, pagos no registrados, notas bancarias no contabilizadas o irregularidades, y asegura que los estados financieros reflejen la realidad de la empresa.




















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
