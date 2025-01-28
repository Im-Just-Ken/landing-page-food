export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value) {
    return `${fieldName} is required.`;
  }
  return null;
};

export const validateEmail = (value: string): string | null => {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(value)) {
    return "Please enter a valid email address.";
  }
  return null;
};
