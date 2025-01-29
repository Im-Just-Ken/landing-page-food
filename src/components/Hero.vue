<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useHeroStore } from "@/stores/heroStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Hero",
  setup() {
    const heroStore = useHeroStore();
    const { welcomeMessage, heroDescription, showMore } = storeToRefs(heroStore);

    onMounted(() => {
      showMore.value = false;
    });

    const { toggleContent } = heroStore;

    return { welcomeMessage, heroDescription, showMore, toggleContent };
  },
});
</script>

<template>
  <section class="hero bg-gray-100 z-10">
    <div
      class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col-reverse sm:flex-col md:flex-row lg:flex-row justify-between"
    >
      <div class="flex items-center w-full md:w-1/2">
        <div class="text-left">
          <h2
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full md:w-96 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0"
          >
            {{ welcomeMessage }}
          </h2>

          <h1
            class="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100 w-full sm:w-72 md:w-auto lg:w-auto"
          >
            {{ heroDescription }}
          </h1>
          <button
            class="text-white mt-7 rounded-full bg-red-700 px-9 py-2 hover:bg-red-600 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-200"
            @click="toggleContent"
          >
            {{ showMore ? "Show Less" : "Show More" }}
          </button>
          <div v-if="showMore" class="additional-content">
            <p class="mt-3 text-xl max-w-lg">
              This is some additional content about our amazing product. Learn more about what we
              offer!
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full md:w-1/2">
        <img
          src="/hero-img.png"
          alt=""
          class="h-[300px] sm:h-[250px] md:h-[400px] lg:h-[526px] my-20 motion-opacity-in-0 motion-translate-y-in-10 motion-delay-100"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
