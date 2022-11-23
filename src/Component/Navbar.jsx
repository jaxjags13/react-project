import { Nav as BNav } from "react-bootstrap";

function Navbar() {
  const navStyle = {
    height: '65px',
    backgroundColor: 'grey'
  }

  const itemStyle = {
    margin: 'auto 1%',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    boxShadow: '0 2px 5px 0',
  }

  return (
    <>
      <BNav style={navStyle}>
        <BNav.Item style={itemStyle}>
          <BNav.Link href="/">Home</BNav.Link>
        </BNav.Item>
        <BNav.Item style={itemStyle}>
          <BNav.Link href="/SignUp">Sign Up</BNav.Link>
        </BNav.Item>
        <BNav.Item style={itemStyle}>
          <BNav.Link href="/Login">Login</BNav.Link>
        </BNav.Item>
        <BNav.Item style={itemStyle}>
          <BNav.Link href="/Poop">Chris Stupid</BNav.Link>
        </BNav.Item>
      </BNav>
    </>
  );
}

export default Navbar;
