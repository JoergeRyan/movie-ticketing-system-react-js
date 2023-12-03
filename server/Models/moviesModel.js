const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    Date: String,
    Screen: Number,
    StartTime: String,
    EndTime: String,
    Reserved: Object,
    Movie: String,
    Price: Number,
    Duration : Number,
    imgSource : String,
    Discription : String,
});

module.exports = mongoose.model("Movie", movieSchema);