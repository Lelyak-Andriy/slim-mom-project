import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import LoginForm from "./LoginForm";
import authOperations from "../../redux/auth/authOperations";

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string().min(3, "Минимум 3 символа!").max(50, "Слишком длинный!").required("Обязательно"),
    password: Yup.string().min(8, "Минимум 8 символов!").max(50, "Слишком длинный!").required("Обязательно"),
  });

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const handleSubmit = (value) => {
    dispatch(authOperations.login(value));
  };

  return <LoginForm onSubmit={handleSubmit} DisplayingErrorMessagesSchema={DisplayingErrorMessagesSchema} />;
}
