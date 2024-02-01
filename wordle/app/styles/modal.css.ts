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
  padding: "20px",
  background: "rgba(63, 58, 58, 0.6)",
  borderRadius: "5px",
  maxWidth: "500px",
  maxHeight: "80vh",
  overflowY: "auto",
});

export const modalHeading = style({
  marginBottom: "10px",
});

export const modalContent = style({});
