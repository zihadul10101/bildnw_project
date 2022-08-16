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
  const summarybox = {
    width: '256px',
    height: '273px',
    background: '#FFFFFF',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }
  const statusbox = {
    padding: '0px 4px',
    left: '0px',
    top: 'calc(50 % - 16px / 2)',
    borderRadius: '3px'
  }
  const innerstatus = {
    width: '49px',
    height: '16px',
    fontStyle: 'normal',
    fontSize: '11px',
    lineHeight: '16px'
  }
  const table = {
    width: '685px',
    maxHeight: '594px',
    background: '#FFFFFF',
    boxShadow: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
    borderRadius: '8px'
  }
  return (
    <MainLayout>

      <div className="px-10 py-10  grid grid-cols-8">
        <div style={table} className="col-span-5  p-6">
          <div className="flex justify-between px-2 items-center my-2">
            <h3 className="text-2xl px-3 font-poppins font-normal text-[#253858]">{t("statement")}</h3>
            <button className="flex justify-center items-center  text-lg px-5 py-2  bg-primary-1 ">
              <img src={repay} alt="" className="w-6 h-6 mr-3" />{" "}
              <p className=" font-poppins font-normal text-white"> {t("repay_now")}{" "}</p>
            </button>
          </div>
          <table className="w-full users-table  mx-auto ">
            <thead >
              <tr className="font-poppins font-normal text-[#6B778C] text-sm pt-2">
                <td>{t("description")}</td>
                <td>{t("amount")}</td>
                <td className="flex ">
                  {t("date")}

                  <img src={short} alt="" className="w-[14px] h-[14px]" />
                </td>

                <td>{t("bill_status")}</td>
              </tr>
            </thead>
            <tbody className='py-4'>



              <tr className="font-poppins leading-5 font-[14px]" >
                <td className=" font-normal ">Steel purchase </td>
                <td className="font-semibold"> SAR 300,000</td>
                <td className=" font-normal ">12/04/2019</td>
                <td >
                  <div style={statusbox} className="bg-[#FFFAE6]  w-14 h-4  text-center">
                    <p style={innerstatus} className="uppercase text-[#FF8B00] font-[11px] font-bold flex items-center  justify-center">  PENDING</p>
                  </div>
                </td>

              </tr>


              <tr className="font-poppins leading-5 font-[14px]" >
                <td className=" font-normal ">Steel purchase </td>
                <td className="font-semibold"> SAR 300,000</td>
                <td className=" font-normal ">12/04/2019</td>
                <td >
                  <div style={statusbox} className="bg-[#E3FCEF]  w-14 h-4  text-center">
                    <p style={innerstatus} className="uppercase text-[#36B37E] font-[11px] font-bold flex items-center  justify-center">  Confirmed</p>
                  </div>
                </td>

              </tr>
              <tr className="font-poppins leading-5 font-[14px]" >
                <td className=" font-normal ">Steel purchase </td>
                <td className="font-semibold"> SAR 300,000</td>
                <td className=" font-normal ">12/04/2019</td>
                <td >
                  <div style={statusbox} className="bg-[#E3FCEF]  w-14 h-4  text-center">
                    <p style={innerstatus} className="uppercase text-[#36B37E] font-[11px] font-bold flex items-center  justify-center">  Confirmed</p>
                  </div>
                </td>

              </tr>

            </tbody>
          

          </table>
          <div className="text-center">
              <ReactPaginate
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

            </div>
        </div>
        <div style={summarybox} className="col-span-2">
          <button className="flex justify-start items-center  text-lg w-full py-2 px-4 rounded bg-dark-gray text-white font-poppins font-normal mr-1">
            {" "}
            <img src={sammary} alt="" className="w-6 h-6 mr-3" />
            {" "}
            {t("summary")}{" "}
          </button>
          <div className="h-full   p-5">
            <ul className="space-y-4 ">
              <li className="text-[14px] border-b-2 pb-1 ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5"> {t("balance")}:</p>
                <p className="font-semibold font-[16px] font-poppins leading-6">SAR 800,000</p>
              </li>
              <li className=" border-b-2 pb-1  ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5">  {t("next_repayment_date")}: </p>
                <p className="font-semibold font-[16px] font-poppins leading-6"> 25/06/2022 </p>
              </li>
              <li className=" ">

                <p className="font-poppins font-normal font-[14px] text-[#8993A4] leading-5">
                  {t("next_repayment_ammount")}:</p>
                <p className="font-semibold font-[16px] font-poppins leading-6"> SAR 500,000</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BillingStatement;