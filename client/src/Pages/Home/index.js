import React, { useEffect, useState } from 'react';
import "../../Stylesheets/Home.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ImageComponent = () => {
  const navigate = useNavigate();
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
            <li><Link class="active"  to="/home">Home</Link></li>
            <li><Link class="active1" to="/datelist">Reserve</Link></li>
            <li><Link class="active2" to="/cancelreservation">Cancel Reservation</Link></li>
          </ul>
        </nav>

        <section id="image-container-parent">
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
