import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';

const instructionsText = ({input}) => {
  return (
    <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please Specify</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Nature of Emergency..."
        />
      </Form.Group>
    </>
  );
};

class Instructions extends Component {

  instructionsText = ({input}) => {
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

  render() {
    return (
      <div className="container">
        <div className="textarea">
          {/* <Carousel.Caption> */}
          <h3>Specific Instructions</h3>
          {/* <p>Please specify</p> */}
          {/* </Carousel.Caption> */}
        </div>
        <div>
          <Form className="textarea">
            <Field name="instructions" component={instructionsText} />
          </Form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'instructions',
  destroyOnUnmount: false
})(Instructions);
