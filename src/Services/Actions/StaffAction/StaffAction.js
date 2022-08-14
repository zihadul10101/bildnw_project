import axios from "../../../Config/axios";
import {
  TOPBAR_DATA,
  VALID_INFO_APPROVAL,
} from "../../Types/StaffActionsTypes";

export const ValidInfoApproval = (data) => async (dispatch) => {
  dispatch({
    type: TOPBAR_DATA,
    payload: {
      topbar: data,
    },
  });
  const approvePayload = {
    status: 5,
  };
  try {
    await axios.put(`/staffs/approve/${data}`, approvePayload).then((res) => {
      dispatch({
        type: VALID_INFO_APPROVAL,
        payload: {
          retrieveClient: res.data,
        },
      });
    });
  } catch (error) {}
};
