import {
  ADD_DATA_REQUEST,
  ADD_DATA_FAILURE,
  ADD_DATA_SUCCESS,
  RESET_DATA_REQUEST,
} from "./actionTypes";
const initState = {
  isLoading: false,
  isError: false,
  msg: "",
  success: false,
};
export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
        success: false,
      };
    }
    case ADD_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: "data added successfully",
        success: true,
      };
    }
    case ADD_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: payload.message,
        success: false,
      };
    }

    case RESET_DATA_REQUEST: {
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
