import React from "react";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Table from "../Table/Table";

export type StatusType = "Active" | "Expired" | "Banned";

export interface IUser {
  fullName: string;
  email: string;
  status: StatusType;
  _id?: string;
}

interface UsersState {
  users: Array<IUser>;
  addSuccess: boolean;
  deleted: boolean;
}

class Users extends React.Component<{}, UsersState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      addSuccess: false,
      deleted: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          users: json,
        }));
      });
  }

  addUser = (user: IUser) => {
    fetch("http://localhost:3001/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          users: [...this.state.users, json],
          addSuccess: true,
        }));
        setTimeout(() => {
          this.setState(() => ({
            addSuccess: false,
          }));
        }, 2000);
      });
  };

  deleteUser = (id: string) => {
    fetch("http://localhost:3001/users", {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((res) => res.json())
      .then((json) => {
        const updated = this.state.users.filter(
          (user) => user._id !== json._id
        );
        this.setState(() => ({
          users: updated,
          deleted: true,
        }));
        setTimeout(() => {
          this.setState(() => ({
            deleted: false,
          }));
        }, 2000);
      });
  };

  render() {
    return (
      <div className="bg-dark bg-opacity-10 border px-2">
        <Header addUser={this.addUser} />
        {this.state.users.length === 0 && (
          <Message type="warning" children="No Users to display" />
        )}
        {this.state.addSuccess && (
          <Message type="success" children="New user was added" />
        )}
        {this.state.deleted && (
          <Message type="danger" children="User was deleted!" />
        )}
        <Table users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default Users;
