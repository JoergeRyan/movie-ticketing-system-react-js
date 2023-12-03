import React, { useEffect, useState } from 'react';
import "../../Stylesheets/Home.css";
import axios from 'axios';



const ImageComponent = () => {
  const [showDescriptions, setShowDescriptions] = useState(Array(4).fill(false)); // State to manage descriptions
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/movies/all'); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        console.log(response.data);
        
        setMovies(getOneMoviePerTitle(response.data)); // Assuming the response data is an array of movies
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
  
    fetchData();
  }, []); 
  

  let getOneMoviePerTitle = (schedule) => {

    const uniqueTitles = new Set();
    const result = [];
    
    schedule.forEach((movie) => {
      if (!uniqueTitles.has(movie.Movie)) {
        uniqueTitles.add(movie.Movie);
        console.log(movie);
        result.push(movie);
      }
    });
    return result;
  };
  

  // Function to toggle movie description visibility
  const toggleDescription = (index) => {
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = !newShowDescriptions[index];
    setShowDescriptions(newShowDescriptions);
  };

  // function handleClickRE

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
            <li><a class="active"  href="#">Home</a></li>
            <li><a class="active1"href="#">Reserve</a></li>
            <li><a class="active2" href="#">Cancel Reservation</a></li>
          </ul>
        </nav>

        <section>
          <div className="image-container">
            {movies.map((movie, index) => (
              <div className="movie-item" key={index}>
                <img style = {{height: "60vh",width:"40vh"}}src={movie.imgSource} />
                <button
                  className="toggle-button"
                  onClick={() => toggleDescription(index)}
                >
                  Description
                </button>
                {showDescriptions[index] && (
                  <p className="movie-description">{movie.Discription}</p>
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
