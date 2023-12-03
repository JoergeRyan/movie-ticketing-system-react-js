import { useNavigate } from 'react-router-dom';

import { Button, Form } from 'antd';
import "../../Stylesheets/Datelist.css"
import "../../Stylesheets/General.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
function Datelist() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate(); 
    // Check if the selected date is in the filteredMovieData
    const isDateInData = (date) => {
        // Check if selectedDate is not null and date is truthy
        return selectedDate && date && movies.some(movie => (new Date(movie.Date)).toDateString() === date.toDateString());
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/movies/all'); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
            console.log(response.data);
            
            setMovies(response.data); // Assuming the response data is an array of movies
          } catch (error) {
            console.error('Error fetching movie data:', error);
          }
        };
      
        fetchData();
      }, []); 


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
        if(isDateInData(selectedDate)){
            movies.setfilterMoviesByDate(selectedDate);
            console.log(movies.getfilterMoviesByDate());
        
            navigate('/cinemalist');
        } 
    };

    function handleClickBack(){
        navigate(-1);
    }
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
                    <div className="buttonClick">
                     <Button style={{ marginRight: '10px', color: 'white', backgroundColor: 'blue' }} onClick={handleClickBack}>Back</Button>
                    <Button style={{ marginLeft: '75%', color: 'white', backgroundColor: 'red', }} onClick={handleClickSelectDay}>Select</Button>
                    </div>

                </div>


            </div>
        </div>

    );
}

export default Datelist;