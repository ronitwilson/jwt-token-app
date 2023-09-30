const login = async (req, res) => {
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