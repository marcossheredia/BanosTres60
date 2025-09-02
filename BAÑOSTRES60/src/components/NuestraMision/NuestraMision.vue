<script setup>
</script>

<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Nuestra Misión</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Columnas con textos resumidos -->
    <v-row class="mb-12" align="stretch">
      <v-col cols="12" md="4">
        <p class="subtitle">
          En <b>Bañostres60</b> nos especializamos en el <b>cambio de bañera por plato de ducha</b> 
          y en reformas integrales de baños. Pero nuestra verdadera misión no es solo instalar productos, 
          sino transformar espacios para que sean más cómodos, seguros y funcionales.
        </p>
      </v-col>

      <v-col cols="12" md="5">
        <p class="subtitle">
          Creemos que la calidad no se mide en el número de proyectos realizados, 
          sino en la <b>satisfacción de cada cliente</b>. Por eso, cada reforma que emprendemos la abordamos con un 
          <b>enfoque personalizado</b>, escuchando tus necesidades y adaptándonos a tu estilo de vida.
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <p class="subtitle">
          Nuestro compromiso es contigo: ofrecerte baños modernos, seguros y duraderos.  
          Tu tranquilidad y confianza son nuestro mayor logro, porque para nosotros 
          <b>tu satisfacción es nuestra misión</b>.
        </p>
      </v-col>
    </v-row>

    <!-- Consulta / contacto -->
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
  font-weight: 700;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: left;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.consulta-section {
  padding: 4rem 1rem;
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
</style>
