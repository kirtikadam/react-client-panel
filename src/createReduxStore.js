/* eslint-disable import/no-anonymous-default-export */
import { createStore } from "redux";
import reducer from "./reducers/reducer";

const initialState = {};

export default () => {
  return createStore(
    reducer,
    initialState
    // applyMiddleware(...middleware) // to add other middleware
  );
};
