// Libraries
import { IconCar, IconClockBolt, IconExclamationCircle, IconFileInvoice, IconHomeLink, IconMap2, IconSettings } from "@tabler/icons-react";

// Constants
import NAV_ROUTES from "@/constants/nav-routes";

// Types
import MenuItemType from "@/types/MenuItemType";

export const getMenuItemIcon: (item: MenuItemType) => React.FC = (item: MenuItemType) => {
  switch (item.label) {
    case NAV_ROUTES.TRIPS: {
      return IconMap2;
    }
    case NAV_ROUTES.VEHICLES: {
      return IconCar;
    }
    case NAV_ROUTES.SUBSCRIPTIONS: {
      return IconClockBolt;
    }
    case NAV_ROUTES.INVOICES: {
      return IconFileInvoice;
    }
    case NAV_ROUTES.ADDRESSES: {
      return IconHomeLink;
    }
    case NAV_ROUTES.SETTINGS: {
      return IconSettings;
    }
    default: {
      return IconExclamationCircle;
    }
  };
};
