import {
  GET_LIST_REQUEST,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
  RESET_LIST_REQUEST,
} from "./actionTypes";
import axios from "axios";

export const getDataRequest = () => ({
  type: GET_LIST_REQUEST,
});

export const getDataSuccess = (payload) => ({
  type: GET_LIST_SUCCESS,
  payload,
});

export const getDataFailure = (payload) => ({
  type: GET_LIST_FAILURE,
  payload,
});

export const resetData = () => ({
  type: RESET_LIST_REQUEST,
});

export const getData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  axios
    .get("https://dry-river-66247.herokuapp.com/api/data")
    .then(async (res) => {
      if (res.status === 200) {
        dispatch(getDataSuccess(res));
        wait(1000).then(() => {
          dispatch(resetData());
        });
      } else {
        dispatch(getDataFailure(res.data.message));
        wait(1000).then((res) => {
          dispatch(resetData());
        });
      }
    })
    .catch((err) => {
      dispatch(getDataFailure(err));
      wait(1000).then((res) => {
        dispatch(resetData());
      });
    });
};

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(() => resolve(), timeToDelay));
