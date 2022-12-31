import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_RESET,
} from "./auth.types";

const initialState = {
  loading: false,
  error: false,
  isLoggedIn: false,
  token: "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        token: payload.token,
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        isLoggedIn: false,
      };
    }
    case AUTH_RESET: {
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
