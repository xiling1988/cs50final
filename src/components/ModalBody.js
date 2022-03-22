import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Slides from './Slides'



const ModalBody = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Slides/>
      </Modal.Body>
    </div>
  );
};

export default ModalBody;


