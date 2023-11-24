import React, { useState } from 'react'
import { Button, Form } from 'antd';
import "../../Stylesheets/Datelist.css"
import "../../Stylesheets/General.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function Datelist() {
    const [selectedDate, setSelectedDate] = useState(new Date());

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
  
    // const uniqueDates = Array.from(new Set(movieData.map(movie => movie.Date)))
    //     .sort((a, b) => new Date(a) - new Date(b));

    // const filteredMovieData = uniqueDates.map(date => {
    //     const moviesOnDate = movieData.filter(movie => movie.Date === date);
    //     // You may apply logic here to choose one movie entry for the date, e.g., the first one
    //     return moviesOnDate[0];
    // });
    // const formatDate = (dateString) => {
    //     const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    //     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    //     return formattedDate;
    // };

  // Check if the selected date is in the filteredMovieData
  const isDateInData = (date) => {
    // Check if selectedDate is not null and date is truthy
    return selectedDate && date && movieData.some(movie => (new Date(movie.Date)).toDateString() === date.toDateString());
  };
  
    

    //const isDateInMovieData = (date) => { return movieData.some(movie => formatDate(movie.Date) === formatDate(date)) };

    const tileContent = ({ date, view }) => {
        if (view === 'month' && isDateInData(date)) {
            return <div style={{ backgroundColor: 'red', borderRadius: '50%', padding: '2px', color: 'white' }}>
                {date.getDate()}
            </div>
        }
        return null;
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        console.log(isDateInData(date));
        // Add your logic for handling the clicked date here
    };

   


    return (
        <div id="dateListContainer">


            <div id="dateListSceduleContainer">


                <h2 id="movieSchedule">Movie Schedule</h2>

                <div style={{ maxWidth: '900px', margin: 'auto', }}>


                    <Calendar
                        onClickDay={handleDateClick}
                        value={selectedDate}
                        calendarType="US"
                        tileContent={tileContent}
                    />

                    {!isDateInData(selectedDate) && (
                        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'red', color: 'white' }}>
                            Please select a valid date.
                        </div>
                    )}

                </div>


                {/* {filteredMovieData.map((movie, index) => (
                        <div key={index}>
                            <Button id='dateButtons' >
                                <strong>{formatDate(movie.Date)}</strong> <br />
                            </Button>

                        </div>
                    ))} */}


            </div>
        </div>

    );
}

export default Datelist;