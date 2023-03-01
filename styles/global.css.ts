import { globalStyle } from "@vanilla-extract/css";

globalStyle("body, body *", {
  boxSizing: "border-box",
});

globalStyle("#__next", {
  paddingTop: "50px",
});
