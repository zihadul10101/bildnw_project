import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";
import UiInput from "../../../Components/Common/ui/UiInput";
import { MakeCreditOffer } from "../../../Services/Actions/StaffAction/StaffDashboardAction";

const ApproveCreditRequest = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { staffClientsDetails } = useSelector((state) => state.StaffDashboard);
  const [inputValue, setInputValue] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const requestApproval = (event) => {
    event.preventDefault();

    const offerPayload = {
      credit_line_limit: inputValue.credit_line_limit,
      tenure: inputValue.tenure,
      monthly_rate: inputValue.monthly_rate,
      admin_fee: inputValue.admin_fee,
      status: 9,
    };

    // CONFIRMATION
    Swal.fire({
      text: `Are you sure you want to send this credit offer to ${staffClientsDetails?.client}?`,
      icon: "warning",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "!bg-green-700",
      confirmButtonText: `Yes, send credit offer to ${staffClientsDetails?.client}.`,
    }).then((result) => {
      if (result.value) {
        dispatch(MakeCreditOffer(offerPayload, id, navigate));
      }
    });
  };
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
          {t("submit_credit_offer_to")} {staffClientsDetails?.client}
        </h3>
      </div>
      <div className="w-2/6 mx-auto">
        <form onSubmit={requestApproval}>
          <UiInput
            name="credit_line_limit"
            label={t("credit_limit")}
            value=""
            onChange={handleInput}
          ></UiInput>
          <div className="form-group">
            <p className="pb-3 pt-2 text-lg">{t("tenure")}</p>
            <select
              onChange={handleInput}
              name="tenure"
              className="form-select px-4 py-3 border-2 w-full rounded focus:focus:outline-none focus:ring focus:ring-dark-gray"
            >
              <option disabled selected>
                {t("select")}
              </option>
              <option value="1">1 {t("select_month")}</option>
              <option value="2">2 {t("select_month")}</option>
              <option value="3">3 {t("select_month")}</option>
              <option value="4">4 {t("select_month")}</option>
              <option value="5">5 {t("select_month")}</option>
              <option value="6">6 {t("select_month")}</option>
            </select>
          </div>
          <UiInput
            name="admin_fee"
            label={t("admin_fee_for_this_offer")}
            value=""
            onChange={handleInput}
          ></UiInput>
          <UiInput
            name="monthly_rate"
            label={t("monthly_rate")}
            value=""
            onChange={handleInput}
          ></UiInput>
          <div className="text-center my-8">
            <p className="text-lg px-8 py-2 rounded bg-dark-gray text-white cursor-pointer">
              {t("download_auto_generated_agreement")}
            </p>
            <div className="mt-4 mb-6 text-left">
              <UiInput
                label={t("finalised_agreement")}
                name="finalised_agreement"
                type="file"
                onChange={handleInput}
              ></UiInput>
            </div>
            <button
              className="text-base px-8 py-2 rounded bg-yellow-500 text-white"
              type="submit"
            >
              {t("send_credit_offer")} {staffClientsDetails?.client}
            </button>
          </div>
        </form>
      </div>
    </StaffPortalLayout>
  );
};

export default ApproveCreditRequest;
