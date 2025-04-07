// Libraries
import { Button, Card, Drawer, NumberInput, Select, Stack, Text, TextInput, Textarea } from "@mantine/core";

// Actions
import {
  loadVehicleItem,
  setVehicleTitle,
  setVehicleDescription,
  setVehicleCategory,
  setVehicleFuel,
  setVehicleMileage,
  setVehicleOccupancy,
  setVehicleRegistration,
} from "../slice";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { getServerInstance } from "@/utilities/server";

const Edit: React.FC = () => {

  const dispatch = useAppDispatch();
  const opened = useAppSelector(state => state.vehicles.edit.item !== null);
  const vehicle = useAppSelector(state => state.vehicles.edit.item);

  const onSubmit: () => void = async () => {
    try {
      const serverInstance = await getServerInstance();
      const postResponse = await serverInstance.post('/vehicle', vehicle);
      const vehicleData = postResponse.data;
      console.log(vehicleData);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer
      position="right"
      opened={opened}
      closeOnEscape={false}
      closeOnClickOutside={false}
      onClose={() => dispatch(loadVehicleItem(null))}
      title={`${vehicle?.id ? 'Edit' : 'Add'} Vehicle`}
    >
      <Stack gap="md">
        <Card withBorder={true} bg="#F3F3F3">
          <Card.Section withBorder={true} inheritPadding={true}>
            <Stack gap="md" pt="md" pb="lg">
              <TextInput
                required={true}
                label="Title"
                description="Maximum 50 characters"
                maxLength={50}
                value={vehicle?.title}
                onChange={event => dispatch(setVehicleTitle(event.target.value))}
              />
              <Select
                required={true}
                label="Category"
                description="Select vehicle class"
                data={[ 'Bike', 'Car', 'Bus' ]}
                value={vehicle?.category}
                onChange={value => dispatch(setVehicleCategory(value || ''))}
              />
              <Select
                required={true}
                label="Fuel"
                description="Select all those apply"
                data={['Petrol', 'Diesel', 'CNG', 'Electricity']}
                value={vehicle?.fuel}
                onChange={value => dispatch(setVehicleFuel(value || ''))}
              />
              <NumberInput
                required={true}
                label="Mileage"
                description="Average mileage in km/litre"
                max={25}
                value={vehicle?.mileage}
                onChange={value => dispatch(setVehicleMileage(value as unknown as number))}
              />
              <NumberInput
                required={true}
                label="Occupancy"
                description="Maximum 25 including the driver"
                max={25}
                value={vehicle?.occupancy}
                onChange={value => dispatch(setVehicleOccupancy(value as unknown as number))}
              />
            </Stack>
          </Card.Section>
          <Card.Section withBorder={true} inheritPadding={true}>
            <Text fw={700} mt="md">Optional Fields</Text>
            <Stack gap="md" pt="xs" pb="lg">
              {/* <FileInput
                label="Image"
                description="Maximum 5 MB"
              /> */}
              <TextInput
                label="Registration"
                description="Maximum 20 characters"
                maxLength={20}
                value={vehicle?.registration || ''}
                onChange={event => dispatch(setVehicleRegistration(event.target.value))}
              />
              <Textarea
                label="Description"
                description="Maximum 500 characters"
                rows={4}
                maxLength={500}
                value={vehicle?.description || ''}
                onChange={event => dispatch(setVehicleDescription(event.target.value))}
              />
            </Stack>
          </Card.Section>
        </Card>
        <Button
          fullWidth={true}
          onClick={onSubmit}
        >
          <IconDeviceFloppy/>
          <Text pl={4}>Save</Text>
        </Button>
      </Stack>
    </Drawer>
  );

};

export default Edit;
