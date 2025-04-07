'use client';

import { Card, Stack, Text } from "@mantine/core";

type Props = {
  title: string;
  children: React.ReactNode;
};

const FormCard: React.FC<Props> = ({ title, children }) => {

  return (
    <Card withBorder={true}>
      <Card.Section
        withBorder={true}
        inheritPadding={true}
        bg="#DFDFDF"
      >
        <Text py="xs">{title}</Text>
      </Card.Section>
      <Stack gap="md" pt={10} pb={4}>
        {children}
      </Stack>
    </Card>
  );

};

export default FormCard;
