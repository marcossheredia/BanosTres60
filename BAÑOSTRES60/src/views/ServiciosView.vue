<script setup>
import ServOfrecidos from '@/components/Servicios/ServOfrecidos.vue';
import ServiciosIndustriales from '@/components/Servicios/ServiciosIndustriales.vue';
import { onMounted } from 'vue';

// Optimizar para SEO
onMounted(() => {
  // Actualizar el título de la página
  document.title = 'Bañostres60';
  
  // Agregar meta descripción para SEO
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Servicio profesional de soldadura industrial, soldadura MIG MAG robotizada, acero inoxidable, brazing y tratamiento de metales. Tecnología puntera y optimización de procesos industriales.');
  }
});
</script>

<template>
  <!-- Sección hero con imagen de fondo -->
  <!--
  <v-parallax
    src="/src/assets/imagenes/Grifos/cabeceraGrifos.jpg"
    height="350"
    alt="Soldadura MIG MAG robotizada de alta precisión en instalaciones industriales"
    class="hero-image-section"
    contain
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="#F6911D"></v-progress-circular>
      </v-row>
    </template>
    <div class="overlay"></div>
  </v-parallax>
  -->
  <!-- Contenedor principal de la vista de servicios -->
  <v-sheet class="servicios-header py-8" color="#f5f5f5">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">TITULO GRIFOS</h1>
        </v-col>
        <v-col cols="12" md="10" lg="8">
          <p class="servicios-intro text-body-1">
            Grifos <strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  
  <!-- Componente de servicios industriales (con galería) -->
  <v-container>
    <ServiciosIndustriales />
  </v-container>
  
  <!-- Componente de servicios ofrecidos -->
  <v-container class="pb-10">
    <ServOfrecidos />
  </v-container>
</template>

<style scoped>
.hero-image-section {
  position: relative;
  background-color: #333; /* Color fallback si la imagen no carga */
}

/* Overlay para mejorar contraste si se añade texto después */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.servicios-intro {
  line-height: 1.8;
  color: #555;
  margin: 1.5rem auto 0;
  text-align: center;
}

/* Línea decorativa bajo el título */
h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #F6911D;
}

/* Soporte para impresión */
@media print {
  .hero-image-section {
    display: none;
  }
}
</style>

<style scoped>
.hero-image-section {
  position: relative;
  background-color: #333; /* Color fallback si la imagen no carga */
}

/* Overlay para mejorar contraste si se añade texto después */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.servicios-intro {
  line-height: 1.8;
  color: #555;
  margin: 1.5rem auto 0;
}

/* Línea decorativa bajo el título */
h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #F6911D;
}

/* Soporte para impresión */
@media print {
  .hero-image-section {
    display: none;
  }
}
</style>
