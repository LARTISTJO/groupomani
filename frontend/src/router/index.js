import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  { 
    path: "/", 
    name: "Home",
    component: Home, 
  },
  { 
    path: "/createAcc",
    name: "createAcc", 
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/createAcc.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/forum",
    name: "forum",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/forum.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/profil",
    name: "profil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profil.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/onePost/:id",
    name: "onePost",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/onePost.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;