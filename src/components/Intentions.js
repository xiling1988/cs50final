import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Intentions extends Component {

  intentionsText = ({ input }) => {
    return (
        <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please Specify</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nature of Emergency..." {...input}/>
        </Form.Group>
        </>
    )
  }

  intentionsForm= ({ input }) => {
    return (
        <>
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
        Intentions
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        {...input}
        >
        <option value="">Choose...</option>
        <option value="diverting">Diverting</option>
        <option value="land">Emergency Landing</option>
        <option value="ditch">Ditching</option>
        <option value="flyAround">Fly Around</option>
        <option value="other">Other</option>
      </Form.Control>
          </>
    )
  }
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
      <Field name="intentionCat" component={this.intentionsForm}/>
    </Col>
    <Col>
        <Field name="intentionDetails" component={this.intentionsText}/>
    </Col>
  </Row>
</Form>
      </div>
      </div>
    );
  };
}

  export default reduxForm({
      form: "intentions",
      destroyOnUnmount: false
  })(Intentions);