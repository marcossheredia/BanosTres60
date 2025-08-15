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
            <h2>GRIFO 1.1.1 MODELO XZY</h2>
            <p>
              Grifo que suelta agua de mi casa.  
              Funciona de forma muy correcta levantas y sale agua.
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

<script setup>
// Sin lógica
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: bold;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.texto-box {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.descripcion-industria {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
}

.imagen-wrapper {
  background-color: #f5f5f5;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: block;
  width: 100%;
}

.imagen-industria {
  border-radius: 8px;
  width: 100%;
  height: 23rem;
  object-fit: cover;
  display: block;
}
</style>
