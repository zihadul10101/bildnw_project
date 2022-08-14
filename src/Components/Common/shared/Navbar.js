import React, { useEffect, useState } from "react";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import logo from "../../../Assets/logo/logo_bildnw.svg";
import navIcon1 from "../../../Assets/images/nav1.svg";
import navIcon2 from "../../../Assets/images/nav2.svg";
import navIcon3 from "../../../Assets/images/noti.svg";
import navIcon4 from "../../../Assets/images/profile.svg";
import overview from "../../../Assets/images/overview.svg";
import lone from "../../../Assets/images/loneaction.svg";
import flagaction from "../../../Assets/images/flagaction.svg";
import billing from "../../../Assets/images/billing.svg";
import "../../../Assets/Styles/css/Navbar.css";
import axios from "../../../Config/axios";

import { useDispatch, useSelector } from "react-redux";
// testing language
import i18next from "../../../Assets/language/i18next";

import { useTranslation } from "react-i18next";
import { NotificationsInfo } from "../../../Services/Actions/Shared/ActionNavbar";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState("");
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "en");
  const { t, i18n } = useTranslation();


  const { client_details } = useSelector((state) => state.LogInfo);
  const { all_notifications } = useSelector((state) => state.SharedInfo);
  const clientDetails = client_details.client_details;

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

  const getNotifications = (clientID) => {
    dispatch(NotificationsInfo(clientID))
  };

  useEffect(() => {

    getNotifications(clientDetails?.id)

  }, [clientDetails?.id]);

  const sidebarMenu = [
    {
      label: i18next.t("overview"),
      active: false,
      to: "/overview",
      name: "overview",
      icon: overview,
    },
    {
      label: i18next.t("action_center"),
      active: false,
      to: "/action-center/overview",
      name: "Action Center",
      icon: flagaction,
    },
    {
      label: i18next.t("loans"),
      active: false,
      to: "/loans/overview",
      name: "loans",
      icon: lone,
    },
    {
      label: i18next.t("billing"),
      active: false,
      to: "/billing/statement",
      name: "billing",
      icon: billing,
    },
  ];
  let activeStyle = {
    // textDecoration: "underline",
    borderBottom: "4px solid #5DF8E9",
    paddingBottom: "25px",
    paddingTop: "28px",
    // width: " 66px",
    // height: "24px",
   
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    // fontSize: "14px",
    lineHeight: '24px'

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
    <div className=" bg-primary-1 text-white grid grid-cols-10 h-20">
      <div className="col-span-2 px-10 py-6">
        <Link to="/overview">
          <img src={logo} alt="" className="w-[99.84px] h-[24px] " />
        </Link>
      </div>
      <div className="col-span-8 px-10 flex justify-between items-center">

        <ul className="flex justify-center items-center space-x-8">
          {sidebarMenu.map((menu, index) => (
            <li
              key={index}
              // className="relative"
            >
              <NavLink
                to={menu.to}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="block  cursor-pointer flex justify-center items-center text-lg gap-x-[9px] mx-auto  text-center font-medium font-poppins  "
              >
                <img src={menu.icon} alt="" className=" w-[14px] h-[14px] " />
                <p className=" text-primary-text font-poppins">  {t(`${menu.name}`)}</p>
              </NavLink>
            </li>
          ))}
        </ul>


        <ul className="flex justify-center items-center space-x-2">
          <li className="text-xl px-2 py-1 font-medium cursor-pointer text-primary-text">
            {language === "ar" ? (
              <span onClick={() => handleChangeLng("en")}>EN</span>
            ) : (
              <span onClick={() => handleChangeLng("ar")}> عربى </span>
            )}
          </li>

          <li className="text-2xl px-2 py-1 font-semibold relative notification">
            <span className="cursor-pointer text-primary-text">
              <img src={navIcon3} alt="" className="w-5 h-5 text-primary-text" />

              {/* {notification?.length} */}
            </span>
            <ul className="notification-menu absolute hidden z-10 bg-white shadow-xl right-0 w-96 h-40 py-2 rounded border-2">
              {

                all_notifications.slice(0, 5).map((item, index) => (

                  <Link to="#" key={index}>
                    <li className="flex justify-between text-primary-text">
                      <span className="text-base">
                        {t(`${item?.event_code}`)}
                      </span>{" "}
                      <span className="text-base">{new Date(item?.created_at).toDateString()}</span>
                    </li>
                  </Link>

                ))
              }

            </ul>
          </li>
          <li className="text-2xl px-2 py-1 font-semibold relative account">
            <span className="cursor-pointer text-primary-text">
              <img src={navIcon1} alt="" className="w-5 h-5" />
            </span>
          </li>
          <li className="text-2xl px-2 py-1 font-semibold relative account">
            <span className="cursor-pointer text-primary-text">
              <img src={navIcon2} alt="" className="w-5 h-5" />
            </span>
          </li>

          <li className="text-2xl px-2 py-1 font-semibold relative account">
            <span className="cursor-pointer text-primary-text">
              <img src={navIcon4} alt="" className="w-8 h-8" />

            </span>
            <ul className="account-menu absolute z-10 hidden bg-white shadow-xl right-0 w-64 py-4 rounded border-2">
              <Link to="/profile">
                <li>{t("profile")}</li>
              </Link>
              <Link to="/company-details">
                <li>{t('company_details_profile')}</li>
              </Link>

              <li onClick={signout}>{t('sign_out')}</li>
            </ul>
          </li>
          {/* <li className="text-2xl px-4 py-4font-semibold cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
          </li> */}
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
