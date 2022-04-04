import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const aircraftForm = () => {
    return (
        <>
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Aircraft Type
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
        >
        <option unselectable="">Choose...</option>
        <option value="1">Boeing B777-200</option>
        <option value="0">BoeingB777-300</option>
        <option value="2">Airbus A380-800</option>
        <option value="2">Other</option>
      </Form.Control>
          </>
    )
}

const natureText = () => {
    return (
        <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please Specify</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nature of Emergency..."/>
        </Form.Group>
        </>
    )
}

class Nature extends Component {
    render() {
        return (
      <div className='container'>
      <div className='textarea'>
        {/* <Carousel.Caption> */}
          <h3>Nature Of Emergency</h3>
          {/* <p>Please specify</p> */}
        {/* </Carousel.Caption> */}
      </div>
      <div>
      <Form className="textarea">
  <Row>
    <Col>
      <Field name="aircraft" component={aircraftForm}/>
    </Col>
    <Col>
        <Field name="nature" component={natureText}/>
    </Col>
  </Row>
</Form>
      </div>
      </div>
    );
  };
}

  export default reduxForm({
      form: "Nature"
  })(Nature);