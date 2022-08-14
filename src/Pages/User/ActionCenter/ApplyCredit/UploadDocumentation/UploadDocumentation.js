import React, { useEffect, useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  ApplyCreditLine,
  MaterialInfo,
} from "../../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";

import { useTranslation } from "react-i18next";
import MainLayout from "../../../../../Layout/MainLayout";
import UiInput from "../../../../../Components/Common/ui/UiInput";
import UiButton from "../../../../../Components/Common/ui/UiButton";
const UploadDocumentation = () => {
  // for language
  const { t } = useTranslation();
  const {
    credit_request,
    project_details,
    material_info,
    project_type,
    creditline_request,
  } = useSelector((state) => state.ApplyCredit);
  const { client_details } = useSelector((state) => state.LogInfo);
  const client_type = client_details.client_details.client_type;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [allFiles, setAllFiles] = useState({});
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

  const handleDocumentationProject = (event) => {
    event.preventDefault();
    let formData = new FormData();
    Object.keys(project_details).map((item) => {
      formData.append(item, project_details[item]);
    });
    formData.append("status", 8);
    Object.keys(allFiles).map((file) => {
      formData.append(file, allFiles[file]);
    });
    Object.keys(credit_request).map((data) => {
      formData.append(data, credit_request[data]);
    });

    dispatch(ApplyCreditLine(formData, client_details.client_details?.id, navigate));
  };
  // useEffect(() => {
  //   if (creditline_request === 200) {
  //     navigate("/action-center/applied-successfully");
  //   }
  // }, [creditline_request]);

  return (
    <>
      <MainLayout>
        <div className="px-20 py-6 border-b-[3px] border-borderColor">
          <h3 className="text-2xl font-bold">
            {t('upload_docs_of_project')}
          </h3>
        </div>

        <div className="mt-12 flex w-2/4 mx-auto items-center border-2 border-borderColor rounded-lg">
          <span className="mr-4 px-6 py-4 text-2xl border-r-2 border-borderColor">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
          <h3 className="p-4 text-xl">
            {counter} /{" "}
            {client_type === "Contractor" || client_type === "Manufacturer"
              ? "3"
              : "1"}{" "}
            {t('required_document_uploaded')}
          </h3>
        </div>
        <form onSubmit={handleDocumentationProject} className="px-20 py-6">
          {client_type === "Contractor" ? (
            <div className="contractor">
              <UiInput
                label={t('project_contact_client')}
                name="project_contact"
                type="file"
                onChange={fileUpload}
              ></UiInput>
              <UiInput
                label={t('quantity_bill_file')}
                name="quantity_bill_file"
                type="file"
                onChange={fileUpload}
              ></UiInput>
              <UiInput
                label={t('final_supplier_quotation')}
                name="supplier_quotation"
                type="file"
                onChange={fileUpload}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          {client_type === "Manufacturer" ? (
            <div className="manufacturer">
              <UiInput
                label={t('monthly_production_reports')}
                name="monthly_production_report"
                type="file"
                onChange={fileUpload}
              ></UiInput>
              <UiInput
                label={t('purchase_order_file')}
                name="purchase_order"
                type="file"
                onChange={fileUpload}
              ></UiInput>
              <UiInput
                label={t('any_other_useful_docs')}
                name="any_other_docs"
                type="file"
                onChange={fileUpload}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          {client_type === "Trader" ? (
            <div className="trader">
              <UiInput
                label={t('any_other_useful_docs')}
                name="any_other_docs"
                type="file"
                onChange={fileUpload}
              ></UiInput>
            </div>
          ) : (
            ""
          )}
          <div className="text-center mx-96 my-8">
            <UiButton type="submit" label={t("finish")}></UiButton>
          </div>
        </form>
      </MainLayout>
    </>
  );
};

export default UploadDocumentation;
