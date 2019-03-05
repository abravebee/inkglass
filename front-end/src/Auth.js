//Code taken from Auth0 tutorial
//== Imports ==//
import auth0 from 'auth0-js';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines must be updated with info from Auth0 account
      domain: '<YOUR_AUTH0_DOMAIN>',
      audience: 'https://<YOUR_AUTH0_DOMAIN>/userinfo',
      clientID: '<YOUR_AUTH0_CLIENT_ID>',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'id_token',
      scope: 'openid profile'
    });

    //ATTN: REWRITE BIND FOR ES6
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile; //declared in this.handleAuthentication
  }

  getIdToken() {
    return this.idToken; //declared in this.handleAuthentication
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt; //declared in this.handleAuthentication
  }

  signIn() {
    this.auth0.authorize(); //inherited from auth0.WebAuth?
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    })
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth0Client = new Auth();

export default auth0Client;