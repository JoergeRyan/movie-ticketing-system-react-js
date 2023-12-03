const express = require("express");
const router = express.Router();

const {
    getMovies,
    updateMovie,
} = require("../controllers/moviesController");

router.get("/all", getMovies);
router.put("/update", updateMovie);

module.exports = router;
