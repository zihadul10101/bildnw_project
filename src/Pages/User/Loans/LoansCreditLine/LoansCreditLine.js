import React, { useEffect } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import UiDowanloadButton from "../../../../Components/Common/ui/UiDowanloadButton";
import { useTranslation } from "react-i18next";
import { BsDownload } from 'react-icons/bs';
import CreditLine from '../../../../Assets/images/creditLine.svg';
import { useDispatch, useSelector } from "react-redux";
import { LoansOverview } from "../../../../Services/Actions/LoansAction/LoansAction";



const boxShadow = {
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
}
const LoansCreditLine = () => {
    const { t } = useTranslation();

    const baseRoot = localStorage.getItem("baseRoot");
    const dispatch = useDispatch();
    const { client_details } = useSelector((state) => state.LogInfo);
    const { loansOverviewInfo } = useSelector((state) => state.LoansInfo);
    useEffect(() => {
        dispatch(LoansOverview(client_details.client_details?.id));
    }, [client_details.client_details?.id]);



    return (
        <>
            <MainLayout>
                <div className="px-12 py-8 bg-color ">
                    <div className="col-span-6">
                        <div className="flex justify-between ">
                            <div style={boxShadow} className="w-[338px] rounded-lg bg-primary-1 mb-10 h-[152px] p-4">
                                <div className="flex justify-start items-center">
                                    <img src={CreditLine} alt="" className="w-6 h-6 text-white mr-2  font-bold" />
                                    <h3 className="text-center left-10 font-poppins font-medium text-base text-white ">
                                        {t("total_creditline")}
                                    </h3>
                                </div>
                                <div className="h-full flex items-center">
                                    <ul className="space-y-4">
                                        <li className="text-[36px] font-normal text-white font-poppins">
                                            1,000,000 <sub className="text-base font-poppins">SAR</sub>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={boxShadow} className="w-[338px] rounded-lg bg-primary-6 mx-3 mb-10 h-[152px] p-4">

                                <div className="flex justify-start items-center">
                                    <img src={CreditLine} alt="" className="w-6 h-6 text-white mr-2  font-bold" />
                                    <h3 className="text-center left-10 font-poppins font-medium text-base text-white">
                                        {t("available_to_spend")}
                                    </h3>
                                </div>
                                <div className="h-full flex justify-center items-center">
                                    <ul className="space-y-4">
                                        <li className="text-[36px] font-normal text-white font-poppins">
                                            1,000,000 <sub className="text-base font-poppins">SAR</sub>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={boxShadow} className="w-[338px] rounded-lg bg-primary-4 mx-2 mb-10 min-h-[152px] h-auto">
                                <div className="">

                                    <ul className="space-y-2 p-3 ">
                                        <li className="text-sm flex  border-b-[1px] pb-1 px-4 text-start ">

                                            <p className="font-poppins font-normal text-[#172B4D] mr-10"> {t("rate")}: </p>
                                            <p className="font-medium font-poppins text-base text-[#253858]">3% per month</p>
                                        </li>
                                        <li className="text-sm flex border-b-[1px] pb-1 px-4 text-start ">

                                            <p className="font-poppins font-normal text-[#172B4D] mr-10">  {t("Term")}: </p>
                                            <p className="font-medium font-poppins text-[#253858] text-base"> 3 months </p>
                                        </li>
                                        <li className="text-sm flex px-4 text-start ">

                                            <p className="font-poppins font-normal text-[#172B4D] mr-6 ">     {t("Material")}: </p>
                                            <p className="flex text-base px-1 rounded font-medium bg-primary-6 text-white">
                                                {/* {loansOverviewInfo?.terms?.material} */}
                                                rabber
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={boxShadow} className="col-span-6 rounded-lg border-2 bg-primary-4  max-h-auto  ">
                        <div className="first-box-title h-3/12">
                            <h3 className="text-base font-poppins font-medium text-[#344563] px-6 py-4  ">
                                {t("full_agreement")}
                            </h3>
                        </div>
                        <div className="px-6 py-6 ">
                            <div className="w-full p-5 h-96 overflow-y-scroll border-4 rounded-lg bg-[#EBECF0] ">
                                <h3 className="text-[32px] font-poppins font-bold mb-3">
                                    Credit line agreement
                                </h3>
                                <p className="text-justify font-poppins font-normal text-[#344563]">
                                    Fermentum, cras et sed dolor mattis cras dui. Donec leo orci suspendisse morbi dignissim. Eu orci augue sem sagittis. Eget a, ut pretium mus. Donec mi amet diam sociis amet. Turpis erat sollicitudin non nunc, aliquet facilisis hendrerit. Vestibulum donec orci congue nullam facilisis dolor, at sem. Magna pharetra, quam consectetur turpis mi pellentesque elementum ultrices. Ut et imperdiet amet, massa.
                                    Ultricies pulvinar eu, justo senectus sagittis, tortor, nisl. Varius suspendisse vel urna fermentum sem dictumst sit dictum. In lacus, sit eget egestas elementum tortor sit praesent. Diam ultricies dis est tellus viverra donec auctor vulputate mauris. Sodales odio consequat est sit magna. Bibendum porttitor quam habitant pharetra. Luctus varius eget condimentum sodales sagittis sed malesuada tortor. Orci quis justo, ut viverra fusce. Est ornare pretium, aliquam velit eros sollicitudin. Ac non imperdiet dignissim pulvinar sapien velit sed. Neque, eget rhoncus imperdiet gravida urna, aliquam. Pharetra, vitae netus mi urna cursus molestie lectus bibendum in. Quis donec donec eu, bibendum lacus. Etiam mus venenatis nunc enim. Velit in faucibus ultrices eget pellentesque at.
                                    Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                                    Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                                    Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="first-box-title h-3/12 p-3">

                            <a
                                href={baseRoot + loansOverviewInfo.agreement}
                                target="_blank"
                            >
                                <button className="flex justify-center items-center bg-slate-700 text-white  ml-5 border-2 rounded px-2 py-2 text-slate  "> <BsDownload className="text-white mr-2 font-medium" /> Download Agreement </button>
                            </a>

                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default LoansCreditLine;
