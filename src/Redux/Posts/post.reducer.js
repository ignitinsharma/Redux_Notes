import {
  POSTS_GET_ERROR,
  POSTS_GET_LOADING,
  POSTS_GET_SUCCESS,
  POSTS_RESET,
} from "./post.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POSTS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case POSTS_GET_ERROR: {
      return {
        ...state,
        error: false,
      };
    }
    case POSTS_RESET: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};
