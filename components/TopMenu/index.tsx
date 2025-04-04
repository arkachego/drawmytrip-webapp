"use client";

import { signOut } from "aws-amplify/auth";
import { IconBell, IconBug, IconClockBolt, IconLogout, IconUser, IconUserCircle } from "@tabler/icons-react";
import { ActionIcon, Burger, Flex, Title, MantineColorsTuple, Text, Stack, Menu } from '@mantine/core';
import Image from "next/image";

type Props = {
  shades: MantineColorsTuple;
  opened: boolean;
  toggle: () => void;
};


const TopMenu: React.FC<Props> = ({ shades, opened, toggle }) => {

  return (
    <Flex align="center" gap="md" justify="space-between" h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Flex mt={-2} gap="xs">
        <Image src='/logo.png' width={48} height={48} alt='top-menu-logo'/>
        <Stack gap={0}>
          <Title order={2} c='white' fw={900}>DrawMyTrip</Title>
          <Text size="xs" c='dimmed' mt={-5}>Plan &gt; Explore &gt; Audit</Text>
        </Stack>
      </Flex>
      <Flex gap='sm'>
        <Menu shadow="md" width={210}>
          <Menu.Target>
            <ActionIcon size="lg" radius="xl" variant="default" aria-label="logout">
              <IconBell/>
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            Notifications will be fetched from the server when the user clicks on the Menu Target
          </Menu.Dropdown>
        </Menu>
        <Menu shadow="md" width={210}>
          <Menu.Target>
            <ActionIcon size="lg" radius="xl" variant="default" aria-label="logout">
              <IconUser/>
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUserCircle/>}>
              My Profile
            </Menu.Item>
            <Menu.Item leftSection={<IconClockBolt/>}>
              My Subscriptions
            </Menu.Item>
            <Menu.Item leftSection={<IconBug/>}>
              My Issues
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item
              color="red"
              onClick={() => signOut()}
              leftSection={<IconLogout/>}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
  
};

export default TopMenu;
