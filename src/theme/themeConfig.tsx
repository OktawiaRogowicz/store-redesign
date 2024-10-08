"use client";

import { Button, createTheme, Indicator } from "@mantine/core";
import { Newsreader, Inter } from "next/font/google";

const newsreader = Newsreader({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const themeConfiguration = createTheme({
  // primaryColor: "blue",
  // colors: {
  //   blue: ["#4348DB"],
  //   darkGrey: ["#7B7C96"],
  //   grey: ["#ECECEC"],
  // },
  // breakpoints: {
  //   xs: "30em",
  //   sm: "48em",
  //   md: "64em",
  //   lg: "74em",
  //   xl: "90em",
  // },
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: newsreader.style.fontFamily,
    fontWeight: "300",
    sizes: {
      h1: {
        fontSize: "64px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h2: {
        fontSize: "48px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "36px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h4: {
        fontSize: "24px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h5: {
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h6: {
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "1.2",
      },
    },
  },
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.variant === "underline") {
          return {
            root: {
              position: "relative",
              height: "fit-content",
              padding: 0,
              backgroundColor: "transparent",
              borderRadius: 0,
              borderBottom: "1px solid #2F240E",
              color: "#2F240E",
            },
          };
        }

        if (props.variant === "text") {
          return {
            root: {
              position: "relative",
              height: "fit-content",
              padding: 0,
              backgroundColor: "transparent",
              borderRadius: 0,
              color: "#2F240E",
            },
          };
        }

        if (props.variant === "transparent") {
          return {
            root: {
              position: "relative",
              height: "fit-content",
              backgroundColor: "transparent",
              borderRadius: 0,
              // border: "1px solid #FADE85",
            },
          };
        }

        if (props.variant === "outline") {
          return {
            root: {
              position: "relative",
              height: "fit-content",
              backgroundColor: "#FAF6EF",
              borderRadius: 0,
              border: "1px solid #2F240E",
              color: "#2F240E",
            },
          };
        }

        if (props.variant === "filled") {
          return {
            root: {
              position: "relative",
              height: "fit-content",
              backgroundColor: "#2F240E",
              borderRadius: 0,
              border: "1px solid #2F240E",
              color: "#FAF6EF",
            },
          };
        }

        return { root: {} };
      },
    }),
    Indicator: Indicator.extend({
      vars: (theme, props) => {
        return {
          root: {
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: 1.2,
            fontFamily: inter.style.fontFamily,
          },
        };
      },
    }),
  },
});
