//== Dependencies ==//
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//== Components ==//
import auth0Client from '../../Auth';

//== Styles ==//
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
}

function LandingNav(props) {
  const { classes } = props;
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >
        <Typography variant="h6" color="inherit" className={classes.grow}>
            Inkglass
          </Typography>
          </Link>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="inherit" onClick={auth0Client.signIn}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label>{auth0Client.getProfile().name}</label>
            <Button color="inherit" onClick={() => {signOut()}}>Sign Out</Button>
          </div>
        }
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default withRouter(withStyles(styles)(LandingNav));