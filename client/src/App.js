import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import NoMatch from "./pages/NoMatch"
import Nav from "./components/navbar/Nav"

const App = () =>  {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/profile" component={Profile}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
