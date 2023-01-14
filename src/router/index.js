import { createRouter, createWebHistory } from 'vue-router'
import crearAnuncioComponent from '../components/crearAnuncioComponent.vue'
import verListaComponent from '../components/verListaComponent.vue'
import homeComponent from '../components/homeComponent.vue'
import verAnuncioComponent from '../components/verAnuncioComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeComponent
    },
    {
      path: '/crearAnuncio',
      name: 'CrearAnuncio',
      component: crearAnuncioComponent
    },
    {
      path: '/verLista',
      name: 'VerLista',
      component: verListaComponent
    },
    {
      path: '/verLista/:provincia',
      name: 'VerListaFiltrada',
      component: verListaComponent
    },
    {
      path: '/verAnuncio/:id',
      name: 'VerAnuncio',
      component: verAnuncioComponent
    }
  ]
})

export default router
