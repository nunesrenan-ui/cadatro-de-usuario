import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container } from "../styles/formStyle";
import { useState } from "react";

const schema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().required(),
});

const Login = ({ setAuthentication }) => {
  const [state, setState] = useState(undefined);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const tryLogin = (data) => {
    axios
      .post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
        history.push("/users");
        setAuthentication(true);
      })
      .catch(() => setState("Invalid creddentials"));
  };

  return (
    <>
      <Container>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(tryLogin)}>
          <div>
            <input placeholder="User" name="user" ref={register} />
          </div>
          {errors.user && <span>{errors.user.message}</span>}
          <div>
            <input placeholder="Password" name="password" ref={register} />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          {state && <span>{state}</span>}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
