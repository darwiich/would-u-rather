import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

class Login extends Component {
  handleDispatch = () => {
    const choosen = document.getElementById("users");
    this.props.dispatch(setAuthedUser(choosen.value));
  };
  render() {
    return (
      <Fragment>
        {this.props.loading === true ? null : (
          <div className="container">
            <h1>Welcome to Would you Rather?</h1>
            <p>Please Choose from below a user to Login</p>
            <label htmlFor="users">Choose a User:</label>
            <select name="users" id="users">
              <option value="">Users</option>
              {this.props.users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>

            <Link to="/home">
              <button onClick={this.handleDispatch} className="button">
                Submit
              </button>
            </Link>
          </div>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    loading: users === null,
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
