import {
  CLIENT_ALL_INFO,
  RETRIEVE_CLIENT_INFO,
  USER_COLLEAGUES,
} from "../../Types/AccoutActionsTypes";

const initialState = {
  user_account_info: {},
  client_all_info: {},
  colleagues_info: [],
};

export const userAccountReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case RETRIEVE_CLIENT_INFO:
      return {
        ...state,
        user_account_info: payload.client_all_info,
      };
    case CLIENT_ALL_INFO:
      return {
        ...state,
        client_all_info: payload,
      };
    case USER_COLLEAGUES:
      return {
        ...state,
        colleagues_info: payload,
      };
    default:
      return state;
  }
};
