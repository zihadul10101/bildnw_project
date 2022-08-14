import React, { useEffect, useState, useRef } from "react";
import icon1 from '../../../../Assets/images/file_upload.png';
import icon2 from '../../../../Assets/images/pdf_upload.png';
import icon3 from '../../../../Assets/images/feather_upload-cloud.png';
import icon4 from '../../../../Assets/images/feather_upload-cloud.png';
import icon5 from '../../../../Assets/images/documentation-set.png';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ClientCreate, RetrieveInfo } from "../../../../Services/Actions/ActionCenterActions/ActionCompanyInfo";
import MainLayout from "../../../../Layout/MainLayout";
import UiInput from "../../../../Components/Common/ui/UiInput";
import CheckboxInput from "../../../../Components/Common/ui/CheckboxInput";
import UiButton from "../../../../Components/Common/ui/UiButton";
import SelectInput from "../../../../Components/Common/ui/SelectInput";
import rightIcon from "../../../../Assets/images/rightArrow.svg";
import rightIcons from "../../../../Assets/images/rightIcon.svg";



const ActionCompanyInfo = () => {
  // for language implementation
  const { t } = useTranslation();
  const baseRoot = localStorage.getItem("baseRoot");
  const dispatch = useDispatch();
  const ref = useRef(null);
  const navigate = useNavigate();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { retrieve_all_info } = useSelector((state) => state.ActionOverview);
  const clientDetails = client_details.client_details;
  const Authtoken = localStorage.getItem("token");
  const [counter, setCounter] = useState(0);
  const [allFiles, setAllFiles] = useState({});
  const [allTextInput, setAllTextInput] = useState({});
  const [next, setNext] = useState(1);
  const [bar, setBar] = useState(0);

  const fileUpload = (event) => {
    let files = event.target.files[0];
    if (files && event.target.name) {
      setCounter(counter + 1);
    }
    const { name } = event.target;

    setAllFiles((prev) => ({
      ...prev,
      [name]: files,
    }));
  };
  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setAllTextInput(() => ({
      ...allTextInput,
      [name]: value,
    }));
  };

  // RETRIEVE INFO
  useEffect(() => {
    dispatch(RetrieveInfo(clientDetails?.id))
  }, [clientDetails?.id]);
  const handleFileUpload = (e) => {
    e.preventDefault();

    let formData = new FormData();
    // formData.append("client", clientDetails?.id);
    Object.keys(allTextInput).map((item) => {
      formData.append(item, allTextInput[item]);
    });

    Object.keys(allFiles).map((item) => {
      if (item) {
        formData.append(item, allFiles[item]);
      }
    });
    formData.append("status", 4);

    // API CALL
    dispatch(ClientCreate(clientDetails?.id, formData, navigate))
  };
  const box = {
    width: '1056px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }
  const box1 = {
    width: '1056px',
    minHeight: '572px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'

  }
  const box2 = {
    width: '384px',
    height: '260px',

    background: '#FFFFFF',

    boxShadow: ' 0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'


  }
  return (
    <MainLayout>
      <div className="bg-color  px-10 py-10">

        <div className="">
          <div className="flex ml-6 justify-between w-1/3  relative">
            <div className="p-2 m-2 text-center w-[200px]  ">
              <div className="mx-auto w-2 h-2 button-bg-color rounded-full"></div>
              <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Company Information</h6>
            </div>
            <div className="p-2 m-2 text-center w-[200px] ">
              <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
              <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Basic Documentation</h6>
            </div>
            <div className="p-2 m-2 text-center w-[200px] ">
              <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
              <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Done</h6>
            </div>
            <div style={{ "width": `${bar}px` }} className={`mt-2 h-2 rounded-lg button-bg-color absolute left-[3.35rem] top-2`}></div>        </div>
          {next == 1 &&
            <div style={box} className=" p-[14px]">
              <h4 className="text-[#253858] font-medium font-poppins text-lg pb-5">Please provide your company information</h4>
              <div className="w-12/12">
                <div className="w-1/2">
                  <h6 className="font-[12px] text-[#6B778C] font-medium font-poppins">
                    {t("What is your Company Name?")}</h6>
                  <UiInput />
                </div>
              </div>

              <div className=" w-12/12">
                <div className="w-1/2 ">
                  <h6 className="font-[12px] text-[#6B778C]  font-medium font-poppins">

                    {t('  What is your Company type?')}
                  </h6>
                  <SelectInput />
                </div>

              </div>
              <div className="flex items-center my-4">
                <input type="checkbox" />
                <h6 className="ml-4 font-[14px] font-normal text-[#091E42] font-poppins">I HEREBY CERTIFY that the information provided in this form is complete, true and correct to the best of my knowledge.</h6>
              </div>

              <div onClick={() => { setNext(2); setBar(150) }} className="flex justify-end   pt-2">
                <button className="py-2 px-8 capitalize font-poppins flex justify-between item-center rounded-[3px] button-bg-color text-white" onClick={() => { setNext(2); setBar(110) }} type="submit">
                  {"next"}
                  <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                </button>
              </div>
            </div>
          }
          {next == 2 &&
            <div style={box1} className=" p-[14px] ">
              <h4 className="text-[#253858] font-[16px] font-poppins font-medium">{`Please provide required documents (0/4 uploaded)`}</h4>
              <div className="flex flex-wrap mt-10 justify-around items-center">
                <div className="box w-1/2 flex items-center">
                  <img className="p-4" src={icon1} alt="boximg" />
                  <div className="py-3">
                    <span className="button-bg-color p-1 text-white uppercase font-[14px] font-poppins font-bold">Document title</span>
                    <div className="">
                      <span className="capitalize mr-64 font-poppins ">Passport.png</span>
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
                          <button type="file" className="font-poppins font-medium text-white ml-5 button-bg-color py-1 px-4">Select file</button>
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
                          <button type="file" className="font-poppins font-medium text-white ml-5 button-bg-color py-1 px-4">Select file</button>
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
                          <button type="file" className= "font-poppins font-medium text-white ml-5 button-bg-color py-1 px-4">Select file</button>
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
                          <button type="file" className="font-poppins font-medium text-white ml-5 button-bg-color py-1 px-4">Select file</button>
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
                          <button type="file" className="text-white ml-5 button-bg-color py-1 px-4 font-poppins font-medium">Select file</button>
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
                          <button type="file" className="text-white ml-5 button-bg-color py-1 px-4 font-poppins font-medium">Select file</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div onClick={() => { setNext(3); setBar(270) }} className="flex justify-end   pt-2">
                <button className="py-2 px-8 capitalize flex bg-gray-200 justify-between item-center rounded-sm " onClick={() => { setNext(2); setBar(110) }} type="submit">
                  
                  <img src={rightIcons} alt="" className="w-[16px] h-[14px] mt-[5px] mr-3" />
                  <p className="text-[#A5ADBA] font-poppins font-medium">    {t("Submit company information")}{" "}</p>
                </button>
              </div>


            </div>
          }
          {next == 3 &&
            <div style={box2} className="bg-whitep-[16px] " >
              <div className="pb-4">
                <img className="mx-auto p-4" src={icon5} alt="boximg" />
              </div>
              <h4 className="px-4 text-start font-[14px] text-[#36B37E]  font-bold font-poppins">ALL SET</h4>
            </div>}
        </div>
      </div>
    </MainLayout>
  );
};

export default ActionCompanyInfo;
