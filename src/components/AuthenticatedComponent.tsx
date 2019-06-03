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

const AuthenticatedComponent: React.SFC<IProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
};

export default AuthenticatedComponent;
