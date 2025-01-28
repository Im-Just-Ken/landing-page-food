import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeroStore = defineStore("heroStore", () => {
  const welcomeMessage = ref<string>("Welcome to Our Amazing Landing Page");
  const heroDescription = ref<string>(
    "We offer incredible features that will make your life easier."
  );
  const showMore = ref<boolean>(false);

  function toggleContent() {
    showMore.value = !showMore.value;
    console.log(showMore.value);
  }

  return {
    welcomeMessage,
    heroDescription,
    showMore,
    toggleContent,
  };
});
