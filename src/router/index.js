import { createRouter, createWebHistory } from 'vue-router'
import homeComponent from '../components/homeComponent.vue'
import verPerfilComponent from '../components/verPerfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeComponent
    },
    {
      path: '/verPerfil',
      name: 'VerPerfil',
      component: verPerfilComponent
    }
  ]
})

export default router
