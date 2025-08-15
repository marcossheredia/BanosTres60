<script setup>
import imgTraccion1 from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7398.webp'
import imgTraccion2 from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7401.webp'
import imgMetal1    from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7384.webp'
import imgMetal2    from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7391.webp'
</script>


<template>
    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='src/assets/imagenes/Grifos/Gr 1/1.1.JPG'
            alt="Descripción de la imagen 1"
            height="300"
            contain
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>Plato 1.1.1 MODELO XZY</h2>
            <p>
              Plato de ducha cojonudo.  
              Duchate y experimenta como cae el agua en el plato de ducha.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= 'src/assets/imagenes/Grifos/Gr 1/1.2.JPG'
            alt="Descripción de la imagen 2"
            height="300"
            contain
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= 'src/assets/imagenes/Grifos/Gr 1/1.3.JPG'
            alt="Descripción de la imagen 3"
            height="300"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

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
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
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
    padding: 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .consulta-section {
    padding-bottom: 3rem;
  }
}
</style>
