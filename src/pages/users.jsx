import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { TableContainer } from "../styles/tableStyle";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    const token = window.localStorage.getItem("authToken");
    axios
      .get("https://ka-users-api.herokuapp.com/users", {
        headers: { Authorization: token },
      })
      .then((res) => res.data)
      .then((body) => {
        setUsers(body);
      });
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      responsive: ["xs", "sm", "md", "lg"],
      textWrap: "word-break",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["xs", "sm", "md", "lg"],
      textWrap: "word-break",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      responsive: ["xs", "sm", "md", "lg"],
      textWrap: "word-break",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["xs", "sm", "md", "lg"],
      textWrap: "word-break",
    },
    {
      title: "Feedbacks",
      dataIndex: "id",
      key: "id",
      responsive: ["xs", "sm", "md", "lg"],
      textWrap: "word-break",
      render: (index) => (
        <Link to={`/users/feedbacks/${index}`}>Feedbacks</Link>
      ),
    },
  ];

  return (
    <>
      <TableContainer>
        <Table
          style={{ wordBreak: "break-word", wordWrap: "break-word" }}
          dataSource={users}
          columns={columns}
        />
      </TableContainer>
    </>
  );
};

export default Users;
