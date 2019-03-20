import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

// Components
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import CreateRecipe from '../CreateRecipe/CreateRecipe';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import getLocales from '../../locales';
const text = getLocales('en-US');

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={CreateRecipe} />
            <Route path={'/login'} render={
              () => <h1 style={{textAlign: 'center'}}>Here goes the login page</h1>
            } />
            <Route render={
              () =>
              <h1 style={{textAlign: 'center'}}>
                Error 404: This page is not in our menu
              </h1>
            } />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;