const customApiError = require("../errors/custom-error")
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        const error = new customApiError("need username password", 400)
        throw(error)
    }
    date = new Date()
    id = date.getDate()
    console.log(id)
    token = jwt.sign({id, username}, process.env.JWTSECRET, {expiresIn:'30d'})
    res.status(200).json({msg: "user created", token})
}

const dashboard = async(req, res) => {
    console.log("dashboard")
    authHeader = req.headers.authorization

    if (!authHeader || ! authHeader.startsWith('Bearer')){
        console .log("reach here")
        error = new customApiError("login first", 401)
        throw error
    }

    token = authHeader.split(' ')[1]

    try {
        jwt.verify(token, process.env.JWTSECRET)
    } catch {
        error = new customApiError("invalid login", 401)
        throw error
    }
    // verify the token 
     const {username, id } = jwt.decode(token)

    const luckyNumber = Math.floor(Math.random() * 100)
    console.log("dashboard")
    res.status(200).json({msg: `Hello ${username}`, secret: `here is ur lucky number ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}