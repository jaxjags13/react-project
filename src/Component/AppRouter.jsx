import HomePage from 'Page/HomePage'
import SignUpPage from 'Page/SignUpPage';
import LoginPage from 'Page/LoginPage';
import PoopPage from 'Page/PoopPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function AppRouter() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/Poop" element={<PoopPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;
