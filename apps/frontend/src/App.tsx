// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import EnterNewPass from "./pages/login/EnterNewPass";
import ForgotPass from "./pages/login/ForgotPass";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/forgot-password" element={<ForgotPass />} />
        <Route path="/login/enter-new-password" element={<EnterNewPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
