import React from "react";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <h5 className="me-auto mb-0">Users</h5>
        <div className="d-flex">
          <input />

          <input />

          <button className="btn btn-info text-white">Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
