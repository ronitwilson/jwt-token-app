const jwt = require('jsonwebtoken')
const {unauthenticatedError} = require('../errors')
const authMiddleware = (req, res, next) => {
    console.log("auth Middleware")
    authHeader = req.headers.authorization
    console.log("debug 1")
    if (!authHeader || ! authHeader.startsWith('Bearer')){
        console .log("reach here")
        error = new unauthenticatedError("login first")
        throw error
    }
    token = authHeader.split(' ')[1]
    console.log("debug 2")
    try {
        jwt.verify(token, process.env.JWTSECRET)
    } catch {
        error = new unauthenticatedError("invalid login")
        throw error
    }
    const {username, id } = jwt.decode(token)

    req.user = {id, username}
    console.log("debug 3")
    next()
    console.log("reach next")
}

module.exports = authMiddleware