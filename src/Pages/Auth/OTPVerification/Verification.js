import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthLayout from "../../../Layout/AuthLayout";
import AuthCode from "react-auth-code-input";
import UiButton from "../../../Components/Common/ui/UiButton";
import { userOtpVerification } from "../../../Services/Actions/AuthAction/logInAction";
import { verifyRegister } from "../../../Services/Actions/AuthAction/signUpAction";
import UiLargeArrowButton from "../../../Components/Common/ui/UiLargeArrowButton";

const OTPVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { from } = useParams();
  const { phone, user_detail, login_info } = useSelector(
    (state) => state.LogInfo
  );
  const { userInfo } = useSelector((state) => state.SignUpInfo);
  const userDetails = user_detail.user_detail?.data;
  const [otpInputValue, setOtpInputValue] = useState({});
  const handleOnChange = (res) => {
    setOtpInputValue(res);
  };

  const verificationOtp = (e) => {
    e.preventDefault();

    // LOGIN PAYLOAD
    const otpVerification = {
      number: phone,
      token: otpInputValue,
    };
    const userLogin = {
      two_factor_token: true,
      email: login_info.email,
      password: login_info.password,
      validation_type: "email",
      use_case: "log",
    };

    // SIGNUP PAYLOAD
    const userSignup = {
      number: userInfo.phone,
      token: otpInputValue,
    };

    if (from === "login") {
      dispatch(userOtpVerification(otpVerification, userLogin, navigate));
    }
    if (from === "signup") {
      dispatch(verifyRegister(userSignup, navigate));
    }
  };
  return (
    <AuthLayout>
      <div className="w-full py-12 p-4 shadow-lg shadow-slate-300">
        <div className="pb-6 text-center">
          <h3 className="text-5xl text-primary-3 pb-8">
            {from === "login" ? "Login" : "Sign up"}{" "}
          </h3>
          <p>Enter SMS code below to validate your phone number</p>
        </div>
        <form onSubmit={verificationOtp}>
          <div id="otpInputs" className="flex justify-evenly">
            <AuthCode onChange={handleOnChange} length="6" />
          </div>

          <div className="text-center my-8 ml-5">
            {/* <UiButton label="Next"></UiButton> */}
            <UiLargeArrowButton label="Next"></UiLargeArrowButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default OTPVerification;