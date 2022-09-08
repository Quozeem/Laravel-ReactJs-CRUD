import React, { useState, useParams, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Formvalidate from "../component/Formvalidate";
import axios from "axios";

const Form = (props) => {
  //edit user
  //fetch data to set the initial stage of update
  const User_id_fetche = props.id;
  const User_fname_fetche = props.fname;
  const User_email_fetche = props.email;
  const User_address_fetche = props.address;

  const [useredit, setedit] = useState({
    user_id: User_id_fetche,
    fname: User_fname_fetche,
    email: User_email_fetche,
    address: User_address_fetche,
  });
  function storeform(event) {
    const { name, value, type, checked } = event.target;

    setedit((catchform) => {
      return {
        ...catchform,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  //submit form after edit finish

  const [summision, setcommision] = useState();
  const [pushvalue, setpushvale] = useState([]);
  const [erroremail, seterroremail] = useState();
  function handlersubmit(e) {
    e.preventDefault();

    setpushvale(useredit);
  }
  console.log(pushvalue);
  //update query
  useEffect(() => {
    async function update() {
      axios
        .post(`http://127.0.0.1:8000/api/update/`, pushvalue)
        .then((response) => {
          if (response.data.status === 200) {
            setcommision(response.data.data);
            console.log(response.data);
          } else if (response.data.status === "failed") {
            seterroremail(response.data.error);
            console.log(response.data.error);
          }
        });
    }
    update();
    return () => {
      setcommision();
      seterroremail();
    };
  }, [pushvalue]);

  return (
    <>
      <p style={{ color: "green" }}>{summision}</p>
      <form onSubmit={handlersubmit}>
        <lable>name</lable>
        <br />
        <input
          type="hidden"
          name="user_id"
          onChange={storeform}
          defaultValue={User_id_fetche}
        />
        <input
          onChange={storeform}
          type="text"
          defaultValue={User_fname_fetche}
          name="fname"
        />
        <br></br>

        <lable>Email</lable>
        <br />
        <input
          type="text"
          onChange={storeform}
          defaultValue={User_email_fetche}
          name="email"
        />
        <br></br>
        <div style={{ color: "red" }}>{erroremail}</div>

        <lable>Address</lable>
        <br />
        <input
          type="text"
          defaultValue={User_address_fetche}
          onChange={storeform}
          name="address"
        />
        <br></br>

        <button>Submit</button>
      </form>
    </>
  );
};
export default Form;
