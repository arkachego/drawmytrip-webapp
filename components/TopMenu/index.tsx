"use client";

import { signOut } from "aws-amplify/auth";
import { IconLogout } from "@tabler/icons-react";
import { ActionIcon, Burger, Flex, Title, useMantineTheme } from '@mantine/core';

type Props = {
  mobileOpened: boolean;
  toggleMobile: () => void;
  desktopOpened: boolean;
  toggleDesktop: () => void;
};


const TopMenu: React.FC<Props> = ({ mobileOpened, toggleMobile, desktopOpened, toggleDesktop }) => {

  const { colors, primaryColor } = useMantineTheme();

  return (
    <Flex align="center" gap="md" justify="space-between" h="100%" px="md">
      <Burger color={colors[primaryColor][9]} lineSize={3} opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="md" />
      <Burger color={colors[primaryColor][9]} lineSize={3} opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="md" />
      <Title order={2} style={{ color: colors[primaryColor][9] }}>DrawMyTrip</Title>
      <ActionIcon size="lg" color="red" variant="filled" aria-label="logout" onClick={() => signOut()}>
        <IconLogout/>
      </ActionIcon>
    </Flex>
  );
  
};

export default TopMenu;
