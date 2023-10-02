Have a function to login just send a res with -> login/reg/signup route

Dashboard function -> create a lucky number use math.floor(Math.random()* 100) send status 200 and res as json {msg: hello ronit, secret: here is ur lucky number ${lucky Number}

Have a router and in /dashboard get method-> have the dashboard fuction and in /login post method have the login function

Test both with postman

in the postman url for login send the username and password in the body

check username, pwd in post request, if exist create new JWT and send to front-end

in controller if username password not set throw custom error

install jsonwebtoken 

use jwt.sign({}) , create a id with new Date.getDate()
payload is username

create a secret in .env JWT_SECRET=jwtSecret

use jwt.sign({id, username}, process.env.JWTSECRET, {expiresIN: '30d'})

res -> user created

send the token in the authorization header

Authorization: Bearer <token>

example from the sample frontend how after login it is stored

    localStorage.setItem( 'token' , data.token)

## Next part

set authorization in the postman header section  using this syntax
    Authorization: Bearer <token>

in the dashboard function

authHeader = req.headers.authorizations.

if !authHeader ||! authHeader.startsWith('Bearer) -> send custom error with code 401

test it!!

get the token part out in a variable = split(' ')[1]


### Implement verification

try catach => jwt.verify(token, process.env.secretToken)
in catch throw custom error with code 401

instead of hello ronit use the decoded username -> u can use decode.username


### setup our own middleware

have a function which check req.header.authorization 

and set the function in the router like this 
router. route( '/dashboardi ) .get(authMiddleware, dashboard)

get the id and user name in the auth.js  authmiddleware function and send it seperately in the req.user (so that we do this jwt handling only on the middleware)  -> req.user = { id, username }

don't forget to call next

### stream line errors
    create index.js in the errors folder
        bad-request.js
        unauthenticated.js

BadRequest class extends CustomApError -> status code is hardcoded       

do same for Unauthenticated class

in index js import customError, BadRequest, Unauthenticated (this helps to import error as one object instead of seperate files)

module. exports = {
CustomAPIError,
BadRequestError,
UnauthenticatedError,
}

#### using status codes package
    http-status-codes 
        then we can use statuscode.OK etc

const {StatusCodes} = reuire('http-status—codes') ;
        statusCode= StatusCodes.BAD_REQUEST


change custom errors to the specific folders 
    example -> const { UnauthenticatedError = require( '../errors')