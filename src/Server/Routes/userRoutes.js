const router = require('express').Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
//we will hash and store the passwordx`

//let us generate the token once the user logged in
const jwt = require("jsonwebtoken");


//end point to register a new user
//our callback here is asynchronous
router.post("/register",async(req,res)=>{
 try{
     //check if user already exists
    const userExists = await User.findOne({email: req.body.email});
     if(userExists){
       return res.send({
          success: false,
          message: "User already exists",
       });
     }

     //hash the password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password, salt);
     req.body.password = hashedPassword;

     //save the new user
     const newUser = new User(req.body);
     await newUser.save();

     res.send({success:true, message: "User created successfully"});

} catch(error){
    res.send({
      success:false,
      message: error.message,
    });
}
});


//endpoint for login user
router.post("/login",async(req,res) => {
    try {
      //check if user exist
      const user = await User.findOne({email: req.body.email});

      //true error message if not user
      if(!user){
        return res.send({
          success:false,
          message: "User does not exist",
        });
      }

      //check if password is correct
      const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
      );

      if(!validPassword){
          return res.send({
            success: false,
            message: "Invalid Password",
          });
      }

      //we will assign userID to a token
      //create and assign a token
      //they have to relogin after 1 day
      const token = jwt.sign({userId: user._id}, process.env.jwt_secret, {
        expiresIn: "1d",
      });

      //success if password is correct
      res.send({success: true, message: "User logged in successfully.", data:token});
    } catch (error) {
        res.send({
          success:false,
          message: error.message,
        })
    }
});



module.exports = router;
