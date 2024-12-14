export const parseSignInFormData = (formData) => ({
  email: formData?.email.toLowerCase(),
  password: formData?.password,
});
