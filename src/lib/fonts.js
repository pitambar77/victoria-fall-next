import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir-next-light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../public/fonts/Avenir Next LT Pro Regular.ttf",
      weight: "400",
      style: "normal",
    },
      {
      path: "../../public/fonts/Avenir Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Avenir Next LT Pro Demi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-next-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});