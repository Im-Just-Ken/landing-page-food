<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useHeroStore } from "@/stores/heroStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Hero",
  setup() {
    const heroStore = useHeroStore();
    const { welcomeMessage, heroDescription, showMore } = storeToRefs(heroStore);
    const showModal = ref(false); // To control the modal visibility

    onMounted(() => {
      showMore.value = false;
    });

    const { toggleContent } = heroStore;

    // Toggle the modal visibility
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    return { welcomeMessage, heroDescription, showMore, toggleContent, showModal, toggleModal };
  },
});
</script>

<template>
  <section class="hero bg-gray-100 z-10">
    <div
      class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col-reverse sm:flex-col md:flex-row lg:flex-row justify-between"
    >
      <div class="flex items-center w-full md:w-1/2">
        <div class="text-left pb-12 sm:pb-0 md:pb-0 lg:pb-0">
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
            @click="toggleModal"
          >
            {{ showMore ? "Show Less" : "Show More" }}
          </button>

          <!-- Modal -->
          <div
            v-if="showModal"
            class="modal-overlay fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50"
          >
            <div class="modal-content bg-white p-8 rounded-xl shadow-lg w-11/12 max-w-lg relative">
              <!-- New close button design -->
              <button
                @click="toggleModal"
                class="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div class="modal-header flex justify-between items-center">
                <h2 class="text-xl font-semibold">Additional Content</h2>
              </div>
              <div class="modal-body mt-4">
                <p class="text-lg sm:text-xl md:text-xl lg:text-2xl">
                  This is some additional content about our amazing product. Learn more about what
                  we offer!
                </p>

                <!-- Using v-show for toggling visibility of the text -->
                <div v-show="showMore">
                  <p class="mt-3 text-lg sm:text-xl md:text-xl lg:text-2xl max-w-lg">
                    More details about our product. Here we provide more description of the features
                    and benefits.
                  </p>
                </div>
              </div>
            </div>
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

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  max-width: 400px;
  width: 100%;
  background: white;
  border-radius: 10px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  margin-top: 1rem;
}
</style>
