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
        </Row>
      </Container >
    )
  }

}
export default Dashboard