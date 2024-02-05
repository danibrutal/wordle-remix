import { style } from "@vanilla-extract/css";
import { palette } from "./styles.css";

export const buttonBaseStyles = style({
  padding: "6px 7px",
  fontSize: "0.813rem",
  lineHeight: "1rem",
  backgroundColor: "#007AFF",
  border: "none",
  margin: 0,
  textAlign: "center",
  color: palette.textColor,
  borderRadius: 5,
});

export const buttonFullWidth = style([
  buttonBaseStyles,
  {
    width: "100%",
  },
]);
