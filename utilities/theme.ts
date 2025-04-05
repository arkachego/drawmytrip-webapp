import { createTheme, rem } from '@mantine/core';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  variable: "--font-nunito",
  weight: [ '200', '300', '400', '500', '600', '700', '800', '900' ],
  subsets: [ 'latin' ]
});

const theme = createTheme({
  colors: {
    "pale-indigo": [
      "#eff2ff",
      "#dfe2f2",
      "#bdc2de",
      "#99a0ca",
      "#7a84b9",
      "#6672af",
      "#5c69ac",
      "#4c5897",
      "#424e88",
      "#36437a"
    ],
    "pale-blue": [
      "#ecf4ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc0",
      "#5f7cb7",
      "#5474b4",
      "#44639f",
      "#3a5890",
      "#2c4b80"
    ],
  },
  fontSizes: {
    xs: rem(16),
    sm: rem(18),
    md: rem(20),
    lg: rem(22),
    xl: rem(24),
  },
  primaryColor: "pale-indigo",
  primaryShade: 6,
  defaultRadius: "lg",
  fontFamily: `${nunito.style.fontFamily}, sans-serif`,
  headings: {
    fontFamily: `${nunito.style.fontFamily}, sans-serif`,
  },
});

export default theme;
