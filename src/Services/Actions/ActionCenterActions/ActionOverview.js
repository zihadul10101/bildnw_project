import axios from "../../../Config/axios";
import {
  GET_DELIVERY_NOTE,
  UPLOAD_DELIVERY_N0TE,
} from "../../Types/ActionCenterActionsTypes";

export const GetDeliveryNote = (client_id) => async (dispatch) => {
  try {
    await axios
      .get(`/purchase/${client_id}/purchase/active/all`)
      .then((res) => {
        dispatch({
          type: GET_DELIVERY_NOTE,
          payload: {
            get_delivery_note: res.data,
          },
        });
      });
  } catch (error) {}
};

export const UploadDeliveryNote =
  (data, clientId, purchaseId) => async (dispatch) => {
    try {
      await axios
        .put(
          `/purchase/${clientId}/update/purchase/delivery/note/${purchaseId}/16`,
          data
        )
        .then((res) => {
          dispatch({
            type: UPLOAD_DELIVERY_N0TE,
            payload: {
              upload_delivery_note: res.data,
            },
          });
          // navigate("/action-center/approved-purchase");
        });
    } catch (error) {}
  };
