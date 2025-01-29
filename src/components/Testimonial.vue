<script setup lang="ts">
import { onMounted } from "vue";
import { useTestimonialStore } from "@/stores/testimonialStore";

const testimonialStore = useTestimonialStore();

onMounted(() => {
  testimonialStore.fetchTestimonials();
});
</script>

<template>
  <section class="my-10 max-w-7xl mx-auto px-4 mt-20 sm:mt-20 md:mt-32 lg:mt-32">
    <h2 class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
      Customer Testimonials
    </h2>

    <div v-if="testimonialStore.loading" class="text-center">Loading testimonials...</div>
    <div v-if="testimonialStore.error" class="text-center text-red-500">
      {{ testimonialStore.error }}
    </div>

    <div v-else class="masonry">
      <div
        v-for="testimonial in testimonialStore.testimonials"
        :key="testimonial.id"
        class="testimonial-card"
      >
        <div class="p-5 bg-white shadow-lg rounded-lg border">
          <div class="flex items-center space-x-4">
            <div>
              <h3 class="text-lg font-semibold">{{ testimonial.name }}</h3>
              <p class="text-gray-500 text-sm">{{ testimonial.location }}</p>
            </div>
          </div>
          <p class="mt-3 text-gray-700 italic">"{{ testimonial.message }}"</p>
          <div class="flex items-center space-x-1">
            <span v-for="star in Math.floor(testimonial.rating)" :key="star" class="text-yellow-400"
              >★</span
            >
            <span v-if="testimonial.rating % 1 !== 0" class="text-yellow-400">☆</span>
            <span class="text-gray-500 text-sm ml-2">({{ testimonial.rating }})</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.masonry {
  column-count: 2;
  column-gap: 20px;
}

.testimonial-card {
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid;
}

@media (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
}

@media (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}
</style>
