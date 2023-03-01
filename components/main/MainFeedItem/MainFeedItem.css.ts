import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "240px",
  height: "180px",
  backgroundColor: "#d6d2d2",
  borderRadius: "20px",
  cursor: "pointer",
  overflow: "hidden",
});

export const ItemImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  ":hover": {
    scale: 1.05,
    transition: "all 0.4s ease-in-out",
  },
});
