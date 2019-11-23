import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Members from "./pages/Members";
import "./App.css";
import API from "./utils/API";



class App extends Component {
  state = {
    loggedInUser: null
  }

  async componentWillMount() {
    const res = await this.loadUser();
    if (res.data.id && !this.props.location.pathname.startsWith("/members")) {
      this.props.history.push("/members/dashboard");
    }
  }

  loadUser = async () => {
    const res = await API.getUser();
    if (res.data.id) {
      this.setState({
        loggedInUser: {
          id: res.data.id,
          email: res.data.email
        }
      });
    } else {
      this.setState({
        loggedInUser: false
      });
    }
    return res;
  }

  logoutAction = async () => {
    // TODO figure this out
    await API.logout();
    this.setState({
      loggedInUser: false
    });
  }

  render() {
    // if (this.props.location.pathname !== "/members/dashboard" && this.state.loggedInUser && this.state.loggedInUser.id) {
    //   console.log("redirecting logged in user to dashboard.....");
    //   return <Redirect to="/members/dashboard" />;
    // }
    return (
      <>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={(props) => <Login {...props} user={this.state.loggedInUser} loadUser={this.loadUser} />} />
            <Route path="/members" render={props => this.state.loggedInUser !== null && <Members {...props} user={this.state.loggedInUser} />} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
