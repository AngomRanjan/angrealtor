import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPwd from './pages/ForgotPwd';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-pwd" element={<ForgotPwd />} />
          <Route path="offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
