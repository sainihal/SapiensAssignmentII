import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../Components/Form";
import List from "../Components/List";
import MainPage from "../Components/MainPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <MainPage />} />
      <Route path="/form" exact render={() => <Form />} />
      <Route path="/list" exact render={() => <List />} />
    </Switch>
  );
}
