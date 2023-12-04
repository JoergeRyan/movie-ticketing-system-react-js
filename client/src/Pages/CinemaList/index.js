import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "antd";
import "../../Stylesheets/CinemaListContainer.css";
import DataHandler, { dataHandler } from "../../DataHandler";
import tempImage from "../../Assets/temporary-image.png";

function CinemaList() {
  const [displayMovie, setDisplayMovie] = useState(1);
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    setSchedules(data.movieList);
  }, []); // The empty dependency array ensures the effect runs only once

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

  console.log("asdf", schedules, "Sehcdles");

  return (
    <div id="cinemaListBody">
      <h1 id="cinema">YamadaSans</h1>
      <div id="cinemaListContainer">
        <div id="buttonContainer">
          <button id="buttonCList" onClick={() => onClickCinema(0)}>
            Cinema 1
          </button>
          <button id="buttonCList" onClick={() => onClickCinema(1)}>
            Cinema 2
          </button>
          <button id="buttonCList" onClick={() => onClickCinema(2)}>
            Cinema 3
          </button>
          <button id="buttonCList" onClick={() => onClickCinema(3)}>
            Cinema 4
          </button>
          {/* <button id="buttonCList" onClick={() => onClickCinema(4)}>
            Cinema 5
          </button> */}
        </div>

        {schedules.map(
          (movie, index) =>
            index === displayMovie && (
              <div id="listContainer" key={index}>
                <div className="imageAndTitle">
                  {/* <img id="imageContainer" src={tempImage} alt="Movie Poster" /> */}
                  <div className="video-responsive">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/YoHD9XEInc0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h1 id="cinemaTitle">{movie.Movie}</h1>
                </div>

                <div id="movieDescriptionContainer">
                  <div id="cinemaDescription">
                    <p>
                      {" "}
                      Cobb and Arthur are "extractors" who perform corporate
                      espionage using experimental dream-sharing technology to
                      infiltrate their targets' subconscious and extract
                      information. Their latest target, Saito, is impressed with
                      Cobb's ability to layer multiple dreams within each other.
                      He offers to hire Cobb for the ostensibly impossible job
                      of implanting an idea into a person's subconscious;
                      performing "inception" on Robert Fischer, the son of
                      Saito's competitor Maurice Fischer, with the idea to
                      dissolve his father's company. In return, Saito promises
                      to clear Cobb's criminal status, allowing him to return
                      home to his children.{" "}
                      <i>
                        <b>Its not the looks but the rizz</b>
                      </i>{" "}
                    </p>
                  </div>

                  <div id="cinemaTimeSchedule">
                    {schedules.map(
                      (movie1, index) =>
                        (movie1.Screen === displayMovie + 1) && (
                          <div className="cinemaTimeContainer">
                            <p className="cinemaContents">{`Time : ${movie1.StartTime} - ${movie1.EndTime}`}</p>
                            <p className="cinemaContents">{`Reserved Seats : ${
                              movie1.Reserved ? movie1.Reserved.length : 0
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
