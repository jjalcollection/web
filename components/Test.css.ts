import { theme } from "@/styles/theme.css";
import { media } from "@/styles/ui.css";
import { style } from "@vanilla-extract/css";

//사용법 예시
export const card = style({
  backgroundColor: theme.palette.primary,
  color: theme.palette.primary,
  width: "100px",
  height: "100px",

  "@media": {
    [media.medium]: {
      backgroundColor: theme.palette.error,
    },
  },
});
