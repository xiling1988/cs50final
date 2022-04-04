import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const intentionsForm = () => {
    return (
        <>
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Intentions
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
        >
        <option value="3">Choose...</option>
        <option value="1">Divertion</option>
        <option value="0">Emergency Landing</option>
        <option value="2">Ditching</option>
        <option value="2">Fly Around</option>
        <option value="2">Other</option>
      </Form.Control>
          </>
    )
}

const intentionsText = () => {
    return (
        <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please Specify</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nature of Emergency..."/>
        </Form.Group>
        </>
    )
}

class Intentions extends Component {
    render() {
        return (
      <div className='container'>
      <div className='textarea'>
        {/* <Carousel.Caption> */}
          <h3>Intentions of the Captain</h3>
          {/* <p>Please specify</p> */}
        {/* </Carousel.Caption> */}
      </div>
      <div>
      <Form className="textarea">
  <Row>
    <Col>
      <Field name="aircraft" component={intentionsForm}/>
    </Col>
    <Col>
        <Field name="nature" component={intentionsText}/>
    </Col>
  </Row>
</Form>
      </div>
      </div>
    );
  };
}

  export default reduxForm({
      form: "Intentions"
  })(Intentions);