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
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">ESPEJOS</h1>
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
:host{
  --primary: #00bcd4;        /* cian corporativo */
  --primary-dark:#0097a7;
  --text:#0b3340;
  --muted:#23424a;
  --bg:#f6f8f8;
}

/* Header / título */
.servicios-header{
  background: linear-gradient(180deg,#eef8fa, #ffffff);
  border-bottom: 1px solid rgba(0,0,0,.06);
}
h1{
  position: relative;
  color: var(--text);
  letter-spacing:.5px;
}
h1::after{
  content:'';
  position:absolute;
  bottom:-10px;
  left:50%;
  transform:translateX(-50%);
  width:120px;
  height:4px;
  border-radius:2px;
  background: var(--primary);
}

/* Bloques y tipografía */
.v-container.py-8{ padding-top:clamp(24px,4vw,56px) !important; padding-bottom:clamp(24px,4vw,56px) !important; }
.pa-4.text-center h2{
  color: var(--text);
  font-weight:700;
  margin-bottom:.25rem;
}
.pa-4.text-center p{
  color: var(--muted);
  margin:0;
  line-height:1.6;
}

/* Imágenes */
.v-col :deep(.v-img){
  border-radius:14px;
  box-shadow: 0 10px 24px rgba(0,0,0,.08);
  transition: transform .25s ease, box-shadow .25s ease;
  background:#fff;
}
.v-col :deep(.v-img:hover){
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(0,0,0,.12);
}
.cursor-pointer{ cursor:pointer; }

/* Fila con imagen centrada (las segundas filas de cada bloque) */
.d-flex.justify-center :deep(.v-img){
  max-width: min(920px, 100%);
  width: 100%;
  border-radius: 14px;
}

/* Diálogo de imagen */
:deep(.v-dialog .v-card){
  border-radius:16px;
  box-shadow: 0 18px 48px rgba(0,0,0,.25);
}
:deep(.v-dialog .v-img){
  background:#000; /* mejor percepción de bordes en imágenes PNG */
}
:deep(.v-dialog .v-card-actions){
  padding: 8px 16px;
  border-top: 1px solid rgba(0,0,0,.06);
}

/* Botón “Cerrar” (color primario cian) */
:deep(.v-btn.v-btn--variant-flat){
  background: var(--primary) !important;
  color:#fff !important;
}
:deep(.v-btn.v-btn--variant-flat:hover){
  background: var(--primary-dark) !important;
}

/* Separadores entre bloques (opcional, sutil) */
.v-container + .v-container{
  border-top:1px solid rgba(0,0,0,.05);
}

/* Responsive */
@media (max-width: 960px){
  .pa-4.text-center{ padding: 8px !important; }
}
@media (max-width: 600px){
  h1::after{ width:90px; }
  .pa-4.text-center h2{ font-size:1.1rem; }
}
</style>

