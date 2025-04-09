'use client';

// Libraries
import { useEffect } from "react";
import { useMantineTheme } from "@mantine/core";

// Actions
import { setItems } from "@/components/Skeleton/slice";

// Components
import Skeleton from "@/components/Skeleton";

// Constants
import NAV_ROUTES from "@/constants/nav-routes";

// Utilities
import { useAppDispatch } from "@/utilities/redux";

type Props = {
  children: React.ReactNode;
};

const NavLayout: React.FC<Props> = ({ children }) => {

  const dispatch = useAppDispatch();
  const { colors, primaryColor } = useMantineTheme();

  useEffect(() => {
    dispatch(setItems([
      {
        label: NAV_ROUTES.TRIPS,
        link: '/trips',
      },
      {
        label: NAV_ROUTES.VEHICLES,
        link: '/vehicles',
      },
      {
        label: NAV_ROUTES.SUBSCRIPTIONS,
        link: '/subscriptions',
      },
      {
        label: NAV_ROUTES.INVOICES,
        link: '/invoices',
      },
      {
        label: NAV_ROUTES.ADDRESSES,
        link: '/addresses',
      },
      {
        label: NAV_ROUTES.SETTINGS,
        link: '/settings',
      },
    ]));
  }, []);

  return (
    <Skeleton shades={colors[primaryColor]}>
      {children}
    </Skeleton>
  );

};

export default NavLayout;
