import axios from "axios";
import {
  POSTS_GET_ERROR,
  POSTS_GET_LOADING,
  POSTS_GET_SUCCESS,
} from "./post.types";

export const getPostsfun = () => (dispatch) => {
  dispatch({ type: POSTS_GET_LOADING });
  try {
    let postsData = axios.get("http://localhost:8080/posts").then((res) => {
      dispatch({ type: POSTS_GET_SUCCESS, payload: postsData });
    });
  } catch (error) {
    dispatch({ type: POSTS_GET_ERROR });
  }
};
