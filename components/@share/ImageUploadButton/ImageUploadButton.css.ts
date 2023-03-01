import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  height: "40px",
  padding: "10px 16px",
  backgroundColor: theme.palette.primary,
  border: "none",
  borderRadius: "8px",
  color: theme.palette.white,
  cursor: "pointer",
});
