import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "10px",
});
