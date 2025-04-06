// Libraries
import { IconCar, IconExclamationCircle, IconInvoice, IconMapPin, IconSettings } from "@tabler/icons-react";

// Types
import MenuItemType from "@/types/MenuItemType";

export const getMenuItemIcon: (item: MenuItemType) => React.FC = (item: MenuItemType) => {
  switch (item.label) {
    case 'Trips': {
      return IconMapPin;
    }
    case 'Vehicles': {
      return IconCar;
    }
    case 'Invoices': {
      return IconInvoice;
    }
    case 'Settings': {
      return IconSettings;
    }
    default: {
      return IconExclamationCircle;
    }
  };
};
