import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../firebase';

const LoginPage: React.SFC = () => {
  React.useEffect(() => {
    auth.signOut();
  });

  return <Redirect to="/" />;
};

export default LoginPage;
