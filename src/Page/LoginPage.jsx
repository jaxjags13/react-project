import Card from 'Component/Card';
import Login from 'Component/Login';
import Navbar from 'Component/Navbar';

function LoginPage() {
  return (
    <>
        <Navbar />
        <Card marginTop="3%" title="Login">
          <Login />
        </Card>
    </>
    
  );
}

export default LoginPage;