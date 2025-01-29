import { defineStore } from "pinia";
import axios from "axios";

export const useTestimonialStore = defineStore("testimonial", {
  state: () => ({
    testimonials: [] as Array<{
      id: number;
      name: string;
      location: string;
      designation: string;
      avatar: string;
      message: string;
      rating: number;
      audio: string;
    }>,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTestimonials() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("https://testimonialapi.vercel.app/api");
        this.testimonials = response.data;
      } catch (err) {
        this.error = "Failed to load testimonials.";
      } finally {
        this.loading = false;
      }
    },
  },
});
