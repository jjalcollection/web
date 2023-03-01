import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  height: "350px",
  backgroundColor: "#000",
  marginBottom: "50px",
  color: "white",
});

export const Inner = style({
  padding: "60px 20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = style({
  fontSize: "36px",
  marginBottom: "40px",
  marginTop: "10px",
});
