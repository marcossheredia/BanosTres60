<script setup>
import './NavbarStyleAdditions.css';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// Nombre multi-word para evitar la regla de lint de Vue
defineOptions({ name: 'AppNavbar' })

// Inicializar router para navegación programática
const router = useRouter();

// Reactive state for controlling navbar behavior
const scrolled = ref(false);
const isMenuOpen = ref(false);
const firstFocusableElement = ref(null);
const lastFocusableElement = ref(null);
const activeDropdowns = ref({});
const isMobile = ref(window.innerWidth <= 768);
const drawer = ref(false);

// menu logic helpers
const toggleSubmenu = (index, event) => {
  if (!isMobile.value) return;
  event.preventDefault();
  activeDropdowns.value[index] = !activeDropdowns.value[index];
};

const toggleNestedSubmenu = (parentIndex, childIndex, event) => {
  if (!isMobile.value) return;
  event.preventDefault();
  const key = `${parentIndex}-${childIndex}`;
  activeDropdowns.value[key] = !activeDropdowns.value[key];
  if (activeDropdowns.value[key]) {
    activeDropdowns.value[parentIndex] = true;
  }
};

let structuredDataScripts = []; // will hold inserted script tags (tag elements)

// helper to update isMobile on resize
const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768;
};

// manage dropdown state
const closeAllDropdowns = () => {
  activeDropdowns.value = {};
};

// SEO structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SSAB450",
  "description": "Especialistas en acero inoxidable y servicios industriales",
  "url": "https://ssab450.com",
  "logo": "https://ssab450.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/ssab450",
    "https://www.linkedin.com/company/ssab450"
  ]
};

const navItems = ref([
  {
    name: 'INICIO',
    path: '/',
    title: 'Ir a la página de inicio',
    ariaLabel: 'Inicio',
    keywords: 'inicio, home, página principal',
    hasSubmenu: false
  },
  {
    name: 'QUIENES SOMOS',
    path: '',
    title: 'Conozca más sobre nuestra empresa y nuestros valores',
    ariaLabel: 'Quiénes somos',
    keywords: 'empresa, valores, misión, visión, historia',
    hasSubmenu: true,
    submenu: [
      { name: 'SOBRE NOSOTROS', path: '/sobre-nosotros', title: 'Conozca la historia y valores de nuestra empresa', ariaLabel: 'Sobre nosotros' },
      { name: 'NUESTRA MISIÓN', path: '/mision', title: 'Nuestra misión y objetivos como empresa', ariaLabel: 'Nuestra misión' }
    ]
  },
  {
    name: 'PLATOS',
    path: '/platos1',
    title: 'Catálogo completo de platos de ducha',
    ariaLabel: 'Platos',
    keywords: 'platos, ducha, repuestos',
    hasSubmenu: false
  },
  {
    name: 'MAMPARAS',
    path: '',
    title: 'Procesos auxiliares y servicios adicionales',
    ariaLabel: 'Mamparas',
    keywords: 'mamparas, correderas, abatibles, plegables',
    hasSubmenu: true,
    submenu: [
      { name: 'Mamparas Correderas', path: '/mamparas1', title: 'Catálogo completo de mamparas correderas', ariaLabel: 'Correderas' },
      { name: 'Mamparas Abatibles', path: '/mamparas3', title: 'Catálogo completo de mamparas abatibles', ariaLabel: 'Abatibles' },
      { name: 'Mamparas Plegables', path: '/mamparas4', title: 'Catálogo completo de mamparas plegables', ariaLabel: 'Plegables' },
      { name: 'Otras soluciones', path: '/mamparas5', title: 'Catálogo completo de otras soluciones para mamparas', ariaLabel: 'Otras soluciones' }
    ]
  },
  {
    name: 'GRIFOS',
    path: '', // ruta vacía, no hay vista principal, sólo submenú
    title: 'Nuestros servicios profesionales acerca de grifos',
    ariaLabel: 'Grifos',
    keywords: 'grifos, cocina, ducha, lavabo',
    hasSubmenu: true,
    submenu: [
      { name: 'Grifos Lavabo', path: '/grifos1', title: 'Catálogo completo de grifos de lavabo', ariaLabel: 'Grifos lavabo' },
      { name: 'Grifos Ducha', path: '/grifos2', title: 'Catálogo completo de grifos de ducha', ariaLabel: 'Grifos ducha' },
      { name: 'Grifos Cocina', path: '/grifos3', title: 'Catálogo completo de grifos de cocina', ariaLabel: 'Grifos cocina' }
    ]
  },

  {
    name: 'ESPEJOS',
    path: '/espejos',
    title: 'Catálogo completo de espejos',
    ariaLabel: 'Espejos',
    keywords: 'espejos, decoración',
    hasSubmenu: false,
    submenu: [
      { name: 'Servicio 3.1', path: '/maquinaria/instalaciones', title: 'Instalaciones y equipamiento técnico', ariaLabel: 'Instalaciones' }
    ]
  },
  {
    name: 'Pide Presupuesto',
    path: '/contacto',
    title: 'Contacte con nosotros para más información',
    ariaLabel: 'Contacto',
    keywords: 'contacto, ubicación, teléfono, email',
    hasSubmenu: false
  }
]);

// Navigation schema for SEO
const getNavigationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": navItems.value.map(item => item.name),
    "url": navItems.value.map(item => `https://ssab450.com${item.path}`)
  };
};

// Add structured data to document head on component mount
const addStructuredData = () => {
  // Create organization schema
  const orgScript = document.createElement('script');
  orgScript.setAttribute('type', 'application/ld+json');
  orgScript.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(orgScript);

  // Create navigation schema
  const navScript = document.createElement('script');
  navScript.setAttribute('type', 'application/ld+json');
  navScript.textContent = JSON.stringify(getNavigationSchema());
  document.head.appendChild(navScript);

  return [orgScript, navScript]; // Return for cleanup
};

// Close dropdowns when clicking outside
const handleOutsideClick = (event) => {
  if (isMobile.value) return; // Only handle for desktop

  const navEl = document.getElementById('main-menu');
  if (!navEl) return;

  if (!navEl.contains(event.target) && Object.keys(activeDropdowns.value).length > 0) {
    closeAllDropdowns();
  }
};

// Set up focus trap elements for the mobile menu
const setupFocusTrap = () => {
  const menu = document.getElementById('main-menu');
  if (!menu) return;

  const focusableElements = menu.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length > 0) {
    firstFocusableElement.value = focusableElements[0];
    lastFocusableElement.value = focusableElements[focusableElements.length - 1];
  }
};

// Function to toggle mobile menu
const toggleMenu = () => {
  drawer.value = !drawer.value;
  isMenuOpen.value = drawer.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';

  // When menu opens, recalc focusable elements for trap
  if (isMenuOpen.value) {
    setupFocusTrap();
  }

  // Si se cierra el menú, limpiar todos los submenús abiertos
  if (!isMenuOpen.value) {
    closeAllDropdowns();
  }
};

// Function to handle navigation to hash links
const handleHashNavigation = (path) => {
  // Check if path contains a hash
  if (path && path.includes('#')) {
    const [routePath, hash] = path.split('#');

    // Si ya estamos en la ruta correcta, solo desplazamos al ancla
    if (window.location.pathname === routePath || routePath === '') {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // En caso contrario, navegamos a la nueva ruta y luego al ancla
      router.push(routePath).then(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Delay mayor para permitir que la nueva página se cargue
      });
    }
  }
};


// Function to handle keyboard navigation in mobile menu
const handleKeyDown = (event) => {
  // Close menu on Escape key
  if (event.key === 'Escape') {
    if (Object.keys(activeDropdowns.value).length > 0) {
      // Close the last opened dropdown first
      const lastActive = Object.keys(activeDropdowns.value).pop();
      delete activeDropdowns.value[lastActive];
      event.preventDefault();
      return;
    }

    if (isMenuOpen.value) {
      toggleMenu();
      event.preventDefault();
      return;
    }
  }

  // Handle Enter or Space on menu items with submenus (for accessibility)
  if ((event.key === 'Enter' || event.key === ' ') &&
      event.target.classList.contains('nav-link') &&
      event.target.getAttribute('aria-haspopup') === 'true') {

    const index = parseInt(event.target.getAttribute('data-index'));
    if (!isNaN(index) && isMobile.value) {
      toggleSubmenu(index, event);
      event.preventDefault();
    }
  }

  // Handle Tab key for focus trap in mobile menu
  if (isMenuOpen.value && event.key === 'Tab') {
    // If no focusable elements, do nothing
    if (!firstFocusableElement.value || !lastFocusableElement.value) return;

    // Shift+Tab on first element should go to last element
    if (event.shiftKey && document.activeElement === firstFocusableElement.value) {
      event.preventDefault();
      lastFocusableElement.value.focus();
    }
    // Tab on last element should go to first element
    else if (!event.shiftKey && document.activeElement === lastFocusableElement.value) {
      event.preventDefault();
      firstFocusableElement.value.focus();
    }
  }
};

// Function to check scroll position
const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// Propiedades computadas para los estilos del navbar basados en scroll
const navbarElevation = computed(() => scrolled.value ? 4 : 1);
const navbarHeight = computed(() => scrolled.value ? 64 : 80);

// Dynamic image import for the logo with spaces in filename
const faviconPath = new URL('@/assets/imagenes/usoGeneral/logo_iconoPagina.png', import.meta.url).href;

// Añadir el favicon dinámicamente
onMounted(() => {
  const favicon = document.querySelector("link[rel~='icon']") || document.createElement('link');
  favicon.type = 'image/png';
  favicon.rel = 'icon';
  favicon.href = faviconPath;
  document.head.appendChild(favicon);

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', checkDevice);
  document.addEventListener('click', handleOutsideClick);
  checkScroll(); // Check initial scroll position
  checkDevice(); // Check initial device size

  // Check if URL has a hash on page load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure page has loaded
  }

  // Add structured data to head
  structuredDataScripts = addStructuredData();
});

// Remove event listeners when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('resize', checkDevice);
  document.removeEventListener('click', handleOutsideClick);

  // Reset body overflow in case component is unmounted with menu open
  document.body.style.overflow = '';

  // Remove structured data scripts
  structuredDataScripts.forEach(script => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
});
</script>

<template>
  <!-- Enlace de accesibilidad para saltar al contenido principal -->
  <a href="#main-content" class="skip-to-content">Saltar al contenido principal</a>

  <!-- Barra de navegación principal usando componentes Vuetify -->
  <v-app-bar
    :elevation="navbarElevation"
    color="white"
    :height="navbarHeight"
    class="navbar"
    :class="{ 'scrolled': scrolled }"
    app
    role="banner"
    aria-label="Navegación principal de SSAB450"
    itemscope
    itemtype="https://schema.org/WPHeader"
  >
    <v-container class="d-flex align-center justify-center px-4" style="max-width: 1400px;">

      <!-- Menú de navegación para escritorio -->
      <v-toolbar-items class="hidden-sm-and-down flex-grow-1 justify-center" id="main-menu" itemscope itemtype="https://schema.org/SiteNavigationElement">
        <template v-for="(item, index) in navItems" :key="item.path">
          <!-- Elemento de menú con submenú -->
          <template v-if="item.hasSubmenu">
            <v-menu
              location="bottom"
              offset="5"
              transition="scale-y-transition"
              open-on-hover
              :close-delay="300"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-uppercase font-weight-bold mx-1 nav-link"
                  :ripple="false"
                  variant="text"
                  :title="item.title"
                  :aria-label="item.ariaLabel"
                  aria-haspopup="true"
                  :data-index="index"
                  v-bind="props"
                  color="black"
                  height="64"
                  style="font-family: 'Calibri', 'MS Sans Serif', sans-serif;"
                  :to="item.path.includes('#') ? undefined : item.path"
                  :href="item.path.includes('#') ? item.path : undefined"
                  itemprop="url"
                >
                  <span itemprop="name">{{ item.name }}</span>
                  <meta itemprop="position" :content="index + 1">
                  <meta itemprop="description" :content="item.title">
                  <meta itemprop="keywords" :content="item.keywords">

                  <v-icon
                    size="small"
                    class="ml-1"
                    :class="{ 'rotate-icon': isMobile && activeDropdowns[index] }"
                  >
                    mdi-chevron-down
                  </v-icon>
                </v-btn>
              </template>

              <!-- Contenido del submenú -->
              <v-list
                density="compact"
                nav
                width="280"
                rounded="lg"
                elevation="4"
                class="py-2"
                itemscope
                itemtype="https://schema.org/SiteNavigationElement"
              >
                <template v-for="(subitem, subIndex) in item.submenu" :key="`${index}-${subIndex}`">
                  <!-- Elemento de submenú normal -->
                  <template v-if="!subitem.hasSubmenu">
                    <v-list-item
                      :to="subitem.path.includes('#') ? undefined : subitem.path"
                      :href="subitem.path.includes('#') ? subitem.path : undefined"
                      :title="subitem.name"
                      class="text-none font-weight-medium"
                      density="compact"
                      :aria-label="subitem.ariaLabel"
                      @click="subitem.path.includes('#') ? handleHashNavigation(subitem.path) : null"
                      itemprop="url"
                    >
                      <template v-slot:title>
                        <span itemprop="name">{{ subitem.name }}</span>
                        <meta itemprop="position" :content="subIndex + 1">
                        <meta itemprop="description" :content="subitem.title">
                      </template>
                    </v-list-item>
                  </template>

                  <!-- Elemento de submenú con otro nivel de submenú -->
                  <template v-else>
                    <v-list-group
                      :key="`desktop-submenu-group-${index}-${subIndex}`"
                      :value="isMobile ? activeDropdowns[`${index}-${subIndex}`] : undefined"
                      @click="isMobile ? toggleNestedSubmenu(index, subIndex, $event) : null"
                      no-action
                    >
                      <template v-slot:activator="{ props }">
                        <v-list-item
                          v-bind="props"
                          :title="subitem.name"
                          class="text-none font-weight-medium"
                          :aria-label="subitem.ariaLabel"
                          itemprop="url"
                        >
                          <template v-slot:title>
                            <span itemprop="name">{{ subitem.name }}</span>
                            <meta itemprop="position" :content="subIndex + 1">
                            <meta itemprop="description" :content="subitem.title">
                          </template>
                        </v-list-item>
                      </template>

                      <!-- Tercer nivel de submenú -->
                      <v-list-item
                        v-for="(nestedItem, nestedIndex) in subitem.submenu"
                        :key="`${index}-${subIndex}-${nestedIndex}`"
                        :to="nestedItem.path.includes('#') ? undefined : nestedItem.path"
                        :href="nestedItem.path.includes('#') ? nestedItem.path : undefined"
                        :title="nestedItem.name"
                        class="text-none font-weight-medium pl-8"
                        density="compact"
                        :aria-label="nestedItem.ariaLabel"
                        itemprop="url"
                      >
                        <template v-slot:title>
                          <span itemprop="name">{{ nestedItem.name }}</span>
                          <meta itemprop="position" :content="nestedIndex + 1">
                          <meta itemprop="description" :content="nestedItem.title">
                        </template>
                      </v-list-item>
                    </v-list-group>
                  </template>
                </template>
              </v-list>
            </v-menu>
          </template>              <!-- Elemento de menú sin submenú -->
          <template v-else>
            <v-btn
              :to="item.path.includes('#') ? undefined : item.path"
              :href="item.path.includes('#') ? item.path : undefined"
              class="text-uppercase font-weight-bold mx-1 nav-link"
              :ripple="false"
              variant="text"
              :title="item.title"
              :aria-label="item.ariaLabel"
              color="black"
              height="64"
              :active="$route.path === item.path || $route.path.startsWith(item.path + '/')"
              style="font-family: 'Calibri', 'MS Sans Serif', sans-serif;"
              itemprop="url"
              @click="item.path.includes('#') ? handleHashNavigation(item.path) : null"
            >
              <span itemprop="name">{{ item.name }}</span>
              <meta itemprop="position" :content="index + 1">
              <meta itemprop="description" :content="item.title">
              <meta itemprop="keywords" :content="item.keywords">
            </v-btn>
          </template>

          <!-- Separador vertical entre elementos -->
          <v-divider
            v-if="index < navItems.length - 1"
            vertical
            class="hidden-sm-and-down mx-1"
            aria-hidden="true"
          ></v-divider>
        </template>
      </v-toolbar-items>

      <!-- Botón de menú para móviles -->
      <v-btn
        class="hidden-md-and-up ml-auto mr-2"
        icon
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
        color="#808990"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- Menú lateral para móviles -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    :width="isMobile ? '450' : '450'"
    id="mobile-menu"
    class="pa-0"
    role="dialog"
    aria-modal="true"
    aria-label="Menú de navegación móvil"
    elevation="16"
  >
    <v-list class="pt-4">

      <!-- Botón para cerrar el menú móvil -->
      <div class="d-flex justify-end pa-1 mr-2">
        <v-btn
          icon
          variant="text"
          @click="toggleMenu"
          aria-label="Cerrar menú"
          color="#808990"
          class="ml-auto"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Elementos del menú móvil con v-list-group para submenús -->
      <template v-for="(item, index) in navItems" :key="item.path">
        <!-- Elemento sin submenú -->
        <template v-if="!item.hasSubmenu">
          <v-list-item
            :to="item.path.includes('#') ? undefined : item.path"
            :href="item.path.includes('#') ? item.path : undefined"
            :title="item.name"
            :aria-label="item.ariaLabel"
            density="comfortable"
            class="text-none font-weight-bold"
            color="#F6911D"
            @click="item.path.includes('#') ? handleHashNavigation(item.path) : null"
          >
            <template v-slot:prepend>
              <v-icon color="#808990" size="x-small">mdi-circle-small</v-icon>
            </template>
            <template v-slot:title>
              <span class="text-wrap">{{ item.name }}</span>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </template>

        <!-- Elemento con submenú -->
        <template v-else>
          <v-list-group
            :key="`mobile-menu-group-${index}`"
            :value="activeDropdowns[index]"
            color="#F6911D"
            @click="toggleSubmenu(index, $event)"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="item.name"
                :aria-label="item.ariaLabel"
                class="text-none font-weight-bold"
                color="#F6911D"
              >
                <template v-slot:prepend>
                  <v-icon color="#808990" size="x-small">mdi-circle-small</v-icon>
                </template>
                <template v-slot:title>
                  <span class="text-wrap">{{ item.name }}</span>
                </template>
              </v-list-item>
            </template>

            <!-- Submenú nivel 1 -->
            <template v-for="(subitem, subIndex) in item.submenu" :key="`${index}-${subIndex}`">
              <!-- Submenú simple -->
              <template v-if="!subitem.hasSubmenu">
                <v-list-item
                  :to="subitem.path.includes('#') ? undefined : subitem.path"
                  :href="subitem.path.includes('#') ? subitem.path : undefined"
                  :title="subitem.name"
                  :aria-label="subitem.ariaLabel"
                  density="comfortable"
                  class="text-none pl-8 submenu-item"
                  color="#F6911D"
                  @click="subitem.path.includes('#') ? handleHashNavigation(subitem.path) : null"
                >
                  <template v-slot:prepend>
                    <v-icon color="#808990" size="x-small">mdi-minus</v-icon>
                  </template>
                  <template v-slot:title>
                    <span class="text-wrap">{{ subitem.name }}</span>
                  </template>
                </v-list-item>
              </template>

              <!-- Submenú anidado -->
              <template v-else>
                <v-list-group
                  :key="`mobile-submenu-group-${index}-${subIndex}`"
                  :value="activeDropdowns[`${index}-${subIndex}`]"
                  color="#F6911D"
                  @click="toggleNestedSubmenu(index, subIndex, $event)"
                >
                  <template v-slot:activator="{ props }">                  <v-list-item
                    v-bind="props"
                    :title="subitem.name"
                    :aria-label="subitem.ariaLabel"
                    class="text-none pl-8"
                    color="#F6911D"
                  >
                      <template v-slot:prepend>
                        <v-icon color="#808990" size="x-small">mdi-minus</v-icon>
                      </template>
                      <template v-slot:title>
                        <span class="text-wrap">{{ subitem.name }}</span>
                      </template>
                    </v-list-item>
                  </template>

                  <!-- Submenú nivel 2 -->
                  <v-list-item
                    v-for="(nestedItem, nestedIndex) in subitem.submenu"
                    :key="`${index}-${subIndex}-${nestedIndex}`"
                    :to="nestedItem.path.includes('#') ? undefined : nestedItem.path"
                    :href="nestedItem.path.includes('#') ? nestedItem.path : undefined"
                    :title="nestedItem.name"
                    :aria-label="nestedItem.ariaLabel"
                    density="comfortable"
                    class="text-none pl-12 nested-submenu-item"
                    color="#F6911D"
                    @click="nestedItem.path.includes('#') ? handleHashNavigation(nestedItem.path) : null"
                  >
                    <template v-slot:prepend>
                      <v-icon color="#808990" size="x-small">mdi-minus</v-icon>
                    </template>
                    <template v-slot:title>
                      <span class="text-wrap">{{ nestedItem.name }}</span>
                    </template>
                  </v-list-item>
                </v-list-group>
              </template>
            </template>
          </v-list-group>
          <v-divider></v-divider>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>



<style scoped>
/* ============================
  NAVBAR STYLE - BAÑOS TRES60
  ============================ */

.navbar {
  background-color: #ffffff; /* barra clara para texto azul */
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* opcional: sombra sutil para separar de contenido */
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  width: auto;
}

/* Links de la navbar */
.nav-link {
  color: #0D3642 !important; /* azul oscuro para texto */
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

/* Hover efecto en verde agua */
.nav-link:hover {
  color: #58B7AE !important;
}

/* Botón destacado (ej: contacto o CTA) */
.nav-btn {
  background-color: #0D3642 !important; /* azul oscuro */
  color: #FFFFFF !important;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background-color: #58B7AE !important; /* verde agua (hover) */
}

</style>



