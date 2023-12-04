const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.signup = async function (data) {
    const { username, email , password} = data;

    if (!username || !email || !password) {
        throw Error("All fields must be filled");
    }

    const usernameExist = await this.findOne({ username });

    console.log(usernameExist);
    if (usernameExist) {
        throw Error("Sorry!, Username already in use");
    }

    const hash = await bcrypt.hash(password, 10);


    const user = await this.create({
        username,
        email,
        password: hash,
    });

    return user;
};

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Incorrect username or password!");
    }

 
    const match = await bcrypt.compare(password, user.password);


    if (!match) {
        throw Error("Incorrect username or password!");
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
