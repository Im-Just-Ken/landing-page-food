<script setup lang="ts">
import { ref, onMounted, defineProps, type DefineComponent } from "vue";

const props = defineProps({
  component: {
    type: Object as () => DefineComponent<{}, {}, any>,
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
  <div ref="lazyLoadElement" class="relative w-full">
    <div v-if="!isInView" class="flex justify-center items-center min-h-[200px] bg-gray-200">
      Loading {{ props.componentName }}...
    </div>
    <div v-show="isInView" class="transition-opacity duration-300 opacity-100">
      <component :is="props.component" />
    </div>
  </div>
</template>

<style scoped>
.component {
  transition: opacity 0.3s ease-in-out;
}
</style>
