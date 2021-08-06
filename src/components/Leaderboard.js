import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, List, Header, Icon } from "semantic-ui-react";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    const sortedArray = Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        Object.keys(users[b].questions).length -
        (Object.keys(users[a].answers).length +
          Object.keys(users[a].questions).length)
    );
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="trophy" circular />
          <Header.Content>Leaderboard</Header.Content>
        </Header>
        <div className="leader">
          {sortedArray.map((user) => (
            <List animated verticalAlign="middle" size="huge" key={user}>
              <List.Item>
                <Image avatar src={users[user].avatarURL} />
                <List.Content>
                  <List.Header>{users[user].name}</List.Header>
                  Asked: {Object.keys(users[user].questions).length}
                  <br></br> Answered: {Object.keys(users[user].answers).length}
                  <br></br> Total Score:{" "}
                  {Object.keys(users[user].answers).length +
                    Object.keys(users[user].questions).length}
                </List.Content>
              </List.Item>
            </List>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
