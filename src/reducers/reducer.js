import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// Add firebase to reducers
export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
