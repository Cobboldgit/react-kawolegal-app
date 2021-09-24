import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import Startups from "./page/Startups";
import Register from "./page/Register";
import Login from "./page/Login";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/startups" component={Startups} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Router;
