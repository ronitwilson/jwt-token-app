const customApiError = require("../errors/custom-error")

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        const error = new customApiError("need username password", 400)
        throw(error)
    }
    res.status(200).json({msg: "Login/reg/signup"})
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