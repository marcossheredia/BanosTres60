<script setup>

defineOptions({
  name: 'HomeView'
})

import fotoSuelta from '../../assets/imagenes/Cambio_banera/1.png'

import foto1b from '../../assets/imagenes/Obra/1.jpg'
import foto2b from '../../assets/imagenes/Obra/2.jpg'
import foto3b from '../../assets/imagenes/Obra/3.jpg'

import banera1 from '../../assets/imagenes/Proceso/1.jpg'
import banera2 from '../../assets/imagenes/Proceso/2.jpg'
import banera3 from '../../assets/imagenes/Proceso/3.jpg'
import banera4 from '../../assets/imagenes/Proceso/4.jpg'

import expo1 from '../../assets/imagenes/Exposicion/1.jpg'
import expo2 from '../../assets/imagenes/Exposicion/2.jpg'
import expo3 from '../../assets/imagenes/Exposicion/3.jpg'
import expo4 from '../../assets/imagenes/Exposicion/4.jpg'
import expo5 from '../../assets/imagenes/Exposicion/5.jpg'

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
      <h1 class="company-name">BAÑOS TRES<strong>60</strong></h1>

      <!-- llamada de atención secundaria -->
      <div class="hero-cta">
        <span class="hero-cta-text">¡Cambio de bañera por plato de ducha!</span>
      </div>

      <p class="company-tagline">Adaptamos el baño a tus necesidades.</p>

    </div>
  </div>

<!-- SECCIÓN 1: Imagen LEFT + Texto RIGHT -->
<section class="zigzag-section section-normal">
  <div class="zigzag-container">
    <div class="zigzag-imagenes">
      <div class="zigzag-img-single">
        <img :src="foto1b" alt="Dale una vuelta a tu baño" loading="lazy" />
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
        <li>✔ Instalación rápida y sin complicaciones</li>
        <li>✔ Materiales de calidad y acabados a tu gusto</li>
        <li>✔ Mayor comodidad y accesibilidad</li>
      </ul>
      <p><strong>Renueva tu baño hoy mismo. ¡Te esperamos!</strong></p>
      <p><strong>¡Pide presupuesto hoy mismo!</strong></p>
    </div>
  </div>
</section>


<!-- SECCIÓN 2: Texto LEFT + Imagen RIGHT (Invertida) -->
<section class="zigzag-section section-reverse">
  <div class="zigzag-container">
    <div class="zigzag-texto">
      <h2>Soluciones a medida para tu hogar</h2>
      <p><strong>Diseño y funcionalidad en perfecta armonía.</strong></p>
      <p>
        Gana en tranquilidad y diseño con un baño adaptado a tu ritmo de vida.
        Tanto si la bañera se ha convertido en un obstáculo diario como si simplemente buscas un espacio más funcional y moderno, tenemos la solución.
        Sustituimos tu bañera por un plato de ducha antideslizante a ras de suelo.
        Mejora tu autonomía y disfruta de un baño más espacioso, seguro y fácil de mantener.
      </p>
      <ul>
        <li>✔ Presupuestos sin compromiso</li>
        <li>✔ Instalaciones rápidas y profesionales</li>
        <li>✔ Materiales de primera calidad</li>
      </ul>
      <p><strong>Contacta con nosotros hoy mismo</strong></p>
    </div>

    <div class="zigzag-imagenes">
      <div class="zigzag-img-single">
        <img :src="foto2b" alt="Soluciones a medida" loading="lazy" />
      </div>
    </div>
  </div>
</section>


<!-- SECCIÓN 3: Imagen LEFT + Texto RIGHT -->
<section class="zigzag-section section-normal">
  <div class="zigzag-container">
    <div class="zigzag-imagenes">
      <div class="zigzag-img-single">
        <img :src="foto3b" alt="Transformamos espacios" loading="lazy" />
      </div>
    </div>

    <div class="zigzag-texto">
      <h2>Transformamos tus espacios</h2>
      <p><strong>Calidad y dedicación en cada proyecto.</strong></p>
      <p>
        Seamos prácticos: una bañera que no se usa para su fin, solo ocupa espacio,
        al cambiarla por un plato de ducha moderno y funcional no solo modernizas la estética,
        estás dando más amplitud a tu baño,,más funcionalidad al espacio y disfrutarás de la comodidad de una ducha más amplia y segura.
        Es una inversión inteligente que revaloriza tu vivienda y te hace la vida más fácil
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

<!-- SECCIÓN: Sobre Nosotros / Atención -->
<section class="atencion-section">
  <div class="atencion-container">
    <div class="atencion-texto">
      <h2>En un sector donde abundan las ofertas</h2>
      <p>
        Nosotros elegimos otro camino. Preferimos realizar menos trabajos al mes
        para asegurar que el suyo reciba nuestra total atención. Cada cliente es importante
        para nosotros, y eso se refleja en la calidad de nuestro trabajo.
      </p>
      <p><strong>Tu baño merece lo mejor.</strong></p>
    </div>

    <div class="atencion-img">
      <img :src="fotoSuelta" alt="Atención dedicada" loading="lazy" />
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
      <p class="cta">✨ <strong>Pide presupuesto hoy mismo. ¡Te esperamos!</strong></p>
      <p style="font-weight: 600; margin-top: 1rem;">📞 Llámanos:</p>
      <p>
        <a href="tel:912950536">912 950 536</a> (fijo) | <a href="tel:661805952">661 805 952</a> (móvil)
      </p>
      <p style="margin-top: 1rem; font-style: italic;">✓ Presupuesto sin compromiso</p>
    </div>
  </div>
</section>

<!-- GALERÍA HORIZONTAL -->
<section class="galeria-final">
  <div class="galeria-container">
    <h2>Nuestros trabajos</h2>
    <div class="galeria-items">
      <div class="galeria-item">
        <img :src="expo1" alt="Trabajo 1" loading="lazy" />
      </div>
      <div class="galeria-item">
        <img :src="expo2" alt="Trabajo 2" loading="lazy" />
      </div>
      <div class="galeria-item">
        <img :src="expo3" alt="Trabajo 3" loading="lazy" />
      </div>
      <div class="galeria-item">
        <img :src="expo4" alt="Trabajo 4" loading="lazy" />
      </div>
      <div class="galeria-item">
        <img :src="expo5" alt="Trabajo 5" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="mapa-ubicacion">
      <div class="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6249220943014!2d-3.3706795250006976!3d40.48356217142898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd424912b7372f4b%3A0x71d49bab96654b45!2sCalle%20Diego%20de%20Torres%2C%205%2C%2028802%20Alcal%C3%A1%20de%20Henares%2C%20Madrid!5e0!3m2!1ses!2ses!4v1756914418984!5m2!1ses!2ses"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
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

  /* Invertir orden para section-reverse */
  .section-reverse .zigzag-container {
    grid-template-columns: 1fr 1fr;
    direction: rtl;
  }

  .section-reverse .zigzag-container > * {
    direction: ltr;
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

  .galeria-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: clamp(16px, 3vw, 24px);
  }

  .galeria-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 1/1;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

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

  /* --- Responsive --- */

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

    /* 🔹 ZIGZAG SECTIONS */
    .zigzag-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .section-reverse .zigzag-container {
      direction: ltr;
    }

    /* 🔹 ATENCIÓN SECTION */
    .atencion-container {
      flex-direction: column;
      gap: 2rem;
    }

    .atencion-img {
      flex: 1;
      width: 100%;
    }

    /* 🔹 GALERÍA */
    .galeria-items {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 12px;
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
