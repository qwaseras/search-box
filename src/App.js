import React, { Component } from 'react';
import './App.css';
import Main from './Main.jsx';
import Results from './ResultsPage.jsx';
import Article from './ArticlePage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/results/:query" component={Results} />
          <Route exact={true} path="/article/:id" component={Article} />
        </Switch>
      </Router>
    );
  }
}

export default App;
