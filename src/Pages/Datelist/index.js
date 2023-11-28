import React, { useState } from 'react'
import { Button, Form } from 'antd';
import "../../Stylesheets/Datelist.css"
import "../../Stylesheets/General.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import movieData from '../../ScheduleHandler';


function Datelist() {
    const [selectedDate, setSelectedDate] = useState(new Date());


  // Check if the selected date is in the filteredMovieData
  const isDateInData = (date) => {
    // Check if selectedDate is not null and date is truthy
    return selectedDate && date && movieData.some(movie => (new Date(movie.Date)).toDateString() === date.toDateString());
  };



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

            </div>
        </div>

    );
}

export default Datelist;