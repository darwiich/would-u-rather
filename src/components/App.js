import { connect } from "react-redux";
import "../App.css";
import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import QuesForm from "./QuesForm";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import Error from "./Error";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route path="/login" exact component={Login} />
          {this.props.authedUser === null ? (
            <h4>Please Login First</h4>
          ) : (
            <div>
              <Route path="/home" exact component={Dashboard} />
              <Route path="/add" exact component={QuesForm} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/error" exact component={Error} />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(App);
