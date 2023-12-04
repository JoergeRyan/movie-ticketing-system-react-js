const express = require("express");
const router = express.Router();

const {
  getMovies,
  updateMovie,
  getOneMovie,
  reserveMovie,
} = require("../Controllers/moviesController");

router.get("/all", getMovies);
router.post("/getOneMovie", getOneMovie);
router.put("/update", updateMovie);
router.patch("/reserve", reserveMovie);

module.exports = router;
