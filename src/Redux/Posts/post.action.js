import axios from "axios";
import {
  POSTS_GET_ERROR,
  POSTS_GET_LOADING,
  POSTS_GET_SUCCESS,
} from "./post.types";

export const getPostsfun = () => (dispatch) => {
  dispatch({ type: POSTS_GET_LOADING });
  try {
    axios.get("http://localhost:8080/posts").then((res) => {
      dispatch({ type: POSTS_GET_SUCCESS, payload: res.data });
      console.log("post",res.data);
    });
  } catch (error) {
    dispatch({ type: POSTS_GET_ERROR });
  }
};
