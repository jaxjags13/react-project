import SignUp from 'Component/SignUp';
import Card from 'Component/Card'
import Navbar from 'Component/Navbar';

function SignUpPage() {
  return (
    <>
        <Navbar />
        <Card marginTop="3%" title="Sign Up" text="poop">
          <SignUp />
        </Card>
    </>
    
  );
}

export default SignUpPage;