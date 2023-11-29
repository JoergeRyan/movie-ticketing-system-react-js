import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'antd';
import '../../Stylesheets/CinemaListContainer.css';
import DataHandler, { dataHandler } from '../../DataHandler';
import '../Assets/temporary-image.png'
import tempImage from '../Assets/temporary-image.png'
function CinemaList() {
    const [displayMovie, setDisplayMovie] = useState(1);
    const navigate = useNavigate(); 
    const schedule = dataHandler.getfilterMoviesByDate();


    let getOneMoviePerScreen = () => {
        const result = [];
        for (let screen = 1; screen <= 5; screen++) {
            const moviesForScreen = schedule.filter(movie => movie.Screen === screen);
            if (moviesForScreen.length > 0) {
                result.push(moviesForScreen[0]);
            }
        }

        return result;
    };


    let movieData = getOneMoviePerScreen();
    console.log(movieData);

    const onClickCinema = (cinemaNumber) => {
        if (displayMovie !== cinemaNumber) {
          setDisplayMovie(cinemaNumber);
        }
      }

      let onClickCinemaButton = (movie1) =>{
        console.log(movie1)
        navigate('/seatlayout');
         
      }
      
    return (

        <div id="cinemaListBody" >
            <div id="cinemaListContainer">
                <div id="buttonContainer">
                    <Button id="buttonCList" onClick={() =>onClickCinema(0)}>Cenima 1</Button>
                    <Button id="buttonCList" onClick={() =>onClickCinema(1)}>Cenima 2</Button>
                    <Button id="buttonCList" onClick={() =>onClickCinema(2)}>Cenima 3</Button>
                    <Button id="buttonCList" onClick={() =>onClickCinema(3)}>Cenima 4</Button>
                    <Button id="buttonCList" onClick={() =>onClickCinema(4)}>Cenima 5</Button>
                </div>

                {movieData.map((movie, index) => (

                    (index === displayMovie) && (
                    <div id="listContainer" key={index}>
                        <div>
                        <img id="imageContainer" src={tempImage} alt="Movie Poster" />
                            <h1 id="cenimaTitle">{movie.Movie}</h1>
                        </div>

                        <div id="movieDiscriptionContainer">
                            <div id="cenimaDiscription">
                                <p > Line 2:22:   'Form' is defined but never used                                                                           no-unused-vars
                                    Line 4:12:   'DataHandler' is defined but never used                                                                    no-unused-vars
                                    Line 4:27:   'dataHandler' is defined but never used                                                                    no-unused-vars
                                    Line 23:25:  img elements must have an alt prop, either with meaningful , either with meaningful , either with meaningful , either with meaningful , either with meaningful , either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text</p>
                            </div>

                            <div id="cenimaTimeSchedule">
                            
                            {schedule.map((movie1, index) => (
                                (movie1.Screen === displayMovie+1) && (
                                <div className="cenimaTimeContainer"> 
                                    <p className='cinemaContents' >{`Time : ${movie1.StartTime} - ${movie1.EndTime} ${movie1.Reserved}`}</p> 
                                    <p className='cinemaContents' >{  `Reserved Seats : ${movie1.Reserved} out of 40` }</p> 
                                    <Button onClick={() => onClickCinemaButton(movie1)} className='cinemaContents'>Select</Button>
                                </div>
                                )
                            ))}
                            </div>


                        </div>

                    </div>
                    
                    )

                ))}

                     


            </div>
        </div>
    );
}


export default CinemaList;