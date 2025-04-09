"use client";

import { signOut } from "aws-amplify/auth";
import { useDisclosure } from '@mantine/hooks';
import { IconLogout } from "@tabler/icons-react";
import { Flex, Text, Button, Modal } from '@mantine/core';

const Banisher: React.FC = () => {

  const [ loading, { toggle } ] = useDisclosure(false);
  const [ logout, { open, close } ] = useDisclosure(false);

  const onBanish: () => void = () => {
    toggle();
    signOut();
  };

  return (
    <>
      <Button radius="xl" variant="filled" aria-label="logout" color="red" onClick={open}>
        <IconLogout/>
        <Text ml={4}>Logout</Text>
      </Button>
      <Modal
        opened={logout}
        onClose={close}
        title="Logout Confirmation"
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
      >
        <Flex justify="center">
          <Text size="sm" mr={3}>Do you really want to logout from</Text>
          <Text size="sm" fw={700}>DrawMyTrip</Text>
          <Text size="sm">?</Text>
        </Flex>
        <Flex justify="space-between" mt="lg">
          <Button variant="default" size="xs" disabled={loading} onClick={close}>No</Button>
          <Button color="red" size="xs" loading={loading} disabled={loading} onClick={onBanish}>Yes</Button>
        </Flex>
      </Modal>
    </>
  );
  
};

export default Banisher;
