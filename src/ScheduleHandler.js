const movieData = [
    { Date: '2023-10-25', Screen: 4, Time: '14:45', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-26', Screen: 4, Time: '17:00', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-27', Screen: 4, Time: '19:15', Reserved: false, Movie: 'A Very Good Girl', Price: 2.25 },
    { Date: '2023-10-28', Screen: 1, Time: '13:00', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-10-29', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-10-30', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-1', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-2', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-3', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-6', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-9', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-10', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-24', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },
    { Date: '2023-11-19', Screen: 1, Time: '15:30', Reserved: false, Movie: 'The Creator', Price: 2.25 },

];

function filterMoviesByDate(targetDate) {
    const filteredMovies = movieData.filter(movie => movie.Date === targetDate);
    return filteredMovies;
  }
  

export default movieData;
export {filterMoviesByDate};