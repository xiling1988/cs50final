import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import Timer from './Timer';

class Time extends Component {
  timeForm = ({ input }) => {
    console.log(input);
    return (
      <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please Specify</Form.Label>
            <Form.Control placeholder="Time" type="number" {...input} />
        </Form.Group>
      </>
    );
  };



  render() {
    return (
      <div className="container">
        <div className="textarea">
          {/* <Carousel.Caption> */}
          <h3>Time Available</h3>
          {/* <p>Please specify</p> */}
          {/* </Carousel.Caption> */}
        </div>
        <div>
          <Form className="textarea">
            <Row>
              <Col>
                <Field name="timeSet" component={this.timeForm} />
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Start Timer</Form.Label>
                <Button variant="primary" className='d-block'>Start</Button>
                {/* <Timer></Timer> */}
                </Form.Group>
              </Col>
            </Row>
          </Form>
          
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'time',
  destroyOnUnmount: false,
})(Time);
