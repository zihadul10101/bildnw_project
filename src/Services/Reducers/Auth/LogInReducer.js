import {
  CLIENT_DETAILS_GET_SUCCESS,
  LANGUAGE_CHANGE,
  LOGIN_FAILED,
  LOGIN_INFO,
  LOGIN_LOADER,
  LOGIN_SUCCESS,
  LOGIN_SUCCES_MESSAGE_CLEAR,
  USER_DETAILS_GET_SUCCESS,
  USER_LOGIN_VERIFY,
  USER_LOGIN_VERIFY_FAIL,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_FAIL,
} from "../../Types/AuthLoginActionTypes";

const initialState = {
  phone: "",
  verificationPage: false,
  errorMessage: "",
  loader: false,
  login_info: {},
  successMessage: "",
  authenticated: false,
  token: null,
  user_id: "",
  userDetails: [],
  user_detail: [],
  client_details: [],
  userVerifyErrorMessage: "",
  userVerifySuccessMessage: "",
  statusCode: "",
  lang: "",
  isLoggedIn: false,
};
export const logInReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_LOADER:
      return {
        ...state,
        loader: true,
      };
    case LOGIN_INFO:
      return {
        ...state,
        login_info: payload.login_info,
      };
    case USER_LOGIN_VERIFY:
      return {
        ...state,
        loader: false,
        phone: payload.phone,
        verificationPage: true,
        statusCode: payload.statusCode,
        userVerifySuccessMessage: payload.userVerifySuccessMessage,
      };
    case LOGIN_SUCCES_MESSAGE_CLEAR:
      return {
        ...state,
        verificationPage: false,
      };
    case USER_LOGIN_VERIFY_FAIL:
      return {
        ...state,
        loader: true,
        phone: "",
        verificationPage: false,
        userVerifyErrorMessage: payload.userVerifyErrorMessage,
      };
    case OTP_VERIFICATION_SUCCESS:
      return {
        ...state,
        loader: false,
        successMessage: payload.successMessage,
      };
    case OTP_VERIFICATION_FAIL:
      return {
        ...state,
        loader: true,
        errorMessage: payload.errorMessage,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loader: false,
        user_id: payload.user_id,
        token: payload.token,
        authenticated: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loader: true,
        errorMessage: payload.error,
        authenticated: false,
      };
    case USER_DETAILS_GET_SUCCESS:
      return {
        ...state,
        userDetails: {
          company_id: payload.company_id,
          company_name: payload.company_name,
          email: payload.email,
          name: payload.name,
          number: payload.number,
          position: payload.position,
        },
        user_detail: payload,
      };
    case CLIENT_DETAILS_GET_SUCCESS:
      return {
        ...state,
        client_details: payload,
      };
    case LANGUAGE_CHANGE:
      return {
        ...state,
        lang: payload.lang,
      };

    default:
      return state;
  }
};
