import React from "react";
import API from "../utils/API";
import { Col, Row, Container, Table } from "../components/Grid";

class History extends React.Component {
  state = {
    bills: []
  };

  componentDidMount() {
    this.loadBills();
  }

  loadBills = () => {
    API.getBills()
      .then(res => this.setState({ bills: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <h1>Bill Payments History</h1>
          <Row>
            <Col size="md-12">
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Bill Company Name:</th>
                    <th>Amount:</th>
                    <th>Due Date:</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bills.map(bill => (
                    <tr>
                      <td>{bill.Userid}</td>
                      <td>{bill.name}</td>
                      <td>{bill.amount}</td>
                      <td>{bill.startDate}</td>
                      <td>{bill.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default History;
