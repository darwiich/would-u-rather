import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";

class QuesForm extends Component {
  handleAdd = () => {
    const optionOneText = document.getElementById("first").value;
    const optionTwoText = document.getElementById("second").value;
    const author = this.props.authedUser;
    this.props.dispatch(
      handleAddQuestion(optionOneText, optionTwoText, author)
    );
  };
  render() {
    return (
      <div>
        <div className="form" style={{ textAlign: "center" }}>
          Would you rather?
        </div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="first"
              label="First Option"
              placeholder="First Option"
            />
            <Form.Input
              fluid
              id="second"
              label="Second Option"
              placeholder="Second Option"
            />
            <Link to="/home">
              <button onClick={this.handleAdd} className="button">
                {" "}
                Submit{" "}
              </button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(QuesForm);
