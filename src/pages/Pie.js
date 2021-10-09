import React, { Fragment } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Store 1', 'Store 2', 'Store 3', 'Store 4', 'Store 5'],
  datasets: [
    {
      label: '# of customer',
      data: [4200,3800, 412, 680, 830],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <Fragment>
      <Row>
        <Col md={8} >
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Customer count by store - Apr 2021</Card.Title>
                </Card.Header>
                <Card.Body >
                  <Pie data={data} />
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Fragment>
  );
};

export default PieChart;
