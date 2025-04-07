'use client';

// Components
import { Badge, Box, Card, Flex, Text, Title } from "@mantine/core";
import { IconBike, IconBus, IconCar, IconGasStation, IconTruck } from "@tabler/icons-react";

// Actions
import { loadVehicleItem } from "../slice";

// Utilities
import { useAppDispatch } from "@/utilities/redux";

type LegendProps = {
  title: string;
  value: string;
};

const Legend: React.FC<LegendProps> = ({ title, value }) => {

  return (
    <Box style={{ textAlign: "center" }}>
      <Title order={4}>{title}</Title>
      <Text c='dimmed'>{value}</Text>
    </Box>
  );

};

type Props = {
  vehicle: any;
};

const Vehicles: React.FC<Props> = ({ vehicle }) => {

  const dispatch = useAppDispatch();

  const getCategoryIcon: () => React.ReactNode = () => {
    switch (vehicle.category) {
      case "Bike": {
        return <IconBike/>;
      }
      case "Car": {
        return <IconCar/>;
      }
      case "Van": {
        return <IconTruck/>;
      }
      case "Bus": {
        return <IconBus/>;
      }
    }
  };

  return (
    <Card
      shadow='lg'
      withBorder={true}
      onClick={() => dispatch(loadVehicleItem(vehicle))}
      style={{ cursor: 'pointer' }}
    >
      <Card.Section
        withBorder={true}
        inheritPadding={true}
        py="md"
      >
        <Flex align="center" justify="space-between">
          <Title order={2}>{vehicle.title}</Title>
          <Flex gap="md">
            <Badge variant="light" size="xl" leftSection={<IconGasStation/>}>{vehicle.fuel}</Badge>
            <Badge variant="light" size="xl" leftSection={getCategoryIcon()}>{vehicle.category}</Badge>
          </Flex>
        </Flex>
      </Card.Section>
      <Card.Section
        withBorder={true}
        inheritPadding={true}
        py="md"
      >
        <Flex align="center" justify="space-between" px="xl">
          <Legend
            title="Mileage"
            value={`${vehicle.mileage} km/litre`}
          />
          <Legend
            title="Occupancy"
            value={`${vehicle.occupancy} people`}
          />
          <Legend
            title="Registration"
            value={`${vehicle.registration || 'Not Provided'}`}
          />
        </Flex>
      </Card.Section>
      {vehicle.description && (
        <Card.Section
          withBorder={true}
          inheritPadding={true}
          py="md"
        >
          <Text size="sm">{vehicle.description}</Text>
        </Card.Section>
      )}
    </Card>
  );

};

export default Vehicles;
