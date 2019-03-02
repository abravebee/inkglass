//== Dependencies ==//
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//== Authentication ==//
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://bakerc.auth0.com/.well-known/jwks.json`
  }),

  //Validate the audience and the issuer.
  audience: `Ik8pcKF4QAFcSV7QCOIYDSj0CH2ahljb`,
  issuer: `https://bakerc.auth0.com`,
  algorithms: [`RS246`]
})

export default checkJwt;