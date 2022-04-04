import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const Slide = ({ title }) => {
  return (
    <div className="container">
      <div className="textarea">
        {/* <Carousel.Caption> */}
        <h3>{title}</h3>
        {/* <p>Please specify</p> */}
        {/* </Carousel.Caption> */}
      </div>
      <div>
      <Form className='textarea'>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
    </Form>
      </div>
    </div>
  );
};

export default Slide;
