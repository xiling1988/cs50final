import React from 'react';
import Form from 'react-bootstrap/Form'

const Slide = ({title}) => {
  return (
    <div className='container'>
    <div className='textarea'>
      {/* <Carousel.Caption> */}
        <h3>{title}</h3>
        <p>Please specify</p>
      {/* </Carousel.Caption> */}
    </div>
    <div>
      <Form className="textarea">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      </Form>
    </div>
    </div>
  );
};

export default Slide;
