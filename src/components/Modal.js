import React, { Component, useEffect, useState } from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalBox(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Complete
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Congratulations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Kudos to you for completing this stage of the activity! You will
            now move onto the next stage.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" href={props.NextPage}>
                Next
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<Example />);

export default ModalBox;