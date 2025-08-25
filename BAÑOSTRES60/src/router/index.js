import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue'),
    },
    {
      path: '/procesos-auxiliares',
      name: 'procesos-auxiliares',
      component: () => import('../components/Procesos/ProcesosAuxiliares.vue'),
    },
    {
      path: '/todo-servicios',
      name: 'todo-servicios',
      component: () => import('../views/TodoServiciosView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue')
    },
    {
      path: '/aviso-legal-y-politicas',
      name: 'aviso-legal',
      component: () => import('../components/AvisoLegal/AvisoLegal.vue'),
    },
    {
      path: '/politica-de-cookies',
      name: 'PoliticaCookies',
      component: () => import('@/components/Cookies/PoliticaCookies.vue')
    },
    {
      path: '/laboratorio',
      name: 'laboratorio',
      component: () => import('../components/Laboratorio/Laboratorio.vue'),
    },
    {    
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/sobreNosotrosView.vue')
    },
    {    
      path: '/mision',
      name: 'mision',
      component: () => import('../views/NuestraMisionView.vue')
    },
    {    
      path: '/por-que',
      name: 'por-que-nosotros',
      component: () => import('../views/PorQueView.vue')
    },
    {
      path: '/maquinaria/industria',
      name: 'industria',
      component: () => import('../components/Maquinaria/Industria.vue')
    },
    {
      path: '/maquinaria/instalaciones',
      name: 'nuestras-instalaciones',
      component: () => import('../components/Maquinaria/NuestrasInstalaciones.vue')
    },
    {
      path: '/grifos2',
      name: 'grifos2',
      component: () => import('../components/Grifos/Grifos2.vue'),
    },
    {
      path: '/grifos3',
      name: 'grifos3',
      component: () => import('../components/Grifos/Grifos3.vue'),
    }    
  ],
})

export default router
