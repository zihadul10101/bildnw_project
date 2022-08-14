import React, { useEffect, useState } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import icon4 from '../../../../Assets/images/feather_upload-cloud.png';
import icon5 from '../../../../Assets/images/documentation-set.png';
import rightIcon from "../../../../Assets/images/rightArrow.svg";
import cancelIcon from "../../../../Assets/images/cancle.svg";
import { useNavigate } from "react-router-dom";
import Status from "../../../../Assets/images/status.svg";
import wrongIcon from "../../../../Assets/images/wrong.svg";
import rightBoldIcon from "../../../../Assets/images/boldRight.svg";
import { useSelector, useDispatch } from "react-redux";
import { PurchaseProjectDetails, GetClientStatus } from "../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";
import { RiErrorWarningLine } from "react-icons/ri";
import ApprovePurchase from "../ApprovePurchase/ApprovePurchase";
import UiInput from "../../../../Components/Common/ui/UiInput";
import UiArrowButton from "../../../../Components/Common/ui/UiArrowButton";

const ActionPurchase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { get_status } = useSelector((state) => state.ApplyCredit);
  const [allTextInput, setAllTextInput] = useState({});
  const [file, setFile] = useState({});
  const [next, setNext] = useState(1);
  const [bar, setBar] = useState(0);

  const { client_details } = useSelector((state) => state.LogInfo);
  const clientDetails = client_details.client_details;

  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setAllTextInput(() => ({
      ...allTextInput,
      [name]: value,
    }));
  };
  const fileUpload = (event) => {
    let files = event.target.files[0];
    const { name } = event.target;
    setFile(() => ({
      ...file,
      [name]: files,
    }));
  };
  const submitPurchase = (e) => {
    e.preventDefault();
    const purchaseDetil = {
      material_description: allTextInput.material_description,
      total_amount: allTextInput.total_amount,
      supplier_name: allTextInput.supplier_name,
      iban: allTextInput.iban,
      status: 14,
      quote_file: file.quote_file,
    };

    dispatch(PurchaseProjectDetails(purchaseDetil));
    navigate("/action-center/order-purchase");
  };
  useEffect(() => {
    dispatch(GetClientStatus(client_details.client_details?.id));
  }, []);
  console.log('get_status', get_status);
  return (
    <>
      {get_status === 12 ? (
        <MainLayout>
          <div className="px-20 py-6 border-b-[3px] border-borderColor">
            <h3 className="text-2xl font-bold">
              Purchase your materials on credit now.
            </h3>
          </div>
          <div className="grid grid-rows-10 space-y-10 px-20 py-6">
            <form
              onSubmit={submitPurchase}
              className="col-span-6 w-2/4 mx-auto"
            >
              <UiInput
                name="material_description"
                label="Material description"
                value=""
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="total_amount"
                label="Total amount agreed with supplier (SAR)"
                value=""
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="supplier_name"
                label="Supplier name"
                value=""
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="iban"
                label="Supplier IBAN"
                value=""
                onChange={handleTextInput}
              ></UiInput>

              <UiInput
                label="Upload the quote from the supplier here."
                name="quote_file"
                type="file"
                onChange={fileUpload}
              ></UiInput>
              <div className="mx-44 mt-5">
                <UiArrowButton label="Next" />
              </div>
            </form>
          </div>
        </MainLayout>
      ) : get_status === 14 ? (
        <ApprovePurchase></ApprovePurchase>
      ) : (
        <MainLayout>
          {/* <div className="mt-16 flex w-2/4 mx-auto items-center border-2 border-borderColor rounded-lg bg-red-300">
            <span className="px-6 py-8  border-r-2 border-borderColor bg-red-400">
              <RiErrorWarningLine className="text-3xl" />
            </span>
            <h3 className="p-4 text-xl bg-red-300">
              You do not have approval from staff for purchase order.
            </h3>
          </div> */}
          <div className="bg-color  px-10 py-10">
            <div className="flex ml-6 justify-between w-1/3 relative">
              <div className="p-2 m-2 text-center w-[200px] ">
                <div className="mx-auto w-2 h-2 button-bg-color rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Purchase Request</h6>
              </div>
              <div className="p-2 m-2 text-center w-[200px] ">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">
                  Estimate
                </h6>
              </div>
              <div onClick={() => { setNext(3); setBar(200) }} className="p-2 m-2 text-center w-[200px] ">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">
                  Submitting Order
                </h6>
              </div>


              <div  className="p-2 m-2 text-center w-[200px] ">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">
                  Reviewing Purchase
                </h6>
              </div>
              <div onClick={() => { setNext(5); setBar(395) }} className="p-2 m-2 text-center w-[200px] ">
                <div className="mx-auto w-2 h-2 bg-gray-200 rounded-full"></div>
                <h6 className="font-[14px] text-[#5E6C84]  font-normal font-poppins">Done</h6>
              </div>
              <div style={{ "width": `${bar}px` }} className={`  mt-2 h-2 rounded-lg button-bg-color absolute left-[2.8rem] top-2`}></div>
            </div>

            {next == 1 &&
              <div className="bg-white shadow-md p-10 mx-8">
                <h4 className="f-color-1 font-semibold font-poppins text-lg pb-5">Purchase your materials on credit now</h4>
                <div className="w-12/12 flex gap-4">
                  <div className="w-1/2">
                    <h6 className="font-[12px] font-medium font-poppins text-[#6B778C]">
                      Material description

                    </h6>
                    <UiInput />
                  </div>
                  <div className="w-1/2">
                    <h6 className="font-[12px] font-medium font-poppins text-[#6B778C]">Total amount agreed with supplier (SAR)</h6>
                    <UiInput />
                  </div>
                </div>
                <div className="w-12/12 flex gap-4">
                  <div className="w-1/2">
                    <h6 className="font-[12px] font-medium font-poppins text-[#6B778C]">Supplier name</h6>
                    <UiInput />
                  </div>
                  <div className="w-1/2">
                    <h6 className="font-[12px] font-medium font-poppins text-[#6B778C]">Supplier IBAN</h6>
                    <UiInput />
                  </div>
                </div>
                <div className="w-12/12 py-4 ">
                  <div className=" flex items-center justify-between p-6 border-dashed border-2 rounded">

                    <div className=" flex items-center space-x-4 ">
                      <img className="p-4" src={icon4} alt="boximg" />
                      <div className="space-y-4">
                        <span className=" button-bg-color p-1 text-white uppercase text-xs">SUPPLIER’s Quote</span>
                        <p className="text-sm">JPG, PNG or PDF, file size no more than 10MB</p>
                      </div>

                    </div>


                    <div className="py-4">
                      <button type="file" className="text-white ml-5 button-bg-color py-1 px-4">Select file</button>
                    </div>

                  </div>
                </div>


                <div className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color text-white" onClick={() => { setNext(2); setBar(110) }} type="submit">
                    {"next"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
              </div>
            }

            {next == 2 &&
              <div className="bg-white shadow-md p-10 mx-8 w-[647px] h-[384px]" >
                <div className="flex justify-between items-center">
                  <div className="w-[237px] h-[16px] font-poppins font-medium font-[16px] text-[#253858]">
                    We are estimating your order
                  </div>
                  <div className="flex justify-center items-center  w-[172px] h-[32px]  rounded bg-red-600">


                    <img src={cancelIcon} alt="" className="w-3 h-3 mr-2" />
                    <span className="text-white font-poppins font-normal "> Cancel purchase</span>

                  </div>
                </div>
                <div className="">
                  <img className="mx-auto p-4" src={Status} alt="boximg" />

                </div>
                <div className="flex  items-center w-[522px]  h-[56px] bg-[#FFFAE6] rounded-sm p-4 top-[304px] left-[24px]">
                  <img src={wrongIcon} alt="" className="w-6 h-6 mr-2" />
                  <span className="text-[#253858] font-poppins font-normal ">Please wait while we send you an estimate via email.</span>
                </div>

              </div>}


            {next == 3 &&
              <div className="bg-white shadow-md p-10 mx-8">
                <h4 className="w-[500px] font-poppins font-medium font-[16px] pb-10 text-[#253858]">Please upload your purchase order</h4>


                <div className="">
                  <div className="flex justify-start gap-[16px] border-dashed border-2  items-center w-[522px]  h-[72px] bg-[#E3FCEF] rounded-sm p-4 top-[64px] left-[24px]">
                    <img src={rightBoldIcon} alt="wrong" className="w-6 h-6 mr-2" />
                    <span className="text-[#253858] font-poppins font-normal ">
                      We’ve sent you an estimate via email, please upload a purchase order against that estimate.                  </span>
                  </div>

                  <div className="mt-6 ">
                    <div className="box w-[725px] h-[92px] top-[160px] py-6 flex items-center justify-between border-dashed border-2 p-4 rounded">
                      <div className="py-3 flex items-center space-x-4 ">
                        <img className="p-4" src={icon4} alt="boximg" />
                        <div className="space-y-4">
                          <span className=" button-bg-color p-1 text-white uppercase text-xs">Upload your purchase order addressed to bildnw here.</span>
                          <p className="text-sm">JPG, PNG or PDF, file size no more than 10MB</p>
                        </div>

                      </div>


                      <div className="py-4">
                        <button type="file" className="text-white ml-5 button-bg-color py-1 px-4">Select file</button>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => { setNext(4); setBar(310) }}  className="flex justify-end   pt-2">
                  <button className="py-2 px-8 capitalize flex justify-between item-center rounded-sm button-bg-color font-poppins text-white" onClick={() => { setNext(2); setBar(110) }} type="submit">
                    {"Purchase"}
                    <img src={rightIcon} alt="" className="w-[16px] h-[14px] mt-[7px] ml-[10px]" />
                  </button>
                </div>
                 
                </div>


              </div>
            }
            {next == 4 &&
              <div className="bg-white shadow-md p-10 mx-8 w-[648px] h-[384px]" >
                <div className="">
                  <img className="mx-auto p-4" src={Status} alt="boximg" />

                </div>
                <h4 className="text-[#36B37E] text-md font-medium uppercase">Reviewing your purchase</h4>
                <h6 className="font-medium">We will update you once your purchase is approved.</h6>
              </div>
            }
            {next == 5 &&
              <div className="bg-white shadow-md p-10 mx-8 w-[648px] h-[384px]" >
                <div className="">
                  <img className="mx-auto p-4" src={icon5} alt="boximg" />

                </div>
                <h4 className="f-color text-md font-medium uppercase">Reviewing your purchase</h4>
                <h6 className="font-medium">We will update you once your purchase is approved.</h6>
              </div>
            }
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default ActionPurchase;
