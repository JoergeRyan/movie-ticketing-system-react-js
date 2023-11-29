import React, { useState } from 'react'
import { Button, Form } from 'antd';
import '../../Stylesheets/CinemaListContainer.css';
import DataHandler, { dataHandler } from '../../DataHandler';
import '../Assets/temporary-image.png'
import tempImage from '../Assets/temporary-image.png'
function CinemaList() {
    const schedule = dataHandler.getfilterMoviesByDate();

    const movies = movieData.filter(movie => movie.Movie.toLowerCase().includes('o'));


    console.log(schedule);
    return (

        <div id="cinemaListBody" >
            <div id="cinemaListContainer">
                <div id="buttonContainer">
                    <Button id="buttonCList">Cenima 1</Button>
                    <Button id="buttonCList">Cenima 2</Button>
                    <Button id="buttonCList">Cenima 3</Button>
                    <Button id="buttonCList">Cenima 4</Button>
                    <Button id="buttonCList">Cenima 5</Button>
                </div>

                {schedule.map((movie, index) => (

                    
                    <div id="listContainer" key={index}>
                        <div>
                            <img id="imageContainer" src={tempImage} />
                            <h1 id="cenimaTitle">{movie.Movie}</h1>
                        </div>

                        <div id="movieDiscriptionContainer">
                            <div id="cenimaDiscription">
                                <p > Line 2:22:   'Form' is defined but never used                                                                           no-unused-vars
                                    Line 4:12:   'DataHandler' is defined but never used                                                                    no-unused-vars
                                    Line 4:27:   'dataHandler' is defined but never used                                                                    no-unused-vars
                                    Line 23:25:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text</p>
                            </div>

                            <div id="cenimaTimeSchedule">
                                <div>

                                    {/* <div key={index}>
                                        <p>Screen: {movie.Screen}</p>
                                        <p>Time: {movie.Time}</p>
                                        <p>Reserved: {movie.Reserved}</p>
                                        <p>Movie: {movie.Movie}</p>
                                        <p>Price: {movie.Price}</p>
                                        <p>Duration: {movie.Duration}</p>
                                        <hr />
                                    </div> */}

                                </div>
                            </div>


                        </div>

                    </div>


                ))}


            </div>
        </div>
    );
}


export default CinemaList;