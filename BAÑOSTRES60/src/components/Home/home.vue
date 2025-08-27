<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import slide1 from '../../assets/imagenes/usoGeneral/Logo verde.png'
import slide2 from '../../assets/imagenes/usoGeneral/Logo verde recortado.png'

import foto1b from '../../assets/imagenes/home/foto1b.webp'
import foto2b from '../../assets/imagenes/home/foto2b.webp'
import foto3b from '../../assets/imagenes/home/foto3b.webp'

const slides = ref([
  {
    image: slide1,
    title: 'Aqui puedo poner informacion si quiero.',
    description: 'Mucha mas informacion que se puede poner aqui si se quiere a a a a a a a a a a a a a.'
  },
  {
    image: slide2,
    title: 'Aqui puedo poner informacion si quiero.',
    description: 'Mucha mas informacion que se puede poner aqui si se quiere a a a a a a a a a a a a a.'
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

<section class="banera-section">
  <div class="banera-container">
    <div class="imagenes">
      <div class="img-left-top">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Foto 1 cambio bañera" />
      </div>
      <div class="img-right">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Foto 2 cambio bañera" />
      </div>
      <div class="img-left-bottom">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Foto 3 cambio bañera" />
      </div>
    </div>
    <div class="texto">
      <h2>🚿 Cambio de bañera por plato de ducha</h2>
      <p>Información por determinar.</p>
      <p>Información por determinar.</p>
      <p>Información por determinar.</p>
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

</template>
<style scoped>
/* 🎞️ Carrusel */
.carousel {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.slide-container {
  position: absolute;
  inset: 0;
  transition: opacity 0.8s ease-in-out;
}

.slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/* Overlay fijo con navegación y texto */
.fixed-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* deja pasar clicks excepto en nav/content */
}

.nav-and-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  pointer-events: auto;
  color: white;
}

.nav-and-content span {
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
}
.nav-and-content span:hover {
  transform: scale(1.2);
}

.content {
  text-align: center;
  max-width: 600px;
  padding: 1rem 2rem;
  background: rgba(0,0,0,0.5);
  border-radius: 12px;
}

.content h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.content p {
  font-size: 1.2rem;
}

/* Indicadores de progreso */
.progress-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.progress-line {
  width: 80px;
  height: 4px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.1s linear;
}

/* ✨ Sección Conócenos */
.conocenos-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.conocenos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.imagenes {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.img-left-top,
.img-left-bottom {
  grid-column: 1;
}
.img-right {
  grid-column: 2;
  grid-row: span 2;
}

.imagenes img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.texto {
  flex: 1;
  max-width: 500px;
}
.texto h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.texto p {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

/* ⭐ Sección Mejor opción */
.mejor-opcion-section {
  padding: 5rem 2rem;
  text-align: center;
  background: #fff;
}
.mejor-opcion-container {
  max-width: 900px;
  margin: 0 auto;
}
.mejor-opcion-tabla {
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
}
.mejor-opcion-tabla td {
  padding: 1rem;
  border: 1px solid #ddd;
}
.mejor-opcion-imagen {
  margin-top: 2rem;
}
.mejor-opcion-imagen img {
  max-width: 150px;
}

/* 🤝 Sección Confían */
.confian-section {
  padding: 5rem 2rem;
  background: #f4f4f4;
}
.confian-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.confian-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.confian-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.confian-logos img {
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s;
}
.confian-logos img:hover {
  filter: grayscale(0%);
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .carousel {
    height: 60vh;
  }
  .nav-and-content span {
    font-size: 2rem;
  }
  .content h1 {
    font-size: 1.5rem;
  }
  .imagenes {
    grid-template-columns: 1fr;
  }
  .img-right {
    grid-row: auto;
    grid-column: auto;
  }
}
.banera-section {
  padding: 5rem 2rem;
  background: #f9f9f9;
}

.banera-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.banera-container .imagenes {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.banera-container .img-left-top,
.banera-container .img-left-bottom {
  grid-column: 1;
}

.banera-container .img-right {
  grid-column: 2;
  grid-row: span 2;
}

.banera-container img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.banera-container .texto {
  flex: 1;
  max-width: 500px;
}

.banera-container .texto h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.banera-container .texto p {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .banera-container {
    flex-direction: column;
  }
  .banera-container .texto h2,
  .banera-container .texto p {
    text-align: center;
  }
  .banera-container .imagenes {
    grid-template-columns: 1fr;
  }
  .banera-container .img-right {
    grid-row: auto;
    grid-column: auto;
  }
}

</style>
