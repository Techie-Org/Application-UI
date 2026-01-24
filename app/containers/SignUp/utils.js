export const parseSignUpFormData = (formData) => ({
  name: formData?.name,
  email: formData?.email.toLowerCase(),
  gender: formData?.gender,
  phone: formData?.phone,
  password: formData?.password,
});
export const transformvalidateOtpData = (formData, otpValue) => ({
  ...formData, ...otpValue,
});
