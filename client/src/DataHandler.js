//  class DataHandler {
//   constructor(){
//     this."movie"Data = [
//       // { "Date": "2023-12-15", "Screen": 1, Time: "13:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 1, Time: "14:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 1, Time: "16:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 1, Time: "17:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 1, Time: "19:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },

//       // { "Date": "2023-12-15", "Screen": 2, Time: "13:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-15", "Screen": 2, Time: "14:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-15", "Screen": 2, Time: "16:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-15", "Screen": 2, Time: "17:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-15", "Screen": 2, Time: "19:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },

//       // { "Date": "2023-12-15", "Screen": 3, Time: "13:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "16:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "17:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "19:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "13:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "14:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "16:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "17:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-15", "Screen": 3, Time: "19:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },

//       // { "Date": "2023-12-15", "Screen": 4, Time: "13:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 4, Time: "14:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 4, Time: "16:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 4, Time: "17:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 4, Time: "19:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },

//       // { "Date": "2023-12-15", "Screen": 5, Time: "13:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 5, Time: "14:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 5, Time: "16:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 5, Time: "17:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-15", "Screen": 5, Time: "19:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },



//       // { "Date": "2023-12-16", "Screen": 1, Time: "13:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 1, Time: "14:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 1, Time: "16:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 1, Time: "17:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 1, Time: "19:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },

//       // { "Date": "2023-12-16", "Screen": 2, Time: "13:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-16", "Screen": 2, Time: "14:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-16", "Screen": 2, Time: "16:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-16", "Screen": 2, Time: "17:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       // { "Date": "2023-12-16", "Screen": 2, Time: "19:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },

//       // { "Date": "2023-12-16", "Screen": 3, Time: "13:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "14:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "16:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "17:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "19:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "13:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "14:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "16:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "17:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       // { "Date": "2023-12-16", "Screen": 3, Time: "19:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },

//       // { "Date": "2023-12-16", "Screen": 4, Time: "13:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 4, Time: "14:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 4, Time: "16:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 4, Time: "17:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 4, Time: "19:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
      
//       // { "Date": "2023-12-16", "Screen": 5, Time: "13:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 5, Time: "14:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 5, Time: "16:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 5, Time: "17:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       // { "Date": "2023-12-16", "Screen": 5, Time: "19:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },

//       {  },
//       {  },
//       {  },
//       {  },
//       {  },
   
//       {  },
//       {  },
//       {  },
//       {  },
//       {  },
      
  
//       {  },
//       {  },
//       {  },
//       {  },
//       {  },
  
//       {  },
//       {  },
//       {  },
//       {  },
//       {  },
  
//       {  },
//       {  },
//       {  },
//       {  },
//       {  },
  
//       { "Date": "2023-12-16", "Screen": 1, "StartTime": "13:00", "EndTime": "14:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 1, "StartTime": "14:30", "EndTime": "15:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 1, "StartTime": "16:00", "EndTime": "17:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 1, "StartTime": "17:30", "EndTime": "18:30", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 1, "StartTime": "19:00", "EndTime": "20:00", "Reserved": {}, "Movie": "Inception", "Premier" : true, "Price": 1500, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ15MDYzMTk@._V1_.jpg" },
  
//       { "Date": "2023-12-16", "Screen": 2, "StartTime": "13:00", "EndTime": "14:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       { "Date": "2023-12-16", "Screen": 2, "StartTime": "14:30", "EndTime": "15:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       { "Date": "2023-12-16", "Screen": 2, "StartTime": "16:00", "EndTime": "17:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       { "Date": "2023-12-16", "Screen": 2, "StartTime": "17:30", "EndTime": "18:30", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
//       { "Date": "2023-12-16", "Screen": 2, "StartTime": "19:00", "EndTime": "20:00", "Reserved": {}, "Movie": "The Dark Knight", "Price": 150, "Duration": 1,"imgSource" : "https://i.scdn.co/image/ab67616d0000b2739ca203152ead0cc8dccdf79151" },
  
//       { "Date": "2023-12-16", "Screen": 3, "StartTime": "13:00", "EndTime": "14:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       { "Date": "2023-12-16", "Screen": 3, "StartTime": "14:30", "EndTime": "15:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       { "Date": "2023-12-16", "Screen": 3, "StartTime": "16:00", "EndTime": "17:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       { "Date": "2023-12-16", "Screen": 3, "StartTime": "17:30", "EndTime": "18:30", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
//       { "Date": "2023-12-16", "Screen": 3, "StartTime": "19:00", "EndTime": "20:00", "Reserved": {}, "Movie": "Interstellar", "Price": 150, "Duration": 1,"imgSource" : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7G015G7iNeKOsWYvUwyOYBQ.jpeg" },
  
//       { "Date": "2023-12-16", "Screen": 4, "StartTime": "13:00", "EndTime": "14:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 4, "StartTime": "14:30", "EndTime": "15:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 4, "StartTime": "16:00", "EndTime": "17:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 4, "StartTime": "17:30", "EndTime": "18:30", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 4, "StartTime": "19:00", "EndTime": "20:00", "Reserved": {}, "Movie": "Dunkirk", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BN2YyZjQ0NTEtNzU15MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
  
//       { "Date": "2023-12-16", "Screen": 5, "StartTime": "13:00", "EndTime": "14:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 5, "StartTime": "14:30", "EndTime": "15:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 5, "StartTime": "16:00", "EndTime": "17:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 5, "StartTime": "17:30", "EndTime": "18:30", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
//       { "Date": "2023-12-16", "Screen": 5, "StartTime": "19:00", "EndTime": "20:00", "Reserved": {}, "Movie": "Memento", "Price": 150, "Duration": 1,"imgSource" : "https://m.media-amazon.com/images/M/MV15BZTcyNjk1MjgtOWI3Mi00YzQwLWI15MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
  

//     ];
//     this.filtered"Movie" = [];
//   }
   




//    formatToCustom"Date"("date"String) {
//     const original"Date" = new "Date"("date"String);
//     const formatted"Date" = original"Date".toLocale"Date"String("en-US", {
//       weekday: "short",
//       month: "short",
//       day: "2-digit",
//       year: "numeric",
//     });
//     return formatted"Date";
//   }


   
//    setfilter"Movie"sBy"Date"(target"Date") {
//     this.filtered"Movie"s = this."movie"Data.filter("movie" => this.formatToCustom"Date"("movie"."Date") === this.formatToCustom"Date"(target"Date"));
//   }

//    getfilter"Movie"sBy"Date"() {
//     return this.filtered"Movie"s;
//   }

//   get"Movie"Data(){
//     return this."movie"Data;  
//   }
// }
// let dataHandler = new DataHandler();

// export default DataHandler;
// export { dataHandler };
