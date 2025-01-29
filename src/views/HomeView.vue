<script setup lang="ts">
import LazyLoad from "@/components/LazyLoad.vue";
import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("@/components/Hero.vue"));
const Features = defineAsyncComponent(() => import("@/components/Features.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>

<template>
  <main>
    <LazyLoad :component="Hero" componentName="Hero" />
    <LazyLoad :component="Features" componentName="Features" />
    <LazyLoad :component="Footer" componentName="Footer" />
  </main>
</template>
