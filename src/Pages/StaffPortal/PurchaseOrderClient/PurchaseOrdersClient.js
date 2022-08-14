import React, { useEffect, useRef, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../../Assets/Styles/scss/companyDetails.scss";
import { AllPurchaseOrders } from "../../../Services/Actions/StaffAction/StaffDashboardAction";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";

const PurchaseOrdersClient = () => {
  // to work with language
  const { t } = useTranslation();
  const baseRoot = localStorage.getItem("baseRoot");
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client_id } = useParams();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { all_purchase_orders, staffClientsDetails } = useSelector(
    (state) => state.StaffDashboard
  );
  const confrimTransaction = async (purchaseID) => {
    const payload = {
      status: "Approved",
    };
    try {
      await axios
        .put(`/purchase/${client_id}/update/transaction/${purchaseID}`, payload)
        .then((res) => {
          setOpen(false);
        });
    } catch (err) {
      toast.error(err, { autoClose: 2000 });
    }
  };
  const confrimPurchase = async (purchaseID) => {
    try {
      const purchaseConfirm = await axios.get(
        `/purchase/${client_id}/accept/purchase/request/${purchaseID}/15`
      );
      toast.success(`${purchaseConfirm.data.details}`, { autoClose: 2000 });
    } catch (err) {
      toast.error(err, { autoClose: 2000 });
    }
  };

  useEffect(() => {
    dispatch(AllPurchaseOrders(client_id));
  }, [client_id]);

  const positionStyle = {
    Paid: "green",
    Pending: "yellow",
    Approved: "lemon",
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
        <h3 className="text-3xl text-center py-6">
          {t("purchase_order_for")} {staffClientsDetails?.client}
        </h3>
      </div>
      <table className="w-full users-table">
        <thead>
          <tr>
            <td>{t("material")}</td>
            <td>{t("creditline")}</td>
            <td>{t("upload_quote")}</td>
            <td>{t("details_cap")}</td>
            <td>{t("date_submitted")}</td>
            <td>{t("position_cap")}</td>
            <td>{t("payment_action_cap")}</td>
          </tr>
        </thead>
        <tbody>
          {all_purchase_orders.map((item) => (
            <tr>
              <td>{item?.material}</td>
              <td>
                <p className="border-b-2 w-24 border-slate-700">Documents</p>
                <p className="border-b-2 w-24 border-slate-700">Aggrement</p>
              </td>
              <td>
                {item?.quote_file ? (
                  <a
                    href={baseRoot + item?.quote_file}
                    className="text-lg px-6 py-2 cursor-pointer bg-slate-50"
                    target="_blank"
                  >
                    {t("download")}
                  </a>
                ) : (
                  ""
                )}
              </td>
              <td className="">
                <p>
                  {t("principal")}: {item?.total_amount} SAR
                </p>
                <p>
                  {t("duration")}: {item?.tenure} {t("select_month")}
                </p>
                <p>
                  {t("monthly_total")}:
                  {(item?.total_amount / parseInt(item?.tenure)).toFixed(2)} SAR
                </p>
              </td>
              <td>{new Date(item?.created_at).toLocaleDateString()}</td>
              <td className="flex space-x-2">
                <p
                  style={{
                    backgroundColor: `${positionStyle[item?.is_accepted]}`,
                  }}
                  className="bg-yellow-300 py-1 px-4 text-white text-center rounded-full"
                >
                  {t(`${item?.is_accepted}`)}
                </p>
                {item?.is_accepted === "Pending" ? (
                  <p className="bg-green-300 py-1 px-4 text-base text-white text-center rounded-full">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpen(true)}
                    >
                      Confirm
                    </span>
                    <div className="w-3/6">
                      <Modal
                        ref={modalRef}
                        open={open}
                        onClose={() => setOpen(false)}
                        initialFocusRef={modalRef}
                        center
                      >
                        <div className="text-center">
                          <h1 className="C text-bold py-5 bg-slate-800 text-white pb-4">
                            Are You Sure You Want To Confirm The Purchase
                            Orders?{" "}
                          </h1>
                          <br />
                          <br />
                          <span
                            style={{ cursor: "pointer" }}
                            className="bg-slate-800 py-2 text-center px-4 pt-3 text-base text-white text-center rounded-full"
                            onClick={() => confrimPurchase(item?.id)}
                          >
                            {t("confirm")}
                          </span>
                        </div>
                      </Modal>
                    </div>
                  </p>
                ) : (
                  ""
                )}
              </td>

              <td>
                {item?.is_accepted === "Re-pay pending" ? (
                  <p className="bg-green-300 py-1 px-4 text-base text-white text-center rounded-full cursor-pointer">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpen(true)}
                    >
                      Confirm
                    </span>
                    <div className="w-3/6">
                      <Modal
                        ref={modalRef}
                        open={open}
                        onClose={() => setOpen(false)}
                        initialFocusRef={modalRef}
                        center
                      >
                        <div className="text-center">
                          <h1 className="C text-bold py-5 bg-slate-800 text-white pb-4">
                            Are You Sure You Want To Confirm The Purchase
                            Orders?{" "}
                          </h1>
                          <br />
                          <br />
                          <span
                            className="bg-slate-800 py-2 text-center px-4 pt-3 text-base text-white text-center rounded-full"
                            onClick={() => confrimTransaction(item?.id)}
                          >
                            {t("confirm_payment")}
                          </span>
                        </div>
                      </Modal>
                    </div>
                  </p>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StaffPortalLayout>
  );
};

export default PurchaseOrdersClient;
