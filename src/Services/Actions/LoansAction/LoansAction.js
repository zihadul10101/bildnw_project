import axios from "../../../Config/axios";
import {
  ALL_PURCHASE,
  LOANS_OVERVIEW_INFO,
  REPAYMENT_INFO,
  REPAYMENT_INFO_POST,
} from "../../Types/LoansActionTypes";

export const LoansOverview = (id) => async (dispatch) => {
  try {
    await axios.get(`/credit/${id}/credit/line/overview`).then((res) => {
      dispatch({
        type: LOANS_OVERVIEW_INFO,
        payload: {
          loansOverviewInfo: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const AllPurchase = (id) => async (dispatch) => {
  try {
    await axios.get(`/purchase/${id}/all/purchase/request`).then((res) => {
      dispatch({
        type: ALL_PURCHASE,
        payload: {
          allPurchaseInfo: res.data.results,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const RePayment =
  (clientId, purchaseId, navigate) => async (dispatch) => {
    try {
      await axios
        .get(`/purchase/${clientId}/purchase/repayment/${purchaseId}/request`)
        .then((res) => {
          dispatch({
            type: REPAYMENT_INFO,
            payload: {
              rePaymentInfo: res.data,
            },
          });
          navigate(`/billing/payments/${purchaseId}`);
        });
    } catch (error) {
      console.log(error);
    }
  };
export const PurchaseRepayment =
  (clientId, purchaseId, data, navigate) => async (dispatch) => {
    try {
      await axios
        .post(
          `/purchase/${clientId}/purchase/repayment/${purchaseId}/request`,
          data
        )
        .then((res) => {
          dispatch({
            type: REPAYMENT_INFO_POST,
            payload: {
              rePaymentInfoPost: res.data.details,
            },
          });
          navigate("/loans/all-loans");
        });
    } catch (error) {
      console.log(error);
    }
  };
export const Purchase = (clientId, purchaseId, data) => async (dispatch) => {
  try {
    await axios
      .post(
        `/purchase/${clientId}/purchase/repayment/${purchaseId}/request`,
        data
      )
      .then((res) => {
        //  console.log('res',res);
        dispatch({
          type: REPAYMENT_INFO_POST,
          payload: {
            rePaymentInfoPost: res.data.details,
          },
        });
      });
  } catch (error) {
    console.log(error);
  }
};
