import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { addAnswerToUser, addQuestionToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";
export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswer(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

export function handleAddAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswer(authedUser, qid, answer));
    dispatch(addAnswerToUser(authedUser, qid, answer));
    return _saveQuestionAnswer({ authedUser, qid, answer });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
