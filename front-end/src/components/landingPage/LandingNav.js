//== Dependencies ==//
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//== Components ==//
import auth0Client from '../../Auth';

//== Styles ==//
import { withStyles } from '@material-ui/core/styles';
import AppBar from `@material-ui/core/AppBar`;
import Toolbar from `@material-ui/core/Toolbar`;
import Typography from `@material-ui/core/Typography`;
import Button from `@material-ui/core/Button`;
import IconButton from `@material-ui/core/IconButton`;
import MenuIcon from `@material-ui/core/Menu`;

function LandingNav(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="LandingNav">
      <Link to="/">
        Inkglass
      </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label>{auth0Client.getProfile().name}</label>
          <button onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }

    </nav>
  )
}

export default withRouter(LandingNav);