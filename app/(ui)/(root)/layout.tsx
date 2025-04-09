'use client';

// Libraries
import { useEffect } from "react";
import { Card, Center, Loader, Stack, Text, Title } from "@mantine/core";
import { fetchUserAttributes } from "aws-amplify/auth";

// Actions
import { setLoading, setWidth, setHeight, setProfile } from "@/app/(ui)/(root)/slice";

// Utilities
import { getServerInstance } from "@/utilities/server";
import { useAppDispatch, useAppSelector } from '@/utilities/redux';
import Image from "next/image";

const RootLoader: React.FC = () => {

  return (
    <Center w='100%' h='100%'>
      <Loader/>
    </Center>
  );

};

const LessWidth: React.FC = () => {

  return (
    <Center w='100%' h='100%'>
      <Card withBorder={true} shadow="md">
        <Stack align="center" gap={0}>
          <Image src='/logo.png' width={160} height={160} alt='top-menu-logo'/>
          <Title order={1} fw={900} mt={10}>DrawMyTrip</Title>
          <Text c='dimmed' size="sm" mt={-5}>Live your trips like never before!</Text>
        </Stack>
      </Card>
    </Center>
  );

};

type Props = {
  children: React.ReactNode,
};

const RootLayout: React.FC<Props> = ({ children }) => {

  const dispatch = useAppDispatch();
  const width: number = useAppSelector(state => state.global.width);
  const height: number = useAppSelector(state => state.global.height);
  const loading: boolean = useAppSelector(state => state.global.loading);

  const updateScreenSize = () => {
    dispatch(setWidth(window.innerWidth));
    dispatch(setHeight(window.innerHeight));
  };

  const hasRequiredSize = () => {
    return width >= 480 && height >= 768;
  };

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
    catch (error: any) {
      if (error.name !== 'UserUnAuthenticatedException') {
        console.error(error);
      }
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () =>  window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    if (loading) {
      fetchUserProfile();
    }
  }, [ loading ]);

  if (hasRequiredSize()) {
    return loading ? <RootLoader/> : children;
  }
  else {
    return <LessWidth/>;
  }
  
};

export default RootLayout;
