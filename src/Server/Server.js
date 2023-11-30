const mongoose = require('mongoose');
const express = require('express');

const userRouter = require('./UserRoute');
const userController = require('./UserController');
const app = express();
const connection = mongoose.connection;

mongoose.connect("mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket");

connection.on('open', () => {
  console.log("Connected successfully");
});

connection.on('error', (error) => {
  console.log("Error in connection:", error);
});


app.use(express.json());
app.use("/",userRouter); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Nodejs server is running port 5000`));


//mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/

module.exports = {app,mongoose};