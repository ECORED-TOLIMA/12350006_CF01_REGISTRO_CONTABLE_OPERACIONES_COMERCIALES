<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Explorando el ciclo contable.',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar la comprensión de los conceptos básicos de contabilidad desarrollados en el componente, incluyendo el concepto e importancia de la información financiera, la definición y aplicación de políticas contables, los tipos de cuentas y la estructura del Plan Único de Cuentas (PUC), así como la identificación y uso de documentos comerciales y comprobantes contables.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La contabilidad solo sirve como una obligación legal y no tiene utilidad para la toma de decisiones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! ¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una empresa es una unidad económica y social organizada para producir bienes o servicios.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Según la Ley Mipymes, las empresas en Colombia se clasifican solo por su número de empleados.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una Sociedad por Acciones Simplificada (S.A.S.) es una de las formas más flexibles de constitución empresarial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Las empresas públicas son aquellas cuyo capital pertenece exclusivamente a particulares.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La contabilidad permite identificar, registrar y clasificar los hechos económicos de una organización.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Entre las funciones de la contabilidad está brindar información útil para la gestión administrativa.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La contabilidad financiera está orientada principalmente a usuarios internos de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El ciclo contable incluye la recolección de documentos, codificación, registro y elaboración de estados financieros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Los soportes contables son documentos que respaldan las operaciones económicas de la empresa.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Un recibo de caja menor es un soporte contable interno.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La partida doble establece que por cada débito debe existir un crédito del mismo valor.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En una cuenta T, el lado izquierdo corresponde al crédito y el lado derecho al débito.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Las cuentas de naturaleza débito, como los activos, aumentan cuando se registran en el debe.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Los pasivos y el patrimonio son cuentas de naturaleza crédito.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El Plan Único de Cuentas (PUC) sirve para estandarizar la contabilidad en Colombia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El PUC clasifica las cuentas en nueve clases que incluyen activos, pasivos, patrimonio, ingresos y gastos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las cuentas de orden no afectan directamente los estados financieros de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La contabilidad de costos se utiliza para registrar únicamente las operaciones con proveedores.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La correcta aplicación del ciclo contable permite elaborar estados financieros confiables',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
