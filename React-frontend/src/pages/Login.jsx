import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useNavigate, Redirect } from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [buttoned, setbutton] = useState(false);
  const [clicksubmitdata, setclicksubmitdata] = useState([]);
  const [success, setsuccess] = useState();
  const [unsuccess, setunsuccess] = useState();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setbutton(false);
    } else if (form.checkValidity() === true) {
      event.preventDefault();
      setValidated(false);
      setbutton(true);
      setclicksubmitdata(formdata);
    }
  };
  const Navigate = useNavigate();
  function emptyhandler(event) {
    setformdata((collectalldata) => {
      const { name, value } = event.target;
      return {
        ...collectalldata,
        [name]: value,
      };
    });
  }
  console.log(clicksubmitdata.email);
  useEffect(() => {
    async function login() {
      if (localStorage.getItem("authenticated")) {
        return Navigate("/dashboard", { replace: true });
      } else if (
        clicksubmitdata.email !== undefined ||
        clicksubmitdata.password !== undefined
      ) {
        axios
          .post("http://127.0.0.1:8000/api/loging", clicksubmitdata)
          .then((res) => {
            if (res.data.success === true) {
              console.log(res.data.token);
              setbutton(true);
              localStorage.setItem("authenticated", true);
              return Navigate("/dashboard", { replace: true });
            } else {
              if (res.data.success === false) {
                setunsuccess(res.data.message);
                console.log(res.data.message);
                setbutton(false);
              }
            }
          });
      }
    }
    login();

    return () => {
      setsuccess();

      setunsuccess();
    };
  }, [clicksubmitdata]);

  return (
    <>
      {success}
      {unsuccess}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                onChange={emptyhandler}
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="password"
                onChange={emptyhandler}
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {buttoned ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Please wait...
          </Button>
        ) : (
          <Button type="submit">Submit form</Button>
        )}
      </Form>
    </>
  );
};
export default Login;
