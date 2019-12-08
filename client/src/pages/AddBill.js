import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { FormErrors } from "../components/FormErrors"
import { Col, Row, Container, Table } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages_css/addBill.css"
import moment from "moment";

class AddBills extends Component {
  state = {
    bills: [],
    name: "",
    amount: "",
    frequency: "monthly",
    startDate: moment().format("YYYY-MM-DD"),
    formErrors: { name: "", amount: "" },
    nameValid: false,
    amountValid: false,
    formValid: false
  };
  loadBills = () => {
    API.getRecurBills(this.props.userId)
      .then(res => this.setState({ bills: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.loadBills();
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let amountValid = this.state.amountValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? "" : "Please give your bill a name"
        break;
      case "amount":
        amountValid = value > 0;
        fieldValidationErrors.amount = amountValid ? "" : "Please enter an amount"
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid,
      amountValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.amountValid })
  }
  errorClass(error) {
    return (error.length === 0 ? "" : "has-error");
  }
  deleteRecurBill = id => {
    API.deleteRecurBill(id, {
      isActive: false
    })
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };
  notify = () => {
    toast.success('Bill Added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })

  };
  handleFormSubmit = e => {
    e.preventDefault();
    API.postRecurBills({
      name: this.state.name,
      amount: this.state.amount,
      frequency: this.state.frequency,
      startDate: this.state.startDate,
      isActive: 1,
      UserId: this.props.userId
    })
      .then(recurBill => {
        console.log("Bill Created", recurBill);
        this.notify();
        this.loadBills();
        this.setState({
          name: "",
          amount: "",
          frequency: "monthly",
          startDate: moment().format("YYYY-MM-DD"),
          formErrors: { name: "", amount: "" },
          nameValid: false,
          amountValid: false,
          formValid: false
        });
      })
      .catch(err => console.log(err));

  };
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <h1>Bills</h1>
              <form>
                <div className={`form-group 
                ${this.errorClass(this.state.formErrors.name)}`}>
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
                <div className={`form-group 
                ${this.errorClass(this.state.formErrors.amount)}`}>
                  <label for="exampleFormControlInput1">Amount</label>
                  <Input
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    name="amount"
                    type="number"
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
                  <FormBtn disabled={!this.state.formValid} onClick={this.handleFormSubmit}>SUBMIT!</FormBtn>
                </div>
              </form>

              <div className="panel has-error">
                {/* iterates through all the form validation errors and displays them. */}
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </Col>
            <Col size="md-6 sm-12">
              <h1>My Bills</h1>
              <Table>
                <thead>
                  <tr>
                    <th>Bill</th>
                    <th>Amount</th>
                    <th>Frequency</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bills.length ? (
                    this.state.bills.map(bill => (
                      <tr key={bill.id}>
                        <td>{bill.name}</td>
                        <td>{bill.amount}</td>
                        <td>{bill.frequency}</td>
                        <td>{bill.startDate}</td>
                        <td><DeleteBtn
                          onClick={() => this.deleteRecurBill(bill.id)}
                        /></td>
                      </tr>
                    ))

                  ) : (
                      <h3>No Results to Display</h3>
                    )}</tbody>
              </Table>
            </Col>
            <ToastContainer className='toast-container'
              toastClassName="dark-toast" />
          </Row>
        </Container>
      </>
    )
  }
}
export default AddBills;