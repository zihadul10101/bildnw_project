import React, { useState } from "react";
import sammary from "../../../../Assets/images/sammary.svg";
import { FiTarget } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { PurchaseRepayment } from "../../../../Services/Actions/LoansAction/LoansAction";

import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../../../Layout/MainLayout";
import UiButton from "../../../../Components/Common/ui/UiButton";

const BillingPayments = () => {
  const dispatch = useDispatch();
  // const { purchase_id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const { client_details } = useSelector((state) => state.LogInfo);
  // const { allPurchaseInfo, rePaymentInfo } = useSelector(
  //   (state) => state.LoansInfo
  // );
  // const repaymentPost = () => {
  //   const purchase = allPurchaseInfo?.filter((item) => item.id === purchase_id);
  //   const data = {
  //     re_payment_amount: rePaymentInfo.re_payment_amount,
  //   };
  //   dispatch(
  //     PurchaseRepayment(client_details.client_details?.id, purchase[0]?.id, data, navigate)
  //   );
  // };
  const summarybox = {

    width: '256px',
    height: '273px',
    background: '#FFFFFF',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }
  const detilsbox ={
  
width: '776px',
maxHeight: '615px',
background: '#FFFFFF',
boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
borderRadius: '8px'
  }
  return (
    <MainLayout>

      <div className="px-10 py-10 grid grid-cols-8 ">
        <div style={summarybox} className="col-span-2 ">
        <button className="flex justify-start items-center  text-lg w-full py-2 px-4 rounded bg-dark-gray text-white font-poppins font-normal mr-1">
            {" "}
            <img src={sammary} alt="" className="w-6 h-6 mr-3" />
            {" "}
            {t("summary")}{" "}
          </button>
          <div className="h-full  p-5 ">
            <ul className="space-y-4  ">
              <li className="text-[14px] border-b-2 pb-1 ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5"> {t("balance")}:</p>
                <p className="font-semibold font-[16px] font-poppins leading-6">SAR 800,000</p>
              </li>
              <li className=" border-b-2 pb-1  ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5">  {t("next_repayment_date")}: </p>
                <p className="font-semibold font-[16px] font-poppins leading-6"> 25/06/2022 </p>
              </li>
              <li className=" ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5">
                  {t("next_repayment_ammount")}:</p>
                <p className="font-semibold font-[16px] font-poppins leading-6"> SAR 500,000</p>
              </li>
            </ul>
          </div>
        </div>
        <div style={detilsbox} className="col-span-6 border-2">
          
          <div className="px-6 py-8 h-6/12">
            <div className="w-full  overflow-y-scroll h-72  border-4 rounded-lg bg-[#EBECF0]">
            <h3 className=" text-2xl font-poppins font-bold px-4 py-6">
              {t('Payment instructions')}
            </h3>
              <p className="text-justify font-poppins font-normal text-[#344563] p-4">
              Payment instructions
                Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.
              </p>
            </div>
          </div>
        </div>


      </div>
    </MainLayout>
  );
};

export default BillingPayments;