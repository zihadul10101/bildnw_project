import React, { useState, useEffect } from "react";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";

const DocumentsForClientName = () => {
  const { t } = useTranslation();
  const [allDocs, setAllDocs] = useState({});
  const baseRoot = localStorage.getItem("baseRoot");
  const { id } = useParams();
  const navigate = useNavigate();
  const [filterTypeFile, setFilterTypeFile] = useState({});
  const { staffClientsDetails } = useSelector((state) => state.StaffDashboard);
  const client_type = staffClientsDetails.client_type;

  useEffect(() => {
    axios.get(`/logs/all/${id}/files`).then((res) => {
      setAllDocs(res.data);

      if (client_type === "Contractor") {
        setFilterTypeFile(res.data.credit_line.contractor);
      } else if (client_type === "Trader") {
        setFilterTypeFile(res.data.credit_line.trader);
      } else if (client_type === "Manufacturer") {
        setFilterTypeFile(res.data.credit_line.manufacturar);
      }
    });
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
        <h3 className="text-3xl text-center py-6">
          {t("documents_for")} {staffClientsDetails?.client}
        </h3>
      </div>
      <table className="w-full users-table mx-auto">
        <thead>
          <tr>
            <td>{t("document_type_cap")}</td>
            <td>
              <span className="mr-2">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
              {t("docs_upload_time")}
            </td>
            <td>{t("download_cap")}</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(allDocs.client_detail || {}).map((item, index) => (
            <tr key={index}>
              <td>{t(`${item}`)}</td>
              <td>22/07/22</td>
              <td>
                <a
                  href={baseRoot + allDocs.client_detail[item]}
                  target="_blank"
                  className="bg-green-400 py-2 px-4 text-white text-center rounded-full"
                >
                  {t("download")}
                </a>
              </td>
            </tr>
          ))}
          {Object.keys(filterTypeFile || {}).map((item, index) => (
            <tr key={index}>
              <td>{t(`${item}`)}</td>
              <td>22/07/22</td>
              <td>
                <a
                  href={baseRoot + filterTypeFile[item]}
                  target="_blank"
                  className="bg-green-400 py-2 px-4 text-white text-center rounded-full"
                >
                  {t("download")}
                </a>
              </td>
            </tr>
          ))}
          {Object.keys(allDocs.purchase || {}).map((item, index) => (
            <tr key={index}>
              <td>{t(`${item}`)}</td>
              <td>22/07/22</td>
              <td>
                <a
                  href={baseRoot + allDocs.purchase[item]}
                  target="_blank"
                  className="bg-green-400 py-2 px-4 text-white text-center rounded-full"
                >
                  {t("download")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StaffPortalLayout>
  );
};

export default DocumentsForClientName;
