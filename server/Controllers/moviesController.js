const Movie = require("../models/moviesModel");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    // console.log(movies);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneMovie = async (req, res) => {
  try {
    const movies = await Movie.findById(req.body.id);
    // console.log(movies);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateMovie = async (req, res) => {
  const {
    movieId,
    movieTitle,
    cinemaNumber,
    startDate,
    isPremiere,
    duration,
    image,
  } = req.body;

  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: movieId },
      {
        $set: {
          movieTitle,
          cinemaNumber,
          startDate,
          isPremiere,
          duration,
          image,
        },
      },
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const reserveMovie = async (req, res) => {
  try {
    const update = {
      Reserved: req.body.Reserved,
    };

    const updatedMovie = await Movie.findByIdAndUpdate(req.body.id, update);

    if (!updatedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully updated",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      fail_message: "Error in updating movie. Please try again later.",
    });
  }
};

module.exports = { getMovies, getOneMovie, updateMovie, reserveMovie };
