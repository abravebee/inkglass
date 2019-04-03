//== Dependencies ==//
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
//import { connect } from 'react-redux';

//== Actions ==//
//import { fetchAllUsers, fetchUser, addUser } from './actions';

//== Components ==//
import auth0Client from './Auth';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    //search db for user; if doesn't exist, add to db
    //add profile info to state
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);