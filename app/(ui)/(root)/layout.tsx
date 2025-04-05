'use client';

// Libraries
import { useEffect } from "react";
import { Center, Loader } from "@mantine/core";
import { fetchUserAttributes } from "aws-amplify/auth";

// Actions
import { setLoading, setProfile } from "@/app/(ui)/(root)/slice";

// Utilities
import { getServerInstance } from "@/utilities/server";
import { useAppDispatch, useAppSelector } from '@/utilities/redux';

type Props = {
  children: React.ReactNode,
};

const RootLayout: React.FC<Props> = ({ children }) => {

  const dispatch = useAppDispatch();
  const loading: boolean = useAppSelector(state => state.global.loading);

  const fetchUserProfile = async () => {
    try {
      const serverInstance = await getServerInstance();
      const getResponse = await serverInstance.get('/user');
      let userProfile = getResponse.data;
      if (!userProfile) {
        const userAttributes = await fetchUserAttributes();
        const postResponse = await serverInstance.post('/user', {
          first_name: userAttributes.given_name,
          last_name: userAttributes.family_name,
          email: userAttributes.email,
        });
        userProfile = postResponse.data;
      }
      dispatch(setProfile(userProfile));
    }
    catch (error) {
      console.error(error);
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return loading ? (
    <Center w='100%' h='100%'>
      <Loader/>
    </Center>
  ) : children;
  
};

export default RootLayout;
