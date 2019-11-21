import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class AddBills extends Component {
  state = {
    bills: [],
    name: null,
    amount: null,
    frequency: null,
    startDate: null
  };

  loadBills = () => {
    API.getRecurBills(this.props.userId)
      .then(res => this.setState({ bills: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    console.log("props: " + this.props.userId);

    this.loadBills();
    console.log("state: " + this.state.userId);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    alert(" Thank you! Your bill is submitted! ");
    //clear state
    this.setState({
      name: "",
      amount: "",
      frequency: "",
      startDate: "",
      UserId:""
    
  });
    //to do validation
    API.postRecurBills({
      name: this.state.name,
      amount: this.state.amount,
      frequency: this.state.frequency,
      startDate: this.state.startDate,
      UserId: this.props.userId
    })
      .then(console.log("User Created"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Bills</h1>

            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Bill Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Netflix"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Amount</label>
                <Input
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                  name="amount"
                  type="amount"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="9.99"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Frequency</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  value={this.state.frequency}
                  onChange={this.handleInputChange}
                  name="frequency"
                >
                  <option>bi-weekly</option>
                  <option>quarterly</option>
                  <option>semi-annually</option>
                  <option>annually</option>
                  <option>monthly</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect2">Start Date</label>
                <Input
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  name="startDate"
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="text-center">
                <FormBtn onClick={this.handleFormSubmit}>SUBMIT!</FormBtn>
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
