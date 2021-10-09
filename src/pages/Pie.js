import React, { Fragment } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';

const data = [
  {
      "month": "Apr 2021",
      "store": "Store 1",
      "customer": 4200  ,
      color: "#ff8a65" 
  },
  {
      "month": "Apr 2021",
      "store": "Store 2",
      "customer": 3800, 
      color: "#f4c22b"  
  },
  {
      "month": "Apr 2021",
      "store": "Store 3",
      "customer": 412,
      color: "#04a9f5"   
  },
  {
      "month": "Apr 2021",
      "store": "Store 4",
      "customer": 680,
      color: "#3ebfea"   
  },
  {
      "month": "Apr 2021",
      "store": "Store 5",
      "customer": 830,
      color: "#4F5467"   
  }
]

const PieChart = () => {
  return (
    <Fragment>
      <Row>
        <Col md={8} >
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Customer count by store - {data[0].month}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <NVD3Chart id="chart" height={500} type="pieChart" datum={data} x="store" y="customer"  />
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Fragment>
  );
};

export default PieChart;
