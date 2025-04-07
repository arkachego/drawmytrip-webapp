'use client';

// Components
import { Card } from "@mantine/core";

// Actions
import { loadVehicleItem } from "../slice";

// Utilities
import { useAppDispatch } from "@/utilities/redux";

type Props = {
  vehicle: any;
};

const Vehicles: React.FC<Props> = ({ vehicle }) => {

  const dispatch = useAppDispatch();

  return (
    <Card
      shadow='lg'
      withBorder={true}
      onClick={() => dispatch(loadVehicleItem(vehicle))}
      style={{ cursor: 'pointer' }}
    >
      <div>{vehicle.id}</div>
      <div>{vehicle.title}</div>
      <div>{vehicle.description}</div>
      <div>{vehicle.category}</div>
      <div>{vehicle.fuel}</div>
      <div>{vehicle.mileage}</div>
      <div>{vehicle.occupancy}</div>
    </Card>
  );

};

export default Vehicles;
