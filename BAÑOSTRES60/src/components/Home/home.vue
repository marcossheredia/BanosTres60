<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import slide1 from '../../assets/imagenes/home/foto1.webp'
import slide2 from '../../assets/imagenes/home/foto2.webp'

import foto1b from '../../assets/imagenes/home/foto1b.webp'
import foto2b from '../../assets/imagenes/home/foto2b.webp'
import foto3b from '../../assets/imagenes/home/foto3b.webp'

const slides = ref([
  {
    image: slide1,
    title: 'Innovación y excelencia marcan la diferencia de nuestro trabajo.',
    description: 'Somos expertos en las soluciones de soldadura industrial y procesos auxiliares. Nuestra vocación de servicio al cliente es nuestra mayor motivación.'
  },
  {
    image: slide2,
    title: 'Innovación y excelencia marcan la diferencia de nuestro trabajo.',
    description: 'Somos expertos en las soluciones de soldadura industrial y procesos auxiliares. Nuestra vocación de servicio al cliente es nuestra mayor motivación.'
  }
])

const currentSlide = ref(0)
let intervalId = null
const progress = ref(0)
let progressInterval = null

onMounted(() => {
  intervalId = setInterval(nextSlide, 7500) // Cambia de diapositiva cada 7.5 segundos
  startProgress()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  if (progressInterval) clearInterval(progressInterval)
})

function startProgress() {
  progress.value = 0
  if (progressInterval) clearInterval(progressInterval)
  progressInterval = setInterval(() => {
    progress.value = Math.min(progress.value + 1, 100)
  }, 75) // 7500ms / 100 steps = 75ms por paso
}

function resetTimer() {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(nextSlide, 7500)
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  startProgress()
  resetTimer()
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  startProgress()
  resetTimer()
}
</script>

<template>

  <div class="carousel">
    <div class="slide-container" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
      <div class="slide" :style="{ backgroundImage: `url(${slide.image})` }">
      </div>
    </div>
    <div class="fixed-overlay">
      <div class="nav-and-content">
        <span @click="prevSlide">‹</span>
        <div class="content">
          <h1>{{ slides[currentSlide].title }}</h1>
          <p><b>{{ slides[currentSlide].description }}</b></p>
        </div>
        <span @click="nextSlide">›</span>
      </div>
    </div>
    <div class="progress-indicators">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="progress-line"
        :class="{ active: currentSlide === index }"
      >
        <div 
          class="progress-fill" 
          :style="currentSlide === index ? { width: `${progress}%` } : {}"
        ></div>
      </div>
    </div>
  </div>
  
  <section class="conocenos-section">
  <div class="conocenos-container">
    <div class="imagenes">
      <div class="img-left-top">
        <img :src="foto1b" alt="Imagen 1" />
      </div>
      <div class="img-right">
        <img :src="foto2b" alt="Imagen 2" />
      </div>
      <div class="img-left-bottom">
        <img :src="foto3b" alt="Imagen 3" />
      </div>
    </div>
    <div class="texto">
    <!-- CON EL <strong> SE HACEN LOS TEXTOS EN NEGRITA -->
      <h2>Conócenos</h2>
      <p>Infoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>Infoaaaaaaaaaaaaaaaaaaaaa</p>
      <p>Info</p>
      <p>Info</p>
    </div>
  </div>
</section>
<!--
<section class="servicios-section">
  <div class="servicios-container">
    <h2>Nuestros Servicios</h2>
    <p>Ponemos <strong>atención</strong> y <strong>cuidado</strong> en cada detalle de nuestro producto.</p>
    <div class="servicios-grid">
      <a href="/todo-servicios?categoria=brazing#brazing-en-horno" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/brazingEnHorno.webp" alt="Brazing en Horno" loading="lazy">
        <span>BRAZING EN HORNO</span>
      </a>
      <a href="/todo-servicios?categoria=brazing#brazing-por-induccion" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/brazingPorInduccion.webp" alt="Brazing por Inducción" loading="lazy">
        <span>BRAZING POR INDUCCIÓN</span>
      </a>
      <a href="/todo-servicios?categoria=MIG-MAG" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/migMag.webp" alt="MIG MAG" loading="lazy">
        <span>MIG MAG</span>
      </a>
      <a href="/todo-servicios?categoria=brazing#brazing-por-antorcha" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/default.webp" alt="Brazing por Antorcha" loading="lazy">
        <span>BRAZING POR ANTORCHA</span>
      </a>
      <a href="/todo-servicios?categoria=soldadura#soldadura-autogena" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/soldaduraAutogena.webp" alt="Soldadura Autógena" loading="lazy">
        <span>SOLDADURA AUTÓGENA</span>
      </a>
      <a href="/todo-servicios?categoria=soldadura#soldadura-electrica-por-electrodo" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/default.webp" alt="Soldadura por Electrodo" loading="lazy">
        <span>SOLDADURA POR ELECTRODO</span>
      </a>
      <a href="/todo-servicios?categoria=especializada#soldadura-por-resistencia-de-puntos" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/soldaduraPorResistencia.webp" alt="Soldadura por Resistencia" loading="lazy">
        <span>SOLDADURA POR RESISTENCIA</span>
      </a>
      <a href="/todo-servicios?categoria=especializada#tig-arco-electrico-tungsteno" class="servicio">
        <img src="../../assets/imagenes/home/nuestrosServicios/soldaduraTig.webp" alt="Soldadura TIG" loading="lazy">
        <span>SOLDADURA TIG</span>
      </a>
    </div>
  </div>
</section>
-->
<section class="mejor-opcion-section">
  <div class="mejor-opcion-container">
    <h2>¿Por qué somos la mejor opción?</h2>
    <table class="mejor-opcion-tabla">
      <tbody>
        <tr>
          <td>Servicio de <b>5 estrellas</b></td>
          <td>Cuidamos <b>detalladamente</b> cada paso del proceso</td>
        </tr>
        <tr>
          <td>Más de <b>40 años de experiencia</b> nos avalan</td>
          <td>Apostamos siempre por una <b>gestión de calidad</b></td>
        </tr>
      </tbody>
    </table>
    <div class="mejor-opcion-imagen">
      <img src="../../assets/imagenes/home/5estrellas.webp" alt="5 estrellas" />
    </div>
  </div>
</section>

<section class="confian-section">
  <div class="confian-container">
    <h2 class="confian-title">Ya confían en nosotros</h2>
    <div class="confian-logos">
      <img src="../../assets/imagenes/home/confian/renault.svg" alt="Logo Renault" />
      <img src="../../assets/imagenes/home/confian/man.svg" alt="Logo MAN" />
      <img src="../../assets/imagenes/home/confian/nissan.svg" alt="Logo Nissan" />
      <img src="../../assets/imagenes/home/confian/peugeot.png" alt="Logo Peugeot" />
      <img src="../../assets/imagenes/home/confian/dacia.svg" alt="Logo Dacia" />
    </div>
  </div>
</section>

<section class="certificacion-section">
  <div class="certificacion-container contenedor-centrado">
    <div class="certificacion-header">
      <h2 class="title text-center">Certificados y Asociaciones</h2>
    </div>

    <div class="certificacion-items">
      <div class="certificacion-card">
        <img src="../../assets/imagenes/usoGeneral/ISO9001.2015.webp" alt="Certificado ISO 9001:2015" />
        <p class="certificacion-text">Certificado ISO 9001:2015</p>
      </div>

      <div class="certificacion-card">
        <img src="../../assets/imagenes/usoGeneral/fedeto.png" alt="Asociado a Fedeto" />
        <p class="certificacion-text">Asociados a Fedeto</p>
      </div>

      <div class="certificacion-card">
        <img src="../../assets/imagenes/usoGeneral/cesol.png" alt="Miembro Industrial de Cesol" />
        <p class="certificacion-text">Miembro Industrial de Cesol</p>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 50vh;  /* Reducido de 70vh a 55vh */
  overflow: hidden;
  margin: 0 auto;
}

.slide-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
}

.slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
}

.slide::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.fixed-overlay {
  position: absolute;
  top: 48%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
  z-index: 10;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.nav-and-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

.nav-and-content span {
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.content {
  flex: 1;
  width: 100%;
  margin: 0 0.8rem;
  background-color: transparent;
}

.fixed-overlay h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0;
}

.fixed-overlay p {
  font-size: 1.2rem;
  margin-bottom: 4rem;
  width: 100%;
  padding: 0;
}

.fixed-overlay button {
  font-size: 1.05rem;
  background-color: #808990;
  color: #fff;
  padding: 0.4rem 1.6rem;
  border: 1.7px solid #f6911d;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'Calibri MS', Calibri, sans-serif;
}

.fixed-overlay button:hover {
  background-color: #6b7379;
}

.progress-indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  z-index: 20;
}

.progress-line {
  width: 1rem;  /* Reducido de 50px a 25px */
  height: 0.2rem; /* Reducido de 10px a 5px */
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  width: 0;
  height: 100%;
  background-color: white;
  transition: width 0.1s linear;
}

.progress-line.active {
  background: rgba(255, 255, 255, 0.5);
}

.conocenos-section {
  font-family: 'Poppins', sans-serif;
  padding: 5rem 1rem 3rem 1rem; /* Reducido el padding inferior de 5rem a 3rem */
  display: flex;
  justify-content: center;
}

.conocenos-container {
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: center;
}

.imagenes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a b"
    "c b";
  gap: 0.25rem;
  flex: 1 1 400px;
  aspect-ratio: 4 / 3;
  max-width: 500px;
  height: auto;
}

.imagenes img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

.img-left-top {
  grid-area: a;
}
.img-right {
  grid-area: b;
}
.img-left-bottom {
  grid-area: c;
}


.texto {
  flex: 1 1 400px;
  max-width: 600px;
  text-align: center;
}

.texto h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.texto p {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.texto button {
  font-size: 1.05rem;
  background-color: #808990;
  color: #fff;
  padding: 0.4rem 1.6rem;
  border: 1.7px solid #f6911d;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'Calibri MS', Calibri, sans-serif;
}

.texto button:hover {
  background-color: #6b7379;
}

.servicios-section {
  font-family: 'Poppins', sans-serif;
  padding: 3rem 1rem 4rem 1rem; /* Reducido el padding superior de 4rem a 2rem */
  text-align: center;
}

.servicios-container {
  max-width: 1200px;
  margin: auto;
}

.servicios-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.servicios-section p {
  font-size: 1rem;
  margin-bottom: 1.2rem;  /* Reducido de 2rem a 1.2rem */
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3rem;
}

.servicio {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  display: block;
  height: 320px; /* más alto que ancho */
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.servicio:hover {
  transform: scale(1.015);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.servicio img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
  transition: filter 0.3s ease;
}

.servicio span {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(0,0,0,0.8);
  padding: 0 5px;
}

.confian-section {
  padding-top: 2rem;
  text-align: center;
  width: 100%;
}

.confian-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.confian-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.confian-logos img {
  height: 9rem; /* Aumentamos el tamaño */
  object-fit: contain;
  flex: 1 1 150px;
  max-width: 200px;
}

/* Certificaciones y asociaciones */
.certificacion-section {
  padding-top: 2rem;
}

.certificacion-container {
  max-width: 1800px;
  margin: 0 auto;
}

.certificacion-header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
}

.certificacion-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.certificacion-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  width: 22rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
}

.certificacion-card:hover {
  transform: translateY(-5px);
}

.certificacion-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

/* Estilo específico solo si Fedeto necesita más ancho visual */
.certificacion-card:nth-child(2) img {
  max-width: 120%;
}

.certificacion-text {
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
}


@media (max-width: 768px) {
  .servicios-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .servicio {
    height: 100%;
  }

  .servicio span {
    font-size: 1rem;
    bottom: 15px;
    padding: 0 10px;
    line-height: 1.2;
  }

  .confian-logos img {
    height: 6rem; /* Aumentamos el tamaño */
  }

  /* Estilos específicos para certificaciones en móvil */
  .certificacion-card {
    width: 80%;
    height: 12rem;
  }

  .certificacion-text {
    font-size: 0.9rem;
  }

  .certificacion-card:nth-child(2) img {
    max-width: 130%;
  }
}

.mejor-opcion-section {
  font-family: 'Poppins', sans-serif;
  padding: 2rem 1rem;
  text-align: center;
}

.mejor-opcion-container {
  max-width: 1000px;
  margin: auto;
}

.mejor-opcion-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.mejor-opcion-tabla {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.mejor-opcion-tabla td {
  padding: 0.5rem;
  border-left: 1px solid black;
  border-top: 1px solid black;
  font-size: 1rem;
  width: 50%;
}

.mejor-opcion-tabla tr:first-child td {
  border-top: none;
}

.mejor-opcion-tabla td:first-child {
  border-left: none;
}

.mejor-opcion-imagen img {
  max-width: 30%;
  height: auto;
}

@media (max-width: 768px) and (orientation: portrait) {
  .mejor-opcion-imagen img {
    max-width: 65%;
  }
}

@media (max-width: 768px) {
  .carousel {
    height: 60vh;
  }

  .fixed-overlay h1 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .fixed-overlay p {
    font-size: 0.85rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  .fixed-overlay button {
    font-size: 0.85rem;
    padding: 0.3rem 1.2rem;
  }

  .nav-and-content span {
    font-size: 1.2rem;
  }
  
  .content h1, .content p {
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 0;
  }

}


@media (orientation: landscape) and (max-height: 480px) {
  .carousel {
    height: 100vh;
  }

  .fixed-overlay {
    top: 50%;
    padding: 1rem;
  }

  .fixed-overlay h1 {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  .fixed-overlay p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .fixed-overlay button {
    padding: 0.2rem 1rem;
    font-size: 0.8rem;
  }

  .progress-indicators {
    bottom: 10px;
  }

    .mejor-opcion-imagen img {
    max-width: 38%;
  }

}


</style>
