"use client";

import { Button, Flex, Stack } from '@mantine/core';

const SideMenu: React.FC = () => {

  return (
    <Stack gap={4} p="md" w='100%'>
      <Button variant="subtle">Trips</Button>
      <Button variant="subtle">Vehicles</Button>
      <Button variant="subtle">Invoices</Button>
      <Button variant="subtle">Files</Button>
      <Button variant="subtle">Settings</Button>
    </Stack>
  );
  
};

export default SideMenu;
