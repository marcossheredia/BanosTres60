import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const DEFAULT_SEO = {
  title: 'Baños Tres60 | Reformas de baños en Alcala de Henares',
  description: 'Especialistas en cambio de banera por plato de ducha, mamparas y reformas de bano en Alcala de Henares.',
  keywords: 'banos tres60, reforma de bano, cambio banera por ducha, mamparas, platos de ducha, alcala de henares'
}

const updateHeadMeta = (to) => {
  const title = to.meta?.title || DEFAULT_SEO.title
  const description = to.meta?.description || DEFAULT_SEO.description
  const keywords = to.meta?.keywords || DEFAULT_SEO.keywords
  const canonicalUrl = `https://www.banostres60.es${to.fullPath || '/'}`

  document.title = title

  const upsertMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  const upsertCanonical = (href) => {
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }

  upsertMeta('description', description)
  upsertMeta('keywords', keywords)
  upsertMeta('og:title', title, 'property')
  upsertMeta('og:description', description, 'property')
  upsertMeta('og:url', canonicalUrl, 'property')
  upsertMeta('twitter:title', title)
  upsertMeta('twitter:description', description)
  upsertCanonical(canonicalUrl)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Baños Tres60 | Cambio de bañera por plato de ducha en Alcala de Henares',
        description: 'Transformamos tu bano con cambio de banera por plato de ducha, instalacion rapida y acabados profesionales.',
        keywords: 'cambio banera por ducha, reforma bano, alcala de henares, banos tres60'
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue'),
      meta: {
        title: 'Contacto | Baños Tres60',
        description: 'Contacta con Baños Tres60 para tu reforma de bano y solicita presupuesto en 24 horas.',
        keywords: 'contacto banos tres60, telefono reforma bano, presupuesto bano alcala'
      }
    },
    {
      path: '/aviso-legal-y-politicas',
      name: 'aviso-legal',
      component: () => import('../components/AvisoLegal/AvisoLegal.vue'),
      meta: {
        title: 'Aviso Legal y Políticas | Baños Tres60',
        description: 'Consulta el aviso legal, privacidad y condiciones de uso de la web de Baños Tres60.'
      }
    },
    {
      path: '/politica-de-cookies',
      name: 'PoliticaCookies',
      component: () => import('@/components/Cookies/PoliticaCookies.vue'),
      meta: {
        title: 'Política de Cookies | Baños Tres60',
        description: 'Información sobre uso de cookies y preferencias de privacidad en Baños Tres60.'
      }
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/sobreNosotrosView.vue'),
      meta: {
        title: 'Sobre Nosotros | Baños Tres60',
        description: 'Conoce la experiencia y el compromiso de Baños Tres60 en reformas de baño.'
      }
    },
    {
      path: '/mision',
      name: 'mision',
      component: () => import('../views/NuestraMisionView.vue'),
      meta: {
        title: 'Nuestra Misión | Baños Tres60',
        description: 'Descubre nuestra misión: calidad, cercanía y soluciones de baño a medida.'
      }
    },
    {
      path: '/por-que',
      name: 'por-que-nosotros',
      component: () => import('../views/PorQueView.vue'),
      meta: {
        title: 'Por Qué Elegirnos | Baños Tres60',
        description: 'Motivos para confiar en Baños Tres60 para la reforma de tu baño.'
      }
    },
    {
      path: '/grifos1',
      name: 'grifos1',
      component: () => import('../components/Grifos/Grifos1.vue'),
      meta: { title: 'Grifos Lavabo | Baños Tres60', description: 'Catálogo de grifos de lavabo para reformas de baño.' }
    },
    {
      path: '/grifos2',
      name: 'grifos2',
      component: () => import('../components/Grifos/Grifos2.vue'),
      meta: { title: 'Grifos Ducha | Baños Tres60', description: 'Soluciones en grifería de ducha para tu nuevo baño.' }
    },
    {
      path: '/grifos3',
      name: 'grifos3',
      component: () => import('../components/Grifos/Grifos3.vue'),
      meta: { title: 'Grifos Cocina | Baños Tres60', description: 'Catálogo de grifos de cocina con instalación profesional.' }
    },
    {
      path: '/platos1',
      name: 'platos1',
      component: () => import('../components/Platos/Platos1.vue'),
      meta: { title: 'Platos de Ducha | Baños Tres60', description: 'Platos de ducha antideslizantes y de alta resistencia.' }
    },
    {
      path: '/mamparas1',
      name: 'mamparas1',
      component: () => import('../components/Mamparas/Mamparas1.vue'),
      meta: { title: 'Mamparas Correderas | Baños Tres60', description: 'Mamparas correderas funcionales y elegantes para tu baño.' }
    },
    {
      path: '/mamparas2',
      name: 'mamparas2',
      component: () => import('../components/Mamparas/Mamparas2.vue'),
      meta: { title: 'Mamparas | Baños Tres60', description: 'Opciones de mamparas a medida para cualquier tipo de baño.' }
    },
    {
      path: '/mamparas3',
      name: 'mamparas3',
      component: () => import('../components/Mamparas/Mamparas3.vue'),
      meta: { title: 'Mamparas Abatibles | Baños Tres60', description: 'Mamparas abatibles con instalación profesional y acabados premium.' }
    },
    {
      path: '/mamparas4',
      name: 'mamparas4',
      component: () => import('../components/Mamparas/Mamparas4.vue'),
      meta: { title: 'Mamparas Plegables | Baños Tres60', description: 'Mamparas plegables para aprovechar mejor el espacio del baño.' }
    },
    {
      path: '/mamparas5',
      name: 'mamparas5',
      component: () => import('../components/Mamparas/Mamparas5.vue'),
      meta: { title: 'Otras Soluciones de Mamparas | Baños Tres60', description: 'Soluciones personalizadas de mamparas para tu reforma.' }
    },
    {
      path: '/espejos',
      name: 'espejos',
      component: () => import('../components/Espejos/Espejos1.vue'),
      meta: { title: 'Espejos | Baños Tres60', description: 'Espejos para baño con diseño moderno y funcionalidad.' }
    }
  ],
})

router.afterEach((to) => {
  updateHeadMeta(to)
})

export default router
