import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!this.state.email || !this.state.password) {
      return;
    }
    const res = await API.loginUser(this.state.email, this.state.password)
    this.setState({
      email: "",
      password: ""
    });
    await this.props.loadUser();
    this.props.history.push("/members/dashboard")
  };

  render() {
    if (this.props.user && this.props.id) {
      return <Redirect to="/members/dashboard" />;
    }
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                  type="password"
                />
                <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
