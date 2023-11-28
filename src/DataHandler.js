const movieData = [
  { Date: '2023-11-15', Screen: 1, Time: '13:00', Reserved: false, Movie: 'Inception', Price: 8.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 1, Time: '14:30', Reserved: false, Movie: 'Inception', Price: 8.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 1, Time: '16:00', Reserved: false, Movie: 'Inception', Price: 8.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 1, Time: '17:30', Reserved: false, Movie: 'Inception', Price: 8.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 1, Time: '19:00', Reserved: false, Movie: 'Inception', Price: 8.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 2, Time: '13:00', Reserved: false, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 2, Time: '14:30', Reserved: false, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 2, Time: '16:00', Reserved: false, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 2, Time: '17:30', Reserved: false, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 2, Time: '19:00', Reserved: false, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '13:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '14:30', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '16:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '17:30', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '19:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '13:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '14:30', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '16:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '17:30', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 3, Time: '19:00', Reserved: false, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 4, Time: '13:00', Reserved: false, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 4, Time: '14:30', Reserved: false, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 4, Time: '16:00', Reserved: false, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 4, Time: '17:30', Reserved: false, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 4, Time: '19:00', Reserved: false, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 5, Time: '13:00', Reserved: false, Movie: 'Memento', Price: 5.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 5, Time: '14:30', Reserved: false, Movie: 'Memento', Price: 5.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 5, Time: '16:00', Reserved: false, Movie: 'Memento', Price: 5.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 5, Time: '17:30', Reserved: false, Movie: 'Memento', Price: 5.99, Duration: 1 },
  { Date: '2023-11-15', Screen: 5, Time: '19:00', Reserved: false, Movie: 'Memento', Price: 5.99, Duration: 1 },
];




function formatToCustomDate(dateString) {
  const originalDate = new Date(dateString);
  const formattedDate = originalDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
}


let filteredMovies;
function setfilterMoviesByDate(targetDate) {
     filteredMovies = movieData.filter(movie => formatToCustomDate(movie.Date) === formatToCustomDate(targetDate));
}
function getfilterMoviesByDate() {
   return filteredMovies
}
  

export default movieData;
export {setfilterMoviesByDate,getfilterMoviesByDate};