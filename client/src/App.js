import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import PrivacyPolicy from './components/Login/PrivacyPolicy';
import TOS from './components/Login/TOS';
import GoogleButton from './components/Login/GoogleButton';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login" exact component={GoogleButton} />
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/tos" component={TOS} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
