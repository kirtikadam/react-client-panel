import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createReduxStore from "./createReduxStore";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import ClientDetails from "./components/clients/ClientDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Settings from "./components/settings/Settings";

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
const rrfConfig = { userProfile: "users", useFirestoreForProfile: true }; // react-redux-firebase config

firebase.initializeApp(fbConfig);
firebase.firestore();

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
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                exact
                path="/client/add"
                component={UserIsAuthenticated(AddClient)}
              />
              <Route
                exact
                path="/client/edit/:id"
                component={UserIsAuthenticated(EditClient)}
              />
              <Route
                exact
                path="/client/:id"
                component={UserIsAuthenticated(ClientDetails)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/register"
                component={UserIsNotAuthenticated(Register)}
              />
              <Route
                exact
                path="/settings"
                component={UserIsAuthenticated(Settings)}
              />
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
