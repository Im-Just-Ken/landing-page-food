<script setup lang="ts">
import LazyLoad from "@/components/LazyLoad.vue";
import { defineAsyncComponent } from "vue";

const Contact = defineAsyncComponent(() => import("@/components/ContactForm.vue"));
</script>

<template>
  <main>
    <LazyLoad :component="Contact" componentName="Contact" />
  </main>
</template>
