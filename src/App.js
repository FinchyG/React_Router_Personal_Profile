import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile';
import Travel from './components/Travel';
import Walking from './components/Walking';
import Reading from './components/Reading';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/travel" component={Travel} />
            <Route path="/walking" component={Walking} />
            <Route path="/reading" component={Reading} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
