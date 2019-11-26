import React from "react";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import "../pages_css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faPlus, faBell } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Bill-ionaire Home";
  }
  render() {
    return (
      <div>
        <header className="masthead">
          <Container style={{ marginTop: 30 }}>
            <div className="intro-text">
              <div className="intro-heading text-uppercase">
                Track your bills
              </div>
              <div className="intro-lead-in">
                Set your self up for Financial Freedom
              </div>
              <a
                className="btn btn-warning btn-xl text-uppercase"
                href="#services"
              >
                GET STARTED
              </a>
            </div>
          </Container>
        </header>
        <section>
          <Container style={{ marginTop: 30 }}>
            <section className="page-section" id="services">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">
                    Finance is an important topic in everyone’s lives,we have
                    decided to develop <br />a tool that will help you maintain
                    finance with amazing services of this app.
                  </h3>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faPlus} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">Add Bill</h4>
                  <p className="text-muted">
                    This app allows you to Add Bills.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faBell} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">Bill Reminder</h4>
                  <p className="text-muted">
                    This app Reminds you before you miss your duedate.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faExpand} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">Responsive Design</h4>
                  <p className="text-muted">
                    This app is Responsive that means you can operate it from
                    any device you are using.
                  </p>
                </div>
              </div>
            </section>
          </Container>
          {/* <Container style={{ marginTop: 30 }}>
            <section class="page-section" id="about">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">
                    By focusing on this bill portion,the simple displayed knowledge will give <br />
                    people the power to be informed and give them a sense of reality about how <br />
                    much money they truly have after their pay cheque comes in and to make future <br />
                    more informed financially.
                    </h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <ul class="timeline">
                      <li>
                        <div class="timeline-image">
                          <img
                            class="rounded-circle img-fluid"
                            src="img/about/1.jpg"
                            alt=""
                          ></img>
                        </div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 class="subheading">Our Humble Beginnings</h4>
                          </div>
                          <div class="timeline-body">
                            <p class="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="timeline-inverted">
                        <div class="timeline-image">
                          <img
                            class="rounded-circle img-fluid"
                            src="img/about/2.jpg"
                            alt=""
                          ></img>
                        </div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 class="subheading">An Agency is Born</h4>
                          </div>
                          <div class="timeline-body">
                            <p class="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="timeline-image">
                          <img
                            class="rounded-circle img-fluid"
                            src="img/about/3.jpg"
                            alt=""
                          ></img>
                        </div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4>December 2012</h4>
                            <h4 class="subheading">
                              Transition to Full Service
                            </h4>
                          </div>
                          <div class="timeline-body">
                            <p class="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="timeline-inverted">
                        <div class="timeline-image">
                          <img
                            class="rounded-circle img-fluid"
                            src="img/about/4.jpg"
                            alt=""
                          ></img>
                        </div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4>July 2014</h4>
                            <h4 class="subheading">Phase Two Expansion</h4>
                          </div>
                          <div class="timeline-body">
                            <p class="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="timeline-inverted">
                        <div class="timeline-image">
                          <h4>No</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Container> */}
          <Container style={{ marginTop: 30 }}>
            <section className="bg-light page-section" id="team">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                      Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                      This app is created by aour amazing team.
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/1.jpg"
                        alt=""
                      ></img>
                      {/* <i class="far fa-circle"></i> */}
                      <h4>Marc Felizardo</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      ></img>
                      <h4>Wajiha Ahmad</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      ></img>
                      <h4>Christine Hong</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/3.jpg"
                        alt=""
                      ></img>
                      <h4>Poonam Halani</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aut eaque, laboriosam veritatis, quos non quis ad
                      perspiciatis, totam corporis ea, alias ut unde.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Container>
          <Container style={{ marginTop: 30 }}>
            <footer className="footer">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <span className="copyright">
                      Copyright © Your Website 2019
                    </span>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                      <li className="list-inline-item">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </Container>
        </section>
      </div>
    );
  }
}
export default Home;
