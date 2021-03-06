import React from "react";
import { Container } from "../components/Grid";
import "../pages_css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChartLine, faFileInvoiceDollar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Bill-ionaire Home";
  }
  render() {
    return (
      <div>
        <section>
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
                  More Info
              </a>
              </div>
            </Container>
          </header>
          <Container style={{ marginTop: 30 }}>
            <section className="page-section" id="services">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">
                    A Personal finance app that helps you to stay on top of your bills.<br />
                    Monitoring your spending is a breeze with our cutting edge tools.
                  </h3>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faChartLine} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">Better Credit Score</h4>
                  <p className="text-muted">
                    One convenient app to add, delete and update your bills.
                    Which eventually helps in maintaining better credit score.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faClock} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">No Overdue Bills</h4>
                  <p className="text-muted">
                    This app is simple and easy to use which helps you see your
                    bills status to avoid any unwanted overdue bills.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-yellow" />
                  </span>
                  <h4 className="service-heading">Track Your Spending</h4>
                  <p className="text-muted">
                    Our dashboard offers graphs and charts to monitor
                    and track Your spending for better control over your finance.
                  </p>
                </div>
              </div>
            </section>
          </Container>
          <Container style={{ marginTop: 30 }}>
            <section className="page-section" id="team">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                      Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                      This app is created by our amazing team.
                    </h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-sm-3">
                    <span className="fa-stack fa-2x">
                      <FontAwesomeIcon icon={faAngleDown} className="text-yellow" />
                    </span>
                    <div className="team-member">
                      <h4>Marc Felizardo</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <span className="fa-stack fa-2x">
                      <FontAwesomeIcon icon={faAngleDown} className="text-yellow" />
                    </span>
                    <div className="team-member">
                      <h4>Wajiha Ahmad</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <span className="fa-stack fa-2x">
                      <FontAwesomeIcon icon={faAngleDown} className="text-yellow" />
                    </span>
                    <div className="team-member">
                      <h4>Christine Hong</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <span className="fa-stack fa-2x">
                      <FontAwesomeIcon icon={faAngleDown} className="text-yellow" />
                    </span>
                    <div className="team-member">
                      <h4>Poonam Halani</h4>
                      <p className="text-muted">Developer</p>
                    </div>
                  </div>
                </div >
              </div >
            </section >
          </Container >
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
                        <Link>
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link>
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                      <li className="list-inline-item">
                        <Link>Privacy Policy</Link>
                      </li>
                      <li className="list-inline-item">
                        <Link>Terms of Use</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </Container>
        </section >
      </div >
    );
  }
}
export default Home;
