import * as React from "react";
import styled from "styled-components";

import { auth, IAuthError } from "../firebase";

import Button from "./Button";
import Form from "./Form";
import Heading from "./Heading";
import Input from "./Input";
import Message from "./Message";
import Pulse from "./Pulse";

interface IProps {
  className?: string;
}

const LoginForm: React.SFC<IProps> = ({ className }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err: IAuthError) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className={className}>
      <Heading level={1} variant="primary">
        Login
      </Heading>
      {error !== null && <Message variant="error">{error}</Message>}
      {loading ? (
        <Pulse />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="password"
            defaultValue={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
      )}
    </div>
  );
};

const StyledLoginForm = styled(LoginForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledLoginForm;
