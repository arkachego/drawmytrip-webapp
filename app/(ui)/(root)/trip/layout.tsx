'use client';

// Libraries
import { useEffect } from "react";
import { useMantineTheme } from "@mantine/core";

// Actions
import { setItems } from "@/components/Skeleton/slice";

// Components
import Skeleton from "@/components/Skeleton";

// Utilities
import { useAppDispatch } from "@/utilities/redux";

type Props = {
  children: React.ReactNode;
};

const TripLayout: React.FC<Props> = ({ children }) => {

  const dispatch = useAppDispatch();
  const { colors, primaryColor } = useMantineTheme();

  useEffect(() => {
    dispatch(setItems([
      {
        label: 'Trips',
        link: '/trips',
      },
      {
        label: 'Vehicles',
        link: '/vehicles',
      },
      {
        label: 'Invoices',
        link: '/invoices',
      },
      {
        label: 'Settings',
        link: '/settings',
      },
    ]));
  }, []);

  return (
    <Skeleton shades={colors['pale-blue']}>
      {children}
    </Skeleton>
  );

};

export default TripLayout;
