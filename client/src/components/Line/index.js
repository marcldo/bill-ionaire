import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';



class LineExample extends Component {
  state = {
    displayName: 'Monthly Totals'

  }

  render() {
    console.log(this.props.month4, this.props.month3, this.props.month2, this.props.month1);
    const data = {
      labels: [this.props.label4, this.props.label3, this.props.label2, this.props.label1],
      datasets: [
        {
          label: 'Total Paid',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.month4, this.props.month3, this.props.month2, this.props.month1]
        }
      ]
    };


    return (
      <div>
        <h5>Monthly Totals</h5>
        <Line data={data} />
      </div>
    );
  }
}
export default LineExample;

