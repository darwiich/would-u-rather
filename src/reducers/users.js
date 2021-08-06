import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  RECIEVE_USERS,
} from "../actions/users";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { author, question } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([question]),
        },
      };
    default:
      return state;
  }
}
