<script setup>

// Componente Servicios Industriales
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// Inicializamos el router
const router = useRouter();

// Imagen por defecto para servicios sin imagen disponible
const defaultImage = '/src/assets/imagenes/usoGeneral/logo_SSAB450.png';

// Lista de servicios para mostrar en la galería principal
const servicios = ref([
  {
    id: 1,
    titulo: 'Soldadura autógena',
    imagen: '/src/assets/imagenes/Soldadura autógena/DSC_0103-2-300x199.webp',
    alt: 'Soldadura autógena de precisión para componentes industriales',
    descripcion: 'Técnica de soldadura con llama de alta temperatura para uniones precisas de metales',
    delay: 0.1
  },
  {
    id: 2,
    titulo: 'Soldadura MIG-MAG robotizada',
    imagen: '/src/assets/imagenes/Mig Mag robotizada/_S0A7353.webp',
    alt: 'Soldadura MIG MAG robotizada para aplicaciones industriales',
    descripcion: 'Sistemas automatizados para soldadura MIG-MAG de alta precisión y productividad',
    featured: true,
    delay: 0.2
  },
  {
    id: 3,
    titulo: 'Soldadura por resistencia',
    imagen: '/src/assets/imagenes/Soldadura por resistencia/IMG_4565 1.webp',
    alt: 'Proceso de soldadura por resistencia en piezas metálicas',
    descripcion: 'Unión mediante calor generado por resistencia eléctrica entre superficies de contacto',
    delay: 0.3
  }
]);

// Función para navegar a la página de todos los servicios
const irATodosServicios = () => {
  router.push({ path: '/todo-servicios' });
};


// Total de servicios disponibles para mostrar como contador
const totalServicios = computed(() => 9); // Usamos un valor fijo ya que no necesitamos calcular desde todosLosServicios

// Mejorar la accesibilidad y SEO al cargar el componente
onMounted(() => {
  // Asegurar que las imágenes carguen correctamente
  const images = document.querySelectorAll('.servicios-galeria img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.classList.add('img-error');
      this.alt = 'Imagen no disponible - ' + this.alt;
    });
  });
  
  // Aplicar animación de aparición a elementos
  const elementos = document.querySelectorAll('.animate-on-scroll');
  elementos.forEach(el => {
    el.classList.add('appear');
  });
});
</script>

//AQUI VAN A IR TODAS LAS FOTOS DE LOS GRIFOS
<template>
  <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='@/assets/imagenes/usoGeneral/Logo verde.png'
            alt="Descripción de la imagen 1"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>AQUÍ VA TU TÍTULO</h2>
            <p>
              Aquí va tu información o descripción.  
              Escribe lo que quieras, incluso varias líneas de texto.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 2"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 3"
            height="300"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='@/assets/imagenes/usoGeneral/Logo verde.png'
            alt="Descripción de la imagen 1"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>AQUÍ VA TU TÍTULO</h2>
            <p>
              Aquí va tu información o descripción.  
              Escribe lo que quieras, incluso varias líneas de texto.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 2"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 3"
            height="300"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>


    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='@/assets/imagenes/usoGeneral/Logo verde.png'
            alt="Descripción de la imagen 1"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>AQUÍ VA TU TÍTULO</h2>
            <p>
              Aquí va tu información o descripción.  
              Escribe lo que quieras, incluso varias líneas de texto.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 2"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 3"
            height="300"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>


    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='@/assets/imagenes/usoGeneral/Logo verde.png'
            alt="Descripción de la imagen 1"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>AQUÍ VA TU TÍTULO</h2>
            <p>
              Aquí va tu información o descripción.  
              Escribe lo que quieras, incluso varias líneas de texto.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 2"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 3"
            height="300"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>


    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='@/assets/imagenes/usoGeneral/Logo verde.png'
            alt="Descripción de la imagen 1"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>AQUÍ VA TU TÍTULO</h2>
            <p>
              Aquí va tu información o descripción.  
              Escribe lo que quieras, incluso varias líneas de texto.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 2"
            height="300"
            cover
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= "@/assets/imagenes/usoGeneral/Logo verde.png"
            alt="Descripción de la imagen 3"
            height="300"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>


<style scoped>
/* Variables de estilo */
:root {
  --secondary-color: #808990;
  --text-color: #000000;
  --background-color: #FFFFFF;
  --soft-gray:rgba(249, 249, 249, 0.62); /* Nuevo color gris suave */
  --primary-color: #F6911D; /* Color principal naranja */
  --border-radius: 12px; /* Bordes más suaves para un look moderno */
  --spacing-unit: 1rem;
  --transition-speed: 0.3s;
  --box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

/* Contenedor principal */
.servicios-industriales-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

/* Sección de servicios */
.servicios-section {
  background: linear-gradient(to right, #ffffff, #f8f8f8);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(246, 145, 29, 0.1);
}

/* Título de sección */
.section-title {
  font-size: 2.8rem;
  font-weight: 700; 
  color: var(--text-color);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-align: center;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

/* Descripción */
.description {
  margin-top: 24px;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #424242;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
}

/* Asegurar que las etiquetas strong no rompen el diseño en móvil */
.description strong.accent--text {
  display: inline;
  color: #F6911D !important;
}

/* Wrapper de contenido */
.content-wrapper {
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

/* Galería */
.servicios-galeria {
  background-color: var(--soft-gray);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.03);
}

/* Grid de galería */
.galeria-grid {
  height: 100%;
}

/* Tarjeta de galería */
.galeria-item {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: var(--border-radius) !important;
  border: 2px solid transparent;
}

/* Tarjeta destacada */
.featured-card {
  border-color: var(--primary-color);
}

/* Transformación en hover */
.transform-card:hover {
  transform: translateY(-5px);
}

/* Efecto de imagen con zoom */
.image-zoom {
  transition: transform 0.7s ease-in-out;
}

.zoom-active {
  transform: scale(1.05);
}

/* Escala reducida para tarjetas del modal */
.modal-card .image-zoom.zoom-active {
  transform: scale(1.03);
}

/* Overlay de tarjeta */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.35s ease-in-out;
}

.overlay-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Contenido del overlay */
.overlay-content {
  padding-bottom: 2rem;
}

.overlay-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.overlay-divider {
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 8px 0 12px;
}

.overlay-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
}

/* Etiqueta inferior siempre visible */
.card-footer-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0));
  color: white;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border-bottom: 2px solid var(--primary-color);
  z-index: 2; /* Aseguramos que siempre esté por encima */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* Mejora legibilidad */
}

.footer-icon {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.galeria-item:hover .footer-icon {
  opacity: 1;
  transform: translateX(3px);
}

/* Estilos específicos para móviles */
@media (max-width: 960px) {
  .section-title {
    font-size: 2.4rem;
    text-align: center;
  }
  
  .description {
    font-size: 1.05rem;
    line-height: 1.6;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  /* Aseguramos que el título del modal también esté centrado en móviles */
  .modal-title h2 {
    font-size: 1.8rem !important;
  }
}

@media (max-width: 768px) {
  .galeria-item {
    height: 250px !important;
    margin-bottom: 16px;
  }
  
  .section-title {
    font-size: 2.1rem;
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.7;
  }
  
  .overlay-title {
    font-size: 1.3rem;
  }
  
  .overlay-description {
    font-size: 0.9rem;
  }
  
  .featured-card {
    height: 300px !important;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.9rem;
    letter-spacing: -0.01em;
    padding: 0 10px;
  }
  
  .description {
    font-size: 0.95rem;
    line-height: 1.6;
    padding: 0 15px;
  }
  
  .content-wrapper {
    padding: 0 10px;
  }
  
  .card-footer-label {
    padding: 12px;
    font-size: 1rem;
  }
  
  .servicios-section {
    padding: 1rem !important;
  }

  .servicios-industriales-container {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}

@media (max-width: 320px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 5px;
  }
  
  strong.accent--text {
    display: inline;
  }
}
.boton-cerrar-gris {
  background-color: #808990 !important;
  color: white !important;
  border: 2px solid #F6911D !important;
}

.boton-cerrar-gris:hover {
  background-color: #6e7780 !important; /* un pelín más oscuro en hover */
}
/* Animaciones de entrada */
.animate-on-scroll {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.animate-on-scroll.appear {
  opacity: 1;
}

.fade-in-left {
  transform: translateX(-40px);
}

.fade-in-left.appear {
  transform: translateX(0);
}

.fade-in-right {
  transform: translateX(40px);
}

.fade-in-right.appear {
  transform: translateX(0);
}

.fade-in-up-1, .fade-in-up-2, .fade-in-up-3 {
  transform: translateY(30px);
}

.fade-in-up-1.appear, .fade-in-up-2.appear, .fade-in-up-3.appear {
  transform: translateY(0);
  transition-delay: var(--animation-delay, 0s);
}

/* Imagen de error (se mantiene igual para preservar la accesibilidad) */
.img-error {
  min-height: 150px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #888;
  padding: 20px;
  text-align: center;
}

/* Estilos para el modal de servicios */
.modal-servicios {
  border-radius: var(--border-radius) !important;
  overflow: hidden;
  height: 85vh;
  margin: auto;
  transform: scale(0.85);
}

.modal-title {
  background: linear-gradient(to right, #ffffff, #f9f9f9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.modal-title h2 {
  text-align: center;
  width: 100%;
  position: relative;
}

/* Botón cerrar alineado a la derecha para mantener el título centrado */
.cerrar-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.cerrar-btn {
  border-color: #F6911D !important;
  transition: all 0.3s ease;
}

.cerrar-btn:hover {
  background-color: rgba(249, 133, 0, 0.1) !important;
}

.cerrar-modal-btn {
  border: 2px solid #F6911D !important;
  transition: all 0.3s ease;
}

/* Estilos para los filtros */
.filtros-container {
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.filtros-scroll-container {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 10px;
  -ms-overflow-style: none;  /* IE y Edge */
  scrollbar-width: none;     /* Firefox */
}

.filtros-scroll-container::-webkit-scrollbar {
  display: none;  /* Chrome, Safari y Opera */
}

.filtro-chip {
  font-weight: 500 !important;
  min-width: 110px;
  justify-content: center;
}

.selected-chip {
  box-shadow: 0 2px 8px rgba(246, 145, 29, 0.3) !important;
}

/* Estilos específicos para las tarjetas del modal */
.modal-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  position: relative;
}

.modal-servicio-col {
  transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: opacity, transform;
}

/* Badge de categoría mejorado */
.categoria-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  z-index: 3; /* Aumentamos para que esté siempre por encima del overlay */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.categoria-badge.automatizada {
  background-color: #42A5F5;
}

.categoria-badge.soldadura {
  background-color: #66BB6A;
}

.categoria-badge.brazing {
  background-color: #AB47BC;
}

.categoria-badge.especializada {
  background-color: #FFA726;
}

/* Overlay mejorado para modal */
.card-overlay-modal {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 90%);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Cambiado a center para mejor posicionamiento vertical */
  padding: 1.5rem;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.35s ease-in-out;
  z-index: 1; /* Colocamos justo debajo del footer */
  padding-bottom: 80px; /* Aumentado el espacio para que no se solape con el título */
  padding-top: 80px; /* Espacio adicional en la parte superior para evitar que choque con el badge */
}

.overlay-visible-modal {
  opacity: 1;
  transform: translateY(0);
}

.overlay-content-modal {
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centramos horizontalmente */
  text-align: center;
}

/* Título oculto en el overlay pero mantenido en el CSS por si se necesita más adelante */
.overlay-title-modal {
  display: none; /* Ocultamos el título en el overlay */
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
}

.overlay-divider-modal {
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 0 auto 12px; /* Centrado horizontalmente y ajustado el margen */
}

.overlay-description-modal {
  color: rgba(255, 255, 255, 0.98);
  font-size: 0.95rem;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  max-height: 100px;
  overflow-y: auto;
  /* Alineación al centro y mejoras de estilo */
  font-weight: 500;
  text-align: center;
  margin-top: 30px; /* Bajamos la descripción para evitar que choque con el badge */
  padding: 8px 15px;
  background-color: rgba(0, 0, 0, 0.35); /* Fondo semi-transparente para mejor legibilidad */
  border-radius: 8px;
}

.v-slide-x-transition-enter-active,
.v-slide-x-transition-leave-active {
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1),
              opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}

.v-slide-x-transition-enter-from {
  opacity: 0;
  transform: translateX(15px);
}

.v-slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}

/* Responsividad para dispositivos móviles */
@media (max-width: 768px) {
  .filtro-chip {
    min-width: 90px;
    font-size: 0.8rem !important;
  }
  
  .modal-title h2 {
    font-size: 1.5rem !important;
  }
  
  .modal-servicio-col {
    padding: 8px !important;
  }
  
  .modal-card {
    height: 220px !important;
  }
}

/* Media Query para preferencia de reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .image-zoom,
  .card-overlay,
  .transform-card,
  .galeria-item,
  .footer-icon,
  .v-slide-x-transition-enter-active,
  .v-slide-x-transition-leave-active,
  .modal-servicio-col {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
</style>
