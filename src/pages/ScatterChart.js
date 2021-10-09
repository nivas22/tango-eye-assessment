import React, { Fragment } from 'react';
import { Scatter } from 'react-chartjs-2';
import {Row, Col, Card } from 'react-bootstrap';

const data = {
  datasets: [
    {
      label: 'Year 2020',
      data: [
        { x: 5, y: 4200 },
        { x: 6, y: 3800 },
        { x: 7, y: 680 },
        { x: 8, y: 830 },
        { x: 9, y: 1300 },
        { x: 10, y: 4200 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
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

const ScatterChart = () => (
  <Fragment>
      <Row>
        <Col md={8} >
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Month vs Customer count</Card.Title>
                </Card.Header>
                <Card.Body>
                <Scatter data={data} options={options} />
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Fragment> 
);

export default ScatterChart;