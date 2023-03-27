import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "react";
import axios from "axios";

const URI = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(URI);
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "There was an error over here",
      });
    }
  };
};
