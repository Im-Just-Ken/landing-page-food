<script lang="ts">
import { useFeatureStore } from "@/stores/featureStore";
import { strToUpper } from "@/utils/featuresUtils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Features",
  setup() {
    const featureStore = useFeatureStore();

    const features = featureStore.features.map((feature) => ({
      ...feature,
      name: strToUpper(feature.name),
    }));

    return {
      features,
    };
  },
});
</script>

<template>
  <section class="my-15 mt-20 sm:mt-20 md:mt-32 lg:mt-32">
    <h2 class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Menu</h2>
    <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex justify-center">
      <ul class="w-full flex flex-wrap justify-center gap-6">
        <li
          class="feature-card relative bg-cover bg-center w-[400px] sm:w-[300px] md:w-[300px] lg:w-[300px] h-76 rounded-xl p-4 shadow-lg overflow-hidden flex-col motion-opacity-in-0 motion-translate-y-in-50 motion-delay-200"
          :style="{ backgroundImage: `url(${feature.image})` }"
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="absolute inset-0 bg-black/70"></div>

          <div class="absolute bottom-4 left-4 z-10 text-left text-white">
            <h3 class="text-4xl font-semibold">{{ feature.name }}</h3>
            <p class="text-2xl mt-2 text-red-500 font-bold">
              <span class="text-base text-white font-normal">from</span> ₱{{ feature.price }}
            </p>
            <button
              class="bg-red-600 hover:bg-red-500 px-4 py-1 rounded-full mt-4 text-xl motion-opacity-in-0 motion-translate-y-in-50 motion-delay-200 transition-all duration-300 ease-in-out transform"
              @click="console.log(feature.id)"
            >
              Order Now
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  background-size: cover;
  background-position: center;
}
</style>
