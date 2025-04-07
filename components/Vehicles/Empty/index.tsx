'use client';

// Libraries
import { Box, Card, Text, Title } from "@mantine/core";
import { IconError404 } from "@tabler/icons-react";

const Empty: React.FC = () => {

  return (
    <Card withBorder={true} style={{ textAlign: 'center' }}>
      <Box>
        <IconError404 size={120}/>
      </Box>
      <Title order={2}>List is Empty!</Title>
      <Text size="sm" c='dimmed' mb={24}>You can add a maximum of 5 vehicles.</Text>
    </Card>
  );

};

export default Empty;
