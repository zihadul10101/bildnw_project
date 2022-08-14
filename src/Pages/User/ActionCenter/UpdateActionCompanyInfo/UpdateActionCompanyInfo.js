import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { RetrieveInfo, UpdatedClientRetrieveInfo } from "../../../../Services/Actions/ActionCenterActions/ActionCompanyInfo";
import MainLayout from "../../../../Layout/MainLayout";
import UiInput from "../../../../Components/Common/ui/UiInput";
import CheckboxInput from "../../../../Components/Common/ui/CheckboxInput";
import UiButton from "../../../../Components/Common/ui/UiButton";

const UpdateActionCompanyInfo = () => {
  // for language implementation
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const baseRoot = localStorage.getItem("baseRoot");
  const ref = useRef(null);
  const navigate = useNavigate();
  const { client_id } = useParams();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { retrieve_all_info } = useSelector((state) => state.ActionOverview);
  const clientDetails = client_details.client_details;
  const Authtoken = localStorage.getItem("token");
  const [counter, setCounter] = useState(0);
  const [allFiles, setAllFiles] = useState({});
  const [allTextInput, setAllTextInput] = useState({});
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

  const updateCompanyInfo = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("client", clientDetails?.id);

    Object.keys(allTextInput).map((item) => {
      formData.append(item, allTextInput[item]);
    });

    Object.keys(allFiles).map((item) => {
      if (item) {
        formData.append(item, allFiles[item]);
      }
    });

    // API CALL
    dispatch(UpdatedClientRetrieveInfo(client_id,clientDetails?.id,formData,navigate))
    // axios
    //   .put(`/clients/update/${client_id}/${retrieve_all_info?.id}/detail`, formData, {
    //     headers: {
    //       Authorization: `JWT ${Authtoken}`,
    //     },
    //   })
    //   .then((res) => {
    //     toast.success("File updated successfully!", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       theme: "colored",
    //     });
    //     navigate("/overview");
    //   });
  };
  return (
    <MainLayout>
      <div className="px-20 py-6 border-b-[3px] border-borderColor">
        <h3 className="text-2xl font-bold"> {t('update_company_info')}</h3>
      </div>
      <div className="grid grid-cols-10 gap-4 px-20 py-6">
        <div className="col-span-6">
          <UiInput
            disabled
            name="company_name"
            label={t("what_is_company_name")}
            value={clientDetails?.client_name}
            onChange={handleTextInput}
          ></UiInput>
          <UiInput
            disabled
            name="company_type"
            label={t("what_is_company_type")}
            value={clientDetails?.client_type}
            onChange={handleTextInput}
          ></UiInput>
          <UiInput
            disabled
            name="cr_number"
            label={t("what_is_company_cr")}
            value={clientDetails?.cr_number}
            onChange={handleTextInput}
          ></UiInput>
          <UiInput
            disabled
            name="rep_user_title"
            label={t("what_is_title")}
            type="text"
            placeholder={t("write_answer_place")}
            value={clientDetails?.position}
            onChange={handleTextInput}
          ></UiInput>
        </div>
        <div className="col-span-4"></div>

        <div className="col-span-10">
          <form className="" onSubmit={updateCompanyInfo}>
            <div className="my-6">
              <div className="">
                <p className="pt-4 text-lg">{t("are_you_athorized")}</p>
                <div className="py-2">
                  <label htmlFor="yes" className="text-lg mr-3 pt-2">
                    {t("yes")}
                  </label>
                  <input
                    className="w-4 h-4"
                    id="yes"
                    value="true"
                    name="is_rep_user_auth_signatory"
                    type="radio"
                    onChange={handleTextInput}
                    // onChecked={
                    //   retrieve_all_info.is_rep_user_auth_signatory === true
                    // }
                    // checked={retrieve_all_info.is_rep_user_auth_signatory}
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="no" className="text-lg mr-3 pt-2">
                    {t("no")}
                  </label>
                  <input
                    className="w-4 h-4"
                    id="no"
                    value="false"
                    name="is_rep_user_auth_signatory"
                    type="radio"
                    onChange={handleTextInput}
                    // onChecked={
                    //   retrieve_all_info.is_rep_user_auth_signatory === false
                    // }
                  />
                </div>
              </div>
              <UiInput
                name="auth_signatory_name"
                label={t("if_not_authorized")}
                placeholder={t("write_answer_place")}
                onChange={(event) => handleTextInput(event)}
                value={retrieve_all_info.auth_signatory_name}
              ></UiInput>

              <UiInput
                name="auth_signatory_email"
                label={t("what_is_registered_email")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.auth_signatory_email}
                onChange={(event) => handleTextInput(event)}
              ></UiInput>
              <UiInput
                name="auth_signatory_mobile_no"
                label={t("what_is_mobile_number")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.auth_signatory_mobile_no}
                onChange={handleTextInput}
              ></UiInput>

              {/* laste */}
              <UiInput
                name="last_yr_revenue"
                label={t("what_is_company_revenue")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.last_yr_revenue}
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="last_yr_net_income"
                label={t("what_is_net_income")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.last_yr_net_income}
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="other_active_credit_lines_amount"
                label={t("have_other_active_creditline")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.other_active_credit_lines_amount}
                onChange={handleTextInput}
              ></UiInput>
              <UiInput
                name="num_of_employees"
                label={t("company_employee_number")}
                type="text"
                placeholder={t("write_answer_place")}
                value={retrieve_all_info.num_of_employees}
                onChange={handleTextInput}
              ></UiInput>

              <UiInput
                label={t("finding_source")}
                type="text"
                name="finding_source"
                placeholder={t("how_you_find_us")}
                value={retrieve_all_info.finding_source}
                onChange={handleTextInput}
              ></UiInput>

              <div className="mt-12 flex w-2/4 mx-auto items-center border-2 border-borderColor rounded-lg">
                <span className="mr-4 px-6 py-4 text-2xl border-r-2 border-borderColor">
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
                <h3 className="p-4 text-xl">
                  {counter} / 12 {t("required_uploaded")}
                </h3>
              </div>

              <UiInput
                name="ref_article_of_association"
                // label="Article of association"
                label={t('association_article')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
              {retrieve_all_info?.ref_article_of_association ? (
                <a
                  style={{ color: "blue" }}
                  href={
                    baseRoot + retrieve_all_info?.ref_article_of_association
                  }
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_national_address"
                label={t('national_address')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
              {retrieve_all_info?.ref_national_address ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_national_address}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_commercial_reg"
                label={t('commercial_registration')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
              {retrieve_all_info?.ref_national_address ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_national_address}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_vat_reg"
                label={t('vat_registration')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
              {retrieve_all_info?.ref_vat_reg ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_vat_reg}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_nitaqaat_certificate"
                label={t('nitaqaat_certificate')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
              {retrieve_all_info?.ref_nitaqaat_certificate ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_nitaqaat_certificate}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_gosi_certificate"
                label={t('gosi_certificate')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_gosi_certificate ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_gosi_certificate}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_investment_license"
                label={t('foreign_company_investment_license')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_investment_license ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_investment_license}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_industrial_license"
                label={t('manufacturer_industrial_license')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_industrial_license ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_industrial_license}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_client_profile"
                label={t('company_profile')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_client_profile ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_client_profile}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_iban_letter"
                label={t('iban_letter')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_iban_letter ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_iban_letter}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_1y_finance_statement"
                label={t('1yr_audited_statement')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_1y_finance_statement ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_1y_finance_statement}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
              <UiInput
                name="ref_1y_bank_statement"
                label={t('12month_bank_statement')}
                type="file"
                onChange={fileUpload}
              ></UiInput>
                            {retrieve_all_info?.ref_1y_bank_statement ? (
                <a
                  style={{ color: "blue" }}
                  href={baseRoot + retrieve_all_info?.ref_1y_bank_statement}
                >
                  {t('download')}
                </a>
              ) : (
                ""
              )}
            </div>
            <CheckboxInput
              name="correct_information"
              label={t('hereby_information_true')}
            ></CheckboxInput>
            <div className="text-center py-4">
              <UiButton label={t('update_company_info')}></UiButton>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpdateActionCompanyInfo;
