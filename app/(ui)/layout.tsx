'use client';

// Libraries
import { useEffect, useState } from "react";
import { Center, Loader, MantineColorsTuple, useMantineTheme } from "@mantine/core";
import { fetchUserAttributes } from "aws-amplify/auth";

// Components
import Authoriser from "@/components/Authoriser";
import Viewport from "@/components/Viewport";

// Types
import { ProfileType } from "@/types/ProfileType";

// Utilities
import "@/utilities/amplify";
import { getServerInstance } from "@/utilities/server";

type Props = {
  children: React.ReactNode,
};

const UILayout: React.FC<Props> = ({ children }) => {

  const { colors, primaryColor } = useMantineTheme();
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ user, setUser ] = useState<ProfileType | null>(null);

  const fetchUserProfile = async () => {
    try {
      const serverInstance = await getServerInstance();
      const getResponse = await serverInstance.get('/user');
      let userData = getResponse.data;
      if (!userData) {
        const userAttributes = await fetchUserAttributes();
        const postResponse = await serverInstance.post('/user', {
          first_name: userAttributes.given_name,
          last_name: userAttributes.family_name,
          email: userAttributes.email,
        });
        userData = postResponse.data;
      }
      setUser(userData);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <Center w='100%' h='100%'>
        <Loader/>
      </Center>
    );
  }
  else if (user) {
    return (
      <Viewport shades={colors[primaryColor]}>
        {children}
      </Viewport>
    );
  }
  else {
    return (
      <Authoriser />
    );
  }
  
};

export default UILayout;
