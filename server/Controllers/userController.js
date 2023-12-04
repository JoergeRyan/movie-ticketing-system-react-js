const User = require("../models/userModel");
const validator = require("validator");

// User register
const signupUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.signup(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        res.status(200).json(user.email);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    signupUser,
    login,
};
