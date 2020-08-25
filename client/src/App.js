import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import PrivacyPolicy from './components/Login/PrivacyPolicy';
import TOS from './components/Login/TOS';
import GoogleLogin from './components/Login/GoogleLogin';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login" exact component={GoogleLogin} />
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/tos" component={TOS} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
