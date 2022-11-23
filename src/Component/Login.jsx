import { Form as BForm, Button as BButton } from "react-bootstrap";

function Login() {
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

  return (
    <>
      <BForm>
        <BForm.Group>
          <BForm.Label style={labelStyle}>Username</BForm.Label>
          <BForm.Control
            style={controlStyle}
            type="text"
            name="username"
            placeholder="Username"
          />
        </BForm.Group>
        <BForm.Group>
          <BForm.Label style={labelStyle}>Password</BForm.Label>
          <BForm.Control
            style={controlStyle}
            type="password"
            name="password"
            placeholder="Password"
          />
        </BForm.Group>
        <BForm.Group style={buttonStyle}>
          <BButton variant="primary" type="submit">
            Submit
          </BButton>
        </BForm.Group>
      </BForm>
    </>
  );
}

export default Login;
