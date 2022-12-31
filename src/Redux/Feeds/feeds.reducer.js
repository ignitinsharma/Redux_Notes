import {
  FEEDS_GET_ERROR,
  FEEDS_GET_LOADING,
  FEEDS_RESET,
  FEEDS_GET_SUCCESS,
} from "./feeds.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const FeedsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FEEDS_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FEEDS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case FEEDS_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    /* in Reset case we are returning InitialState */
    case FEEDS_RESET: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
