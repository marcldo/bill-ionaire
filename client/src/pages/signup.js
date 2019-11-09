import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Signup extends Component {
  state = {
    username: "",
    password1: "",
    password2: "",

  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />

            </form>
          </Col>
        </Row>

      </Container>
    )
  }
}