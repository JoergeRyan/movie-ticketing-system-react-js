const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    // ticketNumber: String,s
    movieId: String,
    movieName: String,
    seats: [
        {
            type: String,
        },
    ],
    numSenior: Number,
    price: Number
});

module.exports = mongoose.model("Ticket", ticketSchema);
