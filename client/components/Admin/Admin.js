import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Admin = (props) => {
  const { username } = props;
  return (
    <div>
      <h1 class="notwhite"> Welcome Admin {username}</h1>
      <ul>
        <li>
          <Link to="/admin/users"> All Users </Link>
        </li>
        <li>
          <Link to="/admin/products"> All Products </Link>
        </li>
      </ul>
    </div>
  );
};
const mapState = (state) => {
  return {
    username: state.auth.username,
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(Admin);
