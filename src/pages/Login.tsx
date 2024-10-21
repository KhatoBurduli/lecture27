import React from "react";
import AuthForm from "../components/forms/AuthForm";
import { IAuth } from "../interfaces/auth.interface";
import $axios from "../http";

const Login: React.FC = () => {
  const onSubmit = (formData: IAuth) => {
    $axios
      .post('/login', { ...formData })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return <AuthForm type="login" onSubmit={onSubmit} />;
};

export default Login;
