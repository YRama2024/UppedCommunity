import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyRegister from "./pages2/CompanyRegister";
import FounderRegister from "./pages2/FounderRegister";
import EmployeeRegister from "./pages2/EmployeeRegister";
import Home from "./pages2/Home";
import LoginUser from "./pages2/LoginUser";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mx-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/founder/register" element={<FounderRegister />} />
          <Route path="/employee/register" element={<EmployeeRegister />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
