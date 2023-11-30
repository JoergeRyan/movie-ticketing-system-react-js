const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket");
const connection = mongoose.connection;

connection.on('connected', ()=> { console.log("connected successfully")});
connection.on('error', ()=> { console.log("errored successfully")});



// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   // Other fields as needed
// });

// const User = mongoose.model('User', userSchema);

// const newUser = new User({
//     username: 'john_doe',
//     email: 'john.doe@example.com',
//     // Other field values
//   });
  
//   newUser.save((error, savedUser) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('User saved successfully:', savedUser);
//     }
//   });
  
