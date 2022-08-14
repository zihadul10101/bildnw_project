import React, { useEffect } from "react";

import { AiOutlineFile } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReviewCreditOffer } from "../../../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";
import { t } from "i18next";

import UiArrowButton from "../../../../../../Components/Common/ui/UiArrowButton";
import MainLayout from "../../../../../../Layout/MainLayout";

const ApplyReviewOffer = () => {
  const dispatch = useDispatch();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { get_credit_offer } = useSelector((state) => state.ApplyCredit);
  const client_id = client_details.client_details?.id;
  useEffect(() => {
    dispatch(ReviewCreditOffer(client_id))
  }, [client_id]);
  return (
    <>
      <MainLayout>
        <div className="px-20 py-6 border-b-[3px] border-borderColor">
          <h3 className="text-2xl font-bold">
            {t('review_creditline_offer')}.
          </h3>
        </div>
        <div className="px-12 py-8">
          <div className="border-2  max-h-auto border-borderColor rounded">
            <div className="first-box-title flex justify-around items-center h-3/12 border-b-2 border-borderColor">
              <h3 className="text-3xl text-center text-primary-ash-400 font-bold px-4 py-6 ">
                {t('your_credit_terms')}.
              </h3>
              <AiOutlineFile className="text-4xl" />
            </div>
            <div className="px-6 py-8 h-6/12">
              <ul className="space-y-4">
                <li className="text-[22px] font-normal text-primary-ash-400">
                  {t('credit_limit')}: {get_credit_offer.credit_line_limit}
                </li>
                <li className="text-[22px] font-normal text-primary-ash-400">
                   {t('creditline_tenure')}: {get_credit_offer.tenure} months{t('')}
                </li>
                <li className="text-[22px] font-normal text-primary-ash-400">
                  {t('admin_fee_per_purchase')}: {get_credit_offer.admin_fee || 0}% 
                </li>
                <li className="text-[22px] font-normal text-primary-ash-400">
                  {t('monthly_fee')}: {get_credit_offer.monthly_rate}%
                </li>
                <li className="text-[15px] font-normal text-primary-ash-400">
                  {t('equivalen_monthly_fee')}: {(get_credit_offer.monthly_rate + (get_credit_offer.admin_fee/get_credit_offer.tenure)).toFixed(2)} %
                </li>
                <li className="text-[15px] font-normal text-primary-ash-400">
                  {t('creditline_expires')}.
                </li>
              </ul>
            </div>
            <div className="px-4 py-6 border-t-2 border-borderColor h-3/12">
              <p className="underline font-normal text-primary-ash-400">
                {t('click_to_review_terms')}
              </p>
              <p className=" font-normal text-primary-ash-400">
                {t('offer_expires')}.
              </p>
            </div>
          </div>
          <div className="text-center mx-96 my-8">
            <Link to="/action-center/agreement-creditline">
              <UiArrowButton label={t('accept_sign')} />
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ApplyReviewOffer;
