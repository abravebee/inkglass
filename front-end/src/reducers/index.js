//== Dependencies ==//
import { combineReducers } from `redux`;

//== Reducers ==//
import { usersReducer } from './usersReducer';
import { entriesReducer } from './entriesReducer';

export default combineReducers({
  usersReducer,
  entriesReducer
})