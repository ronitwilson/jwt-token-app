Have a function to login just send a res with -> login/reg/signup route

Dashboard function -> create a lucky number use math.floor(Math.random()* 100) send status 200 and res as json {msg: hello ronit, secret: here is ur lucky number ${lucky Number}

Have a router and in /dashboard get method-> have the dashboard fuction and in /login post method have the login function

Test both with postman

in the postman url for login send the username and password in the body

check username, pwd in post request, if exist create new JWT and send to front-end

in controller if username password not set throw custom error