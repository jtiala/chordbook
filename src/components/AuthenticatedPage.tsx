import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

import { auth } from "../firebase";

import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";

interface IProps {
  children?: React.ReactNode;
}

const AuthenticatedPage: React.SFC<IProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (!loading && !error && !user) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return (
      <Page>
        <Pulse />
      </Page>
    );
  }

  if (error) {
    return (
      <Page>
        <Message variant="error">{error}</Message>
      </Page>
    );
  }

  return <Page>{children}</Page>;
};

export default AuthenticatedPage;
