import { createTheme, globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: "#333",
});

export const [wordleThemeClass, vars] = createTheme({
  color: {
    correct: "#538D4E",
    misplaced: "#BEA11F",
    unchecked: "#3A3A3C",
    empty: "transparent",
  },
  font: {
    body: "Inter",
  },
});

export const appStyle = style({
  display: "flex",
  justifyContent: "center",
  padding: "160px",
});

export const letterBoxStyle = style({
  backgroundColor: vars.color.empty,
  fontFamily: vars.font.body,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: 10,
  width: 60,
  height: 60,
  borderRadius: "4px",
  border: "2px solid",
  borderColor: vars.color.unchecked,
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: 700,
  textTransform: "capitalize",
});

export const wordGuessStyle = style({
  display: "flex",
  rowGap: "10px",
  columnGap: "10px",
});

export const wordleGameStyle = style({
  display: "flex",
  rowGap: "10px",
  flexDirection: "column",
});
