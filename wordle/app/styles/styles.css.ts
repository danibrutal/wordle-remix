import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const palette = {
  primary: "#000000",
  secondary: "#3A3A3C",
  textColor: "white",
};

globalStyle("body", {
  background: "linear-gradient(270deg, #212226 0%, #000000 100%);",
  color: palette.textColor,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

export const [wordleThemeClass, vars] = createTheme({
  color: {
    correct: "#538D4E",
    present: "#BEA11F",
    absent: palette.secondary,
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
  boxSizing: "border-box",
  backgroundColor: vars.color.empty,
  fontFamily: vars.font.body,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  borderRadius: "4px",
  border: "2px solid",
  borderColor: palette.secondary,
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: 700,
  textTransform: "capitalize",
});

export const letterCorrectStyle = style([
  letterBoxStyle,
  { backgroundColor: vars.color.correct, borderColor: vars.color.correct },
]);

export const letterPresentStyle = style([
  letterBoxStyle,
  { backgroundColor: vars.color.present, borderColor: vars.color.present },
]);

export const letterAbsentStyle = style([
  letterBoxStyle,
  { backgroundColor: vars.color.absent, borderColor: vars.color.absent },
]);

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

export const secretWordHintStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
});
