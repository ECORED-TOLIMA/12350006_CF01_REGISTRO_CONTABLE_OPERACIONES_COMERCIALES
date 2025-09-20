<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Comprobantes contables internos

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Documentos comerciales

    separador
    #t4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Comprobantes contables internos

    separador
    #t4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Normativa aplicable


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
