'use client';

// Components
import { Card } from "@mantine/core";

type Props = {
  vehicle: any;
};

const Vehicles: React.FC<Props> = ({ vehicle }) => {

  return (
    <Card
      shadow='lg'
      withBorder={true}
    >
      {JSON.stringify(vehicle)}
    </Card>
  );

};

export default Vehicles;
