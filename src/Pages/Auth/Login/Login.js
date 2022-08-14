import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// language translation
import { useTranslation } from "react-i18next";
import AuthLayout from "../../../Layout/AuthLayout";
import UiInput from "../../../Components/Common/ui/UiInput";
import { userLoginVerify } from "../../../Services/Actions/AuthAction/logInAction";
import UiButton from "../../../Components/Common/ui/UiButton";
import UiArrowButton from "../../../Components/Common/ui/UiArrowButton";
import useAxios from "../../../Services/Api/Hooks/AxiosHook";
import UiLargeArrowButton from "../../../Components/Common/ui/UiLargeArrowButton";
const Login = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  // for language
  const { t } = useTranslation();

  const { phone, verificationPage, token, user_detail } = useSelector(
    (state) => state.LogInfo
  );
  const userDetails = user_detail.user_detail?.data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userVerification = {
      use_case: "log",
      email: loginInfo.email,
      password: loginInfo.password,
      validation_type: "email",
    };
    dispatch(userLoginVerify(userVerification, navigate, axiosInstance));
  };
  return (
    <AuthLayout>
      <div className="w-full py-12">
        <div className="shadow-xl p-6 rounded-md shadow-gray-400">
          <h3 className="text-5xl text-primary-8 pb-8 text-center">
            {t("sign_in")}
          </h3>
          <form onSubmit={handleLogin} className="p-4">
            <UiInput
              label={t("login_email")}
              type="email"
              name="email"
              // placeholder="Enter your email address"
              onChange={handleChange}
            ></UiInput>
            <UiInput
              label={t("password")}
              type="password"
              name="password"
              // placeholder="Enter your 8 digit password"
              onChange={handleChange}
            ></UiInput>
            <div className="text-center my-8">
              {/* <UiButton label={t("next")}></UiButton> */}
              {/* <UiArrowButton label={t("next")}></UiArrowButton> */}
              <Link to="/verification">
                <UiLargeArrowButton label={t("next")}></UiLargeArrowButton>
              </Link>
            </div>
          </form>
          <div className="text-center">
            <Link to="/forget-password">
              <p className="py-2 text-blue-normal font-semibold underline inline">
                {t("forgot_pass_or_email")}
              </p>
            </Link>
            <br />
            <p className="py-2 text-blue-normal font-semibold inline">
              {t("dont_have_account")}
              <Link to="/register">
                <span className="underline"> {t("register_now")}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;