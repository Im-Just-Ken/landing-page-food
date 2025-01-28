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
  <section class="contact-form py-10 bg-gray-100">
    <h2 class="text-center text-4xl font-semibold mb-8">Contact Us</h2>
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
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
          class="w-full p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>
