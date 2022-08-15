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

  useEffect(() => {
    dispatch(AllPurchase(client_details.client_details?.id));
  }, [client_details.client_details?.id]);

  useEffect(() => {
    if (!allPurchaseInfo) return;
    const filteredData = [];
    const paidData = [];
    allPurchaseInfo?.map((item) => {
      if (
        item.is_accepted === "Approved" ||
        item.is_accepted === "Pending" ||
        item.is_accepted === "Re-pay pending"
      ) {
        filteredData.push(item);
      } else if (item.is_accepted === "Paid") {
        paidData.push(item);
      }
    });
    setPending(filteredData);
    setPaid(paidData);
    console.log("111", paid);
  }, [allPurchaseInfo]);

  const handleRepayment = (item) => {
    console.log("itemvvv", paid);
    if (
      item.is_accepted === "Re-pay pending" ||
      item.is_accepted === "Pending"
    ) {
      toast.warning("Please wait for staff confirmation", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });

      return;
    }
    dispatch(RePayment(client_details.client_details?.id, item?.id, navigate));
  };

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

          {click === 'active' ? (
            <>
              <div className="">
                {displaypending.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-8 grid grid-cols-12 space-x-2 items-center border-b-[3px] border-borderColor"
                  >
                    <div className="col-span-4">
                      <span className="bg-violet-700 px-6 py-1  text-white text-center uppercase letter-spacing rounded ">
                        {item.is_accepted}
                      </span>
                      <h3 className="py-4 text-[22px] font-semibold text-primary-ash-400">
                        SAR {item.total_amount} {item.material}
                      </h3>
                      <p className="letter-spacing ">
                        {t("purchase_order_submitted")} &nbsp;
                        {new Date(item.created_at).toDateString()}
                      </p>
                    </div>
                    <div className="col-span-8">
                      <div className="flex justify-end items-center">
                        <a href={baseRoot + item.quote_file} target="_blank">
                          <UiDowanloadButton
                            label={t("download_creditline_agreement")}
                          />
                        </a>
                        <a href={baseRoot + item.order_address} target="_blank">
                          <UiDowanloadButton label={t("download_invoice")} />
                        </a>
                        <p
                          onClick={() => handleRepayment(item)}
                          className={` ${item.is_accepted === "Re-pay pending"
                              ? "flex justify-center cursor-pointer items-center  ml-5 bg-primary-ash-light rounded px-3 py-2 text-white bg-slate-700"
                              : "flex justify-center cursor-pointer items-center  ml-5 bg-primary-ash-light rounded px-3 py-2 text-slate"
                            } `}
                        >
                          <BsCheck2 className="text-slate-500 mr-3 font-semibold" />
                          {t("repay_now")}
                        </p>
                        {item.is_accepted === "Pending" ? (
                          <p className="text-xl ml-2 text-red-500 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} />
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {!pending.length < 1 && <ReactPaginate
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
                />
                }
              </div>
              {pending.length == 0 ? (
                <p className="text-center text-xl text-slate-700 py-6">
                  {t("no_active_loan")}
                </p>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <div className="">
              {displaypaid.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-8 grid grid-cols-12 space-x-2 items-center border-b-[3px] border-borderColor"
                >
                  <div className="col-span-4">
                    <span className="bg-violet-700 px-6 py-1  text-white text-center uppercase letter-spacing rounded ">
                      {item.is_accepted}
                    </span>
                    <h3 className="py-4 text-[22px] font-semibold text-primary-ash-400">
                      SAR {item.total_amount} {item.material}
                    </h3>
                    <p className="letter-spacing ">
                      {t("purchase_order_submitted")} &nbsp;
                      {new Date(item.created_at).toDateString()}
                    </p>
                  </div>
                  <div className="col-span-8">
                    <div className="flex justify-end">
                      <a href={baseRoot + item.quote_file} target="_blank">
                        <UiDowanloadButton
                          label={t("download_creditline_agreement")}
                        />
                      </a>
                      <a href={baseRoot + item.order_address} target="_blank">
                        <UiDowanloadButton
                          label={t("download_purchase_order")}
                        />
                      </a>
                      <a href={baseRoot + item.order_address} target="_blank">
                        <UiDowanloadButton label={t("download_invoice")} />
                      </a>
                    </div>
                  </div>
                </div>
                
              ))}
               {!paid.length < 1 && <ReactPaginate
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
                />
                }
              </div>
              {paid.length == 0 ? (
                <p className="text-center text-xl text-slate-700 py-6">
                  {t("no_previous_loan")}
                </p>
              ) : (
                ""
              )}
            </>
          )}

        
        </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AllLoans;
