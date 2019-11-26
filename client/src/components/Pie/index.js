import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



class PieExample extends Component {
  state = {
    displayName: 'PieExample',
    bills: []

  }

  componentDidMount() {

  }
  getLabels() {
    console.log(this.props.dueBills)
    let labels = [];
    for (let i = 0; i < this.props.dueBills.length; i++) {
      labels.push(this.props.dueBills[i].RecurBill.name)
    }
    for (let i = 0; i < this.props.paidBills.length; i++) {
      labels.push(this.props.paidBills[i].RecurBill.name)
    }
    console.log("labels ", labels)
    return labels;
  }

  getData() {
    let data = [];
    for (let i = 0; i < this.props.dueBills.length; i++) {
      data.push(this.props.dueBills[i].amount)
    }
    for (let i = 0; i < this.props.paidBills.length; i++) {
      data.push(this.props.paidBills[i].amount)
    }
    console.log("data ", data)
    return data;
  }

  getColours() {

    let colours = [];
    for (let i = 0; i < this.props.dueBills.length; i++) {
      colours.push('#' + Math.floor(Math.random() * 16777215).toString(16))
    }
    for (let i = 0; i < this.props.paidBills.length; i++) {
      colours.push('#' + Math.floor(Math.random() * 16777215).toString(16))

    }
    console.log("data ", colours)
    return colours;

  }

  render() {
    const colours = this.getColours()
    const data = {
      labels: this.getLabels(),
      datasets: [{
        data: this.getData(),
        backgroundColor: colours,
        hoverBackgroundColor: colours
      }]
    };
    return (
      <div>
        <h5>Monthly Spend</h5>
        <Pie data={data} />
      </div >
    );
  }
}
export default PieExample

