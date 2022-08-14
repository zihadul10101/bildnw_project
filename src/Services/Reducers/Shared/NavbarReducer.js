import { NOTIFICATION_INFO } from "../../Types/SharedActionsTypes";

const initialState = {
  all_notifications: [],
};
export const SharedReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case NOTIFICATION_INFO:
      return {
        ...state,
        all_notifications: payload.all_notifications,
      };

    default:
      return state;
  }
};
