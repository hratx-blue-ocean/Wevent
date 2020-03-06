import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalReuseable = ({
  body, title, handleShow, handleClose, show,
}) => (
  <div>
    <Modal show={show} onHide={handleClose} dialogClassName="modalStyles">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body dialogclassname="modal-body">{body}</Modal.Body>
      <Modal.Footer />
    </Modal>
  </div>
);

export default ModalReuseable;
