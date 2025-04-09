"use client";

import Image from "next/image";
import { IconBell, IconMessage } from "@tabler/icons-react";
import { ActionIcon, Burger, Flex, Title, Text, Stack, Menu } from '@mantine/core';
import Banisher from "@/components/Banisher";

type Props = {
  opened: boolean;
  toggle: () => void;
};

const TopMenu: React.FC<Props> = ({ opened, toggle }) => {

  return (
    <Flex align="center" gap="md" justify="space-between" h="100%" px="md">
      <Flex mt={-2} gap="xs" align="center">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" color="#FFFFFF" lineSize={2} mr={4}/>
        <Image src='/logo.png' width={48} height={48} alt='top-menu-logo'/>
        <Stack gap={0}>
          <Title order={2} c='white' fw={900}>DrawMyTrip</Title>
          <Text size="xs" c='dimmed' mt={-5}>Plan &gt; Explore &gt; Repeat</Text>
        </Stack>
      </Flex>
      <Flex gap='sm'>
        <Menu shadow="md" width={210}>
          <Menu.Target>
            <ActionIcon size="lg" radius="xl" variant="default" aria-label="logout">
              <IconMessage/>
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            Messages will be fetched from the server when the user clicks on the Menu Target
          </Menu.Dropdown>
        </Menu>
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
        <Banisher/>
      </Flex>
    </Flex>
  );
  
};

export default TopMenu;
