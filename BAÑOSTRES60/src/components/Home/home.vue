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
    <div class="conocenos-imagenes">
      <div class="conocenos-img conocenos-img-left-top">
        <img :src="foto1b" alt="Imagen 1" loading="lazy" />
      </div>
      <div class="conocenos-img conocenos-img-right">
        <img :src="foto2b" alt="Imagen 2" loading="lazy" />
      </div>
      <div class="conocenos-img conocenos-img-left-bottom">
        <img :src="foto3b" alt="Imagen 3" loading="lazy" />
      </div>
    </div>

    <div class="texto">
      <h1 style="font-size: 2rem; color: #000; margin-bottom: 15px;">
        Bañostres60
      </h1>
      <p><strong>¡Renueva tu baño de manera fácil y rápida!</strong></p>
      <p>
        ¿Pensando en cambiar tu bañera por una ducha?  
        Transforma tu espacio con una solución <strong>moderna, segura y funcional</strong>.  
        Nuestro equipo profesional se adapta a tus necesidades y preferencias.
      </p>
      <ul>
        <li>✔ Instalación rápida y sin complicaciones</li>
        <li>✔ Materiales de calidad y acabados a tu gusto</li>
        <li>✔ Mayor comodidad y accesibilidad</li>
      </ul>
      <p><strong>Renueva tu baño hoy mismo. ¡Te esperamos!</strong></p>
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
      

      <div class="img img-right">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Cambio de bañera imagen 2" loading="lazy" width="600" height="600"/>
      </div>

      <!-- NUEVAS: fila intermedia -->
      <div class="img img-left-middle">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Cambio de bañera imagen 3" loading="lazy" width="600" height="600"/>
      </div>
      <div class="img img-right-middle">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Cambio de bañera imagen 4" loading="lazy" width="600" height="600"/>
      </div>

      <div class="img img-left-bottom">
        <img src="../../assets/imagenes/usoGeneral/Logo verde.png" alt="Cambio de bañera imagen 5" loading="lazy" width="600" height="600"/>
      </div>

      
    </div>

    <div class="texto">
      <h2>🚿 Cambio de bañera por plato de ducha</h2>
      <p>¡Renueva tu baño de manera <strong>fácil y rápida</strong>!</p>
      <p>Transforma tu espacio con una solución <strong>moderna, segura y funcional</strong>. 
         Nuestro equipo profesional adapta la instalación a tus necesidades y preferencias.</p>
      <ul>
        <li>⚡ Instalación rápida y sin complicaciones</li>
        <li>🏆 Materiales de calidad y acabados a tu gusto</li>
        <li>👌 Mayor comodidad y accesibilidad</li>
      </ul>
      <p class="cta">✨ <strong>¡Solicita tu presupuesto sin compromiso!</strong></p>
      <p>📞 Llámanos al <a href="tel:912950536">912 950 536</a> o visítanos en nuestra tienda a partir del 1 de septiembre.</p>
    </div>
  </div>
</section>
º


<section class="confian-section">
  <div class="confian-container">
    <h2 class="confian-title">Nuestros proveedores</h2>
    <div class="confian-logos">
      <img src="../../assets/imagenes/home/confian/gme.jpg" alt="Logo Gme" /> 
      <img src="../../assets/imagenes/home/confian/duplach.jpg" alt="Logo Duplach" />
      <img src="../../assets/imagenes/home/confian/manillons.jpg" alt="Logo Manillons" />
      <img src="../../assets/imagenes/home/confian/royogroup.png" alt="Logo Royo Group" />
      <img src="../../assets/imagenes/home/confian/decorban.gif" alt="Logo Decorban" />
      
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
/* --- Layout general --- */
.banera-section{
  padding: clamp(24px, 5vw, 56px) 0;
  background: #f6f8f8;
}
.banera-container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 32px);
  display: grid;
  grid-template-columns: minmax(280px, 520px) 1fr;
  gap: clamp(16px, 3vw, 40px);
  align-items: center;
}

/* --- Mosaico 3x2 de imágenes --- */
.imagenes{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "lt rt"
    "lm rm"
    "lb rb";
  gap: 16px;
}

.img{ 
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,.08);
  aspect-ratio: 1/1;     /* cuadrados bonitos */
  display: grid;
  place-items: center;
}
.img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  transition: transform .35s ease;
}
.img:hover img{ transform: scale(1.06); }

/* Posiciones en la cuadrícula */
.img-left-top{ grid-area: lt; }
.img-right{ grid-area: rt; }           /* top-right existente */
.img-left-middle{ grid-area: lm; }     /* NUEVA */
.img-right-middle{ grid-area: rm; }    /* NUEVA */
.img-left-bottom{ grid-area: lb; }
.img-right-bottom{ grid-area: rb; }

/* --- Texto --- */
.texto h2{
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.1;
  margin: 0 0 10px;
  color: #0b3340;
}
.texto p{ color: #23424a; margin: 8px 0; }
.texto ul{ margin: 12px 0 18px; padding-left: 20px; color:#23424a; }
.texto .cta{ margin-top: 10px; font-weight: 700; color:#0b3340; }

/* --- Responsive --- */
@media (max-width: 980px){
  .banera-container{
    grid-template-columns: 1fr;
  }
  .imagenes{
    order: 2;                   /* texto arriba, imágenes abajo (puedes quitarlo si no lo quieres) */
    grid-template-columns: repeat(3, 1fr);  /* 3 columnas en móvil ancho */
    grid-template-areas:
      "lt rt lm"
      "rm lb rb";
  }
}

/* --- Conócenos (aislado para que no choque con otras secciones) --- */
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

/* GRID de 2 columnas:
   ┌─────────┬─────────┐
   │ leftTop │  right  │
   │ leftBot │  right  │
   └─────────┴─────────┘
*/
.conocenos-imagenes {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "lt r"
    "lb r";
  gap: 1rem;

  /* Filas homogéneas y responsivas: la derecha (2 filas) mantiene proporciones
     y evita “descolgarse” */
  grid-auto-rows: minmax(140px, 18vw);
  min-width: 280px;
}

.conocenos-img {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  background: #fff;
}

/* Áreas */
.conocenos-img-left-top { grid-area: lt; }
.conocenos-img-left-bottom { grid-area: lb; }
.conocenos-img-right { grid-area: r; }

/* Imágenes: ocupan su contenedor sin deformarse */
.conocenos-img img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* Móvil: 1 columna; la imagen “right” pasa al medio */
@media (max-width: 768px) {
  .conocenos-imagenes {
    grid-template-columns: 1fr;
    grid-template-areas:
      "lt"
      "r"
      "lb";
    grid-auto-rows: minmax(160px, 40vw);
  }
}

</style>
