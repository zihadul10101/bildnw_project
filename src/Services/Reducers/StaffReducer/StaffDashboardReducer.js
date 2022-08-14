import { TOPBAR_DATA } from "../../Types/StaffActionsTypes";
import {
  ALL_PURCHASE_ORDERS,
  CREDIT_REQUEST_VIEW,
  MAKE_CREDIT_OFFER,
  STAFF_DASHBOARD_RESULT,
  STAFF_DETAILS_GET,
  USER_UNDER_CLIENT_GET,
} from "../../Types/StaffDashboardActionsTypes";

const initialState = {
  staffClients: [],
  staffClientsDetails: [],
  userUnderClients: [],
  credit_req_view: {},
  make_credit_offer: {},
  topbar: [],
  all_purchase_orders: [],
};
export const staffDashboardReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TOPBAR_DATA:
      return {
        ...state,
        topbar: payload.topbar,
      };
    case STAFF_DASHBOARD_RESULT:
      return {
        ...state,
        staffClients: payload.staffDashboardResult,
      };
    case STAFF_DETAILS_GET:
      return {
        ...state,
        staffClientsDetails: payload.staffClientsDetails,
      };
    case USER_UNDER_CLIENT_GET:
      return {
        ...state,
        userUnderClients: payload.userUnderClients,
      };
    case CREDIT_REQUEST_VIEW:
      return {
        ...state,
        credit_req_view: payload.credit_req_view,
      };
    case MAKE_CREDIT_OFFER:
      return {
        ...state,
        make_credit_offer: payload.make_credit_offer,
      };
    case ALL_PURCHASE_ORDERS:
      return {
        ...state,
        all_purchase_orders: payload.all_purchase_orders,
      };

    default:
      return state;
  }
};
