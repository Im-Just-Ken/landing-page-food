<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-white text-gray-800 py-8 sticky top-0 z-10">
    <nav class="container mx-auto flex justify-between">
      <h1 class="text-2xl font-bold">NO BRAND.</h1>
      <ul class="flex space-x-4">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>
