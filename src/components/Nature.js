import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Nature extends Component {
  natureText = ({ input }) => {
    console.log(input);
    return (
      <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please Specify</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nature of Emergency..."
            {...input}
          />
        </Form.Group>
      </>
    );
  };

  aircraftForm = ({ input }) => {
    console.log(input);
    return (
      <>
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
          Aircraft Type
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          {...input}
          
        >
          <option unselectable="">Choose...</option>
          <option value="777-200">Boeing B777-200</option>
          <option value="777-300">BoeingB777-300</option>
          <option value="380">Airbus A380-800</option>
        </Form.Control>
      </>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="textarea">
          {/* <Carousel.Caption> */}
          <h3>Nature Of Emergency</h3>
          {/* <p>Please specify</p> */}
          {/* </Carousel.Caption> */}
        </div>
        <div>
          <Form className="textarea">
            <Row>
              <Col>
                <Field name="aircraft" component={this.aircraftForm} />
              </Col>
              <Col>
                <Field name="natureDetails" component={this.natureText} />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'nature',
  destroyOnUnmount: false
})(Nature);
