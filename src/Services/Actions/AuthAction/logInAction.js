import {
  CLIENT_DETAILS_GET_SUCCESS,
  LANGUAGE_CHANGE,
  LOGIN_INFO,
  LOGIN_LOADER,
  LOGIN_SUCCESS,
  OPT_VERIFY_FAIL,
  OTP_VERIFICATION_FAIL,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFY_SUCCESS,
  SMS_SENT_FAILURE,
  SMS_SENT_SUCCESS,
  USER_DETAILS_GET_SUCCESS,
  USER_LOGIN_VERIFY,
  USER_LOGIN_VERIFY_FAIL,
} from "../../Types/AuthLoginActionTypes";
import axios from "../../..//Config/axios";

export const userLoginVerify =
  (data, navigate, axiosInstance) => async (dispatch) => {
    dispatch({
      type: LOGIN_LOADER,
    });
    dispatch({
      type: LOGIN_INFO,
      payload: {
        login_info: data,
      },
    });
    try {
      await axios.post("users/sms-sent/", data).then((res) => {
        dispatch({
          type: USER_LOGIN_VERIFY,
          payload: {
            phone: res.data.phone,
            userVerifySuccessMessage: res.data.details,
          },
        });
        dispatch({
          type: SMS_SENT_SUCCESS,
          payload: {
            userVerifySuccessMessage: res.data.details,
          },
        });
        navigate("/verification/login");
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_VERIFY_FAIL,
        payload: {
          userVerifyErrorMessage: error.response.data.details,
        },
      });
      dispatch({
        type: SMS_SENT_FAILURE,
        payload: {
          userVerifyErrorMessage: error.response.data.details,
        },
      });
    }
  };
export const userOtpVerification =
  (otpVerification, userLogin, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        "users/sms-token/verify",
        otpVerification
      );
      const response2 = await axios
        .post("users/token-auth/", userLogin)
        .then(async (res) => {
          axios.defaults.headers.common[
            "Authorization"
          ] = `JWT ${res.data.token}`;
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user_id);

          // USER DETAILS
          if (res.data.user_id) {
            await axios
              .get(`/users/details/${res.data.user_id}`)
              .then(async (userres) => {
                dispatch({
                  type: USER_DETAILS_GET_SUCCESS,
                  payload: {
                    company_id: userres.data.company_id,
                    company_name: userres.data.company_name,
                    email: userres.data.email,
                    name: userres.data.name,
                    number: userres.data.number,
                    position: userres.data.position,
                    user_detail: userres,
                  },
                });
                if (
                  userres.data.is_system_user === true ||
                  userres.data.is_user === true
                ) {
                  // CLIENT DETAILS
                  const response4 = await axios.get(
                    `/clients/details/${userres.data.company_id}`
                  );
                  dispatch({
                    type: CLIENT_DETAILS_GET_SUCCESS,
                    payload: {
                      client_details: response4.data,
                    },
                  });
                  if (response4.status === 200) {
                    navigate("/overview");
                  }
                } else if (userres.data.is_staff === true) {
                  navigate("/staff-portal");
                }
              });
          }
        });

      dispatch({
        type: OTP_VERIFICATION_SUCCESS,
        payload: {
          successMessage: response.data.details,
        },
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: response2.data.token,
          user_id: response2.data.user_id,
        },
      });
      dispatch({
        type: OTP_VERIFY_SUCCESS,
        payload: {
          successMessage: response.data.details,
        },
      });
    } catch (error) {
      dispatch({
        type: OTP_VERIFICATION_FAIL,
        payload: {
          error: error.response,
        },
      });
      dispatch({
        type: OPT_VERIFY_FAIL,
        payload: {
          errorMessage: error.response?.data.details,
        },
      });
    }
  };
export const languageChange = (data) => (dispatch) => {
  dispatch({
    type: LANGUAGE_CHANGE,
    payload: {
      lang: data,
    },
  });
};
