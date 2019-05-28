import * as React from "react";

import { auth } from "../firebase";

import Heading from "./Heading";

const LoginForm: React.SFC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    // tslint:disable-next-line
    <form onSubmit={e => handleSubmit(e)}>
      <Heading level={1} variant="primary">
        Login
      </Heading>
      <input
        type="email"
        placeholder="email"
        // tslint:disable-next-line
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        // tslint:disable-next-line
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
