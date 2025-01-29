<script lang="ts">
import { useFormHandler } from "@/utils/useFormHandler";

export default {
  name: "ContactForm",
  setup() {
    const { name, email, errors, validate } = useFormHandler();

    const handleSubmit = () => {
      if (validate()) {
        alert("Form submitted successfully!");
      }
    };

    return {
      name,
      email,
      errors,
      handleSubmit,
    };
  },
};
</script>

<template>
  <section class="contact-form py-16 bg-gray-100">
    <h2
      class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-10 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0"
    >
      Contact Us
    </h2>

    <div
      class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      <!-- Google Maps (Responsive) -->
      <div class="w-full md:w-1/2 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0">
        <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            class="w-full h-90"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.466764754504!2d120.98857587481801!3d14.570407277815743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c947959435d9%3A0x17fd3fbfed813d95!2s2086%20Smith%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1738131172456!5m2!1sen!2sph"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="w-full md:w-1/2 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0">
        <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-xl shadow-lg">
          <div class="mb-6">
            <label for="name" class="block text-lg font-medium mb-2">Name</label>
            <input
              v-model="name"
              type="text"
              id="name"
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-2">{{ errors.name }}</p>
          </div>

          <div class="mb-6">
            <label for="email" class="block text-lg font-medium mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-2">{{ errors.email }}</p>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              class="w-full p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-200 transition-all duration-300 ease-in-out transform"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
