import React, { Component } from "react";
import MembersNav from "../components/MembersNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddBill from "./AddBill";
import History from "./History";
import "../pages_css/members.css"

class Members extends Component {

  componentDidMount() {
  }

  render() {
    // if (!this.props.user) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <>
        <Router>
          <MembersNav user={this.props.user.email} />
          <div className="billContent">
            <Route exact path="/members/dashboard" render={(props) => <Dashboard {...props} userId={this.props.user.id} />} />
            <Route exact path="/members/add-bill" render={(props) => <AddBill {...props} userId={this.props.user.id} />} />
            <Route exact path="/members/history" render={(props) => <History {...props} userId={this.props.user.id} />} />
          </div>
        </Router>
      </>
    );
  }
}

export default Members;
