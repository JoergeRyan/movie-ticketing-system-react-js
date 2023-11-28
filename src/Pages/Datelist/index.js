import React, { useState } from 'react'
import { Button, Form } from 'antd';
import "../../Stylesheets/Datelist.css"
import "../../Stylesheets/General.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import movieData,{setfilterMoviesByDate} from '../../DataHandler';


function Datelist() {
    const [selectedDate, setSelectedDate] = useState(new Date());


    // Check if the selected date is in the filteredMovieData
    const isDateInData = (date) => {
        // Check if selectedDate is not null and date is truthy
        return selectedDate && date && movieData.some(movie => (new Date(movie.Date)).toDateString() === date.toDateString());
    };



    const tileContent = ({ date, view }) => {
        if (view === 'month' && isDateInData(date)) {

            return <div
                style={{ backgroundColor: 'green', borderRadius: '10%', padding: '2px', color: 'white' }}>
            </div>
        }
        return <div
            style={{ borderRadius: '10%', padding: '2px', color: 'white' }}>
        </div>;
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        // Add your logic for handling the clicked date here
    };

    const errorMessageStyle = {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: isDateInData(selectedDate) ? 'green' : 'red',
        color: 'white',
        height: 'auto',
        marginBottom: '10px',
    };

    
    function handleClickSelectDay() {
        console.log(selectedDate);
        if(isDateInData(selectedDate)){
           setfilterMoviesByDate(selectedDate);
        } 
    };
    return (
        <div id="dateListContainer">
            <div id="dateListSceduleContainer">
                <h2 id="movieSchedule">Movie Schedule</h2>
                <div style={{ maxWidth: '900px', }}>

                    <div style={errorMessageStyle}>
                        {isDateInData(selectedDate) ? "Valid Date" : " Please select a valid date."}
                    </div>
                    <Calendar
                        onClickDay={handleDateClick}
                        value={selectedDate}
                        calendarType="US"
                        tileContent={tileContent}
                    />
                    <Button style={{ marginLeft: '75%', color: 'white', backgroundColor: 'red', }} onClick={handleClickSelectDay}>Select</Button>
                </div>


            </div>
        </div>

    );
}

export default Datelist;