import React, { Component } from 'react';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Bill from "../components/Bill";

class Dashboard extends Component {


  state = {
    dueBills: [],
    paidBills: [],
    overdueBills: [],
    month: null,
    year: null
  };

  componentDidMount() {
    this.getCurrentTime();
  };

  
  getCurrentTime() {
    const current = new Date()
    const currentYear = current.getFullYear()
    const currentMonth = current.getMonth() + 1;
    this.loadBills(currentMonth);
  }

  handleMonthChange = event => {
    switch (event.target.value) {
      case "January":
        this.setState({ month: 1 })
        break;
      case "February":
        this.setState({ month: 2 })
        break;
      case "March":
        this.setState({ month: 3 })
        break;
      case "April":
        this.setState({ month: 4 })
        break;
      case "May":
        this.setState({ month: 5 })
        break;
      case "June":
        this.setState({ month: 6 })
        break;
      case "July":
        this.setState({ month: 7 })
        break;
      case "August":
        this.setState({ month: 8 })
        break;
      case "September":
        this.setState({ month: 9 })
        break;
      case "October":
        this.setState({ month: 10 })
        break;
      case "November":
        this.setState({ month: 11 })
        break;
      case "December":
        this.setState({ month: 12 })
        break;

    }
  }

  loadBills = (month) => {
    API.getDueBills(this.props.userId, month)
      .then(res => this.setState({ dueBills: res.data }))
      .catch(err => console.log(err));

    API.getPaidBills(this.props.userId, month)
      .then(res => this.setState({ paidBills: res.data }))
      .catch(err => console.log(err));

    API.getOverdueBills(this.props.userId)
      .then(res => this.setState({ overdueBills: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4 sm-12">
            <label for="monthSelect">Month</label>
            <select
              className="form-control"
              id="monthSelect"
              value={this.state.month}
              onChange={this.handleMonthChange}
              name="month"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <h3>Due</h3>
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
                    />
                  </ListItem>

                ))}
              </List>
            ) :
              (<h3>No Bills Are Due</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            <h3>Paid</h3>
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
                    />
                  </ListItem>
                ))}
              </List>
            ) :
              (<h3>No Bills Are Paid</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            <h3>Overdue</h3>
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