import Vue from 'vue';
import VueRouter from 'vue-router';
import homeAdmin from "../views/homeAdmin.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/homeAdmin",
    name: "homeAdmin",
    component: homeAdmin,
    meta: {
        requiresAuth: true
      }
  },

 /* {
    path: '/products',
    name: 'Tooted',
    components: { default: Products }
  } */

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
