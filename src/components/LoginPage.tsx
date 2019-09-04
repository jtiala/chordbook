import * as React from "react";
import { Redirect } from "react-router-dom";

import { auth } from "../firebase";
import { Error as IAuthError } from "@firebase/auth-types";
import { IBreadcrumb } from "../types";

import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";

const LoginPage: React.SFC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setLoading(true);
    setError("");

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        setLoggedIn(true);
      })
      .catch((err: IAuthError) => {
        setError(err.message);
        setLoading(false);
      });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  const title = "Login";
  const breadcrumbs: IBreadcrumb[] = [{ title, link: "/login" }];

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      {error.length > 0 && <Message variant="error">{error}</Message>}

      {loading ? (
        <Pulse />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Label label="Email">
            <Input type="email" value={email} onChange={handleEmailChange} />
          </Label>
          <Label label="Password">
            <Input
              type="password"
              defaultValue={password}
              onChange={handlePasswordChange}
            />
          </Label>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
      )}
    </Page>
  );
};

export default LoginPage;
