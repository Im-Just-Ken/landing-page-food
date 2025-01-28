<template>
  <section class="features my-15">
    <h2 class="text-center text-7xl mb-8">Our Features</h2>
    <div class="container mx-auto flex justify-center">
      <ul class="flex flex-wrap justify-center gap-6">
        <li
          class="feature-card relative bg-cover bg-center w-[300px] h-76 rounded-xl p-4 shadow-lg overflow-hidden flex-col"
          :style="{ backgroundImage: `url(${feature.image})` }"
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="absolute inset-0 bg-black/50"></div>

          <!-- Content -->
          <div class="absolute bottom-4 left-4 z-10 text-left">
            <h3 class="text-white text-lg font-bold">{{ feature.name }}</h3>
            <p class="text-white text-base mt-2">{{ feature.price }}</p>
            <button class="bg-red-500 text-white px-4 py-1 rounded-full mt-4">Order Now</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { useFeatureStore } from "@/stores/featureStore";

export default {
  name: "Features",
  setup() {
    const featureStore = useFeatureStore();
    return {
      features: featureStore.features,
    };
  },
};
</script>

<style scoped>
/* Optional extra style for smoother effects */
.feature-card {
  background-size: cover;
  background-position: center;
}
</style>
