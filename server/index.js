const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
const moviesRoutes = require("./routes/moviesRoutes");
const ticketsRoutes = require("./routes/ticketRoutes");
const userRoutes = require("./routes/userRoutes");

// const upload = multer({
//   dest: 'uploads/',
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === 'jpeg' || file.mimetype === 'png') {
//       cb(null, true);
//     } else {
//       cb(null, true);
//     }
//   }
// });

app.use(cors());
app.use(express.json());

// app.use(express.static("uploads"));
app.use("/movies", moviesRoutes);
app.use("/tickets", ticketsRoutes);
app.use("/users", userRoutes);

mongoose.set({ strictQuery: true });
mongoose
    .connect(
        "mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/MovieReservationTicket"
    )
    .then(() => {
        app.listen(
            process.env.PORT || 5000,
            console.log("Now connected to MongoDB Atlas"),
            console.log(`Server is running at port ${process.env.PORT || 5000}`)
        );
    })
    .catch((err) => {
        console.log(err);
    });
