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
    API.getHistory(this.props.userId)
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
                    <th>Paid Date:</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bills.map(bill => (
                    <tr key={bill.id}>
                      <td>{bill.Userid}</td>
                      <td>{bill.RecurBill.name}</td>
                      <td>{bill.amount}</td>
                      <td>{bill.updatedAt.substring(0, 10)}</td>
                      <td>{bill.RecurBill.frequency}</td>
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
