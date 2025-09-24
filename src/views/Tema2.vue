<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Política contable: definición, estructura, principios aplicables    
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    
    p La contabilidad no solo implica registrar operaciones, sino establecer previamente las bases, criterios y métodos que orientarán dichos registros. Estos lineamientos se formalizan en las políticas contables, las cuales constituyen el marco técnico y normativo que asegura uniformidad, comparabilidad y transparencia en la información financiera. En Colombia, las políticas contables se encuentran reguladas por el Decreto 2649 de 1993, el Código de Comercio y, para las entidades que aplican estándares internacionales, por las Normas Internacionales de Información Financiera (NIIF).
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Definición de política contable
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p Las políticas contables son los principios, bases, convenciones, reglas y procedimientos específicos adoptados por una entidad para el reconocimiento, medición, presentación y revelación de sus transacciones económicas y hechos contables.
        p.mb-0 De acuerdo con el Decreto 2649 de 1993, cada ente económico debe aplicar criterios uniformes para transacciones similares, garantizando consistencia en el tiempo. Cuando la entidad cambia de política contable, debe revelarlo, justificarlo y cuantificar su efecto en los estados financieros.
      .col-lg-4.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imagen decorativa')
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Estructura de las políticas contables
    .tarjeta-BG05.px-md-5.px-4
      p.mb-5 Una política contable generalmente contiene:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 1
              p.mb-0 #[b Objetivo y alcance:] explica la finalidad de la política y el tipo de operaciones a las que aplica.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 2
              p.mb-0 #[b Criterios de reconocimiento:] define en qué momento se registran los activos, pasivos, ingresos y gastos.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 3
              p.mb-0 #[b Medición:] establece cómo se valoran las partidas (costo histórico, valor razonable, valor presente, etc.).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 4
              p.mb-0 #[b Presentación:] indica la forma en que deben mostrarse las partidas en los estados financieros.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 5
              p.mb-0 #[b Revelación:] precisa qué información adicional debe incluirse en las notas a los estados financieros.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 6
              p.mb-0 #[b Cambios en políticas contables:] describe el procedimiento para modificar una política y la forma de presentar los efectos de dicho cambio.
      
      .row.justify-content-center.mb-4
        .col-lg-10
          .cajon.color-primario.p-4(data-aos="fade-left")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4.mb-4.mb-lg-0
                figura
                  img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
              .col-10
                p.mb-0 #[b Ejemplo:] una empresa puede definir en su política que sus inventarios se midan al costo promedio ponderado, y que las propiedades, planta y equipo se registren al costo histórico menos depreciación acumulada.
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Principios aplicables en Colombia
    
    p.mb-5 El Decreto 2649 de 1993 estableció los principios de contabilidad generalmente aceptados en Colombia (PCGA), muchos de los cuales siguen siendo la base de las NIIF. Entre los más relevantes están:
    
    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
      .col-lg-6
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Ente económico").p-3
            p.mb-0 La empresa es independiente de los propietarios.
          div(numero="2" titulo="Empresa en marcha").p-3
            p.mb-0 Se presume que continuará en el futuro.
          div(numero="3" titulo="Período contable").p-3
            p.mb-0 Las operaciones se reportan en intervalos regulares.
          div(numero="4" titulo="Devengo o causación").p-3
            p.mb-0 Los hechos económicos se reconocen cuando ocurren, no cuando se paga o recibe efectivo.
          div(numero="5" titulo="Esencia sobre forma").p-3
            p.mb-0 Prevalece la realidad económica sobre la forma legal.
          div(numero="6" titulo="Prudencia").p-3
            p.mb-0 Se deben reconocer todas las pérdidas probables y solo las ganancias realizadas.
          div(numero="7" titulo="Uniformidad").p-3
            p.mb-0 Se mantienen criterios contables a lo largo del tiempo.
          div(numero="8" titulo="Revelación plena").p-3
            p.mb-0 Toda información relevante debe ser divulgada.
    
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Referencia a estándares internacionales
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img5.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para las entidades que aplican NIIF, las políticas contables se definen siguiendo las directrices del IASB. En este marco, se permite mayor flexibilidad en la selección de criterios de medición (por ejemplo, valor razonable para propiedades de inversión) y se exige amplia revelación en las notas.
          br
          br
          | La transición hacia NIIF en Colombia, establecida por la Ley 1314 de 2009 y sus decretos reglamentarios, reforzó la importancia de las políticas contables como instrumento de comparabilidad internacional.


</template>

<script>
export default {
  name: 'Tema2',
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
