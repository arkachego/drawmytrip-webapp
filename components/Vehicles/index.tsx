'use client';

// Components
import Viewport from "@/components/Viewport";
import { Button, Card, Flex, Text, TextInput } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";

const Vehicles: React.FC = () => {

  const vehicles: any[] = [];

  const onCreate = () => {

  };

  const onBottomReached = () => {

  };

  return (
    <Viewport
      header={(
        <Flex align="center" justify="flex-end" p="md" gap="md">
          <TextInput
            maw={280}
            variant='filled'
            rightSection={<IconSearch size={20}/>}
          />
          <Button
              onClick={onCreate}
            >
              <IconPlus size={20}/>
              <Text ml={4}>Add</Text>
            </Button>
        </Flex>
      )}
      content={vehicles.map((vehicle, index) => {
        return (
          <Card
            key={index}
            shadow='lg'
            withBorder={true}
          >
            {JSON.stringify(vehicle)}
          </Card>
        );
      })}
      contained={true}
      scrollable={true}
      onBottomReached={onBottomReached}
    />
  );

};

export default Vehicles;
