import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import Header from "./components/Header";

import store from "./store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
