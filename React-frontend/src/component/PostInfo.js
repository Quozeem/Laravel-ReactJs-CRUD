import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Addnewuser from "../component/Addnewuser";
const Postinfo = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setshow(true)}>
        Add new user
      </Button>
      <Modal
        show={show}
        onHide={() => setshow(false)}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addnewuser />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Postinfo;
