import NavBar from './Home/NavBar.js';
import React from 'react';
import Sound from './Sound/Sound';
import Text from './Text/Text';
import Home from './Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <img height={100} src={require('./images/sasd.svg')} alt="g" />
        <img className={"intel"} height={100} src={require('./images/intel.svg')} alt="g" />
      <NavBar> </NavBar>

        <Route path="/" exact component={Home} />
        <Route path="/sound/" component={Sound} />
        <Route path="/text/" component={Text} />
      </Router>
    </div>
  );
}

export default App;
