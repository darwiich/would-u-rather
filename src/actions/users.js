export const RECIEVE_USERS = "RECIEVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}

export function addAnswerToUser(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer,
  };
}

export function addQuestionToUser({ author, question }) {
  return {
    type: ADD_QUESTION_TO_USER,
    author,
    question,
  };
}
