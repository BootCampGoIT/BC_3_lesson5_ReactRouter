import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactsPage from "../../pages/ContactsPage";
import DefaultPage from "../../pages/DefaultPage";
import HomePage from "../../pages/HomePage";

const title = "Hello";

const Main = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact render={() => <HomePage title={title}/>} />
        {/* <Route path='/' exact render={(props) => <HomePage title={title} {...props}/>} /> */}
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />
        <Redirect to="/"/>
        {/* <Route component={DefaultPage} /> */}
      </Switch>
    </>
  );
};

export default Main;
