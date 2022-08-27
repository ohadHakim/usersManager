import React from "react";
import { text } from "stream/consumers";

interface HeaderProps {}

interface HeaderState {
  fullName: string;
  email: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    this.setState({
      ...this.state,
      [fieldName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <h5 className="me-auto mb-0">Users</h5>
        <div className="d-flex">
          <input
            value={this.state.fullName}
            onChange={(e) => this.handleInputChange(e, "fullName")}
            type="text"
            placeholder="Name"
            className="form-control"
          />

          <input
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e, "email")}
            type="text"
            placeholder="Email"
            className="form-control"
          />

          <button className="btn btn-info text-white">Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
