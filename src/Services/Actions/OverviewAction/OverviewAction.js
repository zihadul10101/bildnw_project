import axios from "../../../Config/axios";
import { OVERVIEW_INFO } from "../../Types/OverviewActionsTypes";

export const OverviewMainInfo = (id) => async (dispatch) => {
  try {
    await axios.get(`/clients/overview/${id}`).then((res) => {
      dispatch({
        type: OVERVIEW_INFO,
        payload: {
          OverviewInfo: res.data,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
