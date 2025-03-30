// Libraries
import type { Metadata, Viewport } from "next";
import { MantineProvider } from '@mantine/core';

// Utilities
import theme from "@/utilities/theme";

// Styles
import "./globals.css";

export const metadata: Metadata = {
  title: "DrawMyTrip",
  description: "Your personal all-in-one travel organiser and companion",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

type Props = {
  children: React.ReactNode,
};

const AppLayout: React.FC<Readonly<Props>> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );

};

export default AppLayout;
