import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import "./assets/Fonts/ProximaNova/stylesheet.css"

// MUI stuff
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LatestNews from "./components/News/index";
import UserGuide from "./components/UserGuide";
import Faq from "./components/FAQ";
import Faq2 from "./components/FAQ2";

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
  typography: {
    fontFamily: ["ProximaNovaRegular"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
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
            <Route exact component={About} path="/about" />
            <Route exact component={LatestNews} path="/news" />
            <Route exact component={UserGuide} path="/userguide" />
            <Route exact component={Faq} path="/faq" />
            <Route exact component={Faq2} path="/faq2" />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
