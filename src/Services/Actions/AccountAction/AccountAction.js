import axios from "../../../Config/axios";
import {
  RETRIEVE_CLIENT_INFO,
  DOCUMENTS_CLIENT_NAME,
  ACCESS_REVOKE,
  CLIENT_ALL_INFO,
  USER_COLLEAGUES,
  INVITED_EMAIL_FAILURE,
  INVITED_EMAIL_SUCCESS,
} from "../../Types/AccoutActionsTypes";
export const UserAccountAction = (data) => async (dispatch) => {
  try {
    const response = await axios
      .get(`clients/all/${data}/updated/detail`)
      .then((res) => {
        dispatch({
          type: RETRIEVE_CLIENT_INFO,
          payload: {
            retrieveClient: res.data,
          },
        });
      });
  } catch (error) {
    // dispatch({
    //     type: 'SMS_SENT_FAILURE',
    //     payload: {
    //         userVerifyErrorMessage: error.response.data.details
    //     }
    // })
  }
};

export const DocumentsClientName = (data) => async (dispatch) => {
  try {
    const documents = await axios
      .get(`clients/all/${data}/updated/detail`)
      .then((res) => {
        dispatch({
          type: DOCUMENTS_CLIENT_NAME,
          payload: {},
        });
      });
  } catch (err) {
    console.log("Documents EROR", err);
  }
};
export const AccessRevoke = (client, user) => async (dispatch) => {
  try {
    const revoke = await axios
      .delete(`/users/colleagues/${client}/${user}`)
      .then((res) => {
        console.log("roveke", res);
      });
    dispatch({
      type: ACCESS_REVOKE,
      payload: {},
    });
  } catch (err) {
    console.log("Documents EROR", err);
  }
};
export const CompanyInfos = (id) => async (dispatch) => {
  try {
    await axios.get(`/clients/${id}/all/info`).then((res) => {
      dispatch({
        type: CLIENT_ALL_INFO,
        payload: {
          client_all_info: res.data,
        },
      });
    });
    await axios.get(`/users/colleagues/${id}`).then((res) => {
      dispatch({
        type: USER_COLLEAGUES,
        payload: {
          colleagues_info: res.data,
        },
      });
    });
  } catch (err) {
    console.log(err);
  }
};
export const InvitedEmail =
  (client_id, user_id, invitePayload) => async (dispatch) => {
    try {
      const response = await axios
        .post(`/users/${client_id}/invite/${user_id}`, invitePayload)
        .then((res) => {
          dispatch({
            type: INVITED_EMAIL_SUCCESS,
            payload: {
              invited_success: "User invited successfully",
            },
          });
        });
    } catch (error) {
      dispatch({
        type: INVITED_EMAIL_FAILURE,
        payload: {
          invited_error_message: "User invited Fail",
        },
      });
    }
  };
