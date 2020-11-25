import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "antd";
import { TableContainer } from "../styles/tableStyle";
import "antd/dist/antd.css";

const FeedBackList = () => {
  const history = useHistory();

  const param = useParams();

  const [feedback, setFeedback] = useState([]);

  const token = window.localStorage.getItem("authToken");

  const getFeedback = () => {
    axios
      .get(
        `https://ka-users-api.herokuapp.com/users/${Number(
          param.id
        )}/feedbacks`,
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => res.data)
      .then((body) => {
        setFeedback(body);
      });
  };

  useEffect(() => {
    getFeedback();
  }, [feedback]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      responsive: ["xs", "sm", "md", "lg"],
    },
  ];

  return (
    <>
      <TableContainer>
        <Table dataSource={feedback} columns={columns} />
        <div>
          <button
            onClick={() => history.push(`/users/newfeedback/${param.id}`)}
          >
            New Feedback
          </button>
        </div>
      </TableContainer>
    </>
  );
};

export default FeedBackList;
