import React from 'react'
import { Button, Form } from 'antd';
import "../../Stylesheets/Menu.css"
import "../../Stylesheets/General.css"
const movieData = [
    { Date: '2023-10-09', Screen: 4, Time: '14:45', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-09', Screen: 4, Time: '17:00', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-09', Screen: 4, Time: '19:15', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-10', Screen: 1, Time: '13:00', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-10-10', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
];

const uniqueDates = Array.from(new Set(movieData.map(movie => movie.Date)));

const filteredMovieData = uniqueDates.map(date => {
  const moviesOnDate = movieData.filter(movie => movie.Date === date);
  // You may apply logic here to choose one movie entry for the date, e.g., the first one
  return moviesOnDate[0];
});

function Reserve() {
    return (
        <div id="reserveContainer">
            <div id="reserveBodyCss" >
                <h2>Movie Schedule</h2>
                {filteredMovieData.map((movie, index) => (
                    <div key={index}>
                        <Button>
                            <strong>{movie.Date}</strong> <br />
                        </Button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Reserve;