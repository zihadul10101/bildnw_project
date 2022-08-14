import {
  GET_DELIVERY_NOTE,
  RETRIEVE_ALL_INFO,
  UPDATED_RETRIEVE_ALL_INFO,
} from "../../Types/ActionCenterActionsTypes";

const initialState = {
  get_delivery_note: [],
  retrieve_all_info: [],
  updated_retrieve_all_info: [],
};
export const ActionOverviewReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_DELIVERY_NOTE:
      return {
        ...state,
        get_delivery_note: payload.get_delivery_note,
      };
    case RETRIEVE_ALL_INFO:
      return {
        ...state,
        get_delivery_note: payload.get_delivery_note,
      };
    case UPDATED_RETRIEVE_ALL_INFO:
      return {
        ...state,
        updated_retrieve_all_info: payload.get_delivery_note,
      };
    default:
      return state;
  }
};
