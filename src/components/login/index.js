import React from "react";
import { Container, Button } from "./styles";

export default function Login({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Login.Button = function LoginButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
