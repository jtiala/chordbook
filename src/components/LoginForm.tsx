import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const LoginForm: React.SFC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
