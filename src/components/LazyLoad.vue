<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  component: {
    type: Object as () => Promise<any>,
    required: true,
  },
  componentName: {
    type: String,
    required: true,
  },
  threshold: {
    type: Number,
    default: 0.5,
  },
});

const isInView = ref(false);
const lazyLoadElement = ref<HTMLElement | null>(null);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInView.value = true;
      }
    });
  },
  { threshold: props.threshold }
);

onMounted(() => {
  if (lazyLoadElement.value) {
    observer.observe(lazyLoadElement.value);
  }
});
</script>

<template>
  <div ref="lazyLoadElement">
    <div v-if="!isInView" class="text-center py-72">Loading {{ props.componentName }}...</div>
    <component v-else :is="props.component" />
  </div>
</template>
