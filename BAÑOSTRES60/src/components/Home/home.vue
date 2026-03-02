<script setup>

defineOptions({
  name: 'HomeView'
})

import foto1b from '../../assets/imagenes/Obra/1.1.jpg'
import foto2b from '../../assets/imagenes/Obra/1.2.jpg'
import foto3b from '../../assets/imagenes/Obra/1.3.jpg'

import banera1 from '../../assets/imagenes/home/cb.1.jpg'
import banera2 from '../../assets/imagenes/home/cb.2.jpg'
import banera3 from '../../assets/imagenes/home/cb.3.jpg'
import banera4 from '../../assets/imagenes/home/cb.4.jpg'

import logoGme from '../../assets/imagenes/home/confian/gme.jpg'
import logoDuplach from '../../assets/imagenes/home/confian/duplach.jpg'
import logoManillons from '../../assets/imagenes/home/confian/manillons.jpg'
import logoRoyo from '../../assets/imagenes/home/confian/royogroup.png'
import logoDecorban from '../../assets/imagenes/home/confian/decorban.gif'

</script>


<template>
  <!-- HERO HEADER CON TEXTO -->
  <div class="hero-header">
    <div class="hero-content">

      <!--
      <div class="logo-circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">

          <circle cx="50" cy="50" r="48" fill="#5DAFB3"/>

          <g transform="translate(50, 50)">

            <rect x="-8" y="-25" width="16" height="20" rx="4" fill="none" stroke="white" stroke-width="2"/>

            <circle cx="0" cy="-25" r="12" fill="white"/>

            <circle cx="-8" cy="0" r="1.5" fill="white"/>
            <circle cx="0" cy="2" r="1.5" fill="white"/>
            <circle cx="8" cy="0" r="1.5" fill="white"/>
            <circle cx="-8" cy="8" r="1.5" fill="white"/>
            <circle cx="0" cy="10" r="1.5" fill="white"/>
            <circle cx="8" cy="8" r="1.5" fill="white"/>
          </g>
        </svg>
      </div>
      -->
      <h1 class="company-name">BAÑOS TRES 60</h1>
      <p class="company-tagline">Baños adaptados. Cambios de bañera por ducha.</p>
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
        ¡Dale una vuelta a tu baño!
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
          <td>Más de <b>30 años de experiencia</b> nos avalan</td>
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
        <img :src="banera4" alt="Cambio de bañera imagen 1" loading="lazy" />
      </div>

      <div class="img img-left-middle">
        <img :src="banera1" alt="Cambio de bañera imagen 2" loading="lazy" />
      </div>

      <div class="img img-right-middle">
        <img :src="banera2" alt="Cambio de bañera imagen 3" loading="lazy" />
      </div>

      <div class="img img-left-bottom">
        <img :src="banera3" alt="Cambio de bañera imagen 4" loading="lazy" />
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



<section class="confian-section">
  <div class="confian-container">
    <h2 class="confian-title">Nuestros proveedores</h2>
    <div class="confian-logos">
      <img :src="logoGme" alt="Logo Gme" />
      <img :src="logoDuplach" alt="Logo Duplach" />
      <img :src="logoManillons" alt="Logo Manillons" />
      <img :src="logoRoyo" alt="Logo Royo Group" />
      <img :src="logoDecorban" alt="Logo Decorban" />
    </div>
  </div>
</section>

</template>

<style scoped>
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
    font-size: clamp(32px, 6vw, 56px);
    font-weight: 800;
    color: #0b3340;
    margin: 0;
    letter-spacing: 0.5px;
    line-height: 1.1;
  }

  .company-tagline {
    font-size: clamp(16px, 2vw, 22px);
    color: #23424a;
    margin: 0;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 0.3px;
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


/* ========================= */
/* 📱 MÓVIL – DEFINITIVO */
/* ========================= */
@media (max-width: 768px) {

  /* 🔹 HERO HEADER */
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

  /* 🔹 CONÓCENOS */
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

  /* 🔹 BAÑERA */
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

  /* 🔹 TEXTO */
  .texto {
    max-width: 100%;
    text-align: left;
  }

  section {
    padding: 2rem 1rem;
  }
}




  </style>
