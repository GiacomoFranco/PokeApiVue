import { createRouter, createWebHistory } from 'vue-router'
import  MainView  from "@/views/MainView.vue";
import  PokemonDetail  from "@/components/PokemonDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path:'/', 
      name: 'main', 
      component: MainView, 
      children: [
        { path: '/pokemon/:id', component: PokemonDetail }
      ]
    }
  ]
})

export default router
