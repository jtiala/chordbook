import * as React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { auth, IAuthError } from "../firebase";
import { IBreadcrumb } from "../types";

const LoginPage: React.SFC = () => {
  React.useEffect(() => {
    auth.signOut();
  });

  return <Redirect to="/" />;
};

export default LoginPage;
