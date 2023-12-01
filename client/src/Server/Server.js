const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());
const connection = mongoose.connection;

mongoose.connect("mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket");

connection.on('open', () => {
  console.log("Connected successfully");
});

connection.on('error', (error) => {
  console.log("Error in connection:", error);
});

// app.use("/",userRouter); 

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Nodejs server is running port 5000`));


// //mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/

// module.exports = {app,mongoose};
// mongoose.set({ strictQuery: true });
// mongoose
//     .connect(
//         "mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket"
//     )
//     .then(() => {
//         app.listen(
//             process.env.PORT || 5000,
//             console.log("Now connected to MongoDB Atlas"),
//             console.log(`Server is running at port ${process.env.PORT || 5000}`)
//         );
//     })
//     .catch((err) => {
//         console.log(err);
//     });