import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivacyPolicy from "./components/Login/PrivacyPolicy";
import TOS from "./components/Login/TOS";
import GoogleButton from "./components/Login/GoogleButton";
import Home from "./pages/Home";
import Header from "./components/Header";
import Overworld from "./pages/Overworld";
import Arena from "./pages/Arena";
import Test from "./components/Test";
import AvatarPic from "./components/AvatarPic";
import { StoreProvider } from "./utils/GlobalState.js";

function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/overworld" exact component={Overworld} />
            <Route path="/arena" exact component={Arena} />
            <Route path="/login" exact component={GoogleButton} />
            <Route path="/privacy" exact component={PrivacyPolicy} />
            <Route path="/tos" component={TOS} />
            <Route path="/test" component={Test} />
            <Route path="/avatar" component={AvatarPic} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
