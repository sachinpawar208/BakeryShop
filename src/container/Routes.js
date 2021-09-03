import React from "react";
import Dashboard from "./Dashboard/index";
import Content from "./Content/index";
import Dialog from "./Dialog/index";
import Login from "./Login/index";
import SignUp from "./Signup/index";
import SucessPage from "./notification/index";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

export default function Routes() {
  return ( 
    <Router>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/content/:name" component={Content} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/sucess" component={SucessPage} />
      <Route exact path="/content/:name/dialog" component={Dialog} />
     
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Router>
  );
}
