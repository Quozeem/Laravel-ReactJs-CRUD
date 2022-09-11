import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Form from "../component/Form";
import Delete from "../component/Delete";
import "../component/style.css";
import PostInfo from "../component/PostInfo";
import Edit from "../component/Edit";
import axios from "axios";
import Formvalidate from "../component/Formvalidate";
import { propTypes } from "react-bootstrap/esm/Image";

const Table = () => {
  const [table, settable] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [fetchall, setfetchall] = React.useState([]);
  const [user_id, setcount] = React.useState();
  function handler(user_id) {
    //console.log(user_id);
    setShow(true);
    setcount(() => user_id);
  }

  //select query
  useEffect(() => {
    async function fetchtable() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/table/${user_id}`
      );
      const data = await response.json();

      setfetchall(data.data);
    }
    fetchtable();
  }, [user_id]);
  const mapingg = fetchall.map((sourceElement) => {
    return (
      <>
        <Form
          key={sourceElement.user_id}
          id={sourceElement.user_id}
          fname={sourceElement.fname}
          email={sourceElement.email}
          address={sourceElement.address}
        />
      </>
    );
  });

  // fetch out
  const [nofound, setnofound] = useState("");
  useEffect(() => {
    async function fetchtable() {
      try {
        axios.get("http://127.0.0.1:8000/api/table").then((res) => {
          if (res.data.status === 200) {
            settable(res.data.data);
          } else {
            setnofound(res.data.error);
          }
        });
        //second method
        //   try {
        //     const response = await fetch
        // ("http://127.0.0.1:8000/api/table");
        //     const data = await response.json();
        //     if (data.status === 200) {
        //       settable(data.data);
        //     } else {
        //       setnofound(data.error);
        //     }
        //   } catch {}
        // }
      } catch (err) {
        // setnofound(err.data.error);
      }
    }
    fetchtable();
  }, []);

  let i = 0;
  i += 1;

  // let callback = [];

  // for (let i = 1; i <= table.length; i++) {
  //   callback.push(<td>{i}</td>);
  // }

  const loopin = table.map((tableElement) => {
    return (
      <>
        <tr key={tableElement.user_id}>
          <td>{i++}</td>
          <td> {tableElement.fname}</td>
          <td> {tableElement.email}</td>
          <td> {tableElement.address}</td>
          <td>
            <div className="flexis">
              <Button
                variant="primary"
                onClick={() => handler(tableElement.user_id)}>
                Edit
              </Button>
              <Delete
                key={tableElement.user_id}
                delete_id={tableElement.user_id}
              />
              {/* <Button
                variant="primary"
                // onClick={
                //   () =>
                //   Deletehandler
                //   (tableElement.user_id)
                //       }
              >
                Delete
              </Button> */}
            </div>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <PostInfo />
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Fulname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{table.length > 0 ? loopin : nofound}</tbody>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mapingg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Table;
