import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  fontSize: "16px",
  fontWeight: "500",
});

export const ImageWrapper = style({
  width: "100%",
  height: "auto",
  position: "relative",
  textAlign: "center",
  paddingBottom: "24px",
});

export const ImageStyle = style({
  width: "100%",
  height: "auto",
  maxWidth: "1024px",
  margin: "0 auto",
});
