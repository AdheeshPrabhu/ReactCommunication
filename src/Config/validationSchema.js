import * as yup from "yup";

const checkEmailExists = (email) => {
  const storedData = JSON.parse(localStorage.getItem("users")) || [];
  return storedData.some((user) => user.email === email);
};

const registrationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .test("email-exists", "Email already exists", (value) => {
      return !checkEmailExists(value);
    }),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export { registrationSchema, loginSchema };

export default registrationSchema;
