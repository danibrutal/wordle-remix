import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const modalDialog = style({
  padding: "32px 16px 16px 16px",
  background: "rgba(63, 58, 58, 0.6)",
  borderRadius: "10px",
  maxWidth: "260px",
  overflowY: "auto",
  ":focus-visible": {
    outline: "none",
  },
});

export const modalFigure = style({
  textAlign: "center",
  fontSize: "64px",
  lineHeight: "64px",
  padding: 0,
  marginBottom: "1.5rem",
});

export const modalHeading = style({
  fontSize: "13px",
  fontWeight: "500",
  textAlign: "center",
});

export const modalContent = style({
  textAlign: "center",
  fontSize: "11px",
  fontWeight: 400,
});
