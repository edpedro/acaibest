import React from "react";
import ReactNotification from "react-notifications-component";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import Header from "./components/Header";

import store from "./store";

import history from "./services/history";

import Message from "./components/Alert";

import "react-notifications-component/dist/theme.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <ReactNotification />
          <Header />
          <Routes />
          <Message />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
