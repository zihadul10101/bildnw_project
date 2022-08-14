import React, { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../../layout/AuthLayout";
import UiButton from "../../common/ui/UiButton";
import UiInput from "../../common/ui/UiInput";
import axios from "axios";
import { useTranslation } from "react-i18next";

const InvitedUserRegistration = () => {
  const {t} = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  let { client_id } = useParams();
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

  //   Invited User Registration

  const invitedRegistration = (e) => {
    e.preventDefault();
    const invitedUserPayload = {
      client: client_id,
      phone: inputValue.phone,
      email: inputValue.email,
      name: inputValue.name,
      password: inputValue.password,
      position: inputValue.position,
      iqama_number: inputValue.iqama_number,
      two_factor: true,
    }
    axios.post(`/users/${client_id}/create/invited/`, invitedUserPayload)
    .then((res) => {
      if(res.status === 201){
        navigate("/")
      }
    })
  };
  return (
    <AuthLayout>
      <div className="w-full py-12">
        <div className="pb-6 text-center">
          <h3 className="text-5xl text-blue-light pb-8">User Registration{t('name')}</h3>
          <p>{t('personal_details')}</p>
        </div>
        <form onSubmit={invitedRegistration}>
          <UiInput
            label={t('name')}
            type="text"
            name="name"
            placeholder={t('enter_name_place')}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label={t('email_must_be_invited')}
            type="email"
            name="email"
            placeholder={t('enter_email_place')}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label={t('phone')}
            type="text"
            name="phone"
            placeholder={t('enter_phone_place')}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label={t('position')}
            type="text"
            name="position"
            placeholder={t('position_place')}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label={t('what_is_iqama')}
            type="text"
            name="iqama_number"
            placeholder={t('add_iqama_place')}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            label={t('password')}
            type="password"
            name="password"
            placeholder={t('register_password_place')}
            onChange={handleChange}
          ></UiInput>
          {passwordSet.length < 8 && passwordSet.length > 0 ? (
            <p className="text-red-700">{t('password_help_text')}</p>
          ) : (
            ""
          )}

          <UiInput
            label={t('confirm_password')}
            type="password"
            name="confirm_password"
            placeholder={t('password_place')}
            onChange={handleChange}
          ></UiInput>

          {confirmPasswordSet && passwordSet === confirmPasswordSet ? (
            <p className="text-green-700">{t('password_matched')}</p>
          ) : (
            ""
          )}
          {confirmPasswordSet && passwordSet !== confirmPasswordSet ? (
            <p className="text-red-700">{t('password_not_matched')}</p>
          ) : (
            ""
          )}

          <div className="text-center my-8">
            {/* <Link to="/verification"> */}
            <UiButton label={t('next')}></UiButton>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default InvitedUserRegistration;
