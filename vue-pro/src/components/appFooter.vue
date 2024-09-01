<template>
    <footer>
      <p :style="{ color }" @click="toggleCR">Copyright &copy; {{ year }} </p>
      <!-- <p :class="{ green: isGreen}" @click="toggleGreen">
    This should be Green... but click me to toggle it.
  </p> -->
      <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/login">Log In</router-link></li>
      </ul>
    </nav>
    </footer>
  </template>

<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

// export default {
//   setup () {
//     const year = computed(() => new Date().getFullYear())
//     return { year }
//   }
// }
const year = computed(() => new Date().getFullYear())

// const color = ref('green')
const isGreen = ref(true)
function toggleGreen() {
  isGreen.value = !isGreen.value
}

// function toggleColor() {
//   color.value = color.value === 'green' ? 'blue' : 'green'
// }

const color = ref('white')
function toggleCR() {
 color.value = color.value === 'grey' ? 'green' : 'grey'
}


</script>

<style>
.green {
  color: green;
}
  footer {
    margin-top: 30px;
    display: flex;
    border-top: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 2rem;
    }
  }
</style>