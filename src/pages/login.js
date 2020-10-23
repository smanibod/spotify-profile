import React from "react";
import { Login } from "./components";

export default function LoginPage() {
  const LOGIN_URI =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000/login"
      : "https://spotify-profile.herokuapp.com/login";

  return (
    <Login>
      <h1>Spotify Profile</h1>
      <Login.Button href={LOGIN_URI}>Log in to Spotify</Login.Button>
    </Login>
  );
}
