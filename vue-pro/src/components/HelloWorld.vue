<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Ohanz successfully created and edited a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <br /> Find At The Right-Side Of The Page, The Way I Made This.
      <div class="buttonDIV">
        <button class="button-c" @click="increment">
    {{ "You clicked "+count+ " number of times." }}
  </button>
      </div>
      
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.button-c{
  height: 35px; width: 350;
  background-color: rgb(30, 2, 120);
  font-size: medium;color: white;
  box-shadow: none;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
