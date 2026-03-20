<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'HomeView'
})

// Imports de imágenes
import foto1b from '../../assets/imagenes/Obra/1.jpg'
import foto2b from '../../assets/imagenes/Obra/2.jpg'
import foto3b from '../../assets/imagenes/Obra/3.jpg'
import expo1 from '../../assets/imagenes/Exposicion/1.jpg'
import expo2 from '../../assets/imagenes/Exposicion/2.jpg'
import expo3 from '../../assets/imagenes/Exposicion/3.jpg'
import expo4 from '../../assets/imagenes/Exposicion/4.jpg'
import expo5 from '../../assets/imagenes/Exposicion/5.jpg'
import fotoTiendaFisica from '../../assets/imagenes/usoGeneral/fotoTiendaFisica.jpeg'
import logoSello from '../../assets/imagenes/usoGeneral/Logo sello.png'

// Logos
import logoGme from '../../assets/imagenes/home/confian/gme.jpg'
import logoDuplach from '../../assets/imagenes/home/confian/duplach.jpg'
import logoManillons from '../../assets/imagenes/home/confian/manillons.jpg'
import logoRoyo from '../../assets/imagenes/home/confian/royogroup.png'
import logoDecorban from '../../assets/imagenes/home/confian/decorban.gif'

// Lógica de galeria y lightbox
const dialog = ref(false)
const selectedGalleryIndex = ref(0)
const galleryMode = ref(false)
const singleImage = ref('')

// Solo esta seccion tendra carrusel
const fotosTrabajos = [expo1, expo2, expo3, expo4, expo5]

function openSingleImage(image) {
  singleImage.value = image
  galleryMode.value = false
  dialog.value = true
}

function openGalleryImage(index) {
  selectedGalleryIndex.value = index
  galleryMode.value = true
  dialog.value = true
}

function closeLightbox() {
  dialog.value = false
  galleryMode.value = false
  singleImage.value = ''
}
</script>


<template>
  <div class="hero-header">
    <div class="hero-content">
      <h1 class="company-name">BAÑOS TRES<strong>60</strong></h1>

      <div class="hero-cta">
        <span class="hero-cta-text">¡Cambio de bañera por plato de ducha!</span>
      </div>

      <p class="company-tagline">Adaptamos el baño a tus necesidades.</p>
    </div>
  </div>

  <section class="zigzag-section section-normal">
    <div class="zigzag-container">
      <div class="zigzag-imagenes">
        <div class="zigzag-img-single">
          <img :src="foto1b" alt="Dale una vuelta a tu baño" loading="lazy"
          class="cursor-pointer"
          @click="openSingleImage(foto1b)" />
        </div>
      </div>

      <div class="zigzag-texto">
        <h2>¡Dale una vuelta a tu baño!</h2>
        <p><strong>¡Renueva tu baño de manera fácil y rápida!</strong></p>
        <p>
          ¿Pensando en cambiar tu bañera por una ducha?
          Transforma tu espacio con una solución <strong>moderna, segura y funcional</strong>.
          Nuestro equipo profesional se adapta a tus necesidades y preferencias.
        </p>
        <ul>
          <li>✔ Platos de ducha, diferentes medidas y colores</li>
          <li>✔ Mobiliario de baño: mamparas y espejos </li>
          <li>✔ Griferia vista y empotrada</li>
        </ul>
        <p><strong>Renueva tu baño hoy mismo. ¡Te esperamos!</strong></p>
      </div>
    </div>
  </section>

  <section class="zigzag-section section-reverse">
    <div class="zigzag-container">
      <div class="zigzag-texto">
        <h2>Soluciones a medida para tu hogar</h2>
        <p><strong>Diseño y funcionalidad en perfecta armonía.</strong></p>
        <p>
          Gana en tranquilidad y diseño con un baño adaptado a tu ritmo de vida.
          Tanto si la bañera se ha convertido en un obstáculo diario como si simplemente buscas un espacio más funcional y moderno, tenemos la solución.
          Sustituimos tu bañera por un plato de ducha antideslizante a ras de suelo.
        </p>
        <ul>
          <li>✔ Presupuestos sin compromiso</li>
          <li>✔ Instalaciones rápidas y profesionales</li>
          <li>✔ Materiales de primera calidad</li>
        </ul>
      </div>

      <div class="zigzag-imagenes">
        <div class="zigzag-img-single">
          <img :src="foto2b" alt="Soluciones a medida" loading="lazy"
          class="cursor-pointer"
          @click="openSingleImage(foto2b)"/>
        </div>
      </div>
    </div>
  </section>

  <section class="zigzag-section section-normal">
    <div class="zigzag-container">
      <div class="zigzag-imagenes">
        <div class="zigzag-img-single">
          <img :src="foto3b" alt="Transformamos espacios" loading="lazy"
          class="cursor-pointer"
          @click="openSingleImage(foto3b)" />
        </div>
      </div>

      <div class="zigzag-texto">
        <h2>Transformamos tus espacios</h2>
        <p><strong>Calidad y dedicación en cada proyecto.</strong></p>
        <p>
          Al cambiarla por un plato de ducha moderno y funcional no solo modernizas la estética,
          estás dando más amplitud a tu baño y disfrutarás de una ducha más amplia y segura.
        </p>
        <ul>
          <li>✔ Expertos en renovación de baños</li>
          <li>✔ Garantía en nuestros trabajos</li>
          <li>✔ Atención personalizada</li>
        </ul>
        <p><strong>¡Nos encanta lo que hacemos!</strong></p>
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
            <td>Más de <b>20 años de experiencia</b> nos avalan</td>
            <td>Apostamos siempre por una <b>gestión de calidad</b></td>
          </tr>
        </tbody>
      </table>
      <div class="mejor-opcion-imagen">
        <img src="../../assets/imagenes/home/5estrellas.webp" alt="5 estrellas" />
      </div>
    </div>
  </section>

  <section class="atencion-section">
    <div class="atencion-container">
      <div class="atencion-texto">
        <h2>En un sector donde abundan las ofertas</h2>
        <p>
          Nosotros elegimos otro camino. Preferimos realizar menos trabajos al mes
          para asegurar que el suyo reciba nuestra total atención.
        </p>
        <p><strong>Tu baño merece lo mejor.</strong></p>
      </div>
    </div>
  </section>

 <section class="galeria-final">
    <div class="galeria-container">
      <h2>Nuestros trabajos</h2>
      <div class="galeria-items">
        <div class="galeria-item"><img :src="expo1" @click="openGalleryImage(0)" class="cursor-pointer" /></div>
        <div class="galeria-item"><img :src="expo2" @click="openGalleryImage(1)" class="cursor-pointer" /></div>
        <div class="galeria-item"><img :src="expo3" @click="openGalleryImage(2)" class="cursor-pointer" /></div>
        <div class="galeria-item"><img :src="expo4" @click="openGalleryImage(3)" class="cursor-pointer" /></div>
        <div class="galeria-item"><img :src="expo5" @click="openGalleryImage(4)" class="cursor-pointer" /></div>
      </div>
    </div>
  </section>

  <section class="mapa-ubicacion">
    <div class="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6249220943014!2d-3.3706795250006976!3d40.48356217142898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd424912b7372f4b%3A0x71d49bab96654b45!2sCalle%20Diego%20de%20Torres%2C%205%2C%2028802%20Alcal%C3%A1%20de%20Henares%2C%20Madrid!5e0!3m2!1ses!2ses!4v1756914418984!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </section>

  <section class="diseno-confianza-section">
    <div class="diseno-container">
      <div class="diseno-header">
        <h2>Diseñemos juntos tu nuevo baño</h2>
        <p class="pregunta-clave">¿Qué te preocupa más? La seguridad, el diseño moderno, la limpieza o el espacio.</p>
        <div class="compromiso-card">
          <p>Cuidamos al detalle todo el proceso: <strong>protegemos las zonas de paso</strong> y dejamos el baño operativo.</p>
          <p>La limpieza y el orden son nuestras constantes.</p>
        </div>
      </div>

      <div class="visita-tecnica">
        <h3>¿Por qué es mejor que visitemos tu baño?</h3>
        <div class="razones-grid">
          <div class="razon-item"><span class="razon-num">1</span><p><strong>Medición profesional</strong></p></div>
          <div class="razon-item"><span class="razon-num">2</span><p><strong>Muestrario en mano</strong></p></div>
          <div class="razon-item"><span class="razon-num">3</span><p><strong>Asesoramiento experto</strong></p></div>
        </div>
      </div>

      <div class="cta-final-box">
        <div class="cta-header-row">
          <img
            :src="fotoTiendaFisica"
            alt="Tienda fisica de Banos Tres60"
            class="cta-side-image cta-photo"
            loading="lazy"
          />

          <div class="cta-contact-main">
            <p class="cta-intro">Llámanos ahora, te atenderá Francisco personalmente:</p>
            <span class="telefono-destacado">661 805 952</span>
          </div>

          <img
            :src="logoSello"
            alt="Sello de calidad Banos Tres60"
            class="cta-side-image cta-logo"
            loading="lazy"
          />
        </div>

        <div class="visita-tienda">
          <p>O bien visítanos en nuestra tienda <span class="cita-previa">(con cita previa)</span></p>
          <p class="direccion-texto"><v-icon color="#5DAFB3" class="mr-1">mdi-map-marker</v-icon> Calle Diego de torres 5</p>
        </div>
        <div class="presupuesto-badge">
          <div class="badge-content">
            <span class="badge-icon">⏱️</span>
            <p>Te entregamos tu presupuesto en <strong>24 horas</strong> tras la visita</p>
          </div>
        </div>
        <blockquote class="frase-cierre">"Nos encanta nuestro trabajo y queremos dedicarte a tu proyecto el tiempo que se merece para que el resultado sea perfecto"</blockquote>
      </div>
    </div>
  </section>

  <section class="confian-section">
    <div class="confian-container">
      <h2 class="confian-title">Nuestros proveedores</h2>
      <div class="confian-logos">
        <img :src="logoGme" alt="Logo Gme" /><img :src="logoDuplach" alt="Logo Duplach" />
        <img :src="logoManillons" alt="Logo Manillons" /><img :src="logoRoyo" alt="Logo Royo" />
        <img :src="logoDecorban" alt="Logo Decorban" />
      </div>
    </div>
  </section>

  <v-dialog
    v-model="dialog"
    class="lightbox-dialog"
    content-class="lightbox-content"
    scrim="rgba(5, 17, 22, 0.88)"
    width="min(96vw, 1200px)"
  >
    <v-card class="lightbox-card" flat>
      <v-btn
        icon="mdi-close"
        class="lightbox-close"
        color="white"
        variant="flat"
        @click="closeLightbox"
      ></v-btn>

      <template v-if="galleryMode">
        <v-carousel
          class="lightbox-carousel"
          v-model="selectedGalleryIndex"
          hide-delimiter-background
          show-arrows="always"
          height="82vh"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(foto, i) in fotosTrabajos"
            :key="i"
          >
            <div class="lightbox-image-wrap">
              <v-img :src="foto" height="100%" contain />
            </div>
          </v-carousel-item>
        </v-carousel>
      </template>

      <template v-else>
        <div class="lightbox-image-wrap lightbox-single-image">
          <v-img :src="singleImage" height="82vh" contain />
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped>
  /* import fonts for header */
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@700&display=swap');

  /* 🎯 HERO HEADER CON TEXTO */
  .hero-header {
    width: 100%;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafb 100%);
    padding: clamp(40px, 8vw, 80px) 2rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .logo-circle {
    width: clamp(80px, 12vw, 120px);
    height: clamp(80px, 12vw, 120px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-circle svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  }

  .company-name {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 7vw, 64px);
    font-weight: 800;
    color: #0b3340;
    margin: 0;
    letter-spacing: 1px;
    line-height: 1.1;
    text-transform: uppercase;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  }
  .company-name strong {
    color: #5DAFB3; /* Sustituye este código por el color que quieras */
    font-weight: bold; /* Para asegurar que resalte, aunque ya sea un strong */
}

  .company-tagline {
    font-family: 'Lobster', cursive;
    font-size: clamp(18px, 2.5vw, 26px);
    color: #5DAFB3;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    margin-top: -4px;
  }
  .hero-cta {
    margin-top: 1rem;
  }
  .hero-cta-text {
    display: inline-block;
    background: #58B7AE;
    color: #fff;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 700;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    animation: pulse 2.5s infinite;
  }
  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.05); }
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
    padding: 0;                /* o 0.5rem si quieres un pelín de espacio */
    background: transparent;   /* ANTES: rgba(0,0,0,0.5) -> esto es el cuadrado gris */
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

  /* ✨ ZigZag Sections - Alternancia Imagen/Texto */
  .zigzag-section {
    padding: clamp(40px, 8vw, 60px) 2rem;
    background: #fafbfc;
  }

  .zigzag-section:nth-child(even) {
    background: #f4f6f8;
  }

  .zigzag-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(30px, 5vw, 60px);
    align-items: center;
  }

  .zigzag-imagenes {
    flex: 1;
  }

  .zigzag-img-single {
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    aspect-ratio: 4/3;
  }

  .zigzag-img-single img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .zigzag-img-single:hover img {
    transform: scale(1.05);
  }

  .zigzag-texto {
    flex: 1;
  }

  .zigzag-texto h2 {
    font-size: clamp(24px, 3vw, 36px);
    color: #0b3340;
    margin: 0 0 1rem;
    line-height: 1.2;
  }

  .zigzag-texto p {
    font-size: 1rem;
    color: #23424a;
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .zigzag-texto ul {
    margin: 1.5rem 0;
    padding-left: 20px;
    list-style: none;
  }

  .zigzag-texto li {
    color: #23424a;
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }

  /* Section reverse: mantener texto izquierda e imagen derecha */
  .section-reverse .zigzag-container {
    grid-template-columns: 1fr 1fr;
  }

  /* Sección de Atención */
  .atencion-section {
    padding: clamp(40px, 8vw, 60px) 2rem;
    background: #f9f9f9;
  }

  .atencion-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: clamp(30px, 5vw, 60px);
    align-items: center;
    flex-wrap: wrap;
  }

  .atencion-texto {
    flex: 1;
    min-width: 300px;
  }

  .atencion-texto h2 {
    font-size: clamp(24px, 3vw, 32px);
    color: #0b3340;
    margin: 0 0 1.5rem;
    line-height: 1.2;
  }

  .atencion-texto p {
    font-size: 1rem;
    color: #23424a;
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .atencion-img {
    flex: 0 1 200px;
    align-self: flex-start;
  }

  .atencion-img img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  }

  /* Galería Horizontal */
  .galeria-final {
    padding: clamp(40px, 8vw, 60px) 2rem;
    background: #fff;
    border-top: 1px solid #e0e0e0;
  }

  .galeria-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .galeria-final h2 {
    text-align: center;
    font-size: clamp(24px, 3vw, 32px);
    color: #0b3340;
    margin: 0 0 2rem;
  }

  /* Contenedor relativo para las flechas */
  .galeria-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  /* Transformamos el grid en un contenedor de scroll horizontal */
  .galeria-items {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 20px 5px;
    scrollbar-width: none;
  }

  .galeria-items::-webkit-scrollbar {
    display: none;
  }

  /* Ajustamos el tamaño de los items para que no se encojan */
  .galeria-item {
    position: relative;
    flex: 0 0 280px;
    aspect-ratio: 1/1;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }

  /* Estilo de los botones de navegación */
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    background: white;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .nav-btn:hover {
    background: #5DAFB3;
  }

  .nav-btn:hover .v-icon {
    color: white !important;
  }

  .nav-btn.prev { left: -15px; }
  .nav-btn.next { right: -15px; }

  .galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .galeria-item:hover img {
    transform: scale(1.08);
  }

  /* Lightbox de galeria */
  .lightbox-card {
    background: transparent;
    overflow: visible;
    border-radius: 20px;
    box-shadow: none;
    position: relative;
  }

  .lightbox-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 20;
    background: rgba(10, 22, 28, 0.6);
    backdrop-filter: blur(6px);
  }

  .lightbox-image-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .lightbox-single-image {
    background: rgba(8, 20, 26, 0.48);
    border-radius: 18px;
    min-height: 82vh;
  }

  :deep(.lightbox-content) {
    background: transparent !important;
    box-shadow: none !important;
    overflow: visible !important;
  }

  :deep(.lightbox-carousel) {
    background: transparent;
  }

  :deep(.lightbox-carousel .v-window__container) {
    background: transparent;
    border-radius: 18px;
  }

  :deep(.lightbox-carousel .v-window-item) {
    background: rgba(8, 20, 26, 0.48);
    border-radius: 18px;
  }

  :deep(.lightbox-carousel .v-btn--icon) {
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    backdrop-filter: blur(4px);
  }

  :deep(.lightbox-carousel .v-btn--icon:hover) {
    background: rgba(93, 175, 179, 0.9);
  }

  /*Ubicacion mapa estilo*/

  .mapa-ubicacion {
  width: 100%;
  height: 450px;
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
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
  /* modifier to invert order */
  .conocenos-section.section-reverse .conocenos-container {
    flex-direction: row-reverse;
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
  /* Imágenes: ocupan su contenedor sin deformarse */
  .conocenos-img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

/* ✨ Estilos Nueva Sección Diseño y Confianza */
.diseno-confianza-section {
  padding: clamp(60px, 10vw, 100px) 2rem;
  background: #ffffff;
}

.diseno-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.diseno-header h2 {
  font-size: clamp(32px, 5vw, 48px);
  color: #0b3340;
  margin-bottom: 1rem;
}

.pregunta-clave {
  font-size: 1.4rem;
  color: #5DAFB3;
  font-weight: 600;
  margin-bottom: 2rem;
}

.compromiso-card {
  background: #f0f7f8;
  padding: 2rem;
  border-radius: 16px;
  border-left: 5px solid #5DAFB3;
  text-align: left;
  margin-bottom: 4rem;
}

.visita-tecnica h3 {
  font-size: 2rem;
  color: #0b3340;
  margin-bottom: 2.5rem;
}

.razones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.razon-item {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  position: relative;
  text-align: left;
}

.razon-num {
  position: absolute;
  top: -15px;
  left: 20px;
  background: #5DAFB3;
  color: white;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.cta-final-box {
  margin-top: 4rem;
  padding: 3rem 1rem;
  border-top: 2px dashed #e0e0e0;
}

.cta-header-row {
  display: grid;
  grid-template-columns: minmax(140px, 180px) 1fr minmax(140px, 180px);
  align-items: center;
  gap: clamp(1rem, 2vw, 2rem);
}

.cta-contact-main {
  text-align: center;
}

.cta-side-image {
  width: 100%;
  max-width: 180px;
  justify-self: center;
  box-shadow: 0 8px 20px rgba(11, 51, 64, 0.14);
}

.cta-photo {
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 18px;
}

.cta-logo {
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background: #ffffff;
  border-radius: 18px;
  padding: 0.7rem;
}

.cta-final-box p:first-child {
  font-size: 1.5rem; /* Antes era el tamaño por defecto, ahora es más grande */
  font-weight: 500;   /* Un poco más de grosor para que se lea mejor */
  color: #0b3340;    /* Color oscuro para que resalte */
  margin-bottom: 0.5rem;
}

.cta-intro {
  font-size: 1.4rem !important;
  color: #0b3340;
  margin-bottom: 0.5rem;
}

.telefono-destacado {
  display: block;
  font-size: clamp(45px, 10vw, 85px); /* Un poco más grande */
  font-weight: 900;
  color: #0b3340;
  text-decoration: none;
  margin: 0.5rem 0;
  line-height: 1;
  transition: all 0.3s ease;
  letter-spacing: -2px;
}

.telefono-destacado:hover {
  color: #5DAFB3;
  transform: scale(1.02);
}

/* Estilo para la zona de dirección */
.visita-tienda {
  margin: 2rem 0;
}

.cita-previa {
  color: #5DAFB3;
  font-weight: 600;
}

.direccion-texto {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0b3340;
  margin-top: 0.5rem;
}

/* El Badge de 24 Horas (Lo más atractivo visualmente) */
.presupuesto-badge {
  display: inline-block;
  background: #0b3340; /* Fondo oscuro para contraste máximo */
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 2.5rem 0;
  box-shadow: 0 10px 20px rgba(11, 51, 64, 0.2);
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.badge-content p {
  margin: 0 !important;
  color: white !important;
  font-size: 1.2rem;
}

.badge-content strong {
  color: #5DAFB3;
  font-size: 1.4rem;
}

.badge-icon {
  font-size: 1.8rem;
}

/* Ajuste fino de la frase de cierre */
.frase-cierre {
  font-family: 'Lobster', cursive;
  font-size: 1.8rem;
  color: #5DAFB3;
  max-width: 800px;
  margin: 3rem auto 0;
  line-height: 1.3;
  position: relative;
}

/* Añadimos unas comillas decorativas */
.frase-cierre::before {
  content: '"';
  font-size: 4rem;
  position: absolute;
  top: -20px;
  left: -20px;
  opacity: 0.2;
}

/* ========================= */
/* 📱 MÓVIL – DEFINITIVO */
/* ========================= */
@media (max-width: 768px) {
  /* Base de espaciado y jerarquía visual */
  section {
    padding: 3rem 1.5rem;
  }

  section h2 {
    margin-bottom: 1.5rem;
  }

  /* HERO */
  .hero-header {
    padding: 30px 1rem;
  }

  .logo-circle {
    width: 80px;
    height: 80px;
  }

  .company-name {
    font-size: 28px;
  }

  .company-tagline {
    font-size: 14px;
  }

  /* ZIGZAG */
  .zigzag-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-reverse .zigzag-container {
    grid-template-columns: 1fr;
  }

  .zigzag-imagenes {
    margin-bottom: 1.5rem;
  }

  /* ATENCIÓN */
  .atencion-container {
    flex-direction: column;
    gap: 2rem;
  }

  .atencion-img {
    flex: 1;
    width: 100%;
  }

  /* GALERÍA */
  .nav-btn {
    display: none;
  }

  .galeria-item {
    flex: 0 0 240px;
  }

  /* MEJOR OPCIÓN - TABLA COMO TARJETAS */
  .mejor-opcion-tabla,
  .mejor-opcion-tabla tbody,
  .mejor-opcion-tabla tr {
    display: block;
    width: 100%;
  }

  .mejor-opcion-tabla {
    border-collapse: separate;
    border-spacing: 0;
  }

  .mejor-opcion-tabla td {
    display: block;
    border: 1px solid #e5ecef;
    border-radius: 12px;
    background: #f7fbfc;
    margin-bottom: 0.9rem;
    padding: 1rem 1.1rem;
    box-shadow: 0 2px 8px rgba(11, 51, 64, 0.06);
  }

  .mejor-opcion-tabla tr:last-child td:last-child {
    margin-bottom: 0;
  }

  /* CONÓCENOS */
  .conocenos-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .conocenos-imagenes {
    display: flex !important;
    flex-direction: column;
    gap: 1rem;
  }

  .conocenos-img {
    width: 100%;
    aspect-ratio: 4 / 3;
  }

  .conocenos-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* BAÑERA */
  .banera-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .imagenes {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .img {
    aspect-ratio: 1 / 1;
  }

  .texto {
    max-width: 100%;
    text-align: left;
  }

  /* DISEÑO Y CONFIANZA */
  .diseno-confianza-section {
    padding: 3rem 1.5rem;
  }

  .compromiso-card {
    padding: 1.35rem 1.1rem;
  }

  .razones-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .razon-item {
    margin-top: 0;
  }

  .cta-header-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cta-contact-main {
    order: 1;
  }

  .cta-photo {
    order: 2;
    width: min(62vw, 230px);
    max-width: 230px;
  }

  .cta-logo {
    order: 3;
    width: min(58vw, 210px);
    max-width: 210px;
  }

  .telefono-destacado {
    font-size: clamp(30px, 10vw, 46px);
    line-height: 1.1;
    word-break: break-word;
  }
}

</style>
