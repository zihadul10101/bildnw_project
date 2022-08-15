import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import UiDowanloadButton from "../../../../Components/Common/ui/UiDowanloadButton";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  AllPurchase,
  RePayment,
} from "../../../../Services/Actions/LoansAction/LoansAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../../../../Layout/MainLayout";
import reapyIcons from "../../../../Assets/images/repayIcons.svg";
import reapyWhitIcons from "../../../../Assets/images/reapywhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";



const boxShadow = {
  boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)'
}

const AllLoans = () => {

  const [click, setClicked] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseRoot = localStorage.getItem("baseRoot");
  const [pending, setPending] = useState([]);
  const [paid, setPaid] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(3);
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const [prevous, setPrevous] = useState(false);
  const { allPurchaseInfo } = useSelector((state) => state.LoansInfo);
  const { client_details } = useSelector((state) => state.LogInfo);
  const [pageNumber, setPageNumber] = useState(0);

  // useEffect(() => {
  //   dispatch(AllPurchase(client_details.client_details?.id));
  // }, [client_details.client_details?.id]);

  // useEffect(() => {
  //   if (!allPurchaseInfo) return;
  //   const filteredData = [];
  //   const paidData = [];
  //   allPurchaseInfo?.map((item) => {
  //     if (
  //       item.is_accepted === "Approved" ||
  //       item.is_accepted === "Pending" ||
  //       item.is_accepted === "Re-pay pending"
  //     ) {
  //       filteredData.push(item);
  //     } else if (item.is_accepted === "Paid") {
  //       paidData.push(item);
  //     }
  //   });
  //   setPending(filteredData);
  //   setPaid(paidData);
  //   console.log("111", paid);
  // }, [allPurchaseInfo]);

  // const handleRepayment = (item) => {
  //   console.log("itemvvv", paid);
  //   if (
  //     item.is_accepted === "Re-pay pending" ||
  //     item.is_accepted === "Pending"
  //   ) {
  //     toast.warning("Please wait for staff confirmation", {
  //       position: toast.POSITION.TOP_RIGHT,
  //       theme: "colored",
  //     });

  //     return;
  //   }
  //   dispatch(RePayment(client_details.client_details?.id, item?.id, navigate));
  // };

  // pagination

  const usersPerPage = paginationNumber;
  const pagesVisited = pageNumber * usersPerPage;
  const displaypending = pending
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    ;
  const displaypaid = paid
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    ;

  const pageCount = Math.ceil(pending.length / usersPerPage);
  const pageCount2 = Math.ceil(paid.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <MainLayout>

        <div className="px-10 py-10 bg-color ">
        <div style={boxShadow} className="p-4 bg-white">

        <div className=" space-y-4 py-5 bg-white ">
            <label htmlFor='' className="block pt-4 font-medium text-base">
              {t("your_loans")}
            </label>
            <select name="companyType" id="companyType"  value={click}
              onChange={(e) => setClicked(e.currentTarget.value)} className="border-[3px] border-inputBorder  block my-2 rounded focus:outline-inputBorder px-3 py-3 text-sm bg-white">
              <option disabled selected>
                {t("select")}
              </option>
              <option  value="active">Active Loans</option>
              <option value="prevous">previous loans</option>
            </select>
          </div>
          <div className="shadow-lg shadow-gray-300 p-4 bg-white">

            <div className=" space-y-4 py-5 bg-white ">
              <label htmlFor='' className="block pt-4 font-poppins font-bold text-lg">
                {t("your_loans")}
              </label>
              <select name="companyType" id="companyType" value={click}
                onChange={(e) => setClicked(e.currentTarget.value)} className="border-[3px] border-inputBorder  block my-2 rounded focus:outline-inputBorder px-3 py-3 text-lg bg-white">
                <option disabled selected>
                  {t("select")}
                </option>
                <option value="active">Active Loans</option>
                <option value="prevous">previous loans</option>
              </select>
            </div>

            {click === 'active' ? (
              <>
                <div className="">

                  <div
                    className="px-4 py-8 grid grid-cols-12 space-x-2 items-center border-b-[3px]"
                  >
                    <div className="col-span-4">
                      <span className="bg-[#0065FF] px-4 py-1 font-poppins font-bold text-white text-center uppercase letter-spacing rounded ">
                        Proccessing
                      </span>
                      <h3 className="py-3 text-[14px] font-semibold font-poppins  leading-5">
                        SAR 200,000 Steel purchase
                      </h3>
                      <p className=" leading-5 text-[12px] leading-5 font-medium font-poppins text-[#97A0AF]">
                        {t("purchase_order_submitted")} &nbsp;
                        21/05/2022
                      </p>
                    </div>
                    <div className="col-span-8 ">
                      <div className="flex justify-end items-center gap-x-2">
                        <a target="_blank">
                          <UiDowanloadButton
                            label={t("Download credit line agreement")}
                          />
                        </a>
                        <a target="_blank">
                          <UiDowanloadButton label={t("Download puchase order")} />
                        </a>
                        <p

                          className=
                          "flex justify-center cursor-pointer items-center   bg-[#F4F5F7] rounded-sm px-3 py-2 text-[#A5ADBA]"

                        >
                          <img className="text-slate-500 mr-3 font-semibold" src={reapyIcons} />
                          {t("repay_now")}
                        </p>


                      </div>
                    </div>
                  </div>
                  <div
                    key={5}
                    className="px-4 py-8 grid grid-cols-12 space-x-2 items-center border-b-[3px]"
                  >
                    <div className="col-span-4">
                      <span className="bg-[#FFAB00] px-4 py-1 font-poppins font-bold text-white text-center uppercase letter-spacing rounded ">
                        75 Days Until due
                      </span>
                      <h3 className="py-3 text-[14px] font-semibold font-poppins  leading-5">
                        SAR 200,000 Steel purchase
                      </h3>
                      <p className=" leading-5 text-[12px] leading-5 font-medium font-poppins text-[#97A0AF]">
                        {t("purchase_order_submitted")} &nbsp;
                        21/05/2022
                      </p>
                    </div>
                    <div className="col-span-8 ">
                      <div className="flex justify-end items-center gap-x-2">
                        <a target="_blank">
                          <UiDowanloadButton
                            label={t("Download credit line agreement")}
                          />
                        </a>
                        <a target="_blank">
                          <UiDowanloadButton label={t("Download puchase order")} />
                        </a>
                        <p

                          className=
                          "flex justify-center cursor-pointer items-center text-white   bg-[#00B09E] rounded-sm px-3 py-2"
                        >
                          <img className="text-white mr-3 font-semibold" src={reapyWhitIcons} />
                          {t("repay_now")}
                        </p>



                      </div>
                    </div>
                  </div>
                  <div
                    key={5}
                    className="px-4 py-8 grid grid-cols-12 space-x-2 items-center "
                  >
                    <div className="col-span-4">
                      <span className="bg-[#FF5630] px-4 py-1 font-poppins font-bold text-white text-center uppercase letter-spacing rounded ">
                        7 Days until due
                      </span>
                      <h3 className="py-3 text-[14px] font-semibold font-poppins  leading-5">
                        SAR 200,000 Steel purchase
                      </h3>
                      <p className=" leading-5 text-[12px] leading-5 font-medium font-poppins text-[#97A0AF]">
                        {t("purchase_order_submitted")} &nbsp;
                        21/05/2022
                      </p>
                    </div>
                    <div className="col-span-8 ">
                      <div className="flex justify-end items-center gap-x-2">
                        <a target="_blank">
                          <UiDowanloadButton
                            label={t("Download credit line agreement")}
                          />
                        </a>
                        <a target="_blank">
                          <UiDowanloadButton label={t("Download puchase order")} />
                        </a>
                        <p

                          className=
                          "flex justify-center cursor-pointer items-center text-white   bg-[#00B09E] rounded-sm px-3 py-2 "

                        >
                          <img className="text-white mr-3 font-semibold" src={reapyWhitIcons} />
                          {t("repay_now")}
                        </p>



                      </div>
                    </div>
                  </div>

                  {/* <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  /> */}

                </div>

              </>
            ) : (
              <>
                <div className="">

                  <div
                    className="px-4 py-8 grid grid-cols-12 space-x-2 items-center "
                  >
                    <div className="col-span-4">
                      <span className="bg-[#00B09E] px-4 py-1 font-poppins font-bold text-white text-center uppercase letter-spacing rounded ">
                        DONE
                      </span>
                      <h3 className="py-3 text-[14px] font-semibold font-poppins  leading-5">
                        SAR 200,000 Steel purchase
                      </h3>
                      <p className=" leading-5 text-[12px] leading-5 font-medium font-poppins text-[#97A0AF]">
                        {t("purchase_order_submitted")} &nbsp;
                        Purchase made 11/05/2022
                      </p>
                    </div>
                    <div className="col-span-8">
                      <div className="flex justify-end gap-x-2">
                        <a target="_blank">
                          <UiDowanloadButton
                            label={t("download_creditline_agreement")}
                          />
                        </a>
                        <a target="_blank">
                          <UiDowanloadButton
                            label={t("download_purchase_order")}
                          />
                        </a>
                        <a target="_blank">
                          <UiDowanloadButton label={t("download_invoice")} />
                        </a>
                      </div>
                    </div>
                  </div>


                  {/* <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount2={pageCount2}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  /> */}

                </div>

              </>
            )}


          </div>
        </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AllLoans;
