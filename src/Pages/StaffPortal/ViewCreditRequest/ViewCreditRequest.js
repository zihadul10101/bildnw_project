import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import { CreditRequestView } from "../../../Services/Actions/StaffAction/StaffDashboardAction";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";

const ViewCreditRequest = () => {
  const { t } = useTranslation();

  const baseRoot = localStorage.getItem("baseRoot");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { credit_req_view, staffClientsDetails } = useSelector(
    (state) => state.StaffDashboard
  );
  const client_type = staffClientsDetails.client_type;

  // Replacing the undefigned values with not given
  Object.keys(credit_req_view).forEach((objName) => {
    Object.keys(credit_req_view[objName]).forEach((key) => {
      if (credit_req_view[objName][key] == "undefined") {
        credit_req_view[objName][key] = "Not given";
      }
    });
  });

  useEffect(() => {
    dispatch(CreditRequestView(id));
  }, [id]);
  return (
    <StaffPortalLayout>
      <div className="mt-6">
        <span
          onClick={() => navigate(-1)}
          className="rounded border-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out cursor-pointer"
        >
          {localStorage.getItem("lng") === "ar" ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
        </span>
        <h3 className="text-2xl text-center py-6">
          {t("view_credit_request_of")} {staffClientsDetails?.client}
        </h3>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="grid grid-cols-12 gap-4 py-4">
          <div className="col-span-7">
            <div className="mb-4 border-2 border-slate-700">
              <div className="flex justify-between items-center px-8 py-2 bg-slate-700">
                <h3 className="text-2xl font-semibold text-white">
                  {t("details")}
                </h3>
              </div>
              <div className="px-10 py-4 h-96 overflow-y-scroll">
                {/* COMMON */}
                <table className="details_table">
                  <tr>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {t("creditline_size")}
                    </td>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {credit_req_view.common?.size_of_credit_line}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {t("material")}
                    </td>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {credit_req_view.common?.material}
                    </td>
                  </tr>
                  {credit_req_view.common?.material !== "Other" ? (
                    ""
                  ) : (
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_other_material")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.common?.if_other_material}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {t("when_material_need")}
                    </td>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {credit_req_view.common?.when_material_need}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {t("estimated_material_cost")}
                    </td>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {credit_req_view.common?.estimated_material_cost}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {t("estimated_profit_material")}
                    </td>
                    <td className="text-lg w-[30%] font-medium py-2">
                      {credit_req_view.common?.estimated_profit_material}
                    </td>
                  </tr>
                </table>

                {/* CONTRACTOR */}
                {client_type === "Contractor" ? (
                  <table className="contractor details_table">
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("selling_client_name")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.selling_client_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("selling_client_entity")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.selling_client_entity}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("quantity")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.quantity}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("project_type")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.project_type}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("project_done_before")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.project_done_before}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("other_info")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.other_info}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_other_project")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.if_other_project}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("estimated_profit_project")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.estimated_profit_project}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("contact_payment_type")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.contact_payment_type}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("active_clients")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.contractor?.active_clients}
                      </td>
                    </tr>
                  </table>
                ) : client_type === "Manufacturer" ? (
                  <table className="manufacturer details_table">
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("active_clients")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.active_clients}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("current_capacity")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.current_capacity}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("have_order")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.have_order}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("have_stock")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.have_stock}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_other_client")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.if_other_client}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_quality_control")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.if_quality_control}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_stock")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.if_stock}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("material_using_period")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.material_using_period}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("monthly_material_consumption")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {
                          credit_req_view.manufacturar
                            ?.monthly_material_consumption
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("monthly_production")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.monthly_production}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("monthly_sales_revenue")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.monthly_sales_revenue}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("order_per_month")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.order_per_month}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("other_info")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.other_info}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("quality_control_procedure")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {
                          credit_req_view.manufacturar
                            ?.quality_control_procedure
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("standard_payment_terms")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.manufacturar?.standard_payment_terms}
                      </td>
                    </tr>
                  </table>
                ) : client_type === "Trader" ? (
                  <table className="trader details_table">
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("active_clients")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.active_clients}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("estimated_profit_project")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.estimated_profit_project}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("have_order")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.have_order}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("have_stock")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.have_stock}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_other_client")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.if_other_client}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_quality_control")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.if_quality_control}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("if_stock")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.if_stock}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("material_using_period")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.material_using_period}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("monthly_sales_revenue")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.monthly_sales_revenue}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("order_per_month")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.order_per_month}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("other_info")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.other_info}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("selling_price")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.selling_price}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {t("standard_payment_terms")}
                      </td>
                      <td className="text-lg w-[30%] font-medium py-2">
                        {credit_req_view.trader?.standard_payment_terms}
                      </td>
                    </tr>
                  </table>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="mb-4 border-2 border-slate-700">
              <div className="px-8 py-2 bg-slate-700">
                <h3 className="text-2xl font-semibold text-white">
                  {t("credit_request_docs")}
                </h3>
              </div>
              {/* CONTRACTOR */}
              {client_type === "Contractor" ? (
                <div className="max-h-96 overflow-y-scroll">
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("project_contact")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + credit_req_view.contractor?.project_contact
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
                        {t("quanity_bill_file")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          credit_req_view.contractor?.quanity_bill_file
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
                        {t("supplier_quotation")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          credit_req_view.contractor?.supplier_quotation
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                </div>
              ) : client_type === "Manufacturer" ? (
                <div className="max-h-96 overflow-y-scroll">
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">
                        {t("monthly_production_report")}
                      </h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot +
                          credit_req_view.manufaturar?.monthly_production_report
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
                      <h5 className="font-semibold">{t("purchase_order")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + credit_req_view.manufaturar?.purchase_order
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
                      <h5 className="font-semibold">{t("any_other_docs")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={
                          baseRoot + credit_req_view.manufaturar?.any_other_docs
                        }
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                </div>
              ) : client_type === "Trader" ? (
                <div className="max-h-96 overflow-y-scroll">
                  <div className="px-6 py-4 grid grid-cols-12">
                    <div className="col-span-8">
                      <h5 className="font-semibold">{t("any_other_docs")}</h5>
                    </div>
                    <div className="col-span-4 text-right">
                      <a
                        href={baseRoot + credit_req_view.trader?.any_other_docs}
                        target="_blank"
                        className="text-lg px-6 py-2 rounded bg-dark-gray text-white cursor-pointer"
                      >
                        {t("download")}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </StaffPortalLayout>
  );
};

export default ViewCreditRequest;
