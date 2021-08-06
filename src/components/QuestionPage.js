import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Progress } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
import { handleAddAnswer } from "../actions/questions";
import Error from "./Error";

class QuestionPage extends Component {
  handleFirst = (e) => {
    this.props.dispatch(
      handleAddAnswer(this.props.authedUser, this.props.id, "optionOne")
    );
  };

  handleSecond = (e) => {
    this.props.dispatch(
      handleAddAnswer(this.props.authedUser, this.props.id, "optionTwo")
    );
  };
  render() {
    if (Object.keys(this.props.questions).includes(this.props.id)) {
      return this.props.questions[this.props.id].optionOne.votes.includes(
        this.props.authedUser
      ) ||
        this.props.questions[this.props.id].optionTwo.votes.includes(
          this.props.authedUser
        ) ? (
        <div className="question">
          <div className="title">Would you Rather?</div>

          <Progress
            value={this.props.questions[this.props.id].optionOne.votes.length}
            total={
              this.props.questions[this.props.id].optionOne.votes.length +
              this.props.questions[this.props.id].optionTwo.votes.length
            }
            progress="ratio"
            label={this.props.questions[this.props.id].optionOne.text}
            color={
              this.props.questions[this.props.id].optionOne.votes.includes(
                this.props.authedUser
              )
                ? "green"
                : "grey"
            }
          />
          <div className="answered">
            <p>
              {(
                (this.props.questions[this.props.id].optionOne.votes.length /
                  (this.props.questions[this.props.id].optionOne.votes.length +
                    this.props.questions[this.props.id].optionTwo.votes
                      .length)) *
                100
              ).toFixed(2)}
              %
            </p>
            {this.props.questions[this.props.id].optionOne.votes.map((u) => (
              <div key={u}>{u}</div>
            ))}
          </div>
          <Progress
            value={this.props.questions[this.props.id].optionTwo.votes.length}
            total={
              this.props.questions[this.props.id].optionOne.votes.length +
              this.props.questions[this.props.id].optionTwo.votes.length
            }
            progress="ratio"
            label={this.props.questions[this.props.id].optionTwo.text}
            color={
              this.props.questions[this.props.id].optionTwo.votes.includes(
                this.props.authedUser
              )
                ? "green"
                : "grey"
            }
          />
          <div className="answered">
            <p>
              {(
                (this.props.questions[this.props.id].optionTwo.votes.length /
                  (this.props.questions[this.props.id].optionOne.votes.length +
                    this.props.questions[this.props.id].optionTwo.votes
                      .length)) *
                100
              ).toFixed(2)}
              %
            </p>
            {this.props.questions[this.props.id].optionTwo.votes.map((u) => (
              <div key={u}>{u}</div>
            ))}
          </div>
          <div className="asked">
            Asked by:
            <br></br>
            <br></br>
            <Label image>
              <img
                src={
                  this.props.users[this.props.questions[this.props.id].author]
                    .avatarURL
                }
                alt={this.props.questions[this.props.id].author}
              />
              {this.props.questions[this.props.id].author}
            </Label>
          </div>
        </div>
      ) : (
        <div className="question">
          <div className="title">Would you Rather?</div>
          <Button.Group basic vertical>
            <Button onClick={this.handleFirst}>
              {this.props.questions[this.props.id].optionOne.text}
            </Button>
            <Button onClick={this.handleSecond}>
              {this.props.questions[this.props.id].optionTwo.text}
            </Button>
          </Button.Group>
          <div className="asked">
            Asked by:
            <br></br>
            <br></br>
            <Label image>
              <img
                src={
                  this.props.users[this.props.questions[this.props.id].author]
                    .avatarURL
                }
                alt={this.props.questions[this.props.id].author}
              />
              {this.props.questions[this.props.id].author}
            </Label>
          </div>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  return {
    id,
    questions,
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(QuestionPage);
