'use client';

// Libraries
import { useEffect, useState } from "react";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";

// Components
import Authenticator from "@/components/Authenticator";

// Utilities
import "@/utilities/amplify";

type Props = {
  children: React.ReactNode,
};

const RootLayout: React.FC<Props> = ({ children }) => {

  const [ user, setUser ] = useState<AuthUser | null>(null);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('CognitoIdentityServiceProvider.1rp89ae3bnjpqdo2m23g6am9ac.facebook_9646201818775267.idToken')}`,
        }
      });
      console.log(response);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return user ? children : (
    <Authenticator />
  );

};

export default RootLayout;
