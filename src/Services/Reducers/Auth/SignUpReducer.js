import {
  REGISTER_FAIL,
  REGISTER_FIRST_STEP,
  REGISTER_FIRST_STEP_FAIL,
  REGISTER_SUCCESS,
  SIGNUP_LOADER,
  USERINFO_DATA_STORE,
  USER_CREATE_SUCCESS,
  USER_CREATE_SUCCESS_FAIL,
} from "../../Types/SignupActionTypes";

const initialState = {
  verificationPage: false,
  userInfo: [],
  loader: false,
  userCreateSuccessMessage: "",
  userCreateErrorMessage: "",
  registerSuccess: false,
  signupData: [],
  authenticated: false,
  otpSuccessMessage: "",
  otpErrorMessage: "",
  verifySuccessMessage: "",
  verifyErrorMessage: "",
};
export const signUpReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SIGNUP_LOADER:
      return {
        ...state,
        loader: true,
      };
    case USERINFO_DATA_STORE:
      return {
        ...state,
        signupData: {
          phone: payload.phone,
          email: payload.email,
          name: payload.name,
          password: payload.password,
          position: payload.position,
        },
      };
    case REGISTER_FIRST_STEP:
      return {
        ...state,
        loader: false,
        userInfo: {
          token: payload.token,
          phone: payload.phone,
        },
        otpSuccessMessage: payload.otpSuccessMessage,
        verificationPage: true,
      };

    case REGISTER_FIRST_STEP_FAIL:
      return {
        ...state,
        loader: false,
        userInfo: "",
        otpErrorMessage: payload.otpErrorMessage,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loader: false,
        userInfo: "",
        verifySuccessMessage: payload.verifySuccessMessage,
        registerSuccess: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        userInfo: "",
        verifyErrorMessage: payload.verifyErrorMessage,
        registerSuccess: false,
      };

    case USER_CREATE_SUCCESS:
      return {
        ...state,
        loader: false,
        userInfo: "",
        userCreateSuccessMessage: payload.userCreateSuccessMessage,
        registerSuccess: true,
        authenticated: true,
      };
    case USER_CREATE_SUCCESS_FAIL:
      return {
        ...state,
        loader: true,
        userInfo: "",
        registerSuccess: false,
        authenticated: false,
        userCreateErrorMessage: payload.userCreateErrorMessage,
      };

    default:
      return state;
  }
};
