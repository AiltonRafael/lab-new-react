import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })

export const theme = extendTheme({
    styles: {
      global: {
        "html": {
            height: "100vh",
        },
        "body": {
          height: "100%",
          d: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        },
      },
    },
    breakpoints,
  })