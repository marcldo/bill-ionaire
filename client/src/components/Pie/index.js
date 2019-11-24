import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class PieExample extends Component {
  state = {
    displayName: 'PieExample'
  }

  render() {
    return (
      <div>
        <h5>Pie Example</h5>
        <Pie data={data} />
      </div >
    );
  }
}
export default PieExample

