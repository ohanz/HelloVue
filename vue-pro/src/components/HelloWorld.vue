<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg_time: {
    type: String,
    required: true
  }
})

import { ref } from 'vue'

const count = ref(0)
const color = ref('white')
const background = ref('#311f6b')
function increment() {
  count.value++
   color.value = color.value === 'white' ? '#311f6b' : 'white'
   background.value = background.value === '#311f6b' ? 'white' : '#311f6b'
}
const isRed = ref(true)
function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} created at {{ msg_time }}</h1>
    <h3>
      Ohanz successfully created and edited a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <br /> Find At The Right-Side Of The Page, The Way I Made This.
      <div class="buttonDIV">
        <button :style="{ color, background }" class="button-c" @click="increment">
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

.buttonDIV{
  margin-top: 30px;
}
.button-c{
  height: 35px; width: 350;
  background-color: #311f6b;
  font-size: medium;color: white;
  box-shadow: none;
  border: 2px solid rgb(95, 92, 92);
  border-radius: 5px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
