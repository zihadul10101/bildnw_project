import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MainLayout from '../../../../Layout/MainLayout';
import SmallCashIcon from '../../../../Assets/images/smallCashIcon.svg';
import CreditLine from '../../../../Assets/images/creditLine.svg';
import Repayment from '../../../../Assets/images/paymentHistory.svg';
import CashIcon from '../../../../Assets/images/cashIcon.svg';




const LoansOverview = () => {

    const { OverviewInfo } = useSelector((state) => state.OverviewInfo);
    const { t } = useTranslation();
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
            <MainLayout>
                <div className="px-10 py-10 bg-color ">

                    <div className="col-span-7 ">
                        <div className="flex flex-wrap">
                            {/* {glanceLists.map((item, index) => ( */}
                            <div style={cridbox} className="w-96 mx-3 mb-2 h-[148px] p-[24px] rounded-lg border-borderColor">
                                <div className="flex flex-row">
                                    <img src={SmallCashIcon} alt="Outstanding Loans" />
                                    <h3 className="text-center w-[153px] left-10 font-poppins font-normal text-white">
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
                            <div style={lonebox} className="w-96 mx-3 h-[148px] p-[24px] rounded-lg ">
                                <div className="flex flex-row">
                                    <img src={CreditLine} alt="Active Credit Line" />
                                    <h3 className="text-center w-[153px] left-10 font-poppins font-normal text-white">
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
                            <div style={totallonebox} className="w-96 mx-3 mb-10 h-[327px] p-4 rounded-lg">
                                <h3 className="text-base font-poppins font-medium text-[#505F79]">
                                    {/* Nearest repayment */}
                                    {t("nearest_repayment")}
                                </h3>
                                <span style={{ padding: '0px 4px' }} className="text-[14px] bg-[#F4F5F7] w-[105px] font-poppins uppercase rounded-sm font-bold">Due in 7 days</span>                                <div className="h-full flex flex-col  items-center">
                                    <img src={Repayment} alt="Nearest Repayment" />
                                    <ul className="space-y-4">
                                        <li className="text-[40px] font-semibold text-[#344563]">
                                            500,000<sub className="text-[16px]">SAR</sub>
                                        </li>
                                    </ul>
                                    <h3 className="font-poppins font-normal text-[14px] text-[#505F79] pt-3">on Thursday 29/05/2022</h3>
                                </div>
                            </div>
                            <div style={nearestbox} className="w-96 mx-3 mb-10 h-[272px] p-4 rounded-lg">
                                <h3 className=" text-base font-poppins font-medium text-[#505F79]">
                                    {/* Total loans */}
                                    {t("total_loans")}
                                </h3>
                                <div className="h-full flex flex-col justify-center items-center">
                                    <img src={CashIcon} alt="Total Loans" />
                                    <ul className="space-y-4">
                                        <li className="text-[40px] font-medium text-primary-3 text-[#344563]">
                                            500,000<sub className="text-[24px]">SAR</sub>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    );
};

export default LoansOverview;
