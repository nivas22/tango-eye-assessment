import React, { Fragment } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '# of Customers',
      data: [4200,3800,412,680,830,1300,4200],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
    <Fragment>
      <Row>
        <Col md={8} >
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Year vs Customer count</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Line data={data} options={options} />
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Fragment>
);

export default LineChart;