import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "240px",
  height: "180px",
  backgroundColor: "#d6d2d2",
  borderRadius: "20px",
});

export const ItemImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
});
