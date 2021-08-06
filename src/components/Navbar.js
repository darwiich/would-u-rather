import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { Icon } from "semantic-ui-react";

class Navbar extends Component {
  onHandle = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <div className="nav">
        {this.props.authedUser === null ? (
          <ul>
            <li>
              <Link to="/login"> Login </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/home">
                {" "}
                <Icon name="home" size="large" />{" "}
              </Link>
            </li>
            <li>
              <Link to="/leaderboard"> Leaderboard </Link>
            </li>
            <li>
              <Link to="/add"> Ask a Question </Link>
            </li>
            <li>
              <Link to="/login" onClick={this.onHandle}>
                {" "}
                Hello {this.props.authedUser}, Logout{" "}
                <Icon name="log out" size="large" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(Navbar);
