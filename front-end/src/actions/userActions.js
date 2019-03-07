//== Dependencies ==//
import axios from "axios";

//== Dispatch Types ==//
export const ERROR = "ERROR";
export const FETCHING_ALL_USERS = "FETCHING_ALL_USERS";
export const FETCHED_ALL_USERS = "FETCHED_ALL_USERS";
export const FETCHING_USER = "FETCHING_USER";
export const FETCHED_USER = "FETCHED_USER";
export const ADDING_USER = "ADDING_USER";
export const ADDED_USER = "ADDED_USER";
export const UPDATING_USER = "UPDATING_USER";
export const UPDATED_USER = "UPDATED_USER";
export const DELETING_USER = "DELETING_USER";
export const DELETED_USER = "DELETED_USER";

const URL = "https://inkglass.now.sh/journalapi";

//== Actions ==//
export const fetchAllUsers = dispatch => {
  dispatch({ type: FETCHING_ALL_USERS });
  axios.get(`${URL}/users/all/`)
    .then(res => {
      //res.data = array of all users
      dispatch({ type: FETCHED_ALL_USERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}