import axios from "axios";
import {
  FEEDS_GET_ERROR,
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
} from "../Feeds/feeds.types";

export const getFeedsfun = () => async (dispatch) => {
  /* Here we are showing loading thing */
  dispatch({ type: FEEDS_GET_LOADING });
  try {
    /* Here we are on success phs */
    let data = await axios.get("http://localhost:8080/feeds");
    dispatch({ type: FEEDS_GET_SUCCESS, payload: data });
    // console.log(data.data);
  } catch (error) {
    dispatch({ type: FEEDS_GET_ERROR });
  }
};
