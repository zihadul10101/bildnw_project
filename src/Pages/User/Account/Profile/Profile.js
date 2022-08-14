import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import logo from "../../../../Assets/images/Avatar.png";
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import sammary from "../../../../Assets/images/rightIcon.svg";
import rightBold from "../../../../Assets/images/boldRight.svg";
import { useTranslation } from "react-i18next";
import UiInput from "../../../../Components/Common/ui/UiInput";
import UiButton from "../../../../Components/Common/ui/UiButton";
const Profile = () => {
  const { userDetails } = useSelector(state => state.LogInfo);
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordMatched, setPasswordmatched] = useState(false);
  const [passwordSet, setPasswordSet] = useState("");
  const [confirmPasswordSet, setConfirmPasswordSet] = useState("");
  const [updatePassword, setUpdatePassword] = useState({});

  // language
  const { t, i18n } = useTranslation()
  const handlePasswordUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatePassword((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (e.target.name === "new_password") {
      setPasswordSet(e.target.value);
    }
    if (e.target.name === "retype_password") {
      setConfirmPasswordSet(e.target.value);
    }
    if (passwordSet === confirmPasswordSet) {
      setPasswordmatched(true);
    }
  };

  const changePassword = (e) => {
    e.preventDefault();
    const Authtoken = localStorage.getItem("token");
    const changePasswordPayload = {
      old_password: updatePassword.old_password,
      new_password: updatePassword.retype_password,
    };
    if (passwordMatched) {
      axios
        .post("/users/change/password", changePasswordPayload, {
          headers: { Authorization: `JWT ${Authtoken}` },
        })
        .then((res) => {
          setSuccessMessage("Password changed successfully")
        })
        .catch((err) => {
          console.log('err', err)
        })
    }
  };
  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("user_details"));
  //   setUserDetails(userInfo);
  // }, []);
  const profilebox = {
    width: '434px',
    maxHeight: '285px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }
  const passwordbox = {
    width: '366px',
    maxHeight: '396px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }

  return (
    <MainLayout>

      <div className="px-12 py-8 bg-color ">
        <div className=" flex gap-5" >
          <div style={profilebox} className="p-6">
            <div className="flex  justify-between items-center px-4 py-3 ">
              <h3 className="text-xl font-poppins font-bold text-[#253858]">{t('details')}</h3>

              <div className="text-xl  flex items-center gap-x-2 mx-auto  text-center ">
                <div className=" ">
                  <img src={logo} alt="" className="w-10 h-10" />
                </div>
                <div className="">
                  <h4 className="font-poppins font-bold text-[#253858]">
                    {/* {userDetails.company_name} */}
                    PH Hero
                  </h4>
                  <h4 className="text-base font-poppins flex items-center gap-2 font-normal text-[#6B778C]">
                    <img src={rightBold} alt="" className="w-4 h-4" />
                    {/* {userDetails.name} */}
                    Zihadul Islam
                  </h4>
                </div>
              </div>


            </div>
            <div className="  bg-primary-4 mt-3  h-auto  ">


              <ul className="space-y-2 ">
                <li className="text-[18px] flex  border-b-2 pb-1 px-4 text-start ">

                  <p className="font-poppins font-normal text-[#172B4D] font-[14px] mr-16"> Position: </p>
                  <p className="font-semibold font-poppins font-semibold font-[16px]  text-[#253858]">CEO</p>
                </li>
                <li className="text-[18px] flex  border-b-2 pb-1 px-4 text-start ">

                  <p className="font-poppins font-normal text-[#172B4D] font-[14px] mr-16"> Number: </p>
                  <p className=" font-poppins font-semibold font-[16px] text-[#253858]"> xxxxxxx </p>
                </li>
                <li className="text-[18px] flex  border-b-2 pb-1 px-4 text-start ">

                  <p className="font-poppins font-normal text-[#172B4D] font-[14px] mr-20"> Email: </p>
                  <p className=" font-poppins font-semibold font-[16px] text-[#253858]"> rahat@gmail.com </p>
                </li>
                <li className="text-[18px] flex   pb-1 px-4 text-start ">

                  <p className="font-poppins font-normal text-[#172B4D] font-[14px] mr-10"> Company Admin: </p>
                  <p className=" font-poppins font-semibold font-[16px] text-[#253858]"> Yes </p>
                </li>

              </ul>

            </div>
          </div>


          <div style={passwordbox} className=" px-5 py-2  ">
            <h3 className="font-poppins pb-3 text-xl font-medium font-[16px] font-poppins text-[#253858]">
              {t('change_password')}
            </h3>
            <form onSubmit={changePassword} >
              <UiInput
                label={t('old_password')}
                type="password"
                name="old_password"
                placeholder={t('old_password_place')}
                onChange={handlePasswordUpdate}
              ></UiInput>
              <UiInput
                label={t('new_password')}
                type="password"
                name="new_password"
                placeholder={t('new_password_place')}
                onChange={handlePasswordUpdate}
              ></UiInput>
              {passwordSet.length < 8 && passwordSet.length > 0 ? (
                <p className="text-red-700">Password should be 8 character</p>
              ) : (
                ""
              )}
              <UiInput
                label={t('retype_new_password')}
                type="password"
                name="retype_password"
                placeholder={t('retype_new_password_place')}
                onChange={handlePasswordUpdate}
              ></UiInput>
              {!successMessage ?
                <div className="password-verification">
                  {confirmPasswordSet.length >= 8 &&
                    confirmPasswordSet &&
                    passwordSet === confirmPasswordSet ? (
                    <p className="text-green-700">{t("password_matched")}</p>
                  ) : (
                    ""
                  )}
                  {confirmPasswordSet && passwordSet !== confirmPasswordSet ? (
                    <p className="text-red-700">{t('password_not_matched')}</p>
                  ) : (
                    ""
                  )}
                </div>
                :
                <p className="text-green-600">{successMessage}</p>
              }

              <div className="flex justify-end   pt-2">
                <button className="py-2 px-8 capitalize flex bg-gray-200 justify-between item-center rounded-sm  " type="submit">

                  <img src={sammary} alt="" className="w-[16px] h-[14px] mt-[5px] mr-3" />
                  <p className="text-[#A5ADBA]">    {t("save")}{" "}</p>

                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
