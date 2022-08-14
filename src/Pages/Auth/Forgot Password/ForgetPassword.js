import axios from "axios";
import React, { useState } from "react";
import AuthCode from "react-auth-code-input";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import AuthLayout from "../../../Layout/AuthLayout";
import UiInput from "../../../Components/Common/ui/UiInput";
import UiButton from "../../../Components/Common/ui/UiButton";
const ForgetPassword = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [otpErr, setOtpErr] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordMatched, setPasswordmatched] = useState(false);
  const [passwordSet, setPasswordSet] = useState("");
  const [confirmPasswordSet, setConfirmPasswordSet] = useState("");
  const [passPage, setPassPage] = useState(false);
  const [forgetOtp, setForgetOtp] = useState("");
  const [inputValue, setInputValue] = useState({});
  const [otpPage, setOtpPage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (e.target.name === "new_password") {
      setPasswordSet(e.target.value);
    }
    if (e.target.name === "confirm_password") {
      setConfirmPasswordSet(e.target.value);
    }
    if (passwordSet === confirmPasswordSet) {
      setPasswordmatched(true);
    }
  };
  const setOtp = (res) => {
    setForgetOtp(res);
  };

  // SMS SENT
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const otpSendPayload = {
      use_case: "forgot",
      email: inputValue.email,
      validation_type: "email",
    };
    axios.post("/users/sms-sent/", otpSendPayload).then((res) => {
      setPhone(res.data.phone);
      setOtpPage(true);
    });
  };

  //   OTP VERIFICATION
  const handleOtp = (e) => {
    e.preventDefault();
    const verifyToken = {
      number: phone,
      token: forgetOtp,
    };
    axios
      .post("/users/sms-token/verify", verifyToken)
      .then((res) => {
        setPassPage(true);
      })
      .catch((err) => {
        setOtpErr(err.response.data.details);
      });
  };
  //   SET NEW PASSWORD
  const handleNewPassword = (e) => {
    e.preventDefault();
    const passwordSetPayload = {
      email: inputValue.email,
      new_password: confirmPasswordSet,
    };
    if (passwordMatched === true) {
      axios.post("/users/forgot/password", passwordSetPayload).then((res) => {
        navigate("/");
      });
    }
  };
  return (
    <AuthLayout>
      <div className="w-full py-12">
        {otpPage === false ? (
          <form onSubmit={handleForgetPassword}>
            <UiInput
              label={t("email")}
              type="email"
              name="email"
              placeholder={t("enter_email_place")}
              onChange={handleChange}
            ></UiInput>
            <div className="text-center py-6">
              <UiButton label={t("submit")} type="submit"></UiButton>
            </div>
          </form>
        ) : otpPage === true && passPage === false ? (
          <form onSubmit={handleOtp} className="w-full py-12">
            <div id="otpInputs" className="flex justify-evenly">
              <AuthCode onChange={setOtp} length="6"></AuthCode>
            </div>
            {otpErr ? <p className="text-red-600 text-center">{otpErr}</p> : ""}
            <div className="text-center py-6">
              <UiButton label="Submit" type="submit"></UiButton>
            </div>
          </form>
        ) : (
          <form onSubmit={handleNewPassword} className="w-full py-12">
            <UiInput
              label={t("new_password")}
              type="password"
              name="new_password"
              placeholder={t("new_password_place")}
              onChange={handleChange}
            ></UiInput>
            {passwordSet.length < 8 && passwordSet.length > 0 ? (
              <p className="text-red-700">{t("password_help_text")}</p>
            ) : (
              ""
            )}
            <UiInput
              label={t("confirm_password")}
              type="password"
              name="confirm_password"
              placeholder={t("password_place")}
              onChange={handleChange}
            ></UiInput>
            {confirmPasswordSet.length >= 8 &&
            confirmPasswordSet &&
            passwordSet === confirmPasswordSet ? (
              <p className="text-green-700">{t("password_matched")}</p>
            ) : (
              ""
            )}
            {confirmPasswordSet && passwordSet !== confirmPasswordSet ? (
              <p className="text-red-700">{t("password_not_matched")}</p>
            ) : (
              ""
            )}
            <div className="text-center py-6">
              <UiButton label={t("change")} type="submit"></UiButton>
            </div>
          </form>
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgetPassword;
