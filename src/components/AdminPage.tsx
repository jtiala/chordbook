import * as React from "react";

import { auth } from "../firebase";

import AuthenticatedPage from "./AuthenticatedPage";
import Button from "./Button";
import Heading from "./Heading";

const AdminPage: React.SFC = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <AuthenticatedPage title="Admin">
      <React.Fragment>
        <Button as="Link" variant="primary" to="/songs/new">
          Create song
        </Button>
        <Button onClick={logout}>Logout</Button>
      </React.Fragment>
    </AuthenticatedPage>
  );
};

export default AdminPage;
