import axios from "../../../Config/axios";
import { NOTIFICATION_INFO } from "../../Types/SharedActionsTypes";

export const NotificationsInfo = (clientID) => async (dispatch) => {
  try {
    await axios.get(`/logs/retrieve/client/admin/${clientID}`).then((res) => {
      dispatch({
        type: NOTIFICATION_INFO,
        payload: {
          all_notifications: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
