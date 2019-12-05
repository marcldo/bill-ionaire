import React, { Component } from 'react';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Bill from "../components/Bill";
import LineExample from "../components/Line"
import PieExample from "../components/Pie"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages_css/dashboard.css"
const moment = require("moment");

class Dashboard extends Component {
  constructor(props) {
    super(props)
    const [month, year] = this.getCurrentMonthYear();
    this.state = {
      dueBills: [],
      paidBills: [],
      overdueBills: [],
      prevFourBills: [],
      prevThreeBills: [],
      prevTwoBills: [],
      prevOneBills: [],
      month,
      year
    };
  }

  componentDidMount() {
    document.title = "Bill-ionaire Dashboard";
  }

  componentWillMount() {
    this.loadBills();
    this.getPreviousMonthsData();
    console.log("ODbills", this.state.overdueBills.length)

  };


  getCurrentMonthYear() {
    const current = new Date()
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;

    return [currentMonth, currentYear];
  }

  getPreviousMonthsData = () => {

    //get previous four months date and year
    const fourMonth = moment().subtract(3, 'months').month();
    const fourYear = moment().subtract(3, 'months').year();
    const threeMonth = moment().subtract(2, 'months').month();
    const threeYear = moment().subtract(2, 'months').year();
    const twoMonth = moment().subtract(1, 'months').month();
    const twoYear = moment().subtract(1, 'months').year();
    const oneMonth = moment().subtract(0, 'months').month();
    const oneYear = moment().subtract(0, 'months').year();

    //call api for the data and set state
    API.getPaidBills(this.props.userId, fourMonth, fourYear)
      .then(res => this.setState({ prevFourBills: res.data }))
      .catch(err => console.log(err));
    API.getPaidBills(this.props.userId, threeMonth, threeYear)
      .then(res => this.setState({ prevThreeBills: res.data }))
      .catch(err => console.log(err));
    API.getPaidBills(this.props.userId, twoMonth, twoYear)
      .then(res => this.setState({ prevTwoBills: res.data }))
      .catch(err => console.log(err));
    API.getPaidBills(this.props.userId, oneMonth, oneYear)
      .then(res => this.setState({ prevOneBills: res.data }))
      .catch(err => console.log(err));
  }

  handleMonthChange = event => {
    this.setState({ month: Number(event.target.value) }, this.loadBills)
  }
  handleYearChange = event => {
    this.setState({ year: Number(event.target.value) }, this.loadBills)
  }

  loadBills = () => {
    const { month, year } = this.state;
    API.getDueBills(this.props.userId, month, year)
      .then(res => this.setState({ dueBills: res.data }))
      .catch(err => console.log(err));

    API.getPaidBills(this.props.userId, month, year)
      .then(res => this.setState({ paidBills: res.data }))
      .catch(err => console.log(err));

    API.getOverdueBills(this.props.userId)
      .then(res => {
        this.setState({ overdueBills: res.data });
        this.overDueNotify();
      }
      )
      .catch(err => console.log(err));
  };



  getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i].amount);
    }
    return total.toFixed(2);
  }

  overDueNotify = () => {
    if (this.state.overdueBills.length) {
      toast.error(`You have ${this.state.overdueBills.length} bills overdue`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
    }
  };

  billNotify = () => {
    toast.success(`Paid!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  };

  updateNotify = () => {
    toast.success(`Updated!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  };


  render() {
    //get current months bills totals
    const dueBillTotal = this.getTotal(this.state.dueBills);
    const paidBillTotal = this.getTotal(this.state.paidBills);
    const overdueBillTotal = this.getTotal(this.state.overdueBills);

    //get previous months bills totals
    const prevFourTotal = this.getTotal(this.state.prevFourBills);
    const prevThreeTotal = this.getTotal(this.state.prevThreeBills);
    const prevTwoTotal = this.getTotal(this.state.prevTwoBills);
    const prevOneTotal = this.getTotal(this.state.prevOneBills);

    //month labels for the line chart
    const fourLabel = moment().subtract(4, 'months').format("MMMM");
    const threeLabel = moment().subtract(3, 'months').format("MMMM");
    const twoLabel = moment().subtract(2, 'months').format("MMMM");
    const oneLabel = moment().subtract(1, 'months').format("MMMM");


    return (
      <Container fluid>
        <Row>
          <Col size="md-8 sm-12">
            <h1>Dashboard</h1>
          </Col>

          <Col size="md-3 sm-12">
            <Row>
              <div className="form-group col-lg-6">
                <label htmlFor="monthSelect">Month</label>
                <select
                  className="form-control time-dropdown"
                  id="monthSelect"
                  value={this.state.month}
                  onChange={this.handleMonthChange}
                  name="month"
                >
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="yearSelect">Year</label>
                <select
                  className="form-control time-dropdown"
                  id="yearSelect"
                  value={this.state.year}
                  onChange={this.handleYearChange}
                  name="month"
                >
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>

          <Col size="md-6 sm-12">
            <LineExample
              label4={fourLabel}
              label3={threeLabel}
              label2={twoLabel}
              label1={oneLabel}
              month4={prevFourTotal}
              month3={prevThreeTotal}
              month2={prevTwoTotal}
              month1={prevOneTotal} />
          </Col>
          <Col size="md-6 sm-12">
            <PieExample dueBills={this.state.dueBills} paidBills={this.state.paidBills} />
          </Col>

        </Row>

        <Row>
          <Col size="md-12">
            <hr />
          </Col>

        </Row>
        <Row>
          <Col size="md-4 sm-12">
            <h3>Due ${dueBillTotal}</h3>
            {this.state.dueBills.length ? (
              <List>
                {this.state.dueBills.map(dueBill => (
                  <ListItem key={dueBill.id}>
                    <Bill
                      name={dueBill.RecurBill.name}
                      amount={dueBill.amount}
                      dueDate={dueBill.dueDate}
                      id={dueBill.id}
                      loadBills={this.loadBills}
                      billNotify={this.billNotify}
                      btnTxt={"Pay"}
                      key={dueBill.id}
                    />
                  </ListItem>

                ))}
              </List>
            ) :
              (<h3>No Bills Are Due</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            <h3>Paid ${paidBillTotal}</h3>
            {this.state.paidBills.length ? (
              <List>
                {this.state.paidBills.map(paidBill => (
                  <ListItem key={paidBill.id}>
                    <Bill
                      name={paidBill.RecurBill.name}
                      amount={paidBill.amount}
                      dueDate={paidBill.dueDate}
                      id={paidBill.id}
                      loadBills={this.loadBills}
                      billNotify={this.updateNotify}
                      btnTxt={"Update"}
                      key={paidBill.id}
                    />
                  </ListItem>
                ))}
              </List>
            ) :
              (<h3>No Bills Are Paid</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            <h3>Overdue ${overdueBillTotal}</h3>
            {this.state.overdueBills.length ? (
              <List>
                {this.state.overdueBills.map(overdueBill => (
                  <ListItem key={overdueBill.id}>
                    <Bill
                      name={overdueBill.RecurBill.name}
                      amount={overdueBill.amount}
                      dueDate={overdueBill.dueDate}
                      id={overdueBill.id}
                      loadBills={this.loadBills}
                      billNotify={this.billNotify}
                      btnTxt={"Pay"}
                      key={overdueBill.id}
                    />
                  </ListItem>
                ))}
              </List>
            ) :
              (<h3>No Bills Are Overdue</h3>)}
          </Col>

        </Row>
        <ToastContainer />
      </Container >
    )
  }

}
export default Dashboard;