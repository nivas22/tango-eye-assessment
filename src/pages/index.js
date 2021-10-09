import React, { Fragment } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';


const datum = [
  {
      key: "Cumulative Return",
      values: [
        {
            "month": "Apr 2021",
            "customer": 10000,
            "color": "#04a9f5"   
        },
        {
            "month": "May 2021",
            "customer": 13200,
            "color": "#ff8a65"   
        },
        {
            "month": "Jun 2021",
            "customer": 17400,
            "color": "#69CEC6"   
        },    
        {
            "month": "Jul 2021",
            "customer": 15300,
            "color": "#a389d4"   
        },
        {
            "month": "Aug 2021",
            "customer": 19600,
            "color": "#FE8A7D"   
        }
      ]
  }
];

const Home = () => {
  return (
    <Fragment>
      <Row>
        <Col md={8} >
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Month vs Customer count</Card.Title>
                </Card.Header>
                <Card.Body>
                  <NVD3Chart tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="month" y="customer" height={500} width={700} showValues />
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Fragment>
  );
};

export default Home;
