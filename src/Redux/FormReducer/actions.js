import {
  ADD_DATA_REQUEST,
  ADD_DATA_FAILURE,
  ADD_DATA_SUCCESS,
  RESET_DATA_REQUEST,
} from "./actionTypes";
import axios from "axios";

export const addDataRequest = () => ({
  type: ADD_DATA_REQUEST,
});

export const addDataSuccess = () => ({
  type: ADD_DATA_SUCCESS,
});

export const addDataFailure = (payload) => ({
  type: ADD_DATA_FAILURE,
  payload,
});

export const resetData = () => ({
  type: RESET_DATA_REQUEST,
});

export const addData = (payload) => (dispatch) => {
  dispatch(addDataRequest());
  axios({
    method: "post",
    url: "https://dry-river-66247.herokuapp.com/api/data",
    data: {
      ...payload,
    },
  })
    .then(async (res) => {
      if (res.status === 201) {
        dispatch(addDataSuccess());
        wait(1000).then(() => {
          dispatch(resetData());
        });
      } else {
        dispatch(addDataFailure());
        wait(1000).then((res) => {
          dispatch(resetData());
        });
      }
    })
    .catch(async (err) => {
      dispatch(
        addDataFailure({ error: true, message: err.response.data.message })
      );
      wait(1000).then((res) => {
        dispatch(resetData());
      });
    });
};

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(() => resolve(), timeToDelay));
