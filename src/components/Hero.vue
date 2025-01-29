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
      class="w-full max-w-screen-xl mx-auto px-4 flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row justify-between py-6 sm:py-6 md:py-0 lg:py-0"
    >
      <div class="flex items-center">
        <div class="text-left">
          <h2
            class="text-4xl sm:text-5xl md:text-5xl lg:text-7xl w-96 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0"
          >
            {{ welcomeMessage }}
          </h2>

          <h1
            class="mt-5 text-xl sm:text-base md:text-base lg:text-xl motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100 w-72 sm:w-72 md:w-auto lg:w-auto"
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
            <p class="mt-3 text-xl w-[500px]">
              This is some additional content about our amazing product. Learn more about what we
              offer!
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
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
