import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import ListBucket from "./pages/ListBucket";
import Flavor from './pages/Flavor'
import Personalize from "./pages/Personalize"
import SizeBucket from './pages/SizeBucket'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />;   
      <Route path="/listar" component={ListBucket} />
      <Route path="/cadastar/sabor" component={Flavor} />
      <Route path="/cadastrar/pesonalizacao" component={Personalize} />
      <Route path="/cadastrar/tamanho" component={SizeBucket} />
    </Switch>
  );
}

export default Routes;
