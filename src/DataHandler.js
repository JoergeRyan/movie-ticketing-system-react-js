 class DataHandler {
  constructor(){
    this.movieData = [
      { Date: '2023-11-15', Screen: 1, Time: '13:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 1, Time: '14:30', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 1, Time: '16:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 1, Time: '17:30', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 1, Time: '19:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },

      { Date: '2023-11-15', Screen: 2, Time: '13:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 2, Time: '14:30', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 2, Time: '16:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 2, Time: '17:30', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 2, Time: '19:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },

      { Date: '2023-11-15', Screen: 3, Time: '13:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '16:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '17:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '19:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '13:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '14:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '16:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '17:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 3, Time: '19:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },

      { Date: '2023-11-15', Screen: 4, Time: '13:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 4, Time: '14:30', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 4, Time: '16:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 4, Time: '17:30', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 4, Time: '19:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },

      { Date: '2023-11-15', Screen: 5, Time: '13:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 5, Time: '14:30', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 5, Time: '16:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 5, Time: '17:30', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-15', Screen: 5, Time: '19:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },



      { Date: '2023-11-16', Screen: 1, Time: '13:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 1, Time: '14:30', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 1, Time: '16:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 1, Time: '17:30', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 1, Time: '19:00', Reserved: 0, Movie: 'Inception', Price: 8.99, Duration: 1 },

      { Date: '2023-11-16', Screen: 2, Time: '13:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 2, Time: '14:30', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 2, Time: '16:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 2, Time: '17:30', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 2, Time: '19:00', Reserved: 0, Movie: 'The Dark Knight', Price: 7.99, Duration: 1 },

      { Date: '2023-11-16', Screen: 3, Time: '13:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '14:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '16:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '17:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '19:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '13:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '14:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '16:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '17:30', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 3, Time: '19:00', Reserved: 0, Movie: 'Interstellar', Price: 9.99, Duration: 1 },

      { Date: '2023-11-16', Screen: 4, Time: '13:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 4, Time: '14:30', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 4, Time: '16:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 4, Time: '17:30', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 4, Time: '19:00', Reserved: 0, Movie: 'Dunkirk', Price: 6.99, Duration: 1 },
      
      { Date: '2023-11-16', Screen: 5, Time: '13:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 5, Time: '14:30', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 5, Time: '16:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 5, Time: '17:30', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },
      { Date: '2023-11-16', Screen: 5, Time: '19:00', Reserved: 0, Movie: 'Memento', Price: 5.99, Duration: 1 },



    ];
    this.filteredMovie = [];
  }
   




   formatToCustomDate(dateString) {
    const originalDate = new Date(dateString);
    const formattedDate = originalDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  }


   
   setfilterMoviesByDate(targetDate) {
    this.filteredMovies = this.movieData.filter(movie => this.formatToCustomDate(movie.Date) === this.formatToCustomDate(targetDate));
  }

   getfilterMoviesByDate() {
    return this.filteredMovies;
  }

  getMovieData(){
    return this.movieData;  
  }
}


export default DataHandler;
export { dataHandler };
