import React, { useEffect } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// language
import { useTranslation } from "react-i18next";
import { statusDetails } from "../../../Services/Constants/statusHandle";
import { staffDetail } from "../../../Services/Actions/StaffAction/StaffDashboardAction";
import { ValidInfoApproval } from "../../../Services/Actions/StaffAction/StaffAction";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";
import UiProgress from "../../../Components/Common/ui/UiProgress";

const StaffDetails = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { id } = useParams();

  const { staffClientsDetails } = useSelector((state) => state.StaffDashboard);
  // console.log(staffClientsDetails)
  const statusDetail = statusDetails(staffClientsDetails?.status);
  const baseRoot = localStorage.getItem("baseRoot");
  console.log(baseRoot + staffClientsDetails.ref_article_of_association);

  useEffect(() => {
    dispatch(staffDetail(id));
  }, []);

  const preApproval = () => {
    Swal.fire({
      text: "Are you sure you have checked all of the client’s documents and information for validity?",
      icon: "warning",
      showCloseButton: true,
      confirmButtonColor: "!bg-gray-700",
      confirmButtonText: `Yes, pre-approve ${staffClientsDetails?.client}.`,
    }).then((result) => {
      if (result.value) {
        dispatch(ValidInfoApproval(staffClientsDetails?.client_id));
      }
    });
  };

  // const handleCreditOffer = (e) => {
  //   e.preventDefault();
  //   navigate(`/approve-credit-request/${id}`);
  // };
  return (
    <StaffPortalLayout>
      <div className="my-5 bg-gray-100 px-5 py-5">
        <div className="flex mb-3 py-2">
          <div className="col-span-2 flex items-center mr-3">
            <Link
              to="/staff-portal"
              className="rounded border-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span> {t("back_to_dashboard")}</span>
            </Link>
          </div>
          <div className="col-span-10 justify-self-end w-full">
            <div className="my-1">
              <div className="w-full bg-violet-600 text-white whitespace-nowrap border-2 border-violet-600  text-center h-10 p-2 rounded">
                {staffClientsDetails?.client}, {staffClientsDetails?.cr_number}
              </div>
            </div>
          </div>
        </div>

        <div className="my-1">
          <UiProgress
            // status={staffClientsDetails?.status}
            status={t(`${statusDetail.status}`)}
            width="50%"
            bgcolor="bg-violet-600"
          />
        </div>
        <div className="w-full h-6 my-2">
          <span className="text-xs  inline-block py-1 px-2 uppercase rounded text-white bg-sky-400">
            {t("next")} : {t(`${statusDetail.next_step}`)}
          </span>
          <span className="text-xs  inline-block py-1 px-2 ml-2 uppercase rounded text-white bg-gray-500">
            {t("assignee")}:{" "}
            {staffClientsDetails?.get_assign_to
              ? staffClientsDetails?.get_assign_to
              : "None"}
          </span>
        </div>

        <div className="py-2">
          <div className="mb-4 border-2 border-slate-700">
            <div className="flex justify-between items-center px-8 py-2 bg-slate-700">
              <h3 className="text-2xl mb-2 font-semibold text-white">
                {t("staff_action_center")}
              </h3>
            </div>
            <div className="flex flex-wrap items-center p-5 justify-center">
              <a
                href="#"
                target="_blank"
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("message_client")}
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("download_client_profile")}
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("send_custom_notification")}
              </a>
              <Link
                to={`/staff-portal/user-under-client/${id}`}
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("view_all_users")}
              </Link>
              <Link
                // to="/document-client"
                to={`/staff-portal/document-client/${id}`}
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("view_all_documents")}
              </Link>
              <Link
                // to="/activity-client/{id}"
                to={`/staff-portal/activity-client/${id}`}
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("view_activity_log")}
              </Link>
              <p
                onClick={() => preApproval()}
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out cursor-pointer"
              >
                {t("validate_info")}
              </p>
              <Link to={`/staff-portal/view-credit-request/${id}`}>
                <span className="cursor-pointer text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out">
                  {t("view_credit_request")}
                </span>
              </Link>
              <Link
                to={`/staff-portal/approve-credit-request/${id}`}
                className="cursor-pointer text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("make_credit_offer")}
              </Link>
              <Link
                to={`/staff-portal/purchase-orders-client/${id}`}
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("view_purchase_orders")}
              </Link>
              <a
                href="#"
                // target="_blank"
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("confirm_purchase")}
              </a>
              <a
                href="#"
                // target="_blank"
                className=" text-lg rounded border-2 m-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-6 hover:text-gray-300 transition duration-100 ease-in-out"
              >
                {t("confirm_payment")}
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 gap-4 py-4 space-x-12">
            <div className="col-span-6">
              <div className="mb-4 border-2 border-slate-700">
                <div className="flex justify-between items-center px-8 py-2 bg-slate-700">
                  <h3 className="text-2xl font-semibold text-white">
                    {t("details")}
                  </h3>
                </div>
                <div className="px-10 py-4 h-64 overflow-y-scroll">
                  <table className="details_table">
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("client_name")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.client}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("client_type")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.client_type}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("cr_number")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.cr_number}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">{t("email")}</td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.auth_signatory_email}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("mobile")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.auth_signatory_mobile_no}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("auth_signatory_name")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.auth_signatory_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("certification")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.certifaction ? "Yes" : "No"}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("client_admin_name")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.client_admin?.client_admin_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("client_admin_position")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {
                          staffClientsDetails?.client_admin
                            ?.client_admin_position
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("rep_user_name")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.rep_user_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("registration_date")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {new Date(
                          staffClientsDetails?.created_at
                        ).toDateString()}
                      </td>
                    </tr>

                    <tr>
                      <td className="w-[30%] font-medium py-2">
                        {t("finding_source")}
                      </td>
                      <td className="w-[30%] font-medium py-2">
                        {staffClientsDetails?.finding_source}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="mb-4 border-2 border-slate-700">
                <div className="px-8 py-2 bg-slate-700">
                  <h3 className="text-2xl font-semibold text-white">
                    {t("company_documentation")}
                  </h3>
                </div>
                <div className="max-h-64 overflow-y-scroll">
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("association_article")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          staffClientsDetails.ref_article_of_association
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("national_address")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + staffClientsDetails.ref_national_address
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("commercial_registration")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={baseRoot + staffClientsDetails.ref_commercial_reg}
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("vat_registration")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={baseRoot + staffClientsDetails.ref_vat_reg}
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("nitaqaat_certificate")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          staffClientsDetails.ref_nitaqaat_certificate
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("gosi_certificate")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + staffClientsDetails.ref_gosi_certificate
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("investment license")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + staffClientsDetails.ref_investment_license
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("client_profile")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={baseRoot + staffClientsDetails.ref_client_profile}
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("iban_letter")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={baseRoot + staffClientsDetails.ref_iban_letter}
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("finance_statement_1y")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          staffClientsDetails.ref_1y_finance_statement
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("bank_statement_1y")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + staffClientsDetails.ref_1y_bank_statement
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaffPortalLayout>
  );
};

export default StaffDetails;
