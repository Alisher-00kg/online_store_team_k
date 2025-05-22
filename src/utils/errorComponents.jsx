import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Пароль обязателен"),
});

export default validationSchema;
