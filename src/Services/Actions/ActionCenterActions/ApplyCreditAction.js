import axios from "../../../Config/axios";
import {
  ACCEPT_CREDIT_OFFER,
  APPLY_CREDITLINE_REQUEST,
  APPLY_CREDITLINE_SUCCESS,
  CLEAR_CREDITLINE_FORM,
  CREDIT_REQUEST,
  GET_CREDIT_OFFER,
  GET_MATERIAL_ALL,
  GET_STATUS,
  ORDER_PURCHASE_REQUEST,
  ORDER_PURCHASE_SUCCESS,
  PROJECT_DETAILS,
  PROJECT_TYPE_ALL,
  PURCHASE_PROJECT_DETAILS,
} from "../../Types/ActionCenterActionsTypes";

export const CreditRequest = (data) => async (dispatch) => {
  dispatch({
    type: CREDIT_REQUEST,
    payload: {
      credit_request: data,
    },
  });
};
export const ProvidedProjectDetails = (data) => async (dispatch) => {
  dispatch({
    type: PROJECT_DETAILS,
    payload: {
      project_details: data,
    },
  });
};
export const ApplyCreditLine =
  (data, clientId, navigate) => async (dispatch) => {
    try {
      await axios.post(`/credit/${clientId}/creditline`, data).then((res) => {
        dispatch({
          type: APPLY_CREDITLINE_REQUEST,
          payload: {
            creditline_request: res.status,
          },
        });

        dispatch({
          type: APPLY_CREDITLINE_SUCCESS,
          payload: {
            creditline_success: "Successfull Credit Line",
          },
        });

        navigate("/action-center/applied-successfully");

        dispatch({
          type: CLEAR_CREDITLINE_FORM,
        });
      });
    } catch (error) {}
  };
export const MaterialInfo = () => async (dispatch) => {
  try {
    await axios.get("/credit/material/all").then((res) => {
      dispatch({
        type: GET_MATERIAL_ALL,
        payload: {
          material_info: res.data.results,
        },
      });
    });
    await axios.get("/credit/project/type/all").then((res) => {
      dispatch({
        type: PROJECT_TYPE_ALL,
        payload: {
          projectType: res.data.results,
        },
      });
    });
  } catch (error) {}
};
export const PurchaseProjectDetails = (data) => async (dispatch) => {
  dispatch({
    type: PURCHASE_PROJECT_DETAILS,
    payload: {
      project_details: data,
    },
  });
};

export const ActionOrderPurchases =
  (data, clientId, navigate) => async (dispatch) => {
    try {
      await axios
        .post(`/purchase/${clientId}/create/purchase/request`, data)
        .then((res) => {
          dispatch({
            type: ORDER_PURCHASE_REQUEST,
            payload: {
              order_purchase_request: res.data,
            },
          });
          dispatch({
            type: ORDER_PURCHASE_SUCCESS,
            payload: {
              order_purchase_success: res.data.details,
            },
          });
          navigate("/action-center/approved-purchase");
        });
    } catch (error) {}
  };
export const ReviewCreditOffer = (clientId) => async (dispatch) => {
  try {
    await axios
      .get(`/credit/${clientId}/creditline/offer/client`)
      .then((res) => {
        dispatch({
          type: GET_CREDIT_OFFER,
          payload: {
            get_credit_offer: res.data,
          },
        });
      });
  } catch (error) {}
};
export const AcceptCreditOffer =
  (client_id, offer_id, navigate) => async (dispatch) => {
    try {
      await axios
        .get(`/credit/${client_id}/creditline/${offer_id}/accept`)
        .then((res) => {
          dispatch({
            type: ACCEPT_CREDIT_OFFER,
            payload: {
              accept_credit_offer: res.data,
            },
          });
          navigate("/action-center/approved-purchase");
        });
    } catch (error) {}
  };
export const GetClientStatus = (client_id) => async (dispatch) => {
  try {
    await axios.get(`/clients/${client_id}/status/`).then((res) => {
      dispatch({
        type: GET_STATUS,
        payload: {
          get_status: res.data.status,
        },
      });
    });
  } catch (error) {}
};
