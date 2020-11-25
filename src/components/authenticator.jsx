import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Authenticated from "../routes/authenticated";
import NotAuthenticated from "../routes/notAuthenticated";
import Processing from "../routes/processingAuthentication";

const Authenticator = () => {
  const [isAuthenticated, setAuthentication] = useState(undefined);

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (!token) {
      setAuthentication(false);
    } else {
      axios
        .get("https://ka-users-api.herokuapp.com/users", {
          headers: { Authorization: token },
        })
        .then(() => {
          setAuthentication(true);
          history.push("/users");
        })
        .catch(() => {
          setAuthentication(false);
        });
    }
  }, [isAuthenticated, history]);

  if (isAuthenticated === undefined) {
    return (
      <>
        <Processing />
      </>
    );
  }

  if (isAuthenticated === false) {
    return (
      <>
        <NotAuthenticated setAuthentication={setAuthentication} />
      </>
    );
  } else {
    return (
      <>
        <Authenticated setAuthentication={setAuthentication} />
      </>
    );
  }
};

export default Authenticator;
