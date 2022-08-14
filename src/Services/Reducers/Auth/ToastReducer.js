import { toast } from "react-toastify";
import {
  INVITED_EMAIL_FAILURE,
  INVITED_EMAIL_SUCCESS,
} from "../../Types/AccoutActionsTypes";
import {
  ACTION_CLIENT_CREATE,
  ACTION_CLIENT_UPDATED,
  APPLY_CREDITLINE_SUCCESS,
  ORDER_PURCHASE_SUCCESS,
  REPAYMENY_INFO_POST,
} from "../../Types/ActionCenterActionsTypes";
import {
  OTP_VERIFY_FAIL,
  OTP_VERIFY_SUCCESS,
  SMS_SENT_FAILURE,
  SMS_SENT_SUCCESS,
} from "../../Types/AuthLoginActionTypes";
import {
  REGISTER_OPT_SENT,
  REGISTER_OPT_SENT_FAIL,
  REGISTER_OTP_FAIL,
  REGISTER_OTP_SUCCESS,
  USER_CREATE_SUCCESSFULLY,
  USER_CREATE_SUCCESS_FAIL_TOAST,
} from "../../Types/SignupActionTypes";

const initialState = {
  errorMessage: "",
  successMessage: "",
};
export const tostReducer = (state = initialState, action) => {
  const { payload, type } = action;
  // login toast start
  switch (type) {
    case SMS_SENT_SUCCESS:
      return toast.success(payload.userVerifySuccessMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case SMS_SENT_FAILURE:
      return toast.error(payload.userVerifyErrorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case OTP_VERIFY_SUCCESS:
      return toast.success(payload.successMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case OTP_VERIFY_FAIL:
      return toast.error(payload.errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });

    // login toast end

    // register toast start
    case REGISTER_OPT_SENT:
      return toast.success(payload.otpSuccessMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case REGISTER_OPT_SENT_FAIL:
      return toast.error(payload.otpErrorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case REGISTER_OTP_SUCCESS:
      return toast.success(payload.verifySuccessMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case REGISTER_OTP_FAIL:
      return toast.error(payload.verifyErrorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case USER_CREATE_SUCCESSFULLY:
      return toast.success(payload.userCreateSuccessMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case USER_CREATE_SUCCESS_FAIL_TOAST:
      return toast.error(payload.userCreateErrorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case APPLY_CREDITLINE_SUCCESS:
      return toast.success(payload.creditline_success, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case ORDER_PURCHASE_SUCCESS:
      return toast.success(payload.order_purchase_success, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case REPAYMENY_INFO_POST:
      return toast.success(payload.rePaymentInfoPost, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case ACTION_CLIENT_CREATE:
      return toast.success(payload.clientCreate, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case ACTION_CLIENT_UPDATED:
      return toast.success(payload.updateRetrieveInfo, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case INVITED_EMAIL_SUCCESS:
      return toast.success(payload.invited_success, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    case INVITED_EMAIL_FAILURE:
      return toast.error(payload.invited_error_message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });

    default:
      return state;
  }
};
