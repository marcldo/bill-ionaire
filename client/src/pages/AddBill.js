import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

const moment = require("moment");

class AddBills extends Component {
  state = {
    bills: []
  };
  loadBills = () => {
    console.log("AHAHHAHAs");
    API.getRecurBills(this.props.userId)
      .then(res => this.setState({ bills: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    console.log("props: " + this.props.userId);

    this.loadBills();
    console.log("state: " + this.state.userId);
  }
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Bills</h1>

            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Bill Name</label>
                <Input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Netflix"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Amount</label>
                <Input
                  type="amount"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="9.99"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Frequency</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>bi-weekly</option>
                  <option>quarterly</option>
                  <option>semi-annually</option>
                  <option>annually</option>
                  <option>monthly</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Start Date</label>
                <Input
                  type="Date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="9.99"
                />
              </div>
              <div>
                <FormBtn>SUBMIT!</FormBtn>
              </div>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <h1>My Bills</h1>

            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => (
                  <ListItem key={bill._id}>
                    <a href={"/bills/" + bill._id}>
                      <strong>
                        {bill.name} {bill.amount} {bill.frequency}{" "}
                        {bill.startDate}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddBills;
