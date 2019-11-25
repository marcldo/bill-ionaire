import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {
    logoutInProcess: true
  }

  componentDidMount() {
    document.title = "Bill-ionaire Logout";
    console.log(this.state);
    API.logout().then(() => {
      this.setState({ logoutInProcess: false });
      this.props.logoutAction();
    })
  }

  render() {
    console.log(this.state);
    if (this.state.logoutInProcess) {
      console.log("logging out");
      return "loggin out"
    }
    //return "redirect from logout";
    return <Redirect to="/" />
  }

};

export default Logout;