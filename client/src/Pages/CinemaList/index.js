import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "antd";
import "../../Stylesheets/CinemaListContainer.css";
import DataHandler, { dataHandler } from "../../DataHandler";
import tempImage from "../../Assets/temporary-image.png";

function CinemaList() {
  const [displayMovie, setDisplayMovie] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const selectedDate = location.state?.selectedDate;
  const data = location.state;

  useEffect(() => {
    // Check if selectedDate and movieList exist
    if (selectedDate && data.movieList) {
      // Format the selectedDate
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = selectedDate.getDate().toString();

      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);
      // Filter schedules based on the formatted date
      const schedulesForSelectedDate = data.movieList
        .filter(movie => movie.Date === formattedDate);

      console.log(schedulesForSelectedDate);
      setSchedules(schedulesForSelectedDate);
    }
  }, [selectedDate, data.movieList]);

  // The empty dependency array ensures the effect runs only once

  // const moviesWithSameDate = schedules.filter(
  //   (schedule) => schedule.movieDate === selectedDate.format("YYYY-MM-DD")
  // );

  let getOneMoviePerScreen = () => {
    // Assuming this code is within a loop iterating from 1 to 5
    const result = [];
    for (let screen = 1; screen <= 5; screen++) {
      const moviesForScreen = schedules.filter(
        (movie) => movie.Screen === screen
      );
      if (moviesForScreen.length > 0) {
        result.push(moviesForScreen[0]);
      }
    }
    return result;
  };

  let movieData = getOneMoviePerScreen();
  console.log(movieData);

  const onClickCinema = (cinemaNumber) => {
    if (displayMovie !== cinemaNumber) {
      setDisplayMovie(cinemaNumber);
    }
  };

  let onClickCinemaButton = (movie1) => {
    console.log(movie1);
    navigate("/seatlayout?id=" + movie1._id);
  };
  let getButtons = () => {
    // Assuming this code is within a loop iterating from 1 to 5
    const result = [];
    for (let screen = 1; screen <= 5; screen++) {
      const moviesForScreen = schedules.filter(
        (movie) => movie.Screen === screen
      );
      if (moviesForScreen.length > 0) {
        result.push(moviesForScreen[0]);
      }
    }
    return result;
  };




  return (
    <div id="cinemaListBody">
      <h1 id="cinema">YamadaSans</h1>
      <div id="cinemaListContainer">
        <div id="buttonContainer">
          {movieData.map(
            (movie, index) => (
              <button id="buttonCList" onClick={() => onClickCinema(index)}>
                Cinema {index + 1}
              </button>
            )
          )
          }
        </div>

        {movieData.map(
          (movie, index) =>
            index === displayMovie && (
              <div id="listContainer" key={index}>
                <div className="imageAndTitle">
                  <img id="imageContainer" src={movie.imgSource} alt="Movie Poster" />
                  {/* <div className="video-responsive">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/YoHD9XEInc0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div> */}
                  <h1 id="cinemaTitle">{movie.Movie}</h1>
                </div>

                <div id="movieDescriptionContainer">
                  <div id="cinemaDescription">
                    <p>
                      {" "}
                      {movie.Discription}{" "}
                      <i>
                      </i>{" "}
                    </p>
                  </div>

                  <div id="cinemaTimeSchedule">
                    {schedules.map(
                      (movie1, index) =>
                        (movie1.Screen === displayMovie + 1 && movie.Movie === movie1.Movie) && (
                          <div className="cinemaTimeContainer">
                            <p className="cinemaContents">{`Time : ${movie1.StartTime} - ${movie1.EndTime}`}</p>
                            <p className="cinemaContents">{`Reserved Seats : ${movie1.Reserved ? movie1.Reserved.length : 0
                              } out of 40`}</p>
                            <Button
                              id="selectButton"
                              onClick={() => onClickCinemaButton(movie1)}
                              className="cinemaContents"
                            >
                              Select
                            </Button>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default CinemaList;
