import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Tab } from "semantic-ui-react";

class Dashboard extends Component {
  state = {
    panes: [
      {
        menuItem: "Questions",
        render: () => (
          <Tab.Pane>
            {this.props.questionIds.map(
              (id) =>
                !(
                  this.props.questions[id].optionOne.votes.includes(
                    this.props.authedUser
                  ) ||
                  this.props.questions[id].optionTwo.votes.includes(
                    this.props.authedUser
                  )
                ) && <Question id={id} key={id} answered = {true} />
            )}
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Answered Questions",
        render: () => (
          <Tab.Pane>
            {this.props.questionIds.map(
              (id) =>
                (this.props.questions[id].optionOne.votes.includes(
                  this.props.authedUser
                ) ||
                  this.props.questions[id].optionTwo.votes.includes(
                    this.props.authedUser
                  )) && <Question id={id} key={id} />
            )}
          </Tab.Pane>
        ),
      },
    ],
  };
  render() {
    return (
      <div>
        <Tab panes={this.state.panes} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
