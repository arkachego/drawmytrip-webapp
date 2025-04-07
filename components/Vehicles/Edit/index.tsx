// Libraries
import { useDisclosure } from "@mantine/hooks";
import { Button, Card, Drawer, FileInput, Flex, NumberInput, Select, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconExclamationCircle, IconTrash } from "@tabler/icons-react";

// Actions
import {
  setListLoading,
  setEditLoading,
  loadVehicleItem,
  setVehicleTitle,
  setVehicleDescription,
  setVehicleCategory,
  setVehicleFuel,
  setVehicleMileage,
  setVehicleOccupancy,
  setVehicleRegistration,
} from "../slice";

// Components
import Confirmer from "@/components/Confirmer";

// Hooks
import useNotifications from "@/hooks/useNotifications";

// Types
import VehicleType from "@/types/VehicleType";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";
import { getServerInstance } from "@/utilities/server";

const Edit: React.FC = () => {

  const dispatch = useAppDispatch();
  const { notify } = useNotifications();
  const [ opened, { open, close } ] = useDisclosure(false);
  const visible = useAppSelector(state => state.vehicles.edit.item !== null);
  const loading = useAppSelector(state => state.vehicles.edit.loading);
  const dirty = useAppSelector(state => state.vehicles.edit.dirty);
  const vehicle = useAppSelector(state => state.vehicles.edit.item);

  const onError: () => void = () => {
    notify({
      title: 'Error!',
      message: 'Operation unsuccessful! Please try again.',
      color: 'red',
      icon: <IconExclamationCircle/>
    });
  };

  const onDelete: () => Promise<void> = async () => {
    try {
      dispatch(setEditLoading(true));
      const serverInstance = await getServerInstance();
      await serverInstance.delete(`/vehicle?id=${vehicle?.id}`);
      notify({
        title: 'Success!',
        message: 'Vehicle has been deleted successfully!',
        color: 'green',
        icon: <IconCheck/>
      });
      dispatch(loadVehicleItem(null));
      dispatch(setListLoading(true));
    }
    catch (error) {
      console.error(error);
      onError();
    }
    finally {
      dispatch(setEditLoading(false));
    }
  };

  const onMutate: () => void = async () => {
    try {
      dispatch(setEditLoading(true));
      const serverInstance = await getServerInstance();
      const { created_at, updated_at, user_id, ...rest } = vehicle as unknown as VehicleType;
      const payload ={
        ...rest,
        description: rest?.description || null,
        image: rest?.image || null,
        registration: rest?.registration || null,
      }
      if (payload.id) {
        await serverInstance.put('/vehicle', payload);
      }
      else {
        await serverInstance.post('/vehicle', payload);
      }
      notify({
        title: 'Success!',
        message: `Vehicle has been ${vehicle?.id ? 'updated' : 'created'} successfully!`,
        color: 'green',
        icon: <IconCheck/>
      });
      dispatch(loadVehicleItem(null));
      dispatch(setListLoading(true));
    }
    catch (error) {
      console.error(error);
      onError();
    }
    finally {
      dispatch(setEditLoading(false));
    }
  };

  return (
    <Drawer
      position="right"
      opened={visible}
      closeOnEscape={false}
      onClose={() => dispatch(loadVehicleItem(null))}
      title={`${vehicle?.id ? 'Edit' : 'Add'} Vehicle`}
    >
      {vehicle && (
        <>
          <Confirmer
            message="Do you really want to delete the vehicle?"
            opened={opened}
            onConfirm={onDelete}
            onClose={close}
          />
          <Stack gap="md">
            <Card withBorder={true} bg="#F3F3F3">
              <Card.Section withBorder={true} inheritPadding={true}>
                <Stack gap="md" pt="md" pb="lg">
                  <TextInput
                    required={true}
                    label="Title"
                    description="Maximum 50 characters"
                    maxLength={50}
                    disabled={loading}
                    value={vehicle?.title}
                    onChange={event => dispatch(setVehicleTitle(event.target.value))}
                  />
                  <Select
                    required={true}
                    label="Category"
                    description="Select vehicle class"
                    data={[ 'Bike', 'Car', 'Bus' ]}
                    disabled={loading}
                    value={vehicle?.category}
                    onChange={value => dispatch(setVehicleCategory(value || ''))}
                  />
                  <Select
                    required={true}
                    label="Fuel"
                    description="Select all those apply"
                    data={['Petrol', 'Diesel', 'CNG', 'Electricity']}
                    disabled={loading}
                    value={vehicle?.fuel}
                    onChange={value => dispatch(setVehicleFuel(value || ''))}
                  />
                  <NumberInput
                    required={true}
                    label="Mileage"
                    description="Average mileage in km/litre"
                    max={25}
                    disabled={loading}
                    value={vehicle?.mileage}
                    onChange={value => dispatch(setVehicleMileage(value as unknown as number))}
                  />
                  <NumberInput
                    required={true}
                    label="Occupancy"
                    description="Maximum 25 including the driver"
                    max={25}
                    disabled={loading}
                    value={vehicle?.occupancy}
                    onChange={value => dispatch(setVehicleOccupancy(value as unknown as number))}
                  />
                </Stack>
              </Card.Section>
              <Card.Section withBorder={true} inheritPadding={true}>
                <Text fw={700} mt="md">Optional Fields</Text>
                <Stack gap="md" pt="xs" pb="lg">
                  <FileInput
                    label="Image"
                    description="Maximum 5 MB"
                    disabled={loading}
                  />
                  <TextInput
                    label="Registration"
                    description="Maximum 20 characters"
                    maxLength={20}
                    disabled={loading}
                    value={vehicle?.registration || ''}
                    onChange={event => dispatch(setVehicleRegistration(event.target.value))}
                  />
                  <Textarea
                    label="Description"
                    description="Maximum 500 characters"
                    rows={4}
                    maxLength={500}
                    disabled={loading}
                    value={vehicle?.description || ''}
                    onChange={event => dispatch(setVehicleDescription(event.target.value))}
                  />
                </Stack>
              </Card.Section>
            </Card>
            <Flex gap="md">
              {vehicle?.id && (
                <Button
                  fullWidth={true}
                  color="red"
                  disabled={loading}
                  onClick={open}
                >
                  <IconTrash/>
                  <Text pl={4}>Delete</Text>
                </Button>
              )}
              <Button
                fullWidth={true}
                disabled={loading || !dirty}
                loading={loading}
                onClick={onMutate}
              >
                <IconDeviceFloppy/>
                <Text pl={4}>Save</Text>
              </Button>
            </Flex>
          </Stack>
        </>
      )}
    </Drawer>
  );

};

export default Edit;
