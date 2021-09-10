import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "@fontsource/lato";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#C96C08",
    },
    secondary: {
      main: "#565656",
    },
    warning: {
      main: "#DBCB39",
    },
  },
  typography: {
    fontFamily: `"Lato", "Helvetica", "Arial", "sans-serif"`,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
