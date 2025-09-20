<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Registros contables: concepto, tipos, normativa, revisión cruzada y conciliación

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Documentos comerciales

    separador
    #t5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Comprobantes contables internos

    separador
    #t5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Normativa aplicable


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
