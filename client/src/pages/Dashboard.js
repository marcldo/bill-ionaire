import React, { Component } from 'react';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Bill from "../components/Bill";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    const [month, year] = this.getCurrentMonthYear();
    this.state = {
      dueBills: [],
      paidBills: [],
      overdueBills: [],
      month,
      year
    };
  }



  componentWillMount() {
    this.loadBills();
  };

  componentDidUpdate() {
    let billTotal = this.getTotal(this.state.dueBills);
    console.log("bill total" + billTotal);
  }

  getCurrentMonthYear() {
    const current = new Date()
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;

    return [currentMonth, currentYear];
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
      .then(res => this.setState({ overdueBills: res.data }))
      .catch(err => console.log(err));
  };

  getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i].amount);
    }
    return total.toFixed(2);
  }

  render() {
    const dueBillTotal = this.getTotal(this.state.dueBills);
    const paidBillTotal = this.getTotal(this.state.paidBills);
    const overdueBillTotal = this.getTotal(this.state.overdueBills);
    return (
      <Container fluid>
        <Row>
          <Col size="md-2 sm-6">
            <label for="monthSelect">Month</label>
            <select
              className="form-control"
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
          </Col>
          <Col size="md-2 sm-6">
            <label for="yearSelect">Year</label>
            <select
              className="form-control"
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
          </Col>
        </Row>
        <Row>
          <Col size="md-4 sm-12">
            <h3>Due {dueBillTotal}</h3>
            {this.state.dueBills.length ? (
              <List>
                {this.state.dueBills.map(dueBill => (
                  <ListItem>
                    {/* <strong>
                      Name: {dueBill.RecurBill.name} Amount: {dueBill.amount} Due Date: {dueBill.dueDate}
                    </strong> */}
                    <Bill
                      name={dueBill.RecurBill.name}
                      amount={dueBill.amount}
                      dueDate={dueBill.dueDate}
                      id={dueBill.id}
                      loadBills={this.loadBills}
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
            <h3>Paid {paidBillTotal}</h3>
            {this.state.paidBills.length ? (
              <List>
                {this.state.paidBills.map(paidBill => (
                  <ListItem>
                    {/* <strong>
                      Name: {paidBill.RecurBill.name} Amount: {paidBill.amount} Due Date: {paidBill.dueDate}
                    </strong> */}
                    <Bill
                      name={paidBill.RecurBill.name}
                      amount={paidBill.amount}
                      dueDate={paidBill.dueDate}
                      id={paidBill.id}
                      loadBills={this.loadBills}
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
            <h3>Overdue {overdueBillTotal}</h3>
            {this.state.overdueBills.length ? (
              <List>
                {this.state.overdueBills.map(overdueBill => (
                  <ListItem>
                    {/* <strong>
                      Name: {overdueBill.RecurBill.name} Amount: {overdueBill.amount} Due Date: {overdueBill.dueDate}
                    </strong> */}
                    <Bill
                      name={overdueBill.RecurBill.name}
                      amount={overdueBill.amount}
                      dueDate={overdueBill.dueDate}
                      id={overdueBill.id}
                      loadBills={this.loadBills}
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
      </Container >
    )
  }

}
export default Dashboard