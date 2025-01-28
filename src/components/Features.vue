<template>
  <section class="features my-15">
    <h2 class="text-center text-7xl mb-8">Our Features</h2>
    <div class="container mx-auto flex justify-center">
      <ul class="flex flex-wrap justify-center gap-6">
        <li
          class="feature-card relative bg-cover bg-center w-[300px] h-76 rounded-xl p-4 shadow-lg overflow-hidden flex-col motion-opacity-in-0 motion-translate-y-in-50 motion-delay-200"
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
              class="bg-red-500 px-4 py-1 rounded-full mt-4 text-xl"
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

<style scoped>
.feature-card {
  background-size: cover;
  background-position: center;
}
</style>
