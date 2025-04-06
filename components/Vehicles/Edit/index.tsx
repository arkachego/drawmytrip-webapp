// Libraries
import { Drawer } from "@mantine/core";

// Actions
import { loadVehicleItem } from "../slice";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";

const Edit: React.FC = () => {

  const dispatch = useAppDispatch();
  const opened = useAppSelector(state => state.vehicles.edit.item !== null);
  const vehicle = useAppSelector(state => state.vehicles.edit.item);

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={() => dispatch(loadVehicleItem(null))}
      title={`${vehicle?.id ? 'Edit' : 'Add'} Vehicle`}
    >
      {JSON.stringify(vehicle)}
    </Drawer>
  );

};

export default Edit;
