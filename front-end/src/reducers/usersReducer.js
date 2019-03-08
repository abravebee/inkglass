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