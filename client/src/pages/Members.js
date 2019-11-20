import React, { Component } from "react";
import MembersNav from "../components/MembersNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";
import Dashboard from "./Dashboard";
import AddBill from "./AddBill";
import History from "./History";

class Members extends Component {
  state = {
    userEmail: "",
    userId: null
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    API.getUser()
      .then(res => {
        console.log(res.data.id)
        this.setState({ userEmail: res.data.email, userId: res.data.id })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Router>
          <MembersNav user={this.state.userEmail} />
          <div>
            <h1>Welcome {}</h1>
          </div>
          <div>
            <Route exact path="/dashboard" component={() => <Dashboard userId={this.state.userId} />} />
            <Route exact path="/add-bill" component={() => <AddBill userId={this.state.userId} />} />
            <Route exact path="/history" component={History} />
          </div>
        </Router>
      </>
    );
  }
}

export default Members;
