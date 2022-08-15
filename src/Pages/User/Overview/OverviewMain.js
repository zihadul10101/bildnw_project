import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// for language taranslation
import { useTranslation } from "react-i18next";
import { OverviewMainInfo } from "../../../Services/Actions/OverviewAction/OverviewAction";
import MainLayout from "../../../Layout/MainLayout";
import Status from "./../../../Assets/images/status.svg";
import UiArrowButton from "../../../Components/Common/ui/UiArrowButton";
import UiProgressBar from "../../../Components/Common/ui/UiProgressBar";
import SmallCashIcon from '../../../Assets/images/smallCashIcon.svg';
import CreditLine from '../../../Assets/images/creditLine.svg';
import CashIcon from '../../../Assets/images/cashIcon.svg';
import Repayment from '../../../Assets/images/paymentHistory.svg';
import Navbar from "../../../Components/Common/shared/Navbar";

const OverviewMain = () => {
  const dispatch = useDispatch();
  const { user_detail } = useSelector((state) => state.LogInfo);
  const { OverviewInfo } = useSelector((state) => state.OverviewInfo);

  const Authtoken = localStorage.getItem("token");
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(OverviewMainInfo(user_detail?.company_id));
  }, []);
  const box = {
    padding: '16px',
    background: '#FFFFFF',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
  }
  const lonebox = {
    background: '#344563',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
  }
  const cridbox = {
    background: '#00B09E',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
  }
  const totallonebox = {
    background: '#FFFFFF',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
    }
  const nearestbox = {
    background: '#FFFFFF',
    
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
    }
  return (
    <>
      {/* <MainLayout> */}
      <Navbar></Navbar>
      <div className="bg-color h-screen">
        <div className="bg-[#DEEBFF] h-[88px]">

        </div>
        <div className="mt-[40px] ml-[70px] grid grid-cols-10 gap-8 p-3">
          <div style={box} className="col-span-3 w-[384px] h-[401px] rounded-lg ">
            <div className="first-box-title">
              <h3 className=" text-[#505F79] font-poppins font-bold px-4 border-borderColor">
                {t("status")}
              </h3>
            </div>
            <div className="px-6 py-8">
              <img src={Status} alt="Status" />
              <p className="text-[#FF8B00] font-poppins uppercase font-normal left-1 text-status-soft">Pre-Approval Pending</p>
              {/* progress bar  */}
              <UiProgressBar width="40%" />
              <p className="text-[#8993A4] font-poppins font-normal mt-4">Next Step:</p>
              <UiArrowButton label={t('Provide Company Details')} />
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex flex-wrap ">
              {/* {glanceLists.map((item, index) => ( */}
              <div style={lonebox} className="w-96 mx-3 mb-2 h-[145.57px] p-4  rounded-lg ">
                <div className="flex flex-row">
                  <img src={SmallCashIcon} alt="Outstanding Loans" />
                  <h3 className="text-center w-[153px] font-poppins text-[14px] font-medium text-white">
                    {/* Outstanding Loans */}
                    {t("Outstanding Loans")}
                  </h3>
                </div>
                <div className="h-full flex items-center">
                  <ul className="space-y-4">
                    <li className="text-[44px] font-normal text-white">
                      1,000,000 <sub className="text-[22px]">SAR</sub>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={cridbox} className="w-96 mx-3 h-36 p-4 rounded-lg">
                <div className="flex flex-row">
                  <img src={CreditLine} alt="Active Credit Line" />
                  <h3 className="text-center w-[153px] font-poppins text-[14px] font-medium text-white">
                    {/* Active Credit Line */}
                    {t("Active Credit Line")}
                  </h3>
                </div>
                <div className="h-full flex items-center">
                  <ul className="space-y-4">
                    <li className="text-[44px] font-normal text-white">
                      1,000,000 <sub className="text-[22px]">SAR</sub>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={totallonebox} className="w-96 mx-3 mb-10 h-[272px] p-4 rounded-lg ">
                <h3 className=" text-base font-poppins font-normal text-[#505F79]">
                  {/* Total loans */}
                  {t("total_loans")}
                </h3>
                <div className="h-full flex flex-col justify-center items-center">
                  <img src={CashIcon} alt="Total Loans" />
                  <ul className="space-y-4">
                    <li className="text-[44px] font-semibold text-primary-3">
                      500,000<sub className="text-[22px]">SAR</sub>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={nearestbox} className="w-96 mx-3 mb-10 h-[327px] p-4 rounded-lg">
                <h3 className="text-base font-poppins font-normal text-[#505F79]">
                  {/* Nearest repayment */}
                  {t("nearest_repayment")}
                </h3>
                <span style={{padding: '0px 4px'}} className="text-[16px] bg-[#F4F5F7] w-[105px] font-poppins uppercase rounded-sm font-bold">Due in 7 days</span>
                <div className="h-full flex flex-col items-center ">
                  <img src={Repayment} alt="Nearest Repayment" />
                  <ul className="space-y-4">
                    <li className="text-[44px] font-semibold text-[#505F79]">
                      500,000<sub className="text-[22px]">SAR</sub>
                    </li>
                  </ul>
                  <h3 className="font-poppins font-normal  text-[#505F79] pt-3">on Thursday 29/05/2022</h3>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* </MainLayout> */}
    </>
  );
};

export default OverviewMain;
