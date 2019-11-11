import React, { Component } from 'react'
import MembersNav from "../components/MembersNav"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddBill from "./AddBill";
import History from "./History";
import Notfound from "./NotFound";

class Members extends Component {
  render() {
    return (
      <>
        <Router>
          <MembersNav />
          <div>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/add-bill" component={AddBill} />
              <Route exact path="/history" component={History} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}


export default Members;