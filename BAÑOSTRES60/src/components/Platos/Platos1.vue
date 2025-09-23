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

  <!-- Contenedor principal de la vista de servicios -->
  <v-sheet class="servicios-header py-8" color="#f5f5f5">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">GRIFOS LAVABO</h1>
        </v-col>
        <v-col cols="12" md="10" lg="8">
          <p class="servicios-intro text-body-1">
            Grifos <strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.1.JPG"
            alt="Descripción de la imagen 1"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.1.JPG')"
          />
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
            src="src/assets/imagenes/Grifos/Gr 1/1.2.JPG"
            alt="Descripción de la imagen 2"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.2.JPG')"
          />
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.3.JPG"
            alt="Descripción de la imagen 3"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.3.JPG')"
          />
        </v-col>
      </v-row>
    </v-container>

      
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.1.JPG"
            alt="Descripción de la imagen 1"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.1.JPG')"
          />
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
            src="src/assets/imagenes/Grifos/Gr 1/1.2.JPG"
            alt="Descripción de la imagen 2"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.2.JPG')"
          />
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.3.JPG"
            alt="Descripción de la imagen 3"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.3.JPG')"
          />
        </v-col>
      </v-row>
    </v-container>
    
</template>
<style scoped>
:host{
  --nav-bg:#0D3642;     /* azul corporativo */
  --accent:#00BCD4;     /* cian */
  --accent-2:#58B7AE;   /* verde-agua */
  --orange:#F6911D;     /* naranja detalle */
  --ink:#23424a;        /* texto sobre fondos claros */
}

/* ====== CABECERA / HERO ====== */
.servicios-header{
  background:#f5f7f8 !important;
  border-bottom: 1px solid rgba(0,0,0,.06);
}
h1{
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  color: var(--nav-bg);
  letter-spacing:.3px;
}
h1::after{
  content:'';
  position:absolute;
  left:50%; bottom:-10px;
  transform: translateX(-50%);
  width:100px; height:4px;
  border-radius:3px;
  background: var(--orange);
}

/* ====== INTRO ====== */
.servicios-intro{
  line-height: 1.8;
  color: var(--ink);
  margin: 1.5rem auto 0;
  text-align: center;
  background: #ffffff;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  box-shadow: 0 8px 20px rgba(0,0,0,.05);
}

/* ====== BLOQUES IMAGEN / TEXTO ====== */
.cursor-pointer{ cursor: pointer; }

.pa-4.text-center{
  background:#ffffff;
  border-radius:14px;
  box-shadow: 0 10px 24px rgba(0,0,0,.06);
  border: 1px solid rgba(0,0,0,.04);
}
.pa-4.text-center h2{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: var(--nav-bg);
  margin-bottom:.25rem;
}
.pa-4.text-center p{
  color: var(--ink);
  margin:0;
}

/* Imagenes Vuetify: bordes suaves + sombra sutil */
:deep(.v-img){
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,.06);
  background:#fafafa;
  overflow:hidden;
  transition: transform .25s ease, box-shadow .25s ease;
}
:deep(.v-img:hover){
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0,0,0,.10);
}

/* ====== PRINT ====== */
@media print{
  .servicios-header{ display:none; }
}

/* ====== RESPONSIVE ====== */
@media (max-width: 960px){
  .servicios-intro{ padding: .9rem 1rem; }
  :deep(.v-img){ box-shadow: 0 6px 16px rgba(0,0,0,.05); }
}
@media (max-width: 600px){
  h1{ font-size: 1.8rem; }
}
</style>
