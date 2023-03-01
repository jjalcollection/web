import { media } from "@/styles/ui.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  width: "100%",
  padding: "64px 120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
  "@media": {
    [media.large]: {
      padding: "48px 60px",
    },

    [media.medium]: {
      padding: "32px 60px",
      gap: "16px",
    },
    [media.small]: {
      padding: "32px 20px",
    },
  },
});
