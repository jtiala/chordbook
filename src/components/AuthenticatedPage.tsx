import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

import { auth } from "../firebase";
import { IBreadcrumb } from "../types";

import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";

interface IProps {
  children?: React.ReactNode;
  title?: string;
  breadcrumbs?: IBreadcrumb[];
}

const AuthenticatedPage: React.SFC<IProps> = ({ children, ...props }) => {
  const [user, loading, error] = useAuthState(auth);

  if (!loading && !error && !user) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return (
      <Page {...props}>
        <Pulse />
      </Page>
    );
  }

  if (error) {
    return (
      <Page {...props}>
        <Message variant="error">{error.message}</Message>
      </Page>
    );
  }

  return <Page {...props}>{children}</Page>;
};

export default AuthenticatedPage;
