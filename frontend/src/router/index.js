import { createWebHashHistory, createRouter } from "vue-router";
import CreateAcc from "@/views/CreateAcc.vue";
import Profile from "@/views/Profile.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

const routes = [
  { 
    name: 'CreateAcc',
    path: '/', 
    component: CreateAcc,
  },
  { 
    name: 'login',
    path: '/Login', 
    component: Login,
    
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
  history: createWebHashHistory(),
  routes,
})

export default router;