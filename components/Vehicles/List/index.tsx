'use client';

// Libraries
import { Button, Flex, Text, TextInput } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";

// Actions
import { loadVehicleItem } from "../slice";

// Components
import Viewport from "@/components/Viewport";
import Item from "../Item";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";

const List: React.FC = () => {

  const dispatch = useAppDispatch();
  const vehicles = useAppSelector(state => state.vehicles.list.items);

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
              onClick={() => dispatch(loadVehicleItem())}
            >
              <IconPlus size={20}/>
              <Text ml={4}>Add</Text>
            </Button>
        </Flex>
      )}
      content={vehicles.map((vehicle, index) => {
        return (
          <Item
            key={index}
            vehicle={vehicle}
          />
        );
      })}
      contained={true}
      scrollable={true}
    />
  );

};

export default List;
