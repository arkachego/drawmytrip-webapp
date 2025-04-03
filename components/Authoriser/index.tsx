'use client';

// Libraries
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { signInWithRedirect } from 'aws-amplify/auth';
import { IconBrandFacebook } from "@tabler/icons-react";
import { Button, Card, Center, Stack, Text, Title } from "@mantine/core";

const Authoriser: React.FC = () => {

  const [ loading, { toggle } ] = useDisclosure();

  const onClick = () => {
    toggle();
    signInWithRedirect({
      provider: "Facebook",
    });
  };

  return (
    <Center w='100%' h='100%'>
      <Card radius="lg" shadow="lg" w={360}>
        <Card.Section style={{ textAlign: "center" }}>
          <Stack gap={0} align='center' p='xl'>
            <Image src="/logo.png" alt="Logo" width={180} height={180}/>
            <Title order={2} mt='md' fw={800}>DrawMyTrip</Title>
            <Text size="sm" c="dimmed" mt={-4}>Plan your trips like never before!</Text>
            <Button disabled={loading} loading={loading} mt="md" onClick={onClick}>
              <Text mr={1}>Login with</Text>
              <IconBrandFacebook/>
              <Text ml={1}>Facebook</Text>
            </Button>
          </Stack>
        </Card.Section>
      </Card>
    </Center>
  );

};

export default Authoriser;
