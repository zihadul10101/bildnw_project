import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/images/Avatar.png";
import Message from "../Assets/images/meassagerIcon.svg";
import {
  faPenToSquare,
  faFlag,
  faBuilding,
  faComment,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "../Assets/language/i18next";
import OverviewMenus from "../Services/Constants/NavbarData";
import ActionCenter from "../Services/Constants/NavbarData";
import Loans from "../Services/Constants/NavbarData";
import Billing from "../Services/Constants/NavbarData";
import Account from "../Services/Constants/NavbarData";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import Footer from "../Components/Common/shared/Footer";

const MainLayout = ({ children, ...rest }) => {
  // const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [navMenus, setNavMenus] = useState([]);
  const { user_detail } = useSelector((state) => state.LogInfo);
  const { lang } = useSelector((state) => state.LogInfo);





  useEffect(() => {


    if (location.pathname === "/overview") {
      setNavMenus(OverviewMenus?.OverviewMenus);
    } else if (
      location.pathname === "/action-center/overview" ||
      location.pathname === "/action-center/documentation" ||
      location.pathname === "/action-center/company-info" ||
      location.pathname === "/action-center/apply-credit" ||
      location.pathname === "/action-center/purchase"
    ) {
      setNavMenus(ActionCenter?.ActionCenter);
    } else if (
      location.pathname === "/loans/overview" ||
      location.pathname === "/loans/credit-line" ||
      location.pathname === "/loans/all-loans"
    ) {
      setNavMenus(Loans?.Loans);
    } else if (
      location.pathname === "/billing/statement" ||
      location.pathname === "/billing/payments"
    ) {
      setNavMenus(Billing?.Billing);
    } else if (
      location.pathname === "/profile" ||
      location.pathname === "/company-details"
    ) {
      setNavMenus(Account?.Account);
    }
  }, [location.pathname]);
  let activeStyle = {
    fontWeight: "bold",
    color: '#00B09E',

    height: '40px',
    background: 'rgba(9, 30, 66, 0.04)',
    borderRadius: '3px'
  };
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {lang === "en" || lang === "" || lang === null ? (
        <div className="main-part grid grid-cols-10">
          {/* Sidebar */}
          <div className="sidebar col-span-2 border-r-[3px] w-84 h-auto min-h-screen bg-primary-7">

            <div
              className="h-screen py-4 grid gap-4 content-between"
              // style={{ height: "80vh" }}
            >
              <ul>
                <li className="block w-[275px] text-xl pb-10 flex items-center gap-x-4 mx-auto p-3 text-center ">

                  <div className=" ">
                    <img src={logo} alt="" className="w-10 h-10" />
                  </div>
                  <div className="">
                    <h4 className="text-[#42526E] font-[14px] font-bold font-poppins ">
                      PH Hero
                    </h4>
                    <h4 className="text-sm text-start font-medium font-[12px] text-[#6B778C]">
                      Rahat Dawan
                    </h4>

                  </div>
                </li>
                {navMenus.map((item, index) => (
                  <li key={index}>

                    <NavLink
                      to={item.to}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }

                      className="block text-xl w-[275px] h-[40px] cursor-pointer flex items-center gap-x-3 mx-auto hover:bg-primary-ash-300 p-3 font-medium font-poppins text-center  rounded-sm"
                    >

                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />

                      <p className="font-poppins "> {item.title} </p>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul className="  cursor-pointer content-between gap-y-1 mx-auto   text-center  ">
                <li className="font-poppins text-[#42526E] font-normal font-[11px]"> You’re in a team-managed project </li>
                <li className="font-poppins text-[#42526E] font-normal font-[11px]">  Learn more </li>
              </ul>


            </div>
          </div>

          <div className="main-body col-span-8 h-full bg-color  relative">
            {children}
            <span className="text-7xl right-0 bottom-0 fixed mr-5 mb-5 cursor-pointer">
              <img src={Message} alt="message" />
            </span>
          </div>
        </div>
      ) : lang === "ar" ? (
        <div className="main-part grid grid-cols-10">
          <div className="main-body col-span-8">{children}</div>
          {/* Sidebar  */}
          <div className="sidebar col-span-2 border-l-[3px] border-borderColor h-auto min-h-screen bg-primary-ash-light">
            <div className="px-6 py-3">
              <h4 className="text-xl font-bold">{user_detail?.name}</h4>
              <h4 className="text-xl font-bold text-gray-400">
                {user_detail?.company_name}
              </h4>
            </div>
            <div className="py-6">
              <ul>
                {navMenus.map((item, index) => (
                  <li
                    key={index}
                    className="py-3 px-10 cursor-pointer bg-primary-ash-300 text-lg"
                  >
                    <NavLink key={index} to={item.to}>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default MainLayout;
