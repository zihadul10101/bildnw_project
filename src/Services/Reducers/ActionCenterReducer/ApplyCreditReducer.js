import {
  ACCEPT_CREDIT_OFFER,
  APPLY_CREDITLINE_REQUEST,
  CLEAR_CREDITLINE_FORM,
  CREDIT_REQUEST,
  GET_CREDIT_OFFER,
  GET_MATERIAL_ALL,
  GET_STATUS,
  ORDER_PURCHASE_REQUEST,
  PROJECT_DETAILS,
  PROJECT_TYPE_ALL,
  PURCHASE_PROJECT_DETAILS,
} from "../../Types/ActionCenterActionsTypes";

const initialState = {
  credit_request: {},
  project_details: {},
  purchase_project_details: {},
  order_purchase_data: {},
  material_info: [],
  projectType: [],
  creditline_request: null,
  get_credit_offer: {},
  accept_credit_offer: {},
  get_status: null,
};
export const ApplyCreditReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CREDIT_REQUEST:
      return {
        ...state,
        credit_request: payload.credit_request,
      };

    case PROJECT_DETAILS:
      return {
        ...state,
        project_details: payload.project_details,
      };

    case PURCHASE_PROJECT_DETAILS:
      return {
        ...state,
        purchase_project_details: payload.project_details,
      };

    case GET_MATERIAL_ALL:
      return {
        ...state,
        material_info: payload.material_info,
      };
    case PROJECT_TYPE_ALL:
      return {
        ...state,
        projectType: payload.projectType,
      };
    case APPLY_CREDITLINE_REQUEST:
      return {
        ...state,
        creditline_request: payload.creditline_request,
      };

    case CLEAR_CREDITLINE_FORM:
      return {
        ...state,
        project_details: {},
      };
    case ORDER_PURCHASE_REQUEST:
      return {
        ...state,
        order_purchase_request: payload.order_purchase_request,
      };
    case GET_CREDIT_OFFER:
      return {
        ...state,
        get_credit_offer: payload.get_credit_offer,
      };
    case ACCEPT_CREDIT_OFFER:
      return {
        ...state,
        accept_credit_offer: payload.accept_credit_offer,
      };
    case GET_STATUS:
      return {
        ...state,
        get_status: payload.get_status,
      };

    default:
      return state;
  }
};
