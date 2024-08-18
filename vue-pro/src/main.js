import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import AboutUs from "./components/aboutUs.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: AboutUs,
    },
  ],
});

app.use(router);
app.mount("#app");