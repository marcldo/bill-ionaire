import React, { Component } from "react";
import API from "../../utils/API";
import "./component.css";



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
    this.props.billNotify()
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
      <div className="card bill" >
        <div className="card-body">
          <h5 className="card-title">
            {this.props.name}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">Due Date {this.props.dueDate}</h6>
          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input className="form-control dashboard-input"
              defaultValue={this.props.amount}
              value={this.state.amount}
              onChange={this.handleInputChange}
              btnTxt={this.props.btnTxt}
              name="amount" />
            <div class="input-group-append">
              <button className="btn btn-outline-success" onClick={this.handleFormSubmit} type="button">{this.props.btnTxt}</button>
            </div>
          </div>
        </div>
      </div>



    );
  }
};

export default Bill;

