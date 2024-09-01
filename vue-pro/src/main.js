import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import AboutUs from "./components/aboutUs.vue";
import Contact from "./components/contact.vue";
import Login from './components/login.vue';
import Signup from './components/signup.vue';
import Profile from './components/profile.vue';


const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: AboutUs,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ],
});

app.use(router);
app.mount("#app");