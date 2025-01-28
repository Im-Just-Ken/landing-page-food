import { ref } from "vue";
import { defineStore } from "pinia";
import { featureData } from "@/data/featureData";
import type { featuresProps } from "@/utils/featuresUtils";

export const useFeatureStore = defineStore("featureStore", () => {
  const features = ref<featuresProps[]>(featureData);

  return {
    features,
  };
});
