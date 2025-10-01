PEJOESPEJO<script setup>
import { ref, onMounted } from 'vue';

import img1 from '@/assets/imagenes/MamparasPlega/1.1.PNG'
import img2 from '@/assets/imagenes/MamparasPlega/1.2.PNG'

import img3 from '@/assets/imagenes/MamparasPlega/1.3.PNG'
import img4 from '@/assets/imagenes/MamparasPlega/1.4.PNG'

import img5 from '@/assets/imagenes/MamparasPlega/1.5.PNG'
import img6 from '@/assets/imagenes/MamparasPlega/1.6.PNG'

import img7 from '@/assets/imagenes/MamparasPlega/1.7.PNG'
import img8 from '@/assets/imagenes/MamparasPlega/1.8.PNG'

import img9 from '@/assets/imagenes/MamparasPlega/1.9.PNG'
import img10 from '@/assets/imagenes/MamparasPlega/1.10.PNG'

import img11 from '@/assets/imagenes/MamparasPlega/1.11.PNG'
import img12 from '@/assets/imagenes/MamparasPlega/1.12.PNG'

import img13 from '@/assets/imagenes/MamparasPlega/1.13.PNG'
import img14 from '@/assets/imagenes/MamparasPlega/1.14.PNG'

import img15 from '@/assets/imagenes/MamparasPlega/1.15.PNG'
import img16 from '@/assets/imagenes/MamparasPlega/1.16.PNG'

import img17 from '@/assets/imagenes/MamparasPlega/1.17.PNG'
import img18 from '@/assets/imagenes/MamparasPlega/1.18.PNG'

import img19 from '@/assets/imagenes/MamparasPlega/1.19.PNG'
import img20 from '@/assets/imagenes/MamparasPlega/1.20.PNG'

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
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">MAMPARAS PLEGABLES</h1>
        </v-col>
        <v-col cols="12" md="10" lg="8">
          
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>GLASS PLEGABLE</h2>
          <p>
            COMBI 1 con cierre imán a pared  
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img2"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img2)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>GLASS PLEGABLE</h2>
          <p>
            COMBI 2 con cierre perfil imán
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img4"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img4)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>GLASS PLEGABLE</h2>
          <p>
            + lat. fijo
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img6"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img6)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>AKORD</h2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img8"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img8)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>AKORD</h2>
          <p>
            + Lateral fijo STD
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img10"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img10)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>SPAZIO COMBI A</h2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img12"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img12)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>SPAZIO COMBI A</h2>
          <p>
            + Lateral fijo
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img14"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img14)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>SPAZIO COMBI B</h2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img16"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img16)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>SPAZIO COMBI B</h2>
          <p>
            + Lateral fijo
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img18"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img18)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>TANDEM fijo</h2>
          <p>
            + corredera y plegableo.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img20"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img20)"
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
   Espejos1 – Estilos de página
   Tema basado en cian (logo)
   =========================== */

:host, .servicios-header, .py-8, .v-container {
  --primary: var(--color-primary, #00bcd4);
  --primary-dark: var(--color-primary-dark, #0097a7);
  --primary-light: var(--color-primary-light, #b2ebf2);
  --bg: var(--color-bg, #f7fafb);
  --surface: var(--color-surface, #ffffff);
  --text: var(--color-text, #1f2a33);
  --muted: var(--color-text-light, #6b7b85);
}

/* ===== Cabecera (tira superior con título) ===== */
.servicios-header {
  background: var(--surface); /* fondo limpio sin degradado */
  border-bottom: 1px solid rgba(0,0,0,0.06);
  padding-block: clamp(24px, 5vw, 48px) !important;
}

.servicios-header h1 {
  position: relative;
  color: var(--primary-dark);
  letter-spacing: .5px;
  text-transform: uppercase;
}

/* Línea decorativa bajo el H1 */
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

/* ===== Bloques (repetidos) ===== */
.v-container {
  background: transparent;
}

.py-8 {
  padding-block: clamp(24px, 6vw, 56px) !important;
}

/* Títulos de cada espejo */
h2 {
  color: #00bcd4;
  font-weight: 800;
  letter-spacing: .2px;
  margin-bottom: 8px;
}

/* Párrafos descriptivos */
p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

/* ===== Imágenes (v-img) ===== */
.cursor-pointer { cursor: pointer; }

:deep(.v-img) {
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  background: var(--surface);
  transition: transform .22s ease, box-shadow .22s ease;
}

:deep(.v-img:hover) {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 16px 36px rgba(0,0,0,0.10);
}

/* Altos visuales coherentes */
:deep(.v-img[height="300"]) { aspect-ratio: 4/3; object-fit: cover; }
:deep(.v-img[height="250"]) { aspect-ratio: 16/9; object-fit: contain; }

/* Caja de texto a la derecha de cada imagen */
.pa-4.text-center {
  background: var(--surface);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 16px;
  padding: clamp(14px, 2vw, 22px) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

/* ===== Diálogo de imagen ampliada ===== */
:deep(.v-dialog .v-card) {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.22);
}

:deep(.v-dialog .v-card-actions) {
  border-top: 1px solid rgba(0,0,0,0.06);
  padding: 12px 16px;
}

/* Botón Cerrar (color de marca) */
:deep(.v-btn[color="primary"]) {
  background: var(--primary) !important;
  color: #fff !important;
}
:deep(.v-btn[color="primary"]:hover) {
  background: var(--primary-dark) !important;
}

/* ===== Separadores sutiles entre bloques ===== */
.v-container + .v-container {
  border-top: 1px dashed rgba(0,0,0,0.06);
}

/* ===== Soporte de impresión ===== */
@media print {
  .servicios-header { display: none; }
  :deep(.v-dialog) { display: none !important; }
}

/* ===== Responsive ===== */
@media (max-width: 960px) {
  .pa-4.text-center {
    box-shadow: none;
  }
  :deep(.v-img[height="300"]),
  :deep(.v-img[height="250"]) {
    aspect-ratio: auto;
  }
}

/* ===== Detalles opcionales ===== */
/* Dar un pequeño borde al pasar por encima del texto para “clicabilidad” visual */
.pa-4.text-center:hover {
  border-color: rgba(0,188,212,0.25);
}

/* Atenuar muy ligeramente los contenedores para que el ojo descanse entre bloques */
.v-row + .v-row {
  margin-top: 8px !important;
}
</style>


