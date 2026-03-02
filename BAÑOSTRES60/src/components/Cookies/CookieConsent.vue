<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

onMounted(() => {
  const accepted = localStorage.getItem('cookieConsentAccepted');

  // Si NO ha aceptado aún, mostramos el banner
  if (!accepted || accepted !== 'true') {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookieConsentAccepted', 'true');
  showBanner.value = false;
};

const denieCookies = () => {
  localStorage.setItem('cookieConsentAccepted', 'false');
  showBanner.value = false;
};

</script>

<template>
  <transition name="slide-up">
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-container">
        <div class="cookie-text">
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestra
          <a href="/politica-de-cookies" target="_blank">política de cookies</a>.
        </div>
        <button class="cookie-button" @click="acceptCookies">Aceptar</button>
        <button class="cookie-button" @click="denieCookies">Rechazar</button>
      </div>
    </div>
  </transition>
</template>



<style scoped>
.cookie-banner {
  --primary: var(--color-primary, #00bcd4);
  --primary-dark: var(--color-primary-dark, #0097a7);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  color: #f1f1f1;
  z-index: 9999;
  padding: 1rem 1.5rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.35);
  font-family: 'Poppins', sans-serif;
}

.cookie-container {
  max-width: 12000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.cookie-text {
  font-size: 0.95rem;
  line-height: 1.5;
}

.cookie-text a {
  color: var(--primary);
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s ease;
}

.cookie-text a:hover {
  color: var(--primary-dark);
}

.cookie-button {
  background-color: var(--primary-dark);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.cookie-button:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* Animación de entrada/salida */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .cookie-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
