//== Dependencies ==//
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//== Components ==//
import auth0Client from '../../Auth';

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
          <label>Blessed be, {auth0Client.getProfile().name}</label>
          <button onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }

    </nav>
  )
}

export default withRouter(LandingNav);