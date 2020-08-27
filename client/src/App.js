import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import NewMetric from './pages/NewMetric';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/metrics/new' component={NewMetric} />
        <Route path='*' render={() => <h1>404 Error</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
