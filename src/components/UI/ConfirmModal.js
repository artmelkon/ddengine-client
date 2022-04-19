import { Modal, Button } from 'bootstrap';
import {setState, Fragment} from 'react';

const ConfirmModal = () => {
  const [isVisible, setIsVisible] = setState(false);

  const handleClose = () => setIsVisible(false);
  const handeShow = () => setIsVisible(true);

  return (
    <Fragment>
      <Modal show={isVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delet this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleClose}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default ConfirmModal;
