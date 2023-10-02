const {badRequestError} = require("../errors")
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        const error = new badRequestError("need username password")
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

    const luckyNumber = Math.floor(Math.random() * 100)
    console.log("dashboard")
    res.status(200).json({msg: `Hello ${req.user.username}`, secret: `here is ur lucky number ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}