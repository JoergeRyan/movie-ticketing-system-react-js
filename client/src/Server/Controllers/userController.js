
const User = require("../Models/userModels");

const addUser = async (req, res) => {
    try {
        const user = await User.signup(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addUser
};