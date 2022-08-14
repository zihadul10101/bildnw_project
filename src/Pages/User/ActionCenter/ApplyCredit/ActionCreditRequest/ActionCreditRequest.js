import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  CreditRequest,
  GetClientStatus,
} from "../../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";
import AppliedSuccessful from "../AppliedSuccessful/AppliedSuccessful";
import ApplyReviewOffer from "../ApprovedCredit/ApplyReviewOffer/ApplyReviewOffer";
import ApproveCreditLine from "../ApprovedCredit/ApproveCreditLine/ApproveCreditLine";
import { statusDetails } from "../../../../../Services/Constants/statusHandle";
import { useTranslation } from "react-i18next";
import MainLayout from "../../../../../Layout/MainLayout";
import SelectInput from "../../../../../Components/Common/ui/SelectInput";
import UiInput from "../../../../../Components/Common/ui/UiInput";
import icon1 from '../../../../../Assets/images/file_upload.png';
import icon2 from '../../../../../Assets/images/pdf_upload.png';
import icon3 from '../../../../../Assets/images/feather_upload-cloud.png';
import icon4 from '../../../../../Assets/images/feather_upload-cloud.png';
import icon5 from '../../../../../Assets/images/documentation-set.png';
import icon6 from '../../../../../Assets/images/review.png';
import rightIcon from "../../../../../Assets/images/rightArrow.svg";
import rightIcons from "../../../../../Assets/images/rightIcon.svg";



const ActionCreditRequest = () => {
  // for language
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client_details } = useSelector((state) => state.LogInfo);
  const client_status = client_details.client_details?.status;
  const { get_status } = useSelector((state) => state.ApplyCredit);
  const [isApprove, setIsApprove] = useState(true);
  const [inputValue, setInputValue] = useState({});
  const [next, setNext] = useState(1);
  const [bar, setBar] = useState(0);
  const statusData = statusDetails(get_status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const creditRequestSubmit = () => {
    const credit_request = {
      seeking_credit_tenure: inputValue.seeking_credit_tenure,
      size_of_credit_line: 10000 * inputValue.credit_line_size,
    };
    dispatch(CreditRequest(credit_request));
    navigate("/action-center/project-details");
  };
  useEffect(() => {
    dispatch(GetClientStatus(client_details.client_details?.id));
  }, []);
  return (
    <>
      {get_status == 5 ? (
        <MainLayout>
          <div className="px-20 py-6 border-b-[3px] border-borderColor">
            <h3 className="text-2xl font-bold">{t("credit_request")}</h3>
          </div>
          <form onSubmit={creditRequestSubmit}>
            <div className="px-20 py-5">
              <label className="text-xl font-medium">
                {t("what_creditline_size")}
              </label>
              {/* <div className="my-4 text-lg px-4 py-2 rounded bg-dark-gray text-white text-center w-1/6 mx-44">
                <p className="text-white text-center ">
                  {10000 * inputValue.credit_line_size || 0}
                </p>
              </div> */}
              <div className="text-center">
                <input
                  name="credit_line_size"
                  type="text"
                  onChange={handleChange}
                  value={inputValue.credit_line_size}
                  className="px-4 py-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                ></input>
              </div>

              <input
                name="credit_line_size"
                type="range"
                min="0"
                max="400"
                onChange={handleChange}
                className="w-5/6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
              <div className=" py-6">
                <p className="mr-3 font-bold">{t("what_credit_tenure")}</p>
                <div className="form-group">
                  <select
                    onChange={handleChange}
                    name="seeking_credit_tenure"
                    className="form-select px-4 py-3 border-2  rounded  w-2/6 focus:focus:outline-none focus:ring focus:ring-dark-gray"
                  >
                    <option disabled selected>
                      {t("select")}
                    </option>
                    <option value="1">1 {t("select_month")}</option>
                    <option value="2">2 {t("select_month")}</option>
                    <option value="3">3 {t("select_month")}</option>
                    <option value="4">4 {t("select_month")}</option>
                    <option value="5">5 {t("select_month")}</option>
                    <option value="6">6 {t("select_month")}</option>
                  </select>
                </div>
                <div className="text-center mx-96 my-8">
                  <button type="submit">{"next"}</button>
                </div>
              </div>
            </div>
          </form>
        </MainLayout>
      ) : get_status == 8 ? (
        <AppliedSuccessful></AppliedSuccessful>
      ) : get_status == 9 ? (
        <ApplyReviewOffer></ApplyReviewOffer>
      ) : get_status == 12 ? (
        <ApproveCreditLine></ApproveCreditLine>
      ) : (
        <MainLayout>
          <div className="bg-color  px-5 py-5">
            <div className="flex ml-6 justify-between w-2/3 relative">
              <div className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 button-bg-color rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Credit Size</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Project Details</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px] overflow-hidden">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Project Documentation</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Pending Offer</h6>
              </div>
              <div onClick={() => { setNext(5); setBar(449) }} className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Review Offer</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Signing Offer</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px]">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins-2">Done</h6>
              </div>
              <div style={{ "width": `${bar}px` }} className={`mt-2 h-2 rounded-lg button-bg-color absolute left-[3.35rem] top-2`}></div>
            </div>
            {next == 1 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <div>
                  <h4 className="text-md font-medium f-color-4 pb-4">What is the size of the credit line you are seeking?</h4>
                  <div className="my-5 w-2/3">
                    <div className="h-1 button-bg-color relative">
                      
                      <span className="text-sm absolute -top-8 left-60 text-white px-2 py-1 button-bg-color">
                        SAR 2,050,000</span>
                    </div>
                    <div className="flex items-center">
                      <p className="">SAR 100,000</p>
                      <p className="ml-auto">SAR 4,000,000</p>
                      
                    </div>
                  </div>
                  <div className="w-2/3">
                    <h4 className="text-base f-color-3 font-medium">
                      What is the credit tenure you are seeking?
                    </h4>
                    <SelectInput />
                  </div>
                
                  <div   className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color text-white" onClick={() => { setNext(2); setBar(119) }} type="submit">
                    {"next"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
                </div>
              </div>
            }
            {next == 2 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <h4 className="text-[#253858] font-medium font-poppins text-lg pb-5">Provide details about your project</h4>
                <div className="w-12/12">
                  <div className="w-1/2">
                    <h6 className="font-[12px] text-[#6B778C]  font-medium font-poppins">What is the estimated total cost of the materials you need?</h6>
                    <UiInput />
                  </div>
                </div>
                <div className="w-12/12">
                  <div className="w-1/2">
                    <h6 className="font-[12px] text-[#6B778C]  font-medium font-poppins">What is the estimated profit margin in this project?</h6>
                    <UiInput />
                  </div>
                </div>
                <div className="flex gap-5 w-12/12">
                  <div className="w-1/2">
                    <h6 className="font-[12px] text-[#6B778C]  font-medium font-poppins">What material do you need?</h6>
                    <SelectInput />
                  </div>
                  <div className="w-1/2">
                    <div className="">
                      <h6 className="font-[12px] text-[#6B778C]  font-medium font-poppins">Material</h6>
                      <UiInput />
                    </div>
                  </div>
                </div>
                <p className="f-color-2 font-poppins font-[#344563]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur consectetur odio nunc sed. Pharetra, ut imperdiet feugiat diam. Scelerisque pharetra id sed quam accumsan ultricies. At eget vitae amet, donec suspendisse.</p>
               
                <div    className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color text-white" onClick={() => { setNext(3); setBar(229) }} type="submit">
                    {"next"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
              </div>
            }
            {next == 3 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <h4 className="text-[#253858] font-[16px] font-poppins font-medium pb-5">{`Please provide required documents (0/4 uploaded)`}</h4>
                <div className="flex flex-wrap justify-around items-center">
                  <div className="box w-1/2 flex items-center">
                    <img className="p-4" src={icon1} alt="boximg" />
                    <div className="py-3">
                      <span className="button-bg-color p-1 text-white uppercase font-[14px] font-poppins font-bold">Document title</span>
                      <div className="">
                        <span className="capitalize mr-64 font-poppins">Passport.png</span>
                        <span className="">5.7MB</span>
                      </div>
                      <div className="mt-2 h-1 rounded-lg button-bg-color"></div>
                    </div>
                  </div>
                  <div className="box w-1/2">
                    <div className="flex items-center bg-gray-200 rounded ml-5">
                      <img className="p-4" src={icon2} alt="boximg" />
                      <div className="py-3">
                        <span className="button-bg-color p-1 text-white uppercase font-[14px] font-poppins font-bold">Document title</span>
                        <div className="flex items-center justify-between my-2">
                          <div className="mr-48">
                            <span className="capitalize font-poppins">finalcial.pdf</span>
                            <button className="f-color ml-5 font-poppins">Preview</button>
                          </div>
                          <span >5.7MB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box w-1/2 my-5">
                    <div className="ml-5 flex items-center border-dashed border-2 rounded">
                      <img className="p-4" src={icon3} alt="boximg" />
                      <div className="py-3">
                        <span className="button-bg-color p-1 text-white uppercase font-[14px] font-poppins font-bold">Document title</span>
                        <div className="w-12/12 flex py-2">
                          <div className="w-7/12">
                            <span className="text-sm font-poppins">JPG, PNG or PDF, file size no more than 10MB</span>
                          </div>
                          <div className="w-5/12">
                            <button type="file" className="text-white ml-5 button-bg-color font-poppins font-medium py-1 px-4">Select file</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box w-1/2 my-5">
                    <div className="ml-5 flex items-center border-dashed border-2 rounded">
                      <img className="p-4" src={icon4} alt="boximg" />
                      <div className="py-3">
                        <span className="button-bg-color p-1 text-white uppercase font-[14px] font-poppins font-bold">Document title</span>
                        <div className="w-12/12 flex py-2">
                          <div className="w-7/12">
                            <span className="text-sm font-poppins">JPG, PNG or PDF, file size no more than 10MB</span>
                          </div>
                          <div className="w-5/12">
                            <button type="file" className="text-white ml-5 button-bg-color font-poppins font-medium py-1 px-4">Select file</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div     className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex bg-gray-200 justify-between item-center rounded-sm" onClick={() => { setNext(4); setBar(339) }} type="submit">
                   
                    <img src={rightIcons} alt="" className="w-[16px] h-[14px] mt-[5px] mr-3" />
                  <p className="text-[#A5ADBA]">    {t("Finish")}{" "}</p>

                 
                  </button>
                </div>
               
              </div>
            }
            {next == 4 &&
              <div className="bg-white shadow-md p-5 mx-8" >
                <div className="">
                  <img className="mx-auto p-4" src={icon5} alt="boximg" />
                </div>
                <h4 className="font-bold font-[14px] uppercase text-[#36B37E] font-poppins">Reviewing your application</h4>
                <h6 className="font-medium font-[16px] font-poppins text-[#505F79]">We are reviewing your application and will be in touch within 48 hours.</h6>
              </div>}
            {next == 5 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <h4 className="text-lg font-medium font-poppins f-color-4">Please reveiw your credit line terms:</h4>
                <div className="flex items-center py-5">
                  <div>
                    <p className="border-b-2 font-medium font-poppins py-2 leading-5">Credit limit</p>
                    <p className="border-b-2 font-medium font-poppins py-2 leading-5">Credit line tenure</p>
                    <p className="border-b-2 font-medium font-poppins py-2 leading-5">Admin fee per purchase</p>
                    <p className="border-b-2 font-medium font-poppins py-2 leading-5">Monthly fee</p>
                    <p className="border-b-2 font-medium font-poppins py-2 leading-5">Equivalent monthly fee</p>
                    <p className="py-2 font-medium font-poppins leading-5">Credit line expires after</p>
                  </div>
                  <div>
                    <p className="border-b-2 font-medium py-2 px-5 font-poppins leading-5">SAR 1,000,000t</p>
                    <p className="border-b-2 font-medium py-2 px-5 font-poppins leading-5">3 months</p>
                    <p className="border-b-2 font-medium py-2 px-5">
                      <span className="bg-indigo-600 rounded text-white p-1 font-poppins text-sm font-normal leading-5">1.0%</span>
                    </p>
                    <p className="border-b-2 font-medium py-2 px-5">
                      <span className="bg-indigo-600 rounded text-white p-1 font-poppins text-sm font-normal leading-5">1.0%</span>
                    </p>
                    <p className="border-b-2 font-medium py-2 px-5">
                      <span className="bg-indigo-600 rounded text-white p-1 font-poppins text-sm font-normal leading-5">1.0%</span>
                    </p>
                    <p className="py-2 px-5 font-medium leading-5">12 months</p>
                  </div>
                </div>
                <div className="flex bg-[#DEEBFF] mr-96 p-2">
                  <div>
                    <img className="pt-2 px-4" src={icon6} alt="boximg" />
                  </div>
                  <div className=" w-[522px] h-[80px]">
                    <h4 className="font-poppins font-normal">Your offer expires in <span className="font-poppins font-bold">7 Days</span></h4>
                    <h6 className="text-[#0052CC] font-normal font-poppins underline">Click here to review the full terms and conditions.</h6>
                  </div>
                </div>
                
                <div      className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex bg-gray-200 justify-between item-center rounded-sm" onClick={() => { setNext(6); setBar(559) }} type="submit">
                
                    <img src={rightIcons} alt="" className="w-[16px] h-[14px] mt-[5px] mr-3" />
                  <p className="text-[#A5ADBA]">    {t("Accept and sign")}{" "}</p>
                  </button>
                </div>
              </div>
            }
            {next == 6 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <h4 className="font-medium font-poppins pb-4 font-[16px]">View and sign the credit line agreement:</h4>
                <div className="bg-[#EBECF0] p-4 rounded-lg">
                  <h4 className="text-2xl font-poppins font-bold capitalize f-color-4 py-4">Credit line Aggrement</h4>
                  <p className="overflow-y-scroll h-72 font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit faucibus feugiat condimentum convallis faucibus tempus nunc risus. Ut aliquam augue potenti dictumst. Tellus senectus pellentesque habitasse imperdiet nulla amet amet praesent sed. Amet urna a, integer aliquet cursus.
                    Fermentum, cras et sed dolor mattis cras dui. Donec leo orci suspendisse morbi dignissim. Eu orci augue sem sagittis. Eget a, ut pretium mus. Donec mi amet diam sociis amet. Turpis erat sollicitudin non nunc, aliquet facilisis hendrerit. Vestibulum donec orci congue nullam facilisis dolor, at sem. Magna pharetra, quam consectetur turpis mi pellentesque elementum ultrices. Ut et imperdiet amet, massa.
                    Ultricies pulvinar eu, justo senectus sagittis, tortor, nisl. Varius suspendisse vel urna fermentum sem dictumst sit dictum. In lacus, sit eget egestas elementum tortor sit praesent. Diam ultricies dis est tellus viverra donec auctor vulputate mauris. Sodales odio consequat est sit magna. Bibendum porttitor quam habitant pharetra. Luctus varius eget condimentum sodales sagittis sed malesuada tortor. Orci quis justo, ut viverra fusce. Est ornare pretium, aliquam velit eros sollicitudin. Ac non imperdiet dignissim pulvinar sapien velit sed. Neque, eget rhoncus imperdiet gravida urna, aliquam. Pharetra, vitae netus mi urna cursus molestie lectus bibendum in. Quis donec donec eu, bibendum lacus. Etiam mus venenatis nunc enim. Velit in faucibus ultrices eget pellentesque at.
                    Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                    Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                    Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.</p>
                </div>
                <div className="flex items-center my-4">
                  <input type="checkbox"/>
                  <h6 className="ml-4 text-base font-poppins">I Agree to the credit line agreement above</h6>
                </div>
               
                <div    className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color text-white" onClick={() => { setNext(7); setBar(669) }}  type="submit">
                  {"next"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
              </div>
            }
            {next == 7 &&
              <div className="bg-white shadow-md p-5 mx-8">
                <h4 className="font-medium font-poppins pb-4 font-[16px]">View and sign the promissory note:</h4>
                <div className="bg-[#EBECF0] p-4 rounded-lg">
                  <h4 className="text-2xl font-bold capitalize f-color-4 py-4">Promissory Note</h4>
                  <p className="overflow-y-scroll h-72 font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit faucibus feugiat condimentum convallis faucibus tempus nunc risus. Ut aliquam augue potenti dictumst. Tellus senectus pellentesque habitasse imperdiet nulla amet amet praesent sed. Amet urna a, integer aliquet cursus.
                    Fermentum, cras et sed dolor mattis cras dui. Donec leo orci suspendisse morbi dignissim. Eu orci augue sem sagittis. Eget a, ut pretium mus. Donec mi amet diam sociis amet. Turpis erat sollicitudin non nunc, aliquet facilisis hendrerit. Vestibulum donec orci congue nullam facilisis dolor, at sem. Magna pharetra, quam consectetur turpis mi pellentesque elementum ultrices. Ut et imperdiet amet, massa.
                    Ultricies pulvinar eu, justo senectus sagittis, tortor, nisl. Varius suspendisse vel urna fermentum sem dictumst sit dictum. In lacus, sit eget egestas elementum tortor sit praesent. Diam ultricies dis est tellus viverra donec auctor vulputate mauris. Sodales odio consequat est sit magna. Bibendum porttitor quam habitant pharetra. Luctus varius eget condimentum sodales sagittis sed malesuada tortor. Orci quis justo, ut viverra fusce. Est ornare pretium, aliquam velit eros sollicitudin. Ac non imperdiet dignissim pulvinar sapien velit sed. Neque, eget rhoncus imperdiet gravida urna, aliquam. Pharetra, vitae netus mi urna cursus molestie lectus bibendum in. Quis donec donec eu, bibendum lacus. Etiam mus venenatis nunc enim. Velit in faucibus ultrices eget pellentesque at.
                    Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                    Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                    Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.</p>
                </div>
                <div className="flex items-center my-4">
                  <input type="checkbox"/>
                  <h6 className="ml-4 text-base font-poppins">I Agree to the credit line agreement above</h6>
                </div>
               
                <div   onClick={() => { setNext(8); setBar(671) }}  className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color text-white"type="submit">
                  {"next"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
              </div>
            }
            {next == 8 &&
              <div className="bg-white shadow-md p-5 mx-8 w-[648px] h-[316px]" >
                <div className="">
                  <img className="mx-auto p-4" src={icon5} alt="boximg" />
                </div>
                <h4 className="text-[#36B37E] text-md font-bold font-poppins uppercase">Credit line approved</h4>
                <h6 className="text-[#505F79] font-[16px] font-medium font-poppins">You have successfully been approved for a credit line, You can now submit a purchase order.</h6>
              </div>
            }
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default ActionCreditRequest;
