<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Cuentas: tipos, Plan Único de Cuentas (PUC)

      
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	 La cuenta contable

    separador
    #t3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Clasificación de las cuentas

    separador
    #t3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	 Método de la partida doble 

    separador
    #t3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Método de la cuenta T

    separador
    #t3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Objetivo y estructura del Plan Único de Cuentas (PUC)

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
