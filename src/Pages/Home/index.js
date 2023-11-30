import React, { useState } from "react";
import "../../Stylesheets/Home.css";

import inceptionImage from "../../Assets/movies/inception.jpg";
import intersellarImage from "../../Assets/movies/intersellar.jpg";
import dunkirkImage from "../../Assets/movies/dunkirk.jpg";
import mementoImage from "../../Assets/movies/memento.jpg";

import moanaImage from "../../Assets/movies/moana.jpg";


const ImageComponent = () => {
  const [showDescriptions, setShowDescriptions] = useState(Array(4).fill(false)); // State to manage descriptions

  // Define movie data with descriptions
  const movieData = [
    {
      image: inceptionImage,
      title: "Inception",
      alt: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster"
    },
    {
      image: intersellarImage,
      alt: "Intersellar",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster",
    },
    {
      image: dunkirkImage,
      alt: "Dunkirk",
      description: "",
    },
    {
      image: mementoImage,
      alt: "Memento",
      description: "",
    },
    {
      image: moanaImage,
      alt: "Moana",
      description: "",
    },
  ];

  // Function to toggle movie description visibility
  const toggleDescription = (index) => {
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = !newShowDescriptions[index];
    setShowDescriptions(newShowDescriptions);
  };

  return (
    <div className="home-container">
      <div className="navigation">
        <nav>
        <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>

          <label class="logo">Yamadasan's</label>
          <ul>
            <li>
              <a class="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Reserve</a>
            </li>
            <li>
              <a href="#">Cancel Reservation</a>
            </li>
          </ul>
        </nav>

        <section>
          <div className="image-container">
            {movieData.map((movie, index) => (
              <div className="movie-item" key={index}>
                <img src={movie.image} alt={movie.alt} />
                <button
                  className="toggle-button"
                  onClick={() => toggleDescription(index)}
                >
                  Description
                </button>
                {showDescriptions[index] && (
                  <p className="movie-description">{movie.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageComponent;
