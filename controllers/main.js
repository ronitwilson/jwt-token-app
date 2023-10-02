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
    const luckyNumber = Math.floor(Math.random() * 100)
    console.log("dashboard")
    res.status(200).json({msg: "Hello ronit", secret: `here is ur lucky number ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}