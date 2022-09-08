import axios from "axios";
import React, { useState, useEffect } from "react";
const Addnewuser = () => {
  const [adduser, setadduser] = useState({
    fname: "",
    email: "",
    address: "",
  });
  function submitform(event) {
    setadduser((alluser) => {
      return {
        ...alluser,
        [event.target.name]: event.target.value,
      };
    });
  }
  const [mailexit, setmailexit] = useState();
  const [success, setsuccess] = useState();
  const [handsubmit, sethandsubmi] = useState([]);
  const [erroraddressMsg, seterroraddressMsg] = useState();
  const [errorfnameMsg, seterrorfnameMsg] = useState();
  const [erroremailMsg, seterroremailMsg] = useState();

  function handlerSubmit(e) {
    e.preventDefault();
    sethandsubmi(adduser);
  }
  useEffect(() => {
    async function insert() {
      axios.post("http://127.0.0.1:8000/api/insert", handsubmit).then((res) => {
        if (res.data.status === "fnameerror") {
          seterrorfnameMsg(res.data.data);
          console.log(res.data.data);
        } else if (res.data.status === "emailerror") {
          seterroremailMsg(res.data.data);
          console.log(res.data.data);
        } else if (res.data.status === "addresserror") {
          seterroraddressMsg(res.data.data);
          console.log(res.data.data);
        } else if (res.data.status === 200) {
          setsuccess(res.data.data);
          console.log(res.data.data);
        } else if (res.data.status === "erroMailexit") {
          console.log(res.data.data);
          setmailexit(res.data.data);
        }
      });
    }
    insert();
    return () => {
      //clean up
      setmailexit();
      seterrorfnameMsg();
      seterroremailMsg();
      seterroraddressMsg();
      setsuccess();
    };
  }, [handsubmit]);
  // console.log(mailexit);
  //   console.log(adduser);
  return (
    <>
      <div style={{ color: "green" }}>{success}</div>
      <form onSubmit={handlerSubmit}>
        <div>
          <label>First Name</label>
          <br />
          <input type="text" name="fname" id="fname" onChange={submitform} />
          <div style={{ color: "red" }}> {errorfnameMsg}</div>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input type="text" name="email" id="email" onChange={submitform} />
          <div style={{ color: "red" }}>
            {erroremailMsg ? erroremailMsg : mailexit}
          </div>
        </div>
        <div>
          <label>Address</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            onChange={submitform}
          />
          <div style={{ color: "red" }}> {erroraddressMsg}</div>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
export default Addnewuser;
