import React from 'react';
import Home from '../Home/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={'#'} />
          <Route path={'/login'} component={'#'} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App