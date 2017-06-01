import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Loading    from './components/LoadingOverlay/LoadingOverlay';
import Header     from './components/Header/Header';

import {
  Login,
  Registration,
  Home,
  Ping,
  Profile
} from './pages'

import Auth     from './services/auth';
import history  from './services/history';

const auth = new Auth();

const handleAuthentication = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter history={history}>
          <Switch>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Loading {...props} />
            }}/>
            <Route path="/registration" render={(props) => <Registration auth={auth} {...props} /> }/>
            <Route path="/" render={(props) => {
              return !auth.isAuthenticated() ? (
                <Login auth={auth} {...props} />
              ) : (
                <div>
                  <Header auth={auth} history={history} {...props} />
                  <Route exact path="/" render={(props) => <Home auth={auth} {...props} /> }/>
                  <Route path="/profile" render={(props) => <Profile auth={auth} {...props} /> }/>
                  <Route path="/ping" render={(props) => <Ping auth={auth} {...props} /> }/>
                </div>
              )
            }} />
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};