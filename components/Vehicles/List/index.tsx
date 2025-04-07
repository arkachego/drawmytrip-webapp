'use client';

// Libraries
import { Button, Center, Flex, Loader, Stack, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

// Actions
import { loadVehicleItem } from "../slice";

// Components
import Viewport from "@/components/Viewport";
import Empty from "../Empty";
import Item from "../Item";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";

const List: React.FC = () => {

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.vehicles.list.loading);
  const vehicles = useAppSelector(state => state.vehicles.list.items);

  const getContent: () => React.ReactNode = () => {
    if (loading) {
      return (
        <Center h={250}>
          <Loader/>
        </Center>
      );
    }
    else if (!vehicles.length) {
      return (
        <Empty/>
      );
    }
    else {
      return (
        <Stack>
          {vehicles.map((vehicle, index) => {
            return (
              <Item
                key={index}
                vehicle={vehicle}
              />
            );
          })}
        </Stack>
      );
    }
  };

  return (
    <Viewport
      header={(
        <Flex align="center" justify="flex-end" p="md" gap="md">
          <Button
              onClick={() => dispatch(loadVehicleItem())}
            >
              <IconPlus size={20}/>
              <Text ml={4}>Add</Text>
            </Button>
        </Flex>
      )}
      content={getContent()}
      contained={true}
      scrollable={true}
    />
  );

};

export default List;
