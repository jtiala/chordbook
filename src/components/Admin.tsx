import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

import Button from "./Button";
import Heading from "./Heading";
import LoginForm from "./LoginForm";
import Message from "./Message";
import Pulse from "./Pulse";

const Admin: React.SFC = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    auth.signOut();
  };

  if (loading) {
    return <Pulse />;
  }

  if (error) {
    return <Message variant="error">Error{error && `: ${error}`}</Message>;
  }

  if (user) {
    return (
      <div>
        <Heading level={1} variant="primary">
          Admin
        </Heading>
        <Message>
          Logged in as <strong>{user.email}</strong>
        </Message>
        <Button as="Link" to="/admin/createSong">
          Create song
        </Button>
        <Button onClick={logout}>Log out</Button>
      </div>
    );
  }

  return <LoginForm />;
};

export default Admin;
