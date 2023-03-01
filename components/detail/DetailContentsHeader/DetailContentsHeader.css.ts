import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Description = style({
  fontSize: "16px",
  fontWeight: "700",
});

export const TagBox = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const Tag = style({
  fontSize: "12px",
  fontWeight: "700",
  padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: theme.palette.grayLightest,
  color: "#5B5B5B",
});
