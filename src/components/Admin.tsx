import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

import Error from "./Error";
import Heading from "./Heading";
import LoginForm from "./LoginForm";
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
    return <Error>Error{error && `: ${error}`}</Error>;
  }

  if (user) {
    return (
      <div>
        <Heading level={1} variant="primary">
          Admin
        </Heading>
        <p>Current User: {user.email}</p>
        <Link to="/admin/createSong">Create song</Link>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return <LoginForm />;
};

export default Admin;
