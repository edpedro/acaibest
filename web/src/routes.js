import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterBucket from "./pages/RegisterBucket";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />;
      <Route path="/registerbucket" component={RegisterBucket} />
    </BrowserRouter>
  );
}

export default Routes;
