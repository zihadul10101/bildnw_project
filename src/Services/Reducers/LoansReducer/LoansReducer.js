import {
  ALL_PURCHASE,
  LOANS_OVERVIEW_INFO,
  REPAYMENT_INFO,
} from "../../Types/LoansActionTypes";

const initialState = {
  loansOverviewInfo: {},
  allPurchaseInfo: [],
  rePaymentInfo: {},
};
export const LoansReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOANS_OVERVIEW_INFO:
      return {
        ...state,
        loansOverviewInfo: payload.loansOverviewInfo,
      };
    case ALL_PURCHASE:
      return {
        ...state,
        allPurchaseInfo: payload.allPurchaseInfo,
      };

    case REPAYMENT_INFO:
      return {
        ...state,
        rePaymentInfo: payload.rePaymentInfo,
      };

    default:
      return state;
  }
};
