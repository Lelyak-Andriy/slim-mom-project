import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import RegistrationForm from "./RegistrationForm";
import authOperations from "../../redux/auth/authOperations";

export default function RegistrationFormContainer() {
  const dispatch = useDispatch();
  
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string().min(3, "Минимум 3 символа!").max(50, "Слишком длинный!").required("Обязательно"),
    email: Yup.string().min(3, "Минимум 3 символа!").max(50, "Слишком длинный!").required("Обязательно"),
    password: Yup.string().min(8, "Минимум 8 символов!").max(50, "Слишком длинный!").required("Обязательно"),
  });

  const handleSubmit = (values) => {
    dispatch(authOperations.register(values));
  };

  return <RegistrationForm handleSubmit={handleSubmit} DisplayingErrorMessagesSchema={DisplayingErrorMessagesSchema} />;
}
