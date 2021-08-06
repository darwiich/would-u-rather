import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Error from "./Error";

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

class Question extends Component {
  render() {
    return (
      <div className="cardcontainer">
        {this.props.question.id ? (
          <Link to={`/question/${this.props.question.id}`}>
            <Card
              header={this.props.question.author}
              meta="asked Would you Rather"
              description={[
                this.props.question.optionOne.text,
                " or ",
                this.props.question.optionTwo.text,
                " on ",
                formatDate(this.props.question.timestamp),
              ].join("")}
            />
          </Link>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  //const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    question: question,
  };
}

export default connect(mapStateToProps)(Question);
