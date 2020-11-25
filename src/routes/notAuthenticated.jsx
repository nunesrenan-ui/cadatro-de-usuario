import { Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Login from "../pages/login";
import UserForm from "../pages/register";

const NotAuthenticated = ({ setAuthentication }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login setAuthentication={setAuthentication} />
        </Route>
        <Route path="/register">
          <UserForm />
        </Route>
      </Switch>
    </>
  );
};

export default NotAuthenticated;
