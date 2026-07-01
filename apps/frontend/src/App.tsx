import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./pages/login/Login";
import ForgotPass from "./pages/login/ForgotPass";
import OTPVerification from "./pages/login/OTPVerification";
import EnterNewPass from "./pages/login/EnterNewPass";
import Test from "./pages/login/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/forgot-password" element={<ForgotPass />} />
        <Route path="/login/enter-new-password" element={<EnterNewPass />} />
        <Route path="/login/otp-verification" element={<OTPVerification />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
