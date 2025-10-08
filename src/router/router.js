import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Posts from "../views/Posts.vue";
import Carts from "../views/Carts.vue";

const routes = [
  { path: "/", name: "home", component: Main },
  { path: "/products", name: "posts", component: Posts },
  { path: "/cart", name: "cart", component: Carts },
  { path: "/products/:id", name: "ProductDetail", component: () => import("../views/ProductDetail.vue")},
  { path: "/login" , name : "login" , component : ()=> import("../views/Login.vue")},
  { path: "/register" , name : "register" , component : ()=> import("../views/Register.vue")},
  { path: "/about" , component : ()=> import("../views/About.vue")},
  { path: "/wishlist" , component : ()=> import("../views/Fav.vue")},
  { path: "/payment" , name : "payment" , component : ()=> import("../components/Payment.vue")}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
