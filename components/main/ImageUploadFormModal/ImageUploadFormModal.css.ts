import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  padding: "40px 60px",
  height: "100%",
});

export const ImageBox = style({
  width: "380px",
  height: "300px",
  border: "1px dashed #ccc",
  margin: "20px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#ccc",
  fontSize: "60px",
});

export const Title = style({
  fontSize: "20px",
});

export const FileImage = style({
  display: "none",
});

export const TagList = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: "20px",
});

export const Tag = style({
  border: "1px solid #ccc",
  borderRadius: "100px",
  padding: "0 10px",
  margin: "0 5px",
  cursor: "pointer",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
});

export const TagInput = style({
  border: "1px solid #ccc",
  outline: "none",
  height: "30px",
  borderRadius: "8px",
  padding: "0 10px",
  width: "120px",
});

export const ButtonBox = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "40px",
});

export const SubmitButton = style({
  width: "100%",
  height: "40px",
  backgroundColor: theme.palette.primary,
  border: "none",
  color: theme.palette.white,
  borderRadius: "6px",
  cursor: "pointer",
});
