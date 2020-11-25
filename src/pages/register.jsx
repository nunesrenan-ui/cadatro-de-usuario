import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "../styles/formStyle";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  user: yup.string().min(6, "Min 6 characters").required(),
  name: yup
    .string()
    .matches(/[A-Z][a-z]* [A-Z][a-z]*/, "Invalid name format")
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .matches(
      /^(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{6,}$/,
      "Password MUST have at leats one special character"
    )
    .required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match!")
    .required(),
});

const UserForm = () => {
  const [state, setState] = useState(undefined);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://ka-users-api.herokuapp.com/users", {
        user: { ...data },
      })
      .then((res) => setState(res.request.statusText))
      .then(() => history.push("/"));
  };

  return (
    <>
      <Container>
        <h3>New User Form</h3>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <input placeholder="User" name="user" ref={register} />
          </div>
          {errors.user && <span>{errors.user.message}</span>}
          <div>
            <input placeholder="Name" name="name" ref={register} />
          </div>
          {errors.name && <span>{errors.name.message}</span>}
          <div>
            <input placeholder="Email" name="email" ref={register} />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          <div>
            <input placeholder="Password" name="password" ref={register} />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <div>
            <input
              placeholder="Password Confirmation"
              name="password_confirmation"
              ref={register}
            />
          </div>
          {errors.password_confirmation && (
            <span>{errors.password_confirmation.message}</span>
          )}
          {state && <span style={{ color: "green" }}>{state}</span>}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserForm;
