import React, { useEffect, useState } from "react";
import Table from "../component/Table";

const Edit = (props) => {
  const [Startdata, setstartdata] = React.useState([]);
  const [user_id, setcount] = React.useState(3);

  useEffect(() => {
    async function fetchtable() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/table/${user_id}`
      );
      const data = await response.json();
      setstartdata(data);
    }
    fetchtable();
  }, [user_id]);

  const mapingg = Startdata.map((sourceElement) => {
    return (
      <>
        <Table
          toggleclick={() => {
            setcount((previous) => previous + 1);
          }}
        />
        <form>
          <lable>name</lable>
          <br />
          <input type="text" value={sourceElement.fname} name="fname" />
          <br />
          <lable>Email</lable>
          <br />
          <input type="text" value={sourceElement.email} name="email" />
          <br />
          <lable>Address</lable>
          <br />
          <input type="text" value={sourceElement.address} name="phone" />
          <br />
        </form>
      </>
    );
  });
  return <>{mapingg}</>;
};

export default Edit;
