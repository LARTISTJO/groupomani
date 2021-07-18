import { createWebHistory, createRouter } from "vue-router";
import Connect from "@/views/Connect.vue";
import Profile from "@/views/Profile.vue";
import Home from "@/views/Home.vue";

const routes = [
  { 
    name: 'login',
    path: '/', 
    component: Connect,
  },
  { 
    name: 'profile',
    path: '/Profile', 
    component: Profile, 
    props:true 
  },
  { 
    name: 'home',
    path: '/Home', 
    component: Home, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;