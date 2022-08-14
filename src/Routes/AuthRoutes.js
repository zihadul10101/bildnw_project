import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyInfo from "../Pages/Auth/CompanyInfo/CompanyInfo";
import EmailVerifyRequest from "../Pages/Auth/Emailverification/EmailVerificationRequest/EmailVerifyRequest";
import VerifiedEmail from "../Pages/Auth/Emailverification/VerifiedEmail/VerifiedEmail";
import ForgetPassword from "../Pages/Auth/Forgot Password/ForgetPassword";
import Login from "../Pages/Auth/Login/Login";
import OTPVerification from "../Pages/Auth/OTPVerification/Verification";
import Signup from "../Pages/Auth/Signup/PersonalDetails/Signup";
import Registration from "../Pages/Auth/Signup/Registration/Registration";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route exact path="register" element={<Signup />} />
      <Route exact path="verification/:from" element={<OTPVerification />} />
      <Route exact path="company-info" element={<CompanyInfo />} />
      <Route path="/registration" element={<Registration />} />
      <Route exact path="forget-password" element={<ForgetPassword />} />
      <Route
        path="email-verification-request"
        element={<EmailVerifyRequest />}
      />
      <Route
        path="email-verified/:timestamp/:user_id"
        element={<VerifiedEmail />}
      />
    </Routes>
  );
};

export default AuthRoutes;
