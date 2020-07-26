import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// MUI stuff
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#16161A",
      textColor: "#FFFFFF",
    },
    secondary: {
      main: "#EF4565",
      textColor: "#94A1B2",
      socialIconColor: "#72757E",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact component={Home} path="/" />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
