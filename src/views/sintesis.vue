<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos de la contabilidad empresarial en Colombia, iniciando con el estudio de la información financiera, su concepto, características y relevancia para la gestión organizacional. Se analizan las políticas contables, sus principios, estructura y aplicación normativa como marco que orienta los registros y asegura la coherencia de los estados financieros.
    p Asimismo, se profundiza en las cuentas contables, su clasificación, la dinámica del método de la partida doble, la representación en la cuenta T y la organización estandarizada del Plan Único de Cuentas (PUC) como referente obligatorio en el país. También se examinan los documentos comerciales y comprobantes contables, tanto internos como externos, considerando sus características, funciones y la normativa aplicable que garantiza la trazabilidad de la información.
    p Finalmente, se estudian los registros contables, sus tipos y procedimientos de elaboración, junto con los mecanismos de revisión cruzada y conciliación que aseguran la exactitud y confiabilidad de los estados financieros. De esta manera, el componente proporciona una base sólida para la consolidación de información financiera clara, verificable y útil en la toma de decisiones dentro de cualquier entorno empresarial.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describe el estudio de los fundamentos de la contabilidad, iniciando con el concepto e importancia de la información financiera, seguido por la definición y aplicación de políticas contables. Luego se abordan los tipos de cuentas, la partida doble, la cuenta T y el Plan Único de Cuentas (PUC). Posteriormente, se analizan los documentos comerciales y comprobantes contables, y finalmente se desarrollan los registros contables, incluyendo su normativa, la revisión cruzada y la conciliación como procesos que aseguran la transparencia y confiabilidad de la información financiera. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
