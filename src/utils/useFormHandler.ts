import { ref } from "vue";
import { validateRequired, validateEmail } from "@/utils/validate";

// ? composable for form data and validation
export const useFormHandler = () => {
  const name = ref("");
  const email = ref("");
  const errors = ref({
    name: "",
    email: "",
  });

  const validate = () => {
    errors.value = { name: "", email: "" };
    let isValid = true;

    // ? Validation
    const nameError = validateRequired(name.value, "Name");
    if (nameError) {
      errors.value.name = nameError;
      isValid = false;
    }

    const emailError = validateRequired(email.value, "Email") || validateEmail(email.value);
    if (emailError) {
      errors.value.email = emailError;
      isValid = false;
    }

    return isValid;
  };

  return {
    name,
    email,
    errors,
    validate,
  };
};
