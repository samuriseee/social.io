import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Default from "../layout/default.vue";
// import secret from "../layout/sercet.vue"
// import unauth from "../layout/unauth.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: Default,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../views/Login.vue"),
  //   meta: {
  //     layout: unauth,
  //   },
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: () => import("../views/Dashboard.vue"),
  //   meta: {
  //     layout: secret,
  //   },
  // }
];
const router = new VueRouter({
  routes,
});

export default router;
