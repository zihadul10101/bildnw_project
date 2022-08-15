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
  const { statements, summary } = useSelector((state) => state.BillingInfo);

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
  return (
    <MainLayout>

      <div className="px-10 py-10 grid grid-cols-10">
        <div className="col-span-3  shadow-lg shadow-gray-300  h-[273px] w-[256px] rounded">
          <button className="flex justify-start items-center  text-sm w-full py-2 px-4 rounded bg-dark-gray text-white font-poppins font-semibold mr-1">
            {" "}
            <img src={sammary} alt="" className="w-6 h-6 mr-3" />
            {" "}
            {t("summary")}{" "}
          </button>
          <div className="h-full py-5">
            <ul className="space-y-4 p-4 ">
              <li className="text-[14px] border-b-2 pb-1 ">

                <p className="font-poppins text-sm font-normal text-[#8993A4]"> {t("balance")}:</p>
                <p className="font-semibold text-base">SAR {summary?.balance}</p>
              </li>
              <li className="text-[14px] border-b-2 pb-1  ">

                <p className="font-poppins font-normal text-sm text-[#8993A4]">  {t("next_repayment_date")}: </p>
                <p className="font-semibold text-base"> 25/06/2022 </p>
              </li>
              <li className="text-[14px]  ">

                <p className="font-poppins font-normal text-sm text-[#8993A4]">   {t("next_repayment_ammount")}:</p>
                <p className="font-semibold text-base"> SAR 500,000</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-7 border-2 shadow-lg shadow-gray-300 max-h-auto  rounded">
          <div className="px-6 py-7 h-7/12">
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
