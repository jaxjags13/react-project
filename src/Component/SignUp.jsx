import { Form as BForm, Button as BButton } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";
import { redirect } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const submit = () => {
    const data = {
      email: email,
      username: username,
      password: password
    };
    Axios.post('http://localhost:80/SignUp.php', data, {
      params: { action: "sign-up" },
      headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
      console.log(response.data.errors);
      setErrors(response.data.errors);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const controlStyle = {
    marginBottom: "3%",
  };

  const labelStyle = {
    marginLeft: "1%",
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const errorStyle = {
    color: "red"
  }

  return (
    <>
      <BForm>
        <BForm.Group>
          <BForm.Label style={labelStyle}>Email</BForm.Label>
          <BForm.Control
            style={controlStyle}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </BForm.Group>
        <BForm.Group>
          <BForm.Label style={labelStyle}>Username</BForm.Label>
          <BForm.Control
            style={controlStyle}
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </BForm.Group>
        <BForm.Group>
          <BForm.Label style={labelStyle}>Password</BForm.Label>
          <BForm.Control
            style={controlStyle}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </BForm.Group>
        <BForm.Group style={buttonStyle}>
          <BButton variant="primary" onClick={submit}>
            Submit
          </BButton>
        </BForm.Group>
      </BForm>
      <small style={errorStyle}>{errors}</small>
    </>
  );
}

export default SignUp;
