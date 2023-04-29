import {
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';
import React from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';

export default function Login() {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <MDBContainer className="p-3 mt-5 py-5 d-flex flex-column w-50">
      <h2 className="text-center mb-5">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <MDBInput
          wrapperClass="mb-4"
          label="Full Name"
          id="form1"
          type="text"
          name="name"
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Photo URL"
          id="form1"
          type="text"
          name="photoUrl"
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          name="email"
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          name="password"
          required
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            onClick={handleAccepted}
            value=""
            name="accept"
            id="flexCheckDefault"
            label={
              <>
                Accept <Link to="/terms">Term & Conditions</Link>
              </>
            }
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn disabled={!accepted} className="mb-4  w-100">
          Register
        </MDBBtn>
      </Form>

      <div className="text-center">
        <p>
          Already Have An Account ? <Link to="/login">Login</Link>
        </p>
        <p>or sign up with:</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: '40%' }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: '#1266f1' }}
          >
            <MDBIcon fab icon="facebook-f" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: '#1266f1' }}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: '#1266f1' }}
          >
            <MDBIcon fab icon="google" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: '#1266f1' }}
          >
            <MDBIcon fab icon="github" size="sm" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}
