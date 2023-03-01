import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  borderBottom: "1px solid rgb(212, 210, 207)",
});

export const Text = style({
  fontSize: "24px",
  fontWeight: "bold",
  cursor: "pointer",
});

export const Inner = style({
  width: "1024px",
  height: "60px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
