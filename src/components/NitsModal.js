import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slides from './Slides.js';

const NitsModal = props => {
  return (
    <div className='modal-80w'>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-80w"
      centered
    >
      <Slides/>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
};

export default NitsModal;
