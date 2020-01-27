import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Nav from "./components/navbar/Nav"
import Routes from './routing/Routes'
import './App.css';

const App = () => (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
); 
export default App;


