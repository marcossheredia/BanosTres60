<script setup>
import oficina from '@/assets/imagenes/sobreNosotros/bañoG.jpg'
import piezas from '@/assets/imagenes/sobreNosotros/bañoG2.jpg'
import vistaTaller from '@/assets/imagenes/sobreNosotros/bañoG3.jpg'
</script>

<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Sobre Nosotros</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Sección 1 -->
    <v-row align="center" class="mb-10 flex-wrap-reverse" style="background-color: #f9f9f9;">
      <v-col cols="12" md="7">
        <p class="subtitle">
          En <b>Bañostres60</b> creemos que un baño no es solo un espacio funcional, sino un lugar de confort y bienestar. 
          Tras una larga experiencia en el sector de las reformas, decidimos especializarnos en lo que fue nuestro origen: 
          <b>las reformas integrales de baños</b>. Hoy ofrecemos soluciones modernas y personalizadas, siempre con la máxima calidad 
          y atención al detalle.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="oficina" class="image" height="350" width="100%" cover />
      </v-col>
    </v-row>

    <!-- Sección 2 -->
    <v-row align="center" class="mb-10" style="background-color: #f9f9f9;">
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="vistaTaller" class="image" height="350" width="100%" cover />
      </v-col>
      <v-col cols="12" md="7">
        <p class="subtitle" style="text-align: right;">
          Ofrecemos una amplia variedad de opciones: <b>platos de ducha de resina</b> en distintos colores, 
          duchas a ras de suelo, <b>grifería empotrada y termostática</b> con acabados de última tendencia, 
          así como mamparas, espejos, mobiliario a medida y accesorios exclusivos.  
          También integramos <b>WC inteligentes</b> y soluciones adaptadas a personas con movilidad reducida, 
          logrando baños seguros, accesibles y con estilo.
        </p>
      </v-col>
    </v-row>

    <!-- Sección 3 -->
    <v-row align="center" class="mb-12 flex-wrap-reverse last-section" style="background-color: #f9f9f9;">
      <v-col cols="12" md="7">
        <p class="subtitle">
          Nuestra misión es acompañarte en cada paso de la reforma: desde la elección de materiales hasta el diseño final, 
          aportando <b>asesoramiento profesional</b> y soluciones prácticas que se ajusten a tu presupuesto.  
          Gracias a nuestra experiencia y a un equipo especializado, nos hemos consolidado como una <b>empresa de referencia</b> 
          en el sector, ofreciendo siempre innovación, confianza y resultados que superan expectativas.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="piezas" class="image" height="350" width="100%" cover />
      </v-col>
    </v-row>

    <!-- Sección contacto -->
    <section class="consulta-section">
      <div class="consulta-container">
        <h3 class="consulta-title mb-4">¿Tienes alguna consulta?</h3>
        <router-link to="/contacto">
          <button class="contact-button">Contáctanos</button>
        </router-link>
      </div>
    </section>
  </v-container>
</template>

<style scoped>
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: bold;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
}

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.image {
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  max-width: 100%;
  object-fit: cover;
}

.consulta-section {
  padding: 3rem 1rem;
  text-align: center;
  border-radius: 8px;
}

.consulta-container {
  margin: 0 auto;
}

.consulta-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
}

.contact-button {
  font-size: 1rem;
  background-color: #808990;
  color: #fff;
  padding: 0.6rem 2rem;
  border: 2px solid #f6911d;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Segoe UI', Calibri, sans-serif;
}

.contact-button:hover {
  background-color: #6b7379;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .image {
    height: 250px !important;
    width: 90% !important;
    margin: 0 auto;
  }

  .subtitle {
    text-align: center !important;
    padding: 0 0rem;
  }

  .title {
    font-size: 2rem;
  }

  .last-section {
    margin-bottom: 0rem !important;
  }

  .consulta-section {
    padding-bottom: 3rem;
  }
}
</style>
