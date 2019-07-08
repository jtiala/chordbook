import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';

interface IProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

const AuthenticatedComponent: React.SFC<IProps> = ({ children, fallback }) => {
  const [user] = useAuthState(auth);

  if (user) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
};

export default AuthenticatedComponent;
