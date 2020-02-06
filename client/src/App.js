import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/navbar/Nav';
// import Footer from './components/footer/Footer';
import Routes from './routing/Routes';
import Wrapper from './components/wrapper';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/Auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Wrapper>
            <Nav />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
            {/* <Footer /> */}
          </Wrapper>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
