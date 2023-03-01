import { theme } from "@/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const Container = style({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1000,
});

export const Inner = style({
  position: "absolute",
  backgroundColor: theme.palette.white,
  zIndex: 1000,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  margin: "auto",
  borderRadius: "12px",
  animation: `${fadeIn} 0.4s ease-in-out;`,
});

export const Overlay = style({
  display: "block",
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.black,
  position: "absolute",
  left: 0,
  top: 0,
  opacity: 0.4,
});
