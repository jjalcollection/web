import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "1024px",
  margin: "0 auto",
  marginTop: "40px",
});

export const Inner = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "10px",
});
