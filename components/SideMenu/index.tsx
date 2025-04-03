"use client";

import { Button, Flex, Stack } from '@mantine/core';

const SideMenu: React.FC = () => {

  return (
    <Flex gap={0} p={4} w='100%'>
      <Stack gap={8} p={4} w='100%'>
        <Button variant="light" style={{ alignItems: "left" }}>Home</Button>
        <Button variant="subtle">Profile</Button>
        <Button variant="subtle">Settings</Button>
      </Stack>
    </Flex>
  );
  
};

export default SideMenu;
