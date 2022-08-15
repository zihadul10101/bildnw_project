import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { registerAction } from "../../../../Services/Actions/AuthAction/signUpAction";
import AuthLayout from "../../../../Layout/AuthLayout";
import UiInput from "../../../../Components/Common/ui/UiInput";
import UiLargeArrowButton from "../../../../Components/Common/ui/UiLargeArrowButton";
import SignupInput from "../../../../Components/Common/ui/SignupInput";



  const signupBox = {
    boxShadow: "0px 10px 18px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)"
  }

const Signup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordSet, setPasswordSet] = useState("");
  const [confirmPasswordSet, setConfirmPasswordSet] = useState("");
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (e.target.name === "password") {
      setPasswordSet(e.target.value);
    }
    if (e.target.name === "confirm_password") {
      setConfirmPasswordSet(e.target.value);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();

    const userInfo = {
      phone: inputValue.phone,
      email: inputValue.email,
      name: inputValue.name,
      password: inputValue.password,
      position: inputValue.position,
      iqama_number: inputValue.iqama_number,
    };
    const validationData = {
      use_case: "reg",
      number: inputValue.phone,
      validation_type: "phone",
    };

    dispatch(registerAction(validationData, userInfo, navigate));
  };

  return (
    <AuthLayout>
      <div style={signupBox} className="w-[598px] py-4 m-4 p-3">
        <div className="pb-2 text-center">
          <h3 className="text-5xl text-primary-8">{t("register")}</h3>
          {/* <p>{t("personal_details")}</p> */}
        </div>
        <form onSubmit={handleSignup} className="p-5 w-[598px]">
          <div className="mr-3">
            <UiInput
              label={t("name")}
              type="text"
              name="name"
              // placeholder={t("enter_name_place")}
              onChange={handleChange}
            ></UiInput>
          </div>
          <div className="flex gap-3">
            <SignupInput
              label={t("Phone Number")}
              type="text"
              name="phone"
              // placeholder={t("enter_email_place")}
              onChange={handleChange}
            ></SignupInput>
            <SignupInput
              label={t("Email (must be a business email)")}
              type="email"
              name="email"
              // placeholder={t("enter_phone_place")}
              onChange={handleChange}
            ></SignupInput>
          </div>
          {/* <UiInput
            label={t("position")}
            type="text"
            name="position"
            placeholder={t("position_place")}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label="What is your iqama number"
            type="text"
            name="iqama_number"
            placeholder="Add Iqama Number"
            onChange={handleChange}
          ></UiInput> */}
          <div className="flex gap-3">
            <SignupInput
              label={t("Strong password")}
              type="password"
              name="password"
              // placeholder={t("register_password_place")}
              onChange={handleChange}
            ></SignupInput>


            <SignupInput
              label={t("Re-type your password")}
              type="password"
              name="confirm_password"
              // placeholder={t("password_place")}
              onChange={handleChange}
            ></SignupInput>
          </div>
          {passwordSet.length < 8 && passwordSet.length > 0 ? (
            <p className="text-primary-label">{t("password_help_text")}</p>
          ) : (
            ""
          )}

          {confirmPasswordSet && passwordSet === confirmPasswordSet ? (
            <p className="text-green-700">{t("password_matched")}</p>
          ) : (
            ""
          )}
          {confirmPasswordSet && passwordSet !== confirmPasswordSet ? (
            <p className="text-red-700">{t("password_not_matched")}</p>
          ) : (
            ""
          )}

          <div className="text-center my-5 mr-3">
            <Link to="/verification">
              {/* <UiButton label={t("next")}></UiButton> */}
              <UiLargeArrowButton label={t("next")} />
            </Link>
          </div>
        </form>
        <div className="text-center">
          <p className="py-2 text-blue-normal font-poppins font-medium">
            {t("already_have_an_account")}
            <Link to="/login">
              <span> {t("login now")}</span>
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;