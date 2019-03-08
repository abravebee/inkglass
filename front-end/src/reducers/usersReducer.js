//== Dependencies ==//
import axios from 'axios';

//== Actions ==//
import * as actions from '../actions/index';

//== State ==//
let initialState = {
  user: {},
  allUsers: [],
  fetchingUser: false,
  fetchingAllUsers: false,
  addingUser: false,
  deletingUser: false,
  updatingUser: false,
  error: null
};

//== Reducer ==//
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_ALL_USERS:
      return { ...state, fetchingAllUsers: true};
    case actions.FETCHED_ALL_USERS:
      return { ...state, fetchingAllUsers: false, allUsers: action.payload }
    case actions.FETCHING_USER:
      return { ...state, fetchingUser: true };
    case actions.FETCHED_USER:
      return { ...state, fetchingUser: false, user: action.payload, allUsers: [ ...allUsers, action.payload ] };
    case actions.ADDING_USER:
      return { ...state, addingUser: true };
    case actions.ADDED_USER:
      return { ...state, addingUser: false, user: action.payload, allUsers: [ ...allUsers, action.payload ] };
    case actions.ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}