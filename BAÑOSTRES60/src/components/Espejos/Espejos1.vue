<script setup>
import { ref, onMounted } from 'vue';

import img1 from '@/assets/imagenes/Espejos/1.1.PNG'
import img2 from '@/assets/imagenes/Espejos/1.2.PNG'

import img3 from '@/assets/imagenes/Espejos/2.1.PNG'
import img4 from '@/assets/imagenes/Espejos/2.2.PNG'

import img5 from '@/assets/imagenes/Espejos/3.1.PNG'
import img6 from '@/assets/imagenes/Espejos/3.2.PNG'

import img7 from '@/assets/imagenes/Espejos/4.1.PNG'
import img8 from '@/assets/imagenes/Espejos/4.2.PNG'

import img9 from '@/assets/imagenes/Espejos/5.1.PNG'
import img10 from '@/assets/imagenes/Espejos/5.2.PNG'

import img11 from '@/assets/imagenes/Espejos/6.1.PNG'
import img12 from '@/assets/imagenes/Espejos/6.2.PNG'

import img13 from '@/assets/imagenes/Espejos/7.1.PNG'
import img14 from '@/assets/imagenes/Espejos/7.2.PNG'

import img15 from '@/assets/imagenes/Espejos/8.1.PNG'
import img16 from '@/assets/imagenes/Espejos/8.2.PNG'

import img17 from '@/assets/imagenes/Espejos/9.1.PNG'
import img18 from '@/assets/imagenes/Espejos/9.2.PNG'

import img19 from '@/assets/imagenes/Espejos/10.1.PNG'
import img20 from '@/assets/imagenes/Espejos/10.2.PNG'

import img21 from '@/assets/imagenes/Espejos/11.1.PNG'
import img22 from '@/assets/imagenes/Espejos/11.2.PNG'

import img23 from '@/assets/imagenes/Espejos/12.1.PNG'
import img24 from '@/assets/imagenes/Espejos/12.2.PNG'

import img25 from '@/assets/imagenes/Espejos/13.1.PNG'
import img26 from '@/assets/imagenes/Espejos/13.2.PNG'

import img27 from '@/assets/imagenes/Espejos/14.1.PNG'
import img28 from '@/assets/imagenes/Espejos/14.2.PNG'

import img29 from '@/assets/imagenes/Espejos/15.1.PNG'
import img30 from '@/assets/imagenes/Espejos/15.2.PNG'

import img31 from '@/assets/imagenes/Espejos/16.1.PNG'
import img32 from '@/assets/imagenes/Espejos/16.2.PNG'

import img33 from '@/assets/imagenes/Espejos/17.1.PNG'
import img34 from '@/assets/imagenes/Espejos/17.2.PNG'

import img35 from '@/assets/imagenes/Espejos/18.1.PNG'
import img36 from '@/assets/imagenes/Espejos/18.2.PNG'

import img37 from '@/assets/imagenes/Espejos/19.1.PNG'
import img38 from '@/assets/imagenes/Espejos/19.2.PNG'

import img39 from '@/assets/imagenes/Espejos/20.1.PNG'
import img40 from '@/assets/imagenes/Espejos/20.2.PNG'

import img41 from '@/assets/imagenes/Espejos/21.1.PNG'
import img42 from '@/assets/imagenes/Espejos/21.2.PNG'

import img43 from '@/assets/imagenes/Espejos/22.1.PNG'
import img44 from '@/assets/imagenes/Espejos/22.2.PNG'

import img45 from '@/assets/imagenes/Espejos/23.1.PNG'
import img46 from '@/assets/imagenes/Espejos/23.2.PNG'

import img47 from '@/assets/imagenes/Espejos/24.1.PNG'
import img48 from '@/assets/imagenes/Espejos/24.2.PNG'

import img49 from '@/assets/imagenes/Espejos/25.1.PNG'
import img50 from '@/assets/imagenes/Espejos/25.2.PNG'

import img51 from '@/assets/imagenes/Espejos/26.1.PNG'
import img52 from '@/assets/imagenes/Espejos/26.2.PNG'

import img53 from '@/assets/imagenes/Espejos/27.1.PNG'
import img54 from '@/assets/imagenes/Espejos/27.2.PNG'

import img55 from '@/assets/imagenes/Espejos/28.1.PNG'
import img56 from '@/assets/imagenes/Espejos/28.2.PNG'


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
          <h2>ESPEJO BASIC</h2>
          <p>
            Colección Basic, cristal de canto pulido recto
            con 4 mm de espesor.  
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
          <h2>ESPEJO RETRO</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor. Luz
            retroiluminada de 5500 oK. Bastidor de PVC con
            sistema de fijación regulable y nivelable.
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
          <h2>ESPEJO EXTEND H/V </h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y
            arenado de 48 mm. Luz frontal de 5500 oK
            y sistema de fijación extensible.
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
          <h2>ESPEJO CLASSIC</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y are-
            nado de 33 mm. Luz frontal de 5500 oK. Bastidor de
            PVC con sistema de fijación regulable y nivelable.
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
          <h2>ESPEJO BRIA</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y arenado de 
            33 mm. Luz frontal y retroiluminada de 5500 oK. Bastidor
            de PVC con sistema de fijación regulable y nivelable.
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
          <h2>ESPEJO WHITE</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y arenado
            de 30 mm. Luz retroiluminada de 5500 oK. Bastidor
            de PVC con sistema de fijación regulable y nivelable.
          </p>
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
          <h2>ESPEJO NOVA</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y arenado de 30 mm.
            Luz frontal de 5500 oK. Con marco exterior de aluminio
            y bastidor de PVC con sistema de fijación regulable y
            nivelable.
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
          <h2>ESPEJO CLIO</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor. Luz frontal y
            retroiluminada de 5500 oK. Bastidor de PVC y siste-
            ma de fijación regulable y nivelable
          </p>
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
          <h2>ESPEJO STRIPE</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y arenado
            de 35 mm. Luz frontal de 5500 oK. Bastidor de PVC
            con sistema de fijación regulable y nivelable.
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
          <h2>ESPEJO LINE</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y arenado de
            35 mm. Luz frontal de 5500 oK. Bastidor de PVC con
            sistema de fijación regulable y nivelable y marco
            exterior de aluminio.
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

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO MARCUS</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor y
            arenado de 35 mm. Luz frontal y perimetral de
            5500 oK. Bastidor de PVC con sistema de fijación
            regulable y nivelable.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img22"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img22)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO LEXUS</h2>
          <p>
            Cristal de canto recto con 4 mm de espesor. Luz frontal de
            5500 oK. Bastidor de PVC con sistema de fijación
            regulable y nivelable.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img24"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img24)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO ALVERO</h2>
          <p>
            Cristal circular de 4 mm de espesor. 
            Fijación mediante pletinas metálicas.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img26"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img26)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
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

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO ALBA</h2>
          <p>
            Cristal circular de 4 mm de espesor. 
            Marco exterior de aluminio.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img28"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img28)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img29"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img29)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO BRUMA</h2>
          <p>
            Cristal circular de 4 mm de espesor. Luz retroiluminada de
            5500 oK. Bastidor de goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img30"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img30)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img31"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img31)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO MOON</h2>
          <p>
            Cristal circular de 4 mm de espesor y arenado de 30 mm. Luz
            retroiluminada de 5500 oK. Bastidor de goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img32"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img32)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img33"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img33)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO SUN</h2>
          <p>
            Cristal circular de 4 mm de espesor y arenado de 35 mm con film anti–
            explosión. Luz frontal regulable de 3000 oK a 6500 oK.
            Marco exterior de aluminio. Protección IP65.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img34"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img34)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img35"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img35)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO REDONDO</h2>
          <p>
            Cristal circular de 4 mm de espesor y arenado de
            35 mm. Con luz frontal de 5500 oK, sensor on/off
            antivaho y bastidor de PVC.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img36"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img36)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img37"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img37)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO ARENA</h2>
          <p>
            Cristal circular de 4 mm de espesor y arenado de 35 mm.
            Luz frontal y retroiluminada de 5500 oK. Bastidor de
            goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img38"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img38)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img39"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img39)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO HULA</h2>
          <p>
            Espejo circular con 4 mm de espesor con film antiexplosión.
            Encendido de luz progresiva de 5500 oK. Posiciones
            de instalación: izquierda o derecha.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img40"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img40)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img41"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img41)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO LUK</h2>
          <p>
            Cristal cápsula de 4 mm de espesor. 
            Fijación mediante pletinas metálicas.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img42"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img42)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img43"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img43)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO AURA</h2>
          <p>
            Cristal cápsula de 4 mm de espesor. 
            Luz retroiluminada de 5500 oK. Bastidor de goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img44"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img44)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img45"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img45)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO CALAS</h2>
          <p>
            Cristal cápsula de 4 mm de espesor y arenado de 30 mm. Luz
            retroiluminada de 5500 oK. Bastidor de goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img46"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img46)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img47"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img47)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO CALAS VESTIDOR</h2>
          <p>
            Cristal cápsula de 4 mm de espesor y arenado de
            30 mm. Luz retroiluminada de 5500 oK. Bastidor de
            goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img48"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img48)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img49"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img49)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO EROS</h2>
          <p>
            Cristal cápsula de 4 mm de espesor y arenado de 25 mm. Luz frontal y
            retroiluminada de 5500 oK. Bastidor de goma EVA.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img50"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img50)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img51"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img51)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO DANTE</h2>
          <p>
            Cristal cápsula de 4 mm de espesor y arenado de 30 mm
            con film antiexplosión. Luz frontal regulable de 3000
            a 6500 oK. Marco exterior de aluminio.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img52"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img52)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img53"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img53)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO OVAL</h2>
          <p>
            Espejo ovalado de 4 mm de espesor y arenado de 35 mm.
            Luz frontal de 5500 oK y bastidor de PVC.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img54"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img54)"
        />
      </v-col>
    </v-row>
  </v-container>

    <!-- Primer bloque -->
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="img55"
          alt="Descripción de la imagen 1"
          height="300"
          contain
          class="cursor-pointer"
          @click="openImage(img55)"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="pa-4 text-center">
          <h2>ESPEJO CIRCUS</h2>
          <p>
            Cristal cápsula de 4 mm de espesor. Luz frontal de
            5500 oK y bastidor de PVC con sistema de fijación
            regulable y nivelable.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="img56"
          alt="Descripción de la imagen 2"
          height="250"
          contain
          class="cursor-pointer"
          @click="openImage(img56)"
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

