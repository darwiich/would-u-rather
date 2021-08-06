import { _getUsers, _getQuestions } from "../utils/_DATA";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
      }
    );
  };
}
