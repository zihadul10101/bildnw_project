import { GET_STATEMENTS, GET_SUMMARY } from "../../Types/BillingActionTypes";

const initialState = {
  statements: [],
  summary: {},
};

export const StatementReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_STATEMENTS:
      return {
        ...state,
        statements: payload,
      };

    case GET_SUMMARY:
      return {
        ...state,
        summary: payload.summary,
      };

    default:
      return state;
  }
};
