'use client';

// Libraries
import { useEffect } from "react";
import { useMantineTheme } from "@mantine/core";

// Actions
import { setItems } from "@/components/Viewport/slice";

// Components
import Viewport from "@/components/Viewport";

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
    <Viewport shades={colors[primaryColor]}>
      {children}
    </Viewport>
  );

};

export default NavLayout;
