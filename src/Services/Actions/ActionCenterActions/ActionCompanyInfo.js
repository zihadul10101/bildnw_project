import axios from "../../../Config/axios";
import {
  ACTION_CLIENT_CREATE,
  ACTION_CLIENT_UPDATED,
  RETRIEVE_ALL_INFO,
  UPDATED_RETRIEVE_ALL_INFO,
} from "../../Types/ActionCenterActionsTypes";

export const RetrieveInfo = (client_id) => async (dispatch) => {
  try {
    await axios.get(`/clients/${client_id}/all/info`).then((res) => {
      dispatch({
        type: RETRIEVE_ALL_INFO,
        payload: {
          retrieve_all_info: res.data,
        },
      });
    });
  } catch (error) {}
};

export const ClientCreate =
  (client_id, formData, navigate) => async (dispatch) => {
    try {
      await axios
        .post(`clients/create/${client_id}/detail`, formData)
        .then((res) => {
          dispatch({
            type: ACTION_CLIENT_CREATE,
            payload: {
              clientCreate: "File uploaded successfully!",
            },
          });
          navigate("/overview");
        });
    } catch (error) {}
  };
export const UpdatedRetrieveInfo = (client_id) => async (dispatch) => {
  try {
    await axios.get(`/clients/${client_id}/all/info`).then((res) => {
      console.log("updatedRes", res);
      dispatch({
        type: UPDATED_RETRIEVE_ALL_INFO,
        payload: {
          updated_retrieve_all_info: res.data,
        },
      });
    });
  } catch (error) {}
};
export const UpdatedClientRetrieveInfo =
  (client_id, retrieve_id, formData, navigate) => async (dispatch) => {
    try {
      await axios
        .put(`/clients/update/${client_id}/${retrieve_id}/detail`, formData)
        .then((res) => {
          dispatch({
            type: ACTION_CLIENT_UPDATED,
            payload: {
              updateRetrieveInfo: "File uploaded successfully!",
            },
          });
          navigate("/overview");
        });
    } catch (error) {}
  };
