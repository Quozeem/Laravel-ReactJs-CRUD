import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
const Delete = (props) => {
  const [show, setshow] = useState(false);
  const [collectid, setcollectId] = useState();
  const [delete_id, setdelete_id] = useState();
  const [errodelete, seterrodelete] = useState();

  function Deletehandler() {
    setshow(true);
    setcollectId(() => props.delete_id);
  }

  function handlerDelete(e) {
    e.preventDefault();
    setdelete_id(collectid);
  }

  useEffect(() => {
    function deleted() {
      if (delete_id > 0) {
        axios
          .get(`http://127.0.0.1:8000/api/delete/${delete_id}`)
          .then((res) => {
            if (res.data.status === 200) {
              // console.log(res.data.data);
              seterrodelete(res.data.data);
            }
          });
      }
    }
    deleted();
    return () => {
      seterrodelete();
    };
  }, [delete_id]);
  //console.log(delete_id);
  const Deleteform = () => {
    return (
      <>
        <h3>Are you sure you want to delete</h3>
        <div style={{ color: "green" }}>{errodelete}</div>
        <form onSubmit={handlerDelete}>
          <button>Yes</button>
        </form>
      </>
    );
  };
  return (
    <div>
      <Button variant="primary" onClick={Deletehandler}>
        Delete
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setshow(false);
        }}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Deleteform />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setshow(false);
            }}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Delete;
