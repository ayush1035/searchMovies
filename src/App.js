import React, { Component } from 'react';
import './App.css';
import HomeContainer from './components/home/homeContainer.js';
import Static from './components/static/staticPresentational.js';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
              <div className="loader">
                  <Switch>
                    <Route exact path="/" component={HomeContainer} />} />
                    <Route exact path="/details" component={Static} />} />
                  </Switch>
              </div>
      </div>
    );
  }
}

export default App;
