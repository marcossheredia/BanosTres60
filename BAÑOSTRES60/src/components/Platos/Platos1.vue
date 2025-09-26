<script setup>
import { ref, onMounted } from 'vue';


import img1 from '@/assets/imagenes/Platos/1.1.PNG'
import img2 from '@/assets/imagenes/Platos/1.2.PNG'
import img3 from '@/assets/imagenes/Platos/1.3.PNG'
import img4 from '@/assets/imagenes/Platos/1.4.PNG'

import img5 from '@/assets/imagenes/Platos/2.1.PNG'
import img6 from '@/assets/imagenes/Platos/2.2.PNG'
import img7 from '@/assets/imagenes/Platos/2.3.PNG'
import img8 from '@/assets/imagenes/Platos/2.4.PNG'

import img9 from '@/assets/imagenes/Platos/3.1.PNG'
import img10 from '@/assets/imagenes/Platos/3.2.PNG'
import img11 from '@/assets/imagenes/Platos/3.3.PNG'
import img12 from '@/assets/imagenes/Platos/3.4.PNG'

import img13 from '@/assets/imagenes/Platos/4.1.PNG'
import img14 from '@/assets/imagenes/Platos/4.2.PNG'
import img15 from '@/assets/imagenes/Platos/4.3.PNG'
import img16 from '@/assets/imagenes/Platos/4.4.PNG'

import img17 from '@/assets/imagenes/Platos/5.1.PNG'
import img18 from '@/assets/imagenes/Platos/5.2.PNG'
import img19 from '@/assets/imagenes/Platos/5.3.PNG'
import img20 from '@/assets/imagenes/Platos/5.4.PNG'

import img21 from '@/assets/imagenes/Platos/6.1.PNG'
import img22 from '@/assets/imagenes/Platos/6.2.PNG'
import img23 from '@/assets/imagenes/Platos/6.3.PNG'
import img24 from '@/assets/imagenes/Platos/6.4.PNG'

import img25 from '@/assets/imagenes/Platos/7.1.PNG'
import img26 from '@/assets/imagenes/Platos/7.2.PNG'
import img27 from '@/assets/imagenes/Platos/7.3.PNG'
import img28 from '@/assets/imagenes/Platos/7.4.PNG'

import img29 from '@/assets/imagenes/Platos/8.1.PNG'
import img30 from '@/assets/imagenes/Platos/8.2.PNG'

import img31 from '@/assets/imagenes/Platos/9.1.PNG'
import img32 from '@/assets/imagenes/Platos/9.2.PNG'

import img33 from '@/assets/imagenes/Platos/10.1.PNG'
import img34 from '@/assets/imagenes/Platos/10.2.PNG'

import img35 from '@/assets/imagenes/Platos/11.1.PNG'
import img36 from '@/assets/imagenes/Platos/11.2.PNG'

import img37 from '@/assets/imagenes/Platos/12.1.PNG'
import img38 from '@/assets/imagenes/Platos/12.2.PNG'

import img39 from '@/assets/imagenes/Platos/13.1.PNG'
import img40 from '@/assets/imagenes/Platos/13.2.PNG'

import img41 from '@/assets/imagenes/Platos/14.1.PNG'
import img42 from '@/assets/imagenes/Platos/14.2.PNG'

import img43 from '@/assets/imagenes/Platos/15.1.PNG'
import img44 from '@/assets/imagenes/Platos/15.2.PNG'

import img45 from '@/assets/imagenes/Platos/16.1.PNG'
import img46 from '@/assets/imagenes/Platos/16.2.PNG'

import img47 from '@/assets/imagenes/Platos/17.1.PNG'
import img48 from '@/assets/imagenes/Platos/17.2.PNG'

import img49 from '@/assets/imagenes/Platos/18.1.PNG'
import img50 from '@/assets/imagenes/Platos/18.2.PNG'

import img51 from '@/assets/imagenes/Platos/19.1.PNG'
import img52 from '@/assets/imagenes/Platos/19.2.PNG'


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
        <h2>ZEUS PIEDRA</h2>
        <p>
          El modelo Stone ZEUS se incorpora a la colección con la nueva textura piedra que complementa-
          ra la versión en textura pizarra. La dureza de la piedra en su máxima expresión.
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

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img4"
        alt="Imagen adicional centrada"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img4)"
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
        :src="img5"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img5)"
      />
    </v-col>

    <!-- Arriba derecha: texto/información -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>PLUS</h2>
        <p>
          El modelo Stone PLUS es la esencia de nuestra colección se caracteriza por la simplicidad de
          sus líneas y su rejilla cuadrada. Un plato sencillo y elegante.
        </p>
      </div>
    </v-col>

    <!-- Abajo izquierda: imagen -->
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

    <!-- Abajo derecha: imagen -->
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
  </v-row>

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img8"
        alt="Imagen adicional centrada"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img8)"
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
        :src="img9"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img9)"
      />
    </v-col>

    <!-- Arriba derecha: texto/información -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>SMART</h2>
        <p>
          El modelo Stone SMART crea una armonia perfecta entre la rejilla mimetizada con el plato
          y las líneas de caida degradadas hacia la zona de descanso.
        </p>
      </div>
    </v-col>

    <!-- Abajo izquierda: imagen -->
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

    <!-- Abajo derecha: imagen -->
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
  </v-row>

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img12"
        alt="Imagen adicional centrada"
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
        <h2>MIO</h2>
        <p>
          El modelo Stone MIO ofrece una belleza singular gracias a su rejilla en esquina,
          una forma original que lo hace único en la gama.
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

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img16"
        alt="Imagen adicional centrada"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img16)"
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
        :src="img17"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img17)"
      />
    </v-col>

    <!-- Arriba derecha: texto/información -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>SIDE</h2>
        <p>
          El modelo Stone SIDE ofrece una nueva forma de entender el baño con un diseño de
          pendiente centrada de suma elegancia.
        </p>
      </div>
    </v-col>

    <!-- Abajo izquierda: imagen -->
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

    <!-- Abajo derecha: imagen -->
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
  </v-row>

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img20"
        alt="Imagen adicional centrada"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img20)"
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
        :src="img21"
        alt="Descripción de la imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img21)"
      />
    </v-col>

    <!-- Arriba derecha: texto/información -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center">
      <div class="pa-4 text-center">
        <h2>SORTY</h2>
        <p>
          El modelo Stone SORTY con desagüe central y diseño más suavizado, une estética y
          sostenibilidad al igual que el resto de platos de la gama.
        </p>
      </div>
    </v-col>

    <!-- Abajo izquierda: imagen -->
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

    <!-- Abajo derecha: imagen -->
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
  </v-row>

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img24"
        alt="Imagen adicional centrada"
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
        <h2>CACH</h2>
        <p>
          El modelo Stone CACH nos muestra un diseño excepcional de caidas suaves que dota a este
          plato de carácter propio y eficiente.
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

  <!-- Imagen centrada debajo -->
  <v-row class="mt-6" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-img
        :src="img28"
        alt="Imagen adicional centrada"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img28)"
      />
    </v-col>
  </v-row>
</v-container>

<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img29"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img29)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img30"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img30)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img31"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img31)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img32"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img32)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para ducahs modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img33"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img33)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img34"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img34)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img35"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img35)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img36"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img36)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img37"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img37)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img38"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img38)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img39"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img39)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img40"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img40)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img41"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img41)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img42"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img42)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img43"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img43)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img44"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img44)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img45"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img45)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img46"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img46)"
      />
    </v-col>
  </v-row>
</v-container>


<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img47"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img47)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img48"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img48)"
      />
    </v-col>
  </v-row>
</v-container>

<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img49"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img49)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img50"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img50)"
      />
    </v-col>
  </v-row>
</v-container>

<!--BLOQUE-->
<v-container class="py-8">
  <!-- Texto centrado arriba -->
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>PURE DESIGN</h2>
      <p>
        Diseño renovado, más caudal y perfecto para duchas modernas.
      </p>
    </v-col>
  </v-row>

  <!-- Dos fotos abajo en columnas -->
  <v-row>
    <v-col cols="12" md="6">
      <v-img
        :src="img51"
        alt="Imagen 1"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img51)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        :src="img52"
        alt="Imagen 2"
        height="300"
        contain
        class="cursor-pointer"
        @click="openImage(img52)"
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
