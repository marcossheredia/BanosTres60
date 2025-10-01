<script setup>
import { ref, onMounted } from 'vue';


import img1 from '@/assets/imagenes/Grifos/Gr 1/1.1.JPG'
import img2 from '@/assets/imagenes/Grifos/Gr 1/1.2.JPG'
import img3 from '@/assets/imagenes/Grifos/Gr 1/1.3.JPG'

import img4 from '@/assets/imagenes/Grifos/Gr 2/2.1.JPG'
import img5 from '@/assets/imagenes/Grifos/Gr 2/2.2.JPG'
import img6 from '@/assets/imagenes/Grifos/Gr 2/2.3.JPG'

import img7 from '@/assets/imagenes/Grifos/3.1.JPG'
import img8 from '@/assets/imagenes/Grifos/3.2.JPG'
import img9 from '@/assets/imagenes/Grifos/3.3.JPG'

import img10 from '@/assets/imagenes/Grifos/4.1.JPG'
import img11 from '@/assets/imagenes/Grifos/4.2.JPG'
import img12 from '@/assets/imagenes/Grifos/4.3.JPG'

import img13 from '@/assets/imagenes/Grifos/5.1.PNG'
import img14 from '@/assets/imagenes/Grifos/5.2.PNG'
import img15 from '@/assets/imagenes/Grifos/5.3.PNG'

import img16 from '@/assets/imagenes/Grifos/6.1.PNG'
import img17 from '@/assets/imagenes/Grifos/6.2.PNG'
import img18 from '@/assets/imagenes/Grifos/6.3.PNG'

import img19 from '@/assets/imagenes/Grifos/7.1.PNG'
import img20 from '@/assets/imagenes/Grifos/7.2.PNG'
import img21 from '@/assets/imagenes/Grifos/7.3.PNG'

import img22 from '@/assets/imagenes/Grifos/7.1.PNG'
import img23 from '@/assets/imagenes/Grifos/7.2.PNG'
import img24 from '@/assets/imagenes/Grifos/7.3.PNG'

import img25 from '@/assets/imagenes/Grifos/8.1.PNG'
import img26 from '@/assets/imagenes/Grifos/8.2.PNG'
import img27 from '@/assets/imagenes/Grifos/8.3.PNG'


const dialog = ref(false)
const selectedImage = ref(null)

function openImage(img) {
  selectedImage.value = img
  dialog.value = true
}

// Optimizar para SEO
onMounted(() => {
  document.title = 'Bañostres60';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      'Servicio profesional de soldadura industrial, soldadura MIG MAG robotizada, acero inoxidable, brazing y tratamiento de metales. Tecnología puntera y optimización de procesos industriales.'
    );
  }
});
</script>

<template>
  <v-sheet class="servicios-header py-8" color="#f5f5f5">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">GRIFOS DE LAVABO</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img1"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img1)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO SIRIO</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 25 mm cold-start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img2"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img2)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img3"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img3)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img4"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img4)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO HELIOS</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 25 mm cold-start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img5"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img5)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img6"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img6)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img7"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img7)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO MARRIOT</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 25 mm cold-start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img8"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img8)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img9"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img9)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img10"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img10)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO CASSIO</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 25 mm cold-start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img11"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img11)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img12"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img12)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img13"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img13)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO TARSIO</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 26 mm
              Limitador de caudal ecológico 5 L/min
              Latiguillos 3/8” CE
              Maneta integrada
              Aireador Neoperl
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img14"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img14)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img15"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img15)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img16"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img16)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO MIO</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 25 mm cold-start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img17"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img17)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img18"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img18)"
        />
      </v-col>
    </v-row>
  </v-container>

      <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img19"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img19)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO SION</h2>
            <p>
              Grifería en latón cromado
              Cartucho cerámico 35 mm cold start
              Limitador de caudal ecológico 5 L/min
              Aireador Neoperl
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img20"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img20)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img21"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img21)"
        />
      </v-col>
    </v-row>
  </v-container>

      <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img22"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img22)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO ORION</h2>
            <p>
              Grifería en latón cromado
              Cartucho cerámico 25 mm
              Latiguillos 3/8” CE
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img23"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img23)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img24"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img24)"
        />
      </v-col>
    </v-row>
  </v-container>

      <!--BLOQUE-->
  <v-container class="py-8">
    <v-row>
      <!-- Arriba izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img25"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img25)"
        />
      </v-col>

        <!-- Arriba derecha: texto/información -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO RHIO</h2>
            <p>
              Grifería en latón
              Cartucho cerámico 35 mm
              Limitador de caudal ecológico 5 L/min
              Latiguillos 3/8” CE
              Aireador Neoperl
            </p>
          </div>
      </v-col>

        <!-- Abajo izquierda: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img26"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img26)"
        />
      </v-col>

        <!-- Abajo derecha: imagen -->
      <v-col cols="12" md="6">
        <v-img
          :src="img27"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img27)"
        />
      </v-col>
    </v-row>
  </v-container>

  

<v-dialog v-model="dialog" max-width="800px">
  <v-card>
    <v-img :src="selectedImage" height="500" contain />
  </v-card>
</v-dialog>
    
</template>


<style scoped>
/* ===========================
   Grifos Lavabo – Estilos
   Paleta cian (con fallbacks)
   =========================== */
:host, .servicios-header {
  --primary: var(--color-primary, #00bcd4);
  --primary-dark: var(--color-primary-dark, #0097a7);
  --primary-light: var(--color-primary-light, #b2ebf2);
  --text: var(--color-text, #1f2a33);
  --muted: var(--color-text-light, #606c78);
  --surface: var(--color-surface, #ffffff);
  --bg: var(--color-bg, #f7fafb);
}

/* Tira superior con título */
.servicios-header {
  background: var(--surface); /* fondo limpio sin degradado */
  border-bottom: 1px solid rgba(0,0,0,.06);
  padding-block: clamp(24px, 5vw, 48px) !important;
}

.servicios-header h1 {
  position: relative;
  color: var(--primary-dark);
  letter-spacing: .4px;
  text-transform: uppercase;
}

/* Subrayado decorativo cian */
.servicios-header h1::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  border-radius: 2px;
  background: var(--primary);
}

/* Intro (parrafito bajo el título) */
.servicios-intro {
  line-height: 1.8;
  color: var(--muted);
  margin: 1.2rem auto 0;
  text-align: center;
}

/* Contenedores por bloque */
.py-8 {
  padding-block: clamp(24px, 6vw, 56px) !important;
}

/* Tarjeta de texto a la derecha de la imagen */
.pa-4.text-center {
  background: var(--surface);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 16px;
  padding: clamp(14px, 2vw, 22px) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,.06);
}
.pa-4.text-center h2 {
  margin: 0 0 8px;
  color: #00bcd4;
  font-weight: 800;
  letter-spacing: .2px;
}
.pa-4.text-center p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

/* Imágenes (Vuetify v-img) */
.cursor-pointer { cursor: pointer; }
:deep(.v-img) {
  border-radius: 16px;
  background: var(--surface);
  box-shadow: 0 10px 28px rgba(0,0,0,.08);
  transition: transform .22s ease, box-shadow .22s ease;
}
:deep(.v-img:hover) {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 16px 36px rgba(0,0,0,.10);
}

/* Opcional: guías suaves entre bloques */
.v-container + .v-container {
  border-top: 1px dashed rgba(0,0,0,.06);
}

/* Impresión: ocultar elementos decorativos */
@media print {
  .servicios-header { display: none; }
}
</style>


