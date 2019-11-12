import React, { Component } from 'react'
import MembersNav from "../components/MembersNav"
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API"
import Dashboard from "./Dashboard";
import AddBill from "./AddBill";
import History from "./History";


class Members extends Component {
  state = {
    user: ""
  };


  componentDidMount() {
    this.loadUser();
  };


  loadUser() {
    API.getUser()
      .then(res => {
        this.setState({ user: res.data.email })
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <>
        <Router>
          <MembersNav user={this.state.user} />
          <div>
            <h1>
              Welcome {}
            </h1>
          </div>
          <div>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add-bill" component={AddBill} />
            <Route exact path="/history" component={History} />
          </div>
        </Router>
      </>
    );
  };
};


export default Members;