import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/router";
import { createPinia } from "pinia";
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css"; 
import axios from "axios"; 
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia()

const vuetify = createVuetify();
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(vuetify).use(Vue3Toastify).use(pinia.use(piniaPluginPersistedstate)).use(router).mount("#app");