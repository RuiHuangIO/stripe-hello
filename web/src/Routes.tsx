import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginView } from "./modules/user/LoginView";
import { MeView } from "./modules/user/MeView";
import { RegisterView } from "./modules/user/RegisterView";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/me" component={MeView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
