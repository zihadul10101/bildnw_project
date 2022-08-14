import { OVERVIEW_INFO } from "../../Types/OverviewActionsTypes";

const initialState = {
  OverviewInfo: {},
};
export const OverviewReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case OVERVIEW_INFO:
      return {
        ...state,
        OverviewInfo: payload.OverviewInfo,
      };

    default:
      return state;
  }
};
