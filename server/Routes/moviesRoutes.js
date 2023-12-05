const express = require("express");
const router = express.Router();

const {
  getMovies,
  getOneMovie,
  reserveMovie,
} = require("../Controllers/moviesController");

router.get("/all", getMovies);
router.post("/getOneMovie", getOneMovie);
router.patch("/reserve", reserveMovie);

module.exports = router;
