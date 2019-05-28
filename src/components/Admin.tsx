import * as React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import LoginForm from "./LoginForm";
import Pulse from "./Pulse";
import Error from "./Error";

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
        <p>Current User: {user.email}</p>
        <Link to="/admin/createSong">Create song</Link>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return <LoginForm />;
};

export default Admin;
