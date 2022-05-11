import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalBody from './ModalBody.js';
const NitsModal = props => {
  return (
    <div className='modal-80w'>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-80w"
      centered
      // backdrop='static'
    >
      <ModalBody/>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
};

export default NitsModal;
