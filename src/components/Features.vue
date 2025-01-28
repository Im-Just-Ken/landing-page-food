<script lang="ts">
import { useFeatureStore } from "@/stores/featureStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Feature",
  setup() {
    const featureStore = useFeatureStore();

    const { features } = storeToRefs(featureStore);

    return {
      features,
    };
  },
});
</script>

<template>
  <section class="features">
    <h2 class="text-center text-7xl">Our features</h2>
    <ul class="flex space-x-11 justify-center">
      <div
        class="bg-amber-300 w-70 h-72 rounded-3xl p-3"
        v-for="feature in features"
        :key="feature.id"
      >
        <h3>{{ feature.name }}</h3>
        <p>{{ feature.price }}</p>
      </div>
    </ul>
  </section>
</template>
