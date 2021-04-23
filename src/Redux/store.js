import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import formReducer from "./FormReducer/reducer";
import listReducer from "./ListReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({ form: formReducer, list: listReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
