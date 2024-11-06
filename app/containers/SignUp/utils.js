export const parseFormData = (formData) => {
  return {
    name: formData.name,
    email: formData.email,
    gender: formData.gender,
    phone: formData.phone,
    password: formData.password,
  };
};
