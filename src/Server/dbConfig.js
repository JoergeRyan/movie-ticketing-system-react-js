const mongose = require('mongoose');
mongose.connect("mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket");
const connection = mongose.connection;

connection.on('connected', ()=> { console.log("connected successfully")});
connection.on('error', ()=> { console.log("errored successfully")});