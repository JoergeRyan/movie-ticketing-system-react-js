const mongoose = require('mongoose');
// userSchema.statics.signup = async function (data) {

//     console.log(data);
//     const { username, password, confirmPassword } = data;

//     // Check if all fields has been filled
//     if (!username || !password || !confirmPassword) {
//         throw Error("All fields must be filled");
//     }

//     // Check if password is match
//     if (password !== confirmPassword) {
//         throw Error("Password does not match");
//     }

//     // Check if usernameExist already
//     const usernameExist = await this.findOne({ username });

//     console.log(usernameExist);
//     if (usernameExist) {
//         throw Error("Sorry!, Username already in use");
//     }
//     // Hash the password so that even database has been breached password is safe.
//     const hash = await bcrypt.hash(password, 10);

//     // If no error has been thrown create the user
//     const user = await this.create({
//         username,
//         password: hash,
//     });
//     return user;
// };


const userSchema = new mongoose.Schema({
	name: {
             type: String,
             required: true,
	},
	email: {
	     type: String,
	     required: true,
	     unique: true,
	},
	password: {
	     type: String,
	     required: true,
	}
},      {
	timestamps: true,
});

module.exports = mongoose.model("users", userSchema);