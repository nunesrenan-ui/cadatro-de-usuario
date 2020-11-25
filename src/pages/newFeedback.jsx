import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Container } from "../styles/formStyle";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required(),
  comment: yup.string().required(),
  grade: yup.number().required(),
});

const Newfeedback = () => {
  const history = useHistory();

  const [state, setState] = useState(undefined);

  const params = useParams();

  const token = window.localStorage.getItem("authToken");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendFeedback = (data) => {
    axios
      .post(
        `https://ka-users-api.herokuapp.com/users/${Number(
          params.id
        )}/feedbacks`,
        { feedback: { ...data } },
        { headers: { Authorization: token } }
      )
      .then(() => setState("Feedback created"))
      .then(() => history.push(`/users/feedbacks/${Number(params.id)}`));
  };

  return (
    <>
      <Container>
        <h3>New FeedBack</h3>
        <form onSubmit={handleSubmit(sendFeedback)}>
          <div>
            <input placeholder="Name" name="name" ref={register} />
          </div>
          {errors.name && <span>{errors.name.message}</span>}
          <div>
            <input placeholder="Comment" name="comment" ref={register} />
          </div>
          {errors.comment && <span>{errors.comment.message}</span>}
          <div>
            <input placeholder="Grade" name="grade" ref={register} />
          </div>
          {errors.grade && <span>{errors.grade.message}</span>}
          {state && <span style={{ color: "green" }}>{state}</span>}
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Newfeedback;
