import React from "react";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import "../pages_css/home.css";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Bill-ionaire Home";
  }
  render() {
    return (
      <div>
        <header class="masthead">
          <Container style={{ marginTop: 30 }}>
            <div class="intro-text">
              <div class="intro-heading text-uppercase">
                Let us help you track your bills
              </div>
              <div class="intro-lead-in">
                Set your self up for Financial Freedom
              </div>
              <a class="btn btn-primary btn-xl text-uppercase" href="#services">
                Tell Me More
              </a>
            </div>
          </Container>
        </header>
        <section>{/* start here */}</section>
      </div>
    );
  }
}
export default Home;
