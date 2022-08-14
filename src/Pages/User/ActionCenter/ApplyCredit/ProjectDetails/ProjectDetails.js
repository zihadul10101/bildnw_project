import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  ProvidedProjectDetails,
  MaterialInfo,
} from "../../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";

// for language
import { useTranslation } from "react-i18next";
import MainLayout from "../../../../../Layout/MainLayout";
import UiInput from "../../../../../Components/Common/ui/UiInput";
import UiButton from "../../../../../Components/Common/ui/UiButton";

const ProjectDetails = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { material_info, projectType, project_details } = useSelector(
    (state) => state.ApplyCredit
  );
  // console.log("project_details", project_details);
  const { client_details } = useSelector((state) => state.LogInfo);
  const client_type = client_details.client_details.client_type;
  const [material, setMaterial] = useState({});
  const [inputValue, setInputValue] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(MaterialInfo());
  }, []);

  const submitProvidedDetails = (e) => {
    e.preventDefault();
    let provideDetails;
    const details = {
      material: inputValue.material,
      if_other_material: inputValue.if_other_material,
      estimated_material_cost: parseInt(inputValue.estimated_material_cost),
      when_material_need: inputValue.when_material_need,
      estimated_profit_material: parseInt(inputValue.estimated_profit_material),
    };
    let contractor = {
      // CONTRACTOR
      quantity: parseInt(inputValue.quantity),
      estimated_profit_project: parseInt(inputValue.estimated_profit_project),
      project_done_before: parseInt(inputValue.project_done_before),
      project_type: inputValue.project_type,
      if_other_project: parseInt(inputValue.if_other_project),
      selling_client_entity: inputValue.selling_client_entity,
      selling_client_name: inputValue.selling_client_name,
      other_info: parseInt(inputValue.other_info),
      active_clients: parseInt(inputValue.active_clients),
      contact_payment_type: parseInt(inputValue.contact_payment_type),
    };
    let manufacturar = {
      // MANUFACTURER
      other_info: parseInt(inputValue.other_info),
      monthly_material_consumtion: inputValue.monthly_material_consumtion,
      monthly_production: inputValue.monthly_production,
      current_capacity: inputValue.current_capacity,
      quality_control_procedure: inputValue.quality_control_procedure,
      active_clients: inputValue.active_clients,
      if_stock: inputValue.if_stock,
      have_stock: inputValue.have_stock,
      if_quality_control: inputValue.if_quality_control,
      order_per_month: inputValue.order_per_month,
      monthly_sales_revenue: inputValue.monthly_sales_revenue,
      standard_payment_terms: inputValue.standard_payment_terms,
      material_using_period: inputValue.material_using_period,
      have_order: inputValue.have_order,
      if_other_client: inputValue.if_other_client,
    };
    let trader = {
      // TRADER
      other_info: parseInt(inputValue.other_info),
      selling_price: inputValue.selling_price,
      standard_payment_terms: inputValue.standard_payment_terms,
      quality_control_procedure: inputValue.quality_control_procedure,
      have_stock: inputValue.have_stock,
      estimated_profit_project: parseInt(inputValue.estimated_profit_project),
      active_clients: inputValue.active_clients,
      if_stock: inputValue.if_stock,
      if_quality_control: inputValue.if_quality_control,
      order_per_month: inputValue.order_per_month,
      monthly_sales_revenue: inputValue.monthly_sales_revenue,
      material_using_period: inputValue.material_using_period,
      have_order: inputValue.have_order,
      if_other_client: inputValue.if_other_client,
    };

    if (client_type === "Contractor") {
      provideDetails = { ...details, ...contractor };
    } else if (client_type === "Manufacturer") {
      provideDetails = { ...details, ...manufacturar };
    } else if (client_type === "Trader") {
      provideDetails = { ...details, ...trader };
    }
    console.log("ffff", provideDetails);
    dispatch(ProvidedProjectDetails(provideDetails));
    navigate("/action-center/project-documentation");
  };
  return (
    <>
      <MainLayout>
        <div className="px-20 py-6 border-b-[3px] border-borderColor">
          <h3 className="text-2xl font-bold">
            {t("provide_details_about_project")}
          </h3>
        </div>
        <form onSubmit={submitProvidedDetails} className="px-20 py-6">
          {/* COMMON START */}
          <div className="material form-group">
            <p className="mr-3 text-lg py-2">{t("what_material_you_need")}</p>
            <select
              onChange={handleChange}
              name="material"
              className="form-select px-4 py-3 border-2  rounded  w-2/6 focus:focus:outline-none focus:ring focus:ring-dark-gray"
              // value={project_details.material}
            >
              <option disabled selected>
                {t("select")}
              </option>
              {material_info.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <UiInput
            name="if_other_material"
            label={t("if_other_material_specify")}
            // value={project_details.if_other_material}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            name="estimated_material_cost"
            label={t("estimated_total_cost")}
            // value={project_details.estimated_material_cost}
            onChange={handleChange}
          ></UiInput>
          <UiInput
            name="when_material_need"
            label={t("when_material_need_client")}
            // value={project_details.when_material_need}
            type="date"
            onChange={handleChange}
          ></UiInput>
          <UiInput
            name="estimated_profit_material"
            label={t("estimated_profit_margin")}
            // value={project_details.estimated_profit_material}
            onChange={handleChange}
          ></UiInput>
          {/* COMMON END */}

          {/* CONTRACTOR START */}
          {client_type === "Contractor" ? (
            <div>
              <UiInput
                name="quantity"
                label={t("quantity_client")}
                // value={project_details.quantity}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="estimated_profit_project"
                label={t("estimated_profit_project_client")}
                // value={project_details.estimated_profit_project}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="project_done_before"
                label={t("project_done_before_client")}
                // value={project_details.project_done_before}
                onChange={handleChange}
              ></UiInput>
              <div className="project_type form-group">
                <p className="mr-3 text-lg py-2">{t("project_type_client")}</p>
                <select
                  onChange={handleChange}
                  name="project_type"
                  className="form-select px-4 py-3 border-2  rounded  w-2/6 focus:focus:outline-none focus:ring focus:ring-dark-gray"
                  // value={project_details.project_type}
                >
                  <option disabled selected>
                    {t("select")}
                  </option>
                  {projectType?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <UiInput
                name="if_other_project"
                label={t("specify_project_details")}
                // value={project_details.if_other_project}
                onChange={handleChange}
              ></UiInput>
              <div className="selling_client_entity form-group">
                <p className="mr-3 text-lg py-2">
                  {t("selling_client_entity_client")}
                </p>
                <select
                  onChange={handleChange}
                  name="selling_client_entity"
                  className="form-select px-4 py-3 border-2 rounded w-2/6 focus:focus:outline-none focus:ring focus:ring-dark-gray"
                  // value={project_details.selling_client_entity}
                >
                  <option disabled selected>
                    {t("select")}
                  </option>
                  <option value="Public">{t("public")}</option>
                  <option value="Private">{t("private")}</option>
                </select>
              </div>
              <UiInput
                name="selling_client_name"
                label={t("selling_client_name_client")}
                // value={project_details.selling_client_name}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="other_info"
                label={t("share_other_info")}
                // value={project_details.other_info}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="active_clients"
                label={t("active_client")}
                // value={project_details.active_clients}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="contact_payment_type"
                label={t("contact_payment_type_client")}
                // value={project_details.contact_payment_type}
                onChange={handleChange}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          {/* CONTRACTOR END */}

          {/* MANUFACTURER START */}
          {client_type === "Manufacturer" ? (
            <div>
              <UiInput
                name="other_info"
                label={t("share_other_info")}
                // value={project_details.other_info}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="monthly_material_consumtion"
                label={t("material_monthly_consumption")}
                // value={project_details.monthly_material_consumtion}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="monthly_production"
                label={t("monthly_production_client")}
                // value={project_details.monthly_production}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="current_capacity"
                label={t("what_capacity_operating")}
                // value={project_details.current_capacity}
                onChange={handleChange}
              ></UiInput>
              <div
                className="quality_control_procedure"
                onChange={handleChange}
              >
                <p className="pb-3">{t("quality_control")}</p>
                <div>
                  <input
                    id="quality_yes"
                    type="radio"
                    value={true}
                    name="quality_control_procedure"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="quality_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="quality_no"
                    type="radio"
                    value={false}
                    name="quality_control_procedure"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="quality_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_quality_control"
                label={t("specify_the_details")}
                // value={project_details.if_quality_control}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="active_clients"
                label={t("active_client_order")}
                // value={project_details.active_clients}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="if_stock"
                label={t("how_much_inventory")}
                // value={project_details.if_stock}
                onChange={handleChange}
              ></UiInput>
              <div className="have_stock" onChange={handleChange}>
                <p className="pb-3">{t("do_you_stock")}</p>
                <div>
                  <input
                    id="have_stock_yes"
                    type="radio"
                    value={true}
                    name="have_stock"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_stock_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="have_stock_no"
                    type="radio"
                    value={false}
                    name="have_stock"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_stock_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_stock"
                label={t("if_you_stock")}
                // value={project_details.if_stock}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="order_per_month"
                label={t("your_order_per_month")}
                // value={project_details.order_per_month}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="monthly_sales_revenue"
                label={t("your_monthly_sales_rev")}
                // value={project_details.monthly_sales_revenue}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="standard_payment_terms"
                label={t("standard_payment_term")}
                // value={project_details.standard_payment_terms}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="material_using_period"
                label={t("how_many_years_manufacterer")}
                // value={project_details.material_using_period}
                onChange={handleChange}
              ></UiInput>
              <div className="have_order" onChange={handleChange}>
                <p className="pb-3">{t("do_you_have_order")}</p>
                <div>
                  <input
                    id="have_order_yes"
                    type="radio"
                    value={true}
                    name="have_order"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_order_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="have_order_no"
                    type="radio"
                    value={false}
                    name="have_order"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_order_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_other_client"
                label={t("specify_client_here")}
                // value={project_details.if_other_client}
                onChange={handleChange}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          {/* MANUFACTURER END */}

          {/* TRADER START */}
          {client_type === "Trader" ? (
            <div>
              <UiInput
                name="other_info"
                label={t("share_other_info")}
                // value={project_details.other_info}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="selling_price"
                label={t("selling_price_client")}
                // value={project_details.selling_price}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="standard_payment_terms"
                label={t("standard_payment_term")}
                // value={project_details.standard_payment_terms}
                onChange={handleChange}
              ></UiInput>
              <div
                className="quality_control_procedure"
                onChange={handleChange}
              >
                <p className="pb-3">{t("quality_control")}</p>
                <div>
                  <input
                    id="quality_yes"
                    type="radio"
                    value={true}
                    name="quality_control_procedure"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="quality_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="quality_no"
                    type="radio"
                    value={false}
                    name="quality_control_procedure"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="quality_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_quality_control"
                label={t("specify_the_details")}
                // value={project_details.if_quality_control}
                onChange={handleChange}
              ></UiInput>

              <div className="have_stock" onChange={handleChange}>
                <p className="pb-3">{t("do_you_stock")}</p>
                <div>
                  <input
                    id="have_stock_yes"
                    type="radio"
                    value={true}
                    name="have_stock"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_stock_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="have_stock_no"
                    type="radio"
                    value={false}
                    name="have_stock"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_stock_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_stock"
                label={t("how_much_inventory")}
                // value={project_details.if_stock}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="estimated_profit_project"
                label={t("estimated_profit_project_client")}
                // value={project_details.estimated_profit_project}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="active_clients"
                label={t("active_client_order")}
                // value={project_details.active_clients}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="order_per_month"
                label={t("your_order_per_month")}
                // value={project_details.order_per_month}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="monthly_sales_revenue"
                label={t("your_monthly_sales_rev")}
                // value={project_details.monthly_sales_revenue}
                onChange={handleChange}
              ></UiInput>
              <UiInput
                name="material_using_period"
                label={t("how_many_years_trader")}
                // value={project_details.material_using_period}
                onChange={handleChange}
              ></UiInput>
              <div className="have_order" onChange={handleChange}>
                <p className="pb-3">{t("do_you_have_order")}</p>
                <div>
                  <input
                    id="have_order_yes"
                    type="radio"
                    value={true}
                    name="have_order"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_order_yes">{t("yes")}</label>
                </div>
                <div>
                  <input
                    id="have_order_no"
                    type="radio"
                    value={false}
                    name="have_order"
                    className="w-5 h-5 mr-2 mb-4"
                  />{" "}
                  <label htmlFor="have_order_no">{t("no")}</label>
                </div>
              </div>
              <UiInput
                name="if_other_client"
                label={t("specify_client_here")}
                // value={project_details.if_other_client}
                onChange={handleChange}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          {/* TRADER END */}

          <div className="text-center mx-96 my-8">
            <UiButton label={t("next")}></UiButton>
          </div>
        </form>
      </MainLayout>
    </>
  );
};

export default ProjectDetails;
