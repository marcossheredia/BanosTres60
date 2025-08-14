<script setup>
// Componente de servicios ofrecidos
// Datos para los pasos del proceso
const steps = [
  {
    title: 'Estudio y evaluación<br />del proyecto',
    content: 'Se estudian las características del elemento y barajamos las diferentes posibilidades, en función de especificaciones como resistencia, productividad, coste y calidad.'
  },
  {
    title: 'Desarrollo',
    content: 'Procedemos a ir dando forma en etapas consecutivas a plantillas, útiles, maquetas con las características técnicas propias de cada soldadura.'
  },
  {
    title: 'Puesta en marcha',
    content: 'Una vez tengamos el utillaje se hacen las pruebas previas dirigidas a resolver las dificultades que en la practica puedan surgir y una vez solucionada nos dará el proceso definitivo.'
  },
  {
    title: 'Prototipos',
    content: 'Si fuera necesario se procederá a realizar con medios manuales o semi-automáticos <strong>prototipos</strong> para simular el producto final.'
  },
  {
    title: 'Pre - Serie',
    content: 'A partir del prototipo realizaremos la primera pre serie de unidades limitadas donde se verifica la validez de todo el proceso.'
  },
  {
    title: 'Industrialización final',
    content: 'Llegado a este punto y solventado con éxito los cánones de calidad y costes procedemos a sellar el proceso para la <strong>soldadura en serie</strong>.'
  }
];
</script>

<template>
<div>
  <!--
    <v-container class="servicios-container">
      <v-sheet class="process-section" id="asi-funciona" color="transparent">
        <div class="title-container">
          <h2 class="section-title">Así Funciona</h2>
        </div>
        
        <v-row class="process-steps">
          <v-col v-for="(step, index) in steps" :key="index" cols="12" sm="6" md="4">
            <v-card 
              class="step" 
              elevation="4" 
              :style="{ borderLeft: '5px solid #F6911D' }"
              height="100%"
            >
              <v-card-item>
                <header>
                  <h3 v-html="step.title"></h3>
                </header>
                <p v-html="step.content"></p>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  -->
</div>
</template>

<style scoped>
/* Variables */
:root {
  --text-color: #000000;
  --background-color: #FFFFFF;
  --secondary-color: #808990;
  --step-background: #F9F9F9;
  --border-radius: 12px;
  --spacing-unit: 1rem;
  --transition-speed: 0.3s;
  --primary-color: #F6911D;
}

/* Base styles */
.servicios-container {
  max-width: 1200px;
  margin: 0 auto;
}

.title-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: calc(var(--spacing-unit) * 3);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: calc(var(--spacing-unit) * 2);
  position: relative;
  display: inline-block;
  text-align: center;
  letter-spacing: -0.02em;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -1px;
  width: 100px;
  height: 4px;
  background-color: var(--primary-color);
}

.process-section {
  margin-top: calc(var(--spacing-unit) * 5);
}

.process-steps {
  perspective: 1000px;
}

/* Estilo de tarjetas */
.step {
  background-color: var(--step-background);
  border-radius: var(--border-radius);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  min-height: 240px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(to right, rgba(246, 145, 29, 0.03) 0%, rgba(246, 145, 29, 0) 15%);
}

.step:hover {
  transform: translateY(-4px) scale(1.01);
}

.step h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: calc(var(--spacing-unit) * 1.5);
  font-weight: 600;
  text-align: center;
  width: 100%;
  position: relative;
  padding-bottom: 0.8rem;
  letter-spacing: -0.01em;
}

.step h3::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
  opacity: 0.5;
  border-radius: 1px;
}

.step p {
  margin: 0 auto;
  color: var(--text-color);
  max-width: 85%;
  text-align: center;
  line-height: 1.7;
  font-size: 1.05rem;
}

.step header {
  width: 100%;
  text-align: center;
  margin-bottom: var(--spacing-unit);
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .step {
    min-height: 200px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.9rem;
  }
  
  .step h3 {
    font-size: 1.3rem;
  }
  
  .step {
    min-height: 180px;
  }
  
  .step p {
    font-size: 1rem;
    max-width: 95%;
    line-height: 1.6;
  }
  
  /* Animación de entrada para móviles */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .step {
    animation: fadeInUp 0.5s ease-out forwards;
    opacity: 0;
  }
  
  /* Retrasar la animación para cada elemento */
  .process-steps .v-col:nth-child(1) .step { animation-delay: 0.1s; }
  .process-steps .v-col:nth-child(2) .step { animation-delay: 0.2s; }
  .process-steps .v-col:nth-child(3) .step { animation-delay: 0.3s; }
  .process-steps .v-col:nth-child(4) .step { animation-delay: 0.4s; }
  .process-steps .v-col:nth-child(5) .step { animation-delay: 0.5s; }
  .process-steps .v-col:nth-child(6) .step { animation-delay: 0.6s; }
}
</style>