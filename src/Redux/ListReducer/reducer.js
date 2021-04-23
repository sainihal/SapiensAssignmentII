import {
  GET_LIST_REQUEST,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
  RESET_LIST_REQUEST,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  msg: "",
  success: false,
  data: [],
};
export default (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
        success: false,
        data: [],
      };
    }
    case GET_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: "data fetched successfully",
        success: true,
        data: payload.data.data,
      };
    }
    case GET_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: "failed to get data",
        success: false,
      };
    }

    case RESET_LIST_REQUEST: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: "",
        success: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
