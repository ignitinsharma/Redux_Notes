import { FEEDS_RESET } from "../Feeds/feeds.types";
import { POSTS_RESET } from "../Posts/post.types";
import { loginAPI } from "./auth.api";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_RESET,
} from "./auth.types";

/* Second argument only having dispatch  */
export const authLogin = (cred) => async(dispatch) => {
  console.log('cred and dispatch', cred,dispatch);
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    /* Sending that cred means that Input value to API  */
    let data = await loginAPI(cred);
    console.log('data in action', data);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

/* Here after loginout we are simple makimg everything as initialState */
export const authLogout = () => (dispatch) => {
  dispatch({ type: AUTH_RESET });
  dispatch({ type: FEEDS_RESET });
  dispatch({ type: POSTS_RESET });
};
