import React, { Component } from "react";
import { Input, FormBtn } from "../Form"
import API from "../../utils/API";



class Bill extends Component {
  state = {
    amount: null
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    //if user entered amount use state else use prop
    let amount
    if (!this.state.amount) {
      amount = this.props.amount
    } else {
      amount = this.state.amount
    }

    //call bill update
    API.updateBills(this.props.id, {
      amount,
      paid: true
    })
      .then(this.props.loadBills)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card" >
        <div className="card-header">
          {this.props.name}
        </div>
        <div className="card-body">
          <lable>
            Amount
        </lable>
          <Input
            defaultValue={this.props.amount}
            value={this.state.amount}
            onChange={this.handleInputChange}
            name="amount"
          />
          <p class="card-text">Due Date {this.props.dueDate}</p>
          <FormBtn onClick={this.handleFormSubmit}>{this.props.btnTxt}</FormBtn>
        </div>
      </div>
    );
  }
};

export default Bill;

