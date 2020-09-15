import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import PrivacyPolicy from "./components/Login/PrivacyPolicy";
import TOS from "./components/Login/TOS";
import GoogleButton from "./components/Login/GoogleButton";
import Home from "./pages/Home";
import Header from "./components/Header";
import Overworld from "./pages/Overworld";
import Arena from "./pages/Arena";
import Test from "./components/Test";
import AvatarPic from "./components/AvatarPic";
import { StoreProvider } from "./utils/globalState";
import PanFlute from "./pages/PanFlute";
import OlympusMatch from "./pages/OlympusMatch";
import Credits from "./pages/Credits";
import About from "./pages/About";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/overworld" exact component={Overworld} />
              <Route path="/hadesgate" exact component={Arena} />
              <Route path="/login" exact component={GoogleButton} />
              <Route path="/privacy" exact component={PrivacyPolicy} />
              <Route path="/tos" component={TOS} />
              <Route path="/test" component={Test} />
              <Route path="/avatar" component={AvatarPic} />
              <Route path="/pansflute" component={PanFlute} />
              <Route path="/olympus" component={OlympusMatch} />
              <Route path="/credits" component={Credits} />
              <Route path="/about" component={About} />
            </Switch>
          </StoreProvider>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
