const express = require("express");
const router = express.Router();

const {
    signupUser,
    login,
    // getUserProfile,
    
} = require("../controllers/userController");

// User login
router.post("/login", login);

// User register
router.post("/signup", signupUser);




module.exports = router;
