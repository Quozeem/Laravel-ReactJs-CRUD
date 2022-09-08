import React, { Component } from "react";

const Formvalidate = (props) => {
  const User_id_fetche = () => {
    return <p>{props.edited_id}</p>;
  };
  const User_fname_fetche = () => {
    return <p>{props.edited_fname}</p>;
  };
  const User_email_fetche = () => {
    return <p>{props.edited_email}</p>;
  };
  const User_address_fetche = () => {
    return <p>{props.edited_address}</p>;
  };
  const formValue = {
    user_id: <User_id_fetche />,
    fname: <User_fname_fetche />,
    email: <User_email_fetche />,
    address: <User_address_fetche />,
  };
  return <p>{formValue}</p>;
};

export default Formvalidate;
