<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/imgintro.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p La contabilidad es un pilar esencial en la gestión empresarial, pues permite registrar, organizar y comunicar la información financiera de manera clara y confiable. Más allá de una obligación legal, constituye una herramienta estratégica para la sostenibilidad de las organizaciones y la toma de decisiones informadas.
        p Este componente formativo brinda una comprensión integral de la #[b información financiera], las #[b políticas contables] que la sustentan, la #[b tipología de cuentas y el Plan Único de Cuentas (PUC)], los #[b documentos comerciales y comprobantes], y los #[b registros contables] con sus procedimientos de revisión cruzada y conciliación.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A partir de este proceso, se desarrollan habilidades para identificar las características de las empresas, aplicar principios contables básicos, reconocer los soportes documentales y comprender la dinámica de las cuentas. Esta formación contribuye a garantizar registros contables transparentes y normativamente ajustados, fortaleciendo la gestión financiera en distintos contextos organizacionales.
        p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video: 
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="1312" height="738" src="https://www.youtube.com/embed/2kB3Q_XfMMY" title="Fundamentos contables y clasificación documental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
