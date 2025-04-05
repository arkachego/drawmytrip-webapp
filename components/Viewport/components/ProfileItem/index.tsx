"use client";

import { Avatar, Flex, Stack, Text, Title } from '@mantine/core';

const ProfileItem: React.FC = () => {

  return (
    <Flex align="center" gap="sm">
      {/* <Avatar src={session?.user?.image} alt="avatar" /> */}
      <Stack gap={0}>
        <Title order={4}>Arka Halder</Title>
        <Text mt={-3} size="xs">arkachego25@gmail.com</Text>
      </Stack>
    </Flex>
  );

};

export default ProfileItem;
