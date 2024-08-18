<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// import ButtonC from './components/ButtonC.vue';
import AppFooter from '@/components/appFooter.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <img alt="my logo" class="logo" src="./assets/qsd.png" width="125" height="125" />
    
    <div class="wrapper">
      <HelloWorld msg="Hye there, My First Vue Project" msg_time="1:00AM" />
      <!-- <ButtonC></ButtonC> -->
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <app-footer />
  <button @click="goToAboutPage">About Us</button>
<router-view></router-view>
</template>


<script>
export default {
  name: "App",
  methods: {
    goToAboutPage() {
      this.$router.push("/about");
    },
  },
};
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
