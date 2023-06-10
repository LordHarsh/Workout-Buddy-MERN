const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '2d' })
}

// login controller
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        return res.status(200).json({ email, token })
    } catch (error) {
        return res.status(400).json({ error: error.message })

    }
    res.json({ mssg: "login user" })
}

// signup controller
const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)


        return res.status(200).json({ email, token })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
    res.json({ mssg: "signup user" })
}

module.exports = { signupUser, loginUser }