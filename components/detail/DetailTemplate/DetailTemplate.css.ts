import { media } from "@/styles/ui.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  padding: "64px 120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    [media.large]: {
      padding: "48px 60px",
    },

    [media.medium]: {
      padding: "32px 60px",
    },
    [media.small]: {
      padding: "32px 20px",
    },
  },
});
