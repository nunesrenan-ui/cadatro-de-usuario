import { Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Users from "../pages/users";
import FeedBackList from "../pages/feedbackList";
import Newfeedback from "../pages/newFeedback";

const Authenticated = ({ setAuthentication }) => {
  return (
    <>
      <Header setAuthentication={setAuthentication} />
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/feedbacks/:id">
          <FeedBackList />
        </Route>
        <Route exact path="/users/newfeedback/:id">
          <Newfeedback />
        </Route>
      </Switch>
    </>
  );
};
export default Authenticated;
