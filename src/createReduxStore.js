/* eslint-disable import/no-anonymous-default-export */
import { createStore } from "redux";
import reducer from "./reducers/reducer";

// check for settings in local storage
if (localStorage.getItem("settings") == null) {
  // default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false,
  };

  // set to localstorage
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

export default () => {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(...middleware) // to add other middleware
  );
};
