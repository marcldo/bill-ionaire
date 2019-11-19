import React, { Component } from 'react';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Dashboard extends Component {
  state = {
    dueBills: [],
    paidBills: [],
    overdueBills: []
  };

  componentDidMount() {
    console.log(this.props.userId);
    this.loadBills();
  };

  loadBills = () => {
    API.getDueBills()
      .then(res => this.setState({ dueBills: res.data }))
      .catch(err => console.log(err));

    API.getPaidBills()
      .then(res => this.setState({ paidBills: res.data }))
      .catch(err => console.log(err));

    API.getOverdueBills()
      .then(res => this.setState({ overdueBills: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4 sm-12">
            {this.state.dueBills.length ? (
              <List>
                {this.state.dueBills.map(dueBill => (
                  <ListItem key={dueBill.id}>
                    <strong>
                      Name: {dueBill.name} Amount: {dueBill.amount} Due Date: {dueBill.dueDate}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) :
              (<h3>No Bills Are Due</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            {this.state.paidBills.length ? (
              <List>
                {this.state.paidBills.map(paidBill => (
                  <ListItem key={paidBill.id}>
                    <strong>
                      Name: {paidBill.name} Amount: {paidBill.amount} Due Date: {paidBill.dueDate}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) :
              (<h3>No Bills Are Paid</h3>)}
          </Col>
          <Col size="md-4 sm-12">
            {this.state.overdueBills.length ? (
              <List>
                {this.state.overdueBills.map(overdueBill => (
                  <ListItem key={overdueBill.id}>
                    <strong>
                      Name: {overdueBill.name} Amount: {overdueBill.amount} Due Date: {overdueBill.dueDate}
                    </strong>
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