//== Dependencies ==//
import axios from "axios";

//== Variables ==//
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

export const fetchSingleUser = userid => dispatch => {
  dispatch({ type: FETCHING_USER });
  axios.get(`${URL}/${userid}`)
    .then(res => {
      //res.data = user object
      dispatch({ type: FETCHED_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const addUser = user => dispatch => {
  dispatch({ type: ADDING_USER });
  axios.post(`${URL}/create`, user)
    .then(res => {
      //res.data = new user
      dispatch({ type: ADDED_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err})
    })
}

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