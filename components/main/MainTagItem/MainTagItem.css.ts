import { style } from "@vanilla-extract/css";

export const Item = style({
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.6)",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  padding: "0 20px",
  fontSize: "14px",
  marginRight: "8px",
});

export const SelectedItem = style({
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.6)",
  backgroundColor: "white",
  fontWeight: "bold",
  color: "black",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  padding: "0 20px",
  fontSize: "14px",
  marginRight: "8px",
});
