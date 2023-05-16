<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <h2><router-link to = "/surah">Daftar surah</router-link></h2>
    <h2><router-link to = "/ayat/id">Ayat</router-link></h2>
  </nav>


<router-view> </router-view>
</template>

<style scoped>
</style>