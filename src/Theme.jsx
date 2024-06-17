import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "sticky",
          top: "0px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 500,
        },
        colorPrimary: {
          color: "#004e98",
          borderColor: "#778DA9",
          backgroundColor: "#ffffff",
          padding: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0px !important",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        img: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
  // #0D1B2A
  // #1B263B
  // #415A77
  // #778DA9
  // #E0E1DD
  // #b5e2fa
  // #004e98
  // #4cc9f0
  // #caf0f8

  palette: {
    mode: "light",
    primary: {
      main: "#1B263B",
    },
  },

  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#caf0f8",
    },
    h2: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#415A77",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#415A77",
    },
    h4: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#415A77",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#415A77",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#415A77",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#1B263B",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#0D1B2A",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#1B263B",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#0D1B2A",
    },
    button: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#0D1B2A",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      color: "#0D1B2A",
    },
    overline: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#0D1B2A",
    },
  },
});
