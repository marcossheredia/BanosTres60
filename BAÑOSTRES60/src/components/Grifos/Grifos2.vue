<script setup>
import { ref, onMounted } from 'vue';

// 👇 Aquí importas tus imágenes, solo cambia la ruta a la que quieras
import img1 from '@/assets/imagenes/Grifos_ducha/1.1.PNG'
import img2 from '@/assets/imagenes/Grifos_ducha/1.2.PNG'
import img3 from '@/assets/imagenes/Grifos_ducha/2.1.PNG'
import img4 from '@/assets/imagenes/Grifos_ducha/2.2.PNG'
import img5 from '@/assets/imagenes/Grifos_ducha/3.1.PNG'
import img6 from '@/assets/imagenes/Grifos_ducha/3.2.PNG'
import img7 from '@/assets/imagenes/Grifos_ducha/4.1.PNG'
import img8 from '@/assets/imagenes/Grifos_ducha/4.2.PNG'
import img11 from '@/assets/imagenes/Grifos_ducha/5.2.PNG'
import img12 from '@/assets/imagenes/Grifos_ducha/5.3.PNG'
import img13 from '@/assets/imagenes/Grifos_ducha/5.4.PNG'
import img14 from '@/assets/imagenes/Grifos_ducha/5.5.PNG'


import img15 from '@/assets/imagenes/Grifos_ducha/6.1.PNG'
import img16 from '@/assets/imagenes/Grifos_ducha/6.2.PNG'

import img17 from '@/assets/imagenes/Grifos_ducha/7.1.PNG'
import img18 from '@/assets/imagenes/Grifos_ducha/7.2.PNG'
import img19 from '@/assets/imagenes/Grifos_ducha/7.3.PNG'
import img20 from '@/assets/imagenes/Grifos_ducha/7.4.PNG'
import img21 from '@/assets/imagenes/Grifos_ducha/7.5.PNG'
import img22 from '@/assets/imagenes/Grifos_ducha/7.6.PNG'
import img23 from '@/assets/imagenes/Grifos_ducha/7.7.PNG'
import img24 from '@/assets/imagenes/Grifos_ducha/7.8.PNG'
import img25 from '@/assets/imagenes/Grifos_ducha/7.9.PNG'
import img26 from '@/assets/imagenes/Grifos_ducha/7.10.PNG'
import img27 from '@/assets/imagenes/Grifos_ducha/7.11.PNG'

import img28 from '@/assets/imagenes/Grifos_ducha/8.1.PNG'
import img29 from '@/assets/imagenes/Grifos_ducha/8.2.PNG'

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
          <h2>GRIFO 1.1.1 MODELO XZY</h2>
          <p>
            Grifo que suelta agua de mi casa.  
            Funciona de forma muy correcta levantas y sale agua.
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
          @click="openImage(img1)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>GRIFO 1.1.1 MODELO XZY</h2>
          <p>
            Grifo que suelta agua de mi casa.  
            Funciona de forma muy correcta levantas y sale agua.
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
        :src="img5"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
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
        @click="openImage(img2)"
      />
    </v-col>
  </v-row>
</v-container>

<!-- Segundo bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img7"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
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
        @click="openImage(img2)"
      />
    </v-col>
  </v-row>
</v-container>

<!-- Tercer bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img11"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<!-- Cuarto bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img12"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<!-- Quinto bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img13"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<!-- Sexto bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img14"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<!-- Sexto bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img15"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<!-- Sexto bloque -->
<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img16"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img28"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img29"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img17"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img18"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img19"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img20"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img21"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img22"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img23"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img24"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img25"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container class="py-8">
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img26"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img1)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO 1.1.1 MODELO XZY</h2>
        <p>
          Grifo que suelta agua de mi casa.  
          Funciona de forma muy correcta levantas y sale agua.
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

  <v-dialog v-model="dialog" max-width="800px" persistent>
    <v-card>
      <v-img :src="selectedImage" height="500" contain />
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/* ===========================
   Grifos Ducha – Estilos
   Paleta cian con fallbacks
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

/* Cabecera con título */
.servicios-header {
  background: linear-gradient(180deg, rgba(0,188,212,.10), rgba(0,188,212,0));
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

/* Intro bajo el título */
.servicios-intro {
  line-height: 1.8;
  color: var(--muted);
  margin: 1.2rem auto 0;
  text-align: center;
}

/* Espaciado por bloque */
.py-8 {
  padding-block: clamp(24px, 6vw, 56px) !important;
}

/* Tarjetita de texto al lado de la imagen */
.pa-4.text-center {
  background: var(--surface);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 16px;
  padding: clamp(14px, 2vw, 22px) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,.06);
}
.pa-4.text-center h2 {
  margin: 0 0 8px;
  color: var(--text);
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

/* Separadores sutiles entre contenedores */
.v-container + .v-container {
  border-top: 1px dashed rgba(0,0,0,.06);
}

/* Diálogo (ampliar imagen) y botón primario con color de marca */
:deep(.v-dialog .v-card) {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.22);
}
:deep(.v-dialog .v-card-actions) {
  border-top: 1px solid rgba(0,0,0,.06);
  padding: 12px 16px;
}
:deep(.v-btn[color="primary"]) {
  background: var(--primary) !important;
  color: #fff !important;
}
:deep(.v-btn[color="primary"]:hover) {
  background: var(--primary-dark) !important;
}

/* Impresión: oculta cabecera/diálogo */
@media print {
  .servicios-header { display: none; }
  :deep(.v-dialog) { display: none !important; }
}
</style>
