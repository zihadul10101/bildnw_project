import React, { useEffect, useState } from "react";
import sammary from "../../../../Assets/images/sammary.svg";
import repay from "../../../../Assets/images/repay.svg";
import short from "../../../../Assets/images/Sort.svg";
import { BsCheck2Circle } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { GetStatements, GetSummary } from "../../../../Services/Actions/BillingAction/StatementAction";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import MainLayout from "../../../../Layout/MainLayout";
const BillingStatement = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const { client_details } = useSelector((state) => state.LogInfo);
  const clientDetails = client_details.client_details;
  const { statements, summary } = useSelector((state) => state.BillingInfo);
  const [paginationNumber, setPaginationNumber] = useState(3);


  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = paginationNumber;
  const pagesVisited = pageNumber * usersPerPage;
  const displaystatements = statements
    ?.slice(pagesVisited, pagesVisited + usersPerPage)



  const pageCount = Math.ceil(statements.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  const statusStyle = {
    Repayment: "green",
    Purchase: "black",
    Pending: "orange",
    Approved: "green",
    Rejected: "red",
  };


  useEffect(() => {
    // dispatch(GetStatements(clientDetails.id))
    // dispatch(GetSummary(clientDetails.id))
  }, []);

  return (
    <MainLayout>

      <div className="px-10 py-10  grid grid-cols-10">
        <div className="col-span-7  shadow-lg shadow-gray-300 w-[658px]">
          <div className="flex justify-between px-2 items-center my-6">
            <h3 className="text-[16px] px-3 font-poppins font-medium text-[#253858]">{t("statement")}</h3>
            <button className="flex justify-center items-center  text-lg px-5 py-2  bg-primary-1 ">
              <img src={repay} alt="" className="w-6 h-6 mr-3" />{" "}
              <p className=" font-poppins font-normal text-white"> {t("repay_now")}{" "}</p>
            </button>
          </div>
          <div className="mr-3">
            <table className="w-full users-table mx-auto">
              <thead>
                <tr className="font-poppins font-normal text-[#6B778C] text-[12px] px-4 pt-2">
                  <td>{t("description")}</td>
                  <td>{t("amount")}</td>
                  <td className="flex justify-center items-center">
                    {t("date")}

                    <img src={short} alt="" className="w-[14px] h-[14px]" />
                  </td>

                  <td>{t("bill_status")}</td>
                </tr>
              </thead>
              <tbody className='py-4'>
                {displaystatements.map((statement) => {
                  const date = new Date(statement?.created_at);
                  const formatedDate =
                    date.getDate() +
                    "/" +
                    parseInt(date.getMonth() + 1) +
                    "/" +
                    date.getFullYear();

                  return (
                    <tr key={statement?.id}>
                      <td>{statement?.reason} </td>

                      <td>

                        <p style={{ color: `${statusStyle[statement?.reason]}` }}>
                          SAR {statement?.amount}
                        </p>

                      </td>
                      <td>{formatedDate}</td>

                      <td>
                        <p style={{ backgroundColor: `${statusStyle[statement?.status]}` }} className="bg-sky-400 py-2 w-32 text-white text-center rounded-full">
                          {statement?.status}
                        </p>
                      </td>

                    </tr>
                  )
                })}
              </tbody>
              <div className="text-center">
                {!statements.length < 1 && <ReactPaginate
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

            </table>
          </div>

        </div>
        <div className="col-span-2  shadow-lg shadow-gray-300  h-[273px] w-[256px] rounded">
          <button className="flex justify-start items-center  text-sm w-full py-2 px-4 rounded bg-dark-gray text-white font-poppins font-semibold mr-1">
            {" "}
            <img src={sammary} alt="" className="w-6 h-6 mr-3" />
            {" "}
            {t("summary")}{" "}
          </button>
          <div className="h-full   py-5">
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
      </div>
    </MainLayout>
  );
};

export default BillingStatement;
