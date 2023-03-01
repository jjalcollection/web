import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  height: "40px",
  padding: "10px 16px",
  margin: "16px 0",
  backgroundColor: theme.palette.primary,
  border: "none",
  borderRadius: "8px",
  color: theme.palette.white,
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.palette.primaryDark,
    scale: 1.08,
    transition: "all 0.2s ease-in-out",
  },
});
