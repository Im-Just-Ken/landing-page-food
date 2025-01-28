<script setup lang="ts">
import LazyLoad from "@/components/LazyLoad.vue";
import { defineAsyncComponent } from "vue";

// Lazy load multiple components
const Hero = defineAsyncComponent(() => import("@/components/Hero.vue"));
const Features = defineAsyncComponent(() => import("@/components/Features.vue"));
</script>

<template>
  <main>
    <!-- Lazy-load the Hero component -->
    <LazyLoad :component="Hero" componentName="Hero" />

    <!-- Lazy-load the Features component -->
    <LazyLoad :component="Features" componentName="Features" />
  </main>
</template>
