import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Slides from './Slides'



const ModalBody = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          NITS BRIEFING
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Slides/>
      </Modal.Body>
    </div>
  );
};

export default ModalBody;


