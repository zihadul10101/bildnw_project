import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../Config/axios";
import { AssetImages } from "../../../Services/Constants/imagesData";

const StaffNavbar = () => {
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "en");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "en") {
      localStorage.setItem("lng", "en");
      document.body.dir = "ltr";
      setLanguage("en");
    } else if (lng === "ar") {
      setLanguage("ar");
      localStorage.setItem("lng", "ar");
      document.body.dir = "rtl";
      setLanguage("ar");
    }
  };
  const signout = (e) => {
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("persist:root");
    dispatch({
      type: "LOGIN_SUCCES_MESSAGE_CLEAR",
    });
    navigate("/");
  };
  return (
    <div className="navbar grid grid-cols-10 border-b-[3px] border-borderColor py-4">
      <div className="col-span-2 px-10">
        <Link to="/">
          <img src={AssetImages.NavbarLogo} alt="" className="w-9/12" />
        </Link>
      </div>
      <div className="col-span-8 px-10 flex justify-end">
        <ul className="flex space-x-6">
          <li className="text-2xl px-4 py-1 font-semibold cursor-pointer">
            {language === "ar" ? (
              <span onClick={() => handleChangeLng("en")}>EN</span>
            ) : (
              <span onClick={() => handleChangeLng("ar")}> عربى </span>
            )}
          </li>
          <li className="text-2xl px-4 py-1 font-semibold relative account">
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <ul className="account-menu absolute hidden bg-white shadow-xl right-0 w-64 py-2 rounded border-2">
              <li onClick={signout}>{t("sign_out")}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffNavbar;
