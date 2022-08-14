import axios from "axios";
import { toast } from "react-toastify";
import {
  REGISTER_FAIL,
  REGISTER_FIRST_STEP,
  REGISTER_FIRST_STEP_FAIL,
  REGISTER_OPT_SENT,
  REGISTER_OPT_SENT_FAIL,
  REGISTER_OTP_FAIL,
  REGISTER_OTP_SUCCESS,
  REGISTER_SUCCESS,
  SIGNUP_LOADER,
  USERINFO_DATA_STORE,
  USER_CREATE_SUCCESS,
  USER_CREATE_SUCCESSFULLY,
  USER_CREATE_SUCCESS_FAIL,
  USER_CREATE_SUCCESS_FAIL_TOAST,
} from "../../Types/SignupActionTypes";

export const registerAction =
  (data, userInfo, navigate) => async (dispatch) => {
    dispatch({
      type: SIGNUP_LOADER,
    });
    dispatch({
      type: USERINFO_DATA_STORE,
      payload: {
        phone: userInfo.phone,
        email: userInfo.email,
        name: userInfo.name,
        password: userInfo.password,
        position: userInfo.position,
      },
    });
    try {
      await axios.post("users/sms-sent/", data).then((res) => {
        dispatch({
          type: REGISTER_FIRST_STEP,
          payload: {
            token: res.data.token,
            phone: res.data.phone,
            otpSuccessMessage: res.data.details,
          },
        });
        dispatch({
          type: REGISTER_OPT_SENT,
          payload: {
            otpSuccessMessage: res.data.details,
          },
        });
        navigate("/verification/signup");
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FIRST_STEP_FAIL,
        payload: {
          otpErrorMessage: error.response.data.details,
        },
      });
      dispatch({
        type: REGISTER_OPT_SENT_FAIL,
        payload: {
          otpErrorMessage: error.response.data.details,
        },
      });
    }
  };
export const verifyRegister = (data, navigate) => async (dispatch) => {
  try {
    await axios.post("users/sms-token/verify", data).then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          verifySuccessMessage: res.data.details,
        },
      });
      dispatch({
        type: REGISTER_OTP_SUCCESS,
        payload: {
          verifySuccessMessage: res.data.details,
        },
      });
      navigate("/company-info");
    });
    navigate("/company-info");
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: {
        verifyErrorMessage: error.response.data.details,
      },
    });
    dispatch({
      type: REGISTER_OTP_FAIL,
      payload: {
        verifyErrorMessage: error.response.data.details,
      },
    });
  }
};
export const userCreateAction =
  (data, navigate, timeStamp) => async (dispatch) => {
    try {
      await axios.post("users/create", data).then(async (res) => {
        const verificationRequest = {
          email: data.email,
          link: `http://159.89.198.52/email-verified/${timeStamp}/${res.data.user_id}`,
          // verification_request_link: `http://159.89.198.52/email-verified/${timeStamp}/${res.data.user_id}`,
        };
        await axios
          .post("users/email/verification/create/", verificationRequest)
          .then(() => {
            navigate("/email-verification-request");
            toast.success(res.data.details, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            });
          });

        dispatch({
          type: USER_CREATE_SUCCESS,
          payload: {
            userCreateSuccessMessage: res.data.details,
          },
        });
        dispatch({
          type: USER_CREATE_SUCCESSFULLY,
          payload: {
            userCreateSuccessMessage: res.data.details,
          },
        });
      });
    } catch (error) {
      // console.log(error.response);
      toast.error(error.response, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      dispatch({
        type: USER_CREATE_SUCCESS_FAIL,
        payload: {
          userCreateErrorMessage: error.response,
        },
      });
      dispatch({
        type: USER_CREATE_SUCCESS_FAIL_TOAST,
        payload: {
          userCreateErrorMessage: error.response,
        },
      });
    }
  };
export const EmailVerifiedAction = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post(`/users/email/verification/verify/${data.user_id}`, data)
      .then(async (res) => {
        console.log("store", res);
        toast.success(res.data.details, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        navigate("/login");
      });
  } catch (error) {
    // console.log(error.response);
    toast.error(error.response, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  }
};
