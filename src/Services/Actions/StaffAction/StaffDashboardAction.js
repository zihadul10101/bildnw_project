import axios from "../../../Config/axios";
import {
  ALL_PURCHASE_ORDERS,
  CREDIT_REQUEST_VIEW,
  MAKE_CREDIT_OFFER,
  STAFF_DASHBOARD_RESULT,
  STAFF_DETAILS_GET,
  USER_UNDER_CLIENT_GET,
} from "../../Types/StaffDashboardActionsTypes";

export const staffDashboardActionF = (axiosInstance) => async (dispatch) => {
  try {
    await axiosInstance.get("/clients/all").then((res) => {
      dispatch({
        type: STAFF_DASHBOARD_RESULT,
        payload: {
          staffDashboardResult: res.data.results,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const staffDetail = (id) => async (dispatch) => {
  try {
    await axios.get(`clients/${id}/all/info`).then((res) => {
      dispatch({
        type: STAFF_DETAILS_GET,
        payload: {
          staffClientsDetails: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const usersColleagues = (id) => async (dispatch) => {
  try {
    await axios.get(`/users/colleagues/${id}`).then((res) => {
      dispatch({
        type: USER_UNDER_CLIENT_GET,
        payload: {
          userUnderClients: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const MakeCreditOffer = (data, id, navigate) => async (dispatch) => {
  try {
    await axios.post(`/credit/${id}/creditline/offer`, data).then((res) => {
      dispatch({
        type: MAKE_CREDIT_OFFER,
        payload: {
          make_credit_offer: res.data,
        },
      });
      navigate(-1);
    });
  } catch (error) {
    console.log(error);
  }
};
export const CreditRequestView = (id) => async (dispatch) => {
  try {
    await axios.get(`/credit/${id}/retrieve/creditline`).then((res) => {
      dispatch({
        type: CREDIT_REQUEST_VIEW,
        payload: {
          credit_req_view: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const AllPurchaseOrders = (client_id) => async (dispatch) => {
  try {
    await axios
      .get(`/purchase/${client_id}/all/purchase/request`)
      .then((res) => {
        dispatch({
          type: ALL_PURCHASE_ORDERS,
          payload: {
            all_purchase_orders: res.data.results,
          },
        });
      });
  } catch (error) {
    console.log(error);
  }
};
