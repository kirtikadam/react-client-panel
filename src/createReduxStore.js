/* eslint-disable import/no-anonymous-default-export */
import { createStore } from "redux";
import reducer from "./reducers/reducer";

const initialState = {};

export default () => {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(...middleware) // to add other middleware
  );
};
