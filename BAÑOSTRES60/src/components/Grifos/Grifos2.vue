<script setup>

defineOptions({
  name: 'Grifos2View'
})

import { ref } from 'vue'

// 👇 Aquí importas tus imágenes, solo cambia la ruta a la que quieras
import img1 from '../../assets/imagenes/Grifos_ducha/1.1.png'
import img2 from '../../assets/imagenes/Grifos_ducha/1.2.png'
import img3 from '../../assets/imagenes/Grifos_ducha/2.1.png'
import img4 from '../../assets/imagenes/Grifos_ducha/2.2.png'
import img5 from '../../assets/imagenes/Grifos_ducha/3.1.png'
import img6 from '../../assets/imagenes/Grifos_ducha/3.2.png'
import img7 from '../../assets/imagenes/Grifos_ducha/4.1.png'
import img8 from '../../assets/imagenes/Grifos_ducha/4.2.png'
import img11 from '../../assets/imagenes/Grifos_ducha/5.2.png'
import img12 from '../../assets/imagenes/Grifos_ducha/5.3.png'
import img13 from '../../assets/imagenes/Grifos_ducha/5.4.png'
import img14 from '../../assets/imagenes/Grifos_ducha/5.5.png'


import img15 from '../../assets/imagenes/Grifos_ducha/6.1.png'
import img16 from '../../assets/imagenes/Grifos_ducha/6.2.png'


import img28 from '../../assets/imagenes/Grifos_ducha/8.1.png'

const dialog = ref(false)
const selectedImage = ref(null)

function openImage(img) {
  selectedImage.value = img
  dialog.value = true
}

</script>


<template>
  <v-sheet class="servicios-header py-8" color="#f5f5f5">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">GRIFOS DE DUCHA</h1>
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
          <h2>GRIFO INVERTER R</h2>
          <p>
            Cuerpo grifería latón
            Barra telescópica Inox 84-136 cm
            Cartucho cerámico 35 mm ‘cold-start’
            Soporte regulable en altura
            Rociador extraplano inox 250 mm c/antical
            Desviador de caudal integrado en la grifería
            Válvula antirretorno
            Incluye opción limit. caudal ecológico 8L/min
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
          <h2>GRIFO INVERTER C</h2>
          <p>
            Cuerpo grifería latón
            Rociador cuadrado Inox extraplano 25x25 cm con antical
            Barra ducha 3x1,5 cm telescópica (80-118 cm)
            Soporte mango regulable en altura
            Flexo PVC antitorsión
            Cartucho termostático 40 mmØ sensor Vernet
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
        <h2>GRIFO QUADRA ÉLITE</h2>
        <p>
          Grifería latón
          Rociador redondo Inox extraplano Ø25 cm con antical
          Barra telescópica (87-118 cm)
          Soporte mango regulable en altura
          Flexo PVC antitorsión
          Cartucho termostático 40 mmØ sensor Vernet
          Mango 3 posiciones c/antical
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
        @click="openImage(img7)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>GRIFO ROUND ELITE</h2>
        <p>
          Grifería latón
          Rociador redondo Inox extraplano Ø25 cm con antical
          Barra telescópica (87-118 cm)
          Soporte mango regulable en altura
          Flexo PVC antitorsión
          Cartucho termostático 40 mmØ sensor Vernet
          Mango 3 posiciones c/antical
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
        @click="openImage(img8)"
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
        @click="openImage(img11)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>TERMOSTÁTICO ORION</h2>
        <p>
          Conjunto de empotrar 2/3 funciones
          Cuerpo grifería en latón
          Caja de registro
          Cartucho termostático con sensor Vernet
          Flexo antitorsión PVC
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
        @click="openImage(img12)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>TERMOSTÁTICO ROUND</h2>
        <p>
          Conjunto de empotrar 2/3 funciones
          Cuerpo grifería en latón
          Caja de registro
          Cartucho termostático con sensor Vernet
          Flexo antitorsión PVC
          Mango 3 posiciones c/antical
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
        @click="openImage(img13)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>MONOMANDO ORION</h2>
        <p>
          Cuerpo grifería en latón
          Caja de registro
          Cartucho cerámico 35 mm sedal
          Flexo antitorsión PVC
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
        @click="openImage(img14)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>MONOMANDO SIRIO</h2>
        <p>
          Cuerpo grifería en latón
          Caja de registro
          Cartucho cerámico 35 mm sedal
          Flexo antitorsión PVC
          Mango 3 posiciones c/antical
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
        @click="openImage(img15)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>SIRIO 1 FUNCIÓN</h2>
        <p>
          Cuerpo grifería en latón
          Cartucho cerámico 35 mm
          Placa Ø135 mm
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
        @click="openImage(img16)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>UNIVERSAL</h2>
        <p>
          Cuerpo grifería en latón
          Placa efecto cristal 139x139 mm
          Caja de registro
          Cartucho cerámico 35 mm
          Flexo PVC antitorsión 1,7 m
          Desviador 2 funciones progresivo
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
        @click="openImage(img28)"
      />
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>CAÑO BAÑERA</h2>
        <p>
          Aireador Neoperl
          Conexión rosca 1/2"
        </p>
      </div>
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

.producto-img {
  max-width: 420px;
  margin: auto;
}

:deep(.v-img__img) {
  object-fit: contain;
}

/* Impresión: ocultar elementos decorativos */
@media print {
  .servicios-header { display: none; }
}

@media (min-width: 960px) {
  .producto-img {
    max-width: 480px;
  }
}

</style>
