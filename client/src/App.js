import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Members from "./pages/Members";
import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/members" component={Members} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
