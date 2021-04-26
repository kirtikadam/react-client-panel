import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createReduxStore from "./createReduxStore";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/app";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";

import "./App.css";

const fbConfig = {
  apiKey: "AIzaSyDQ4pJ21ZFxMpMVJ9-hEK6njAOIkcYDa4Q",
  authDomain: "react-client-panel-94c68.firebaseapp.com",
  projectId: "react-client-panel-94c68",
  storageBucket: "react-client-panel-94c68.appspot.com",
  messagingSenderId: "250309046965",
  appId: "1:250309046965:web:bc6b42d8115fdc143904fc",
  measurementId: "G-VLWVGT02ZW",
}; // object containing Firebase config
const rrfConfig = { userProfile: "users" }; // react-redux-firebase config

firebase.initializeApp(fbConfig);

const store = createReduxStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <div className="App">
          <AppNavbar></AppNavbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         {/* <ReactReduxFirebaseProvider {...store.rrfProps}> */}

//         {/* </ReactReduxFirebaseProvider> */}
//       </Provider>
//     );
//   }
// }

export default App;
