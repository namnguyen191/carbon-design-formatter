import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';

import LandingPage from './pages/LandingPage';
import RepoPage from './pages/RepoPage';
import AppHeader from './components/Header';
import './App.scss';

const App = () => {
  return (
    <>
      <AppHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
};

export default App;
