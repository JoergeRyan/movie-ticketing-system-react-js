import React, { useState } from 'react'
import { Button, Form } from 'antd';
import'../../Stylesheets/CinemaListContainer.css';
import movieData,{getfilterMoviesByDate} from '../../DataHandler';
function CinemaList() {

    return (
        <div id="cinemaListContainer">
            <div>
                <div id="buttonContainer">
                <Button id="buttonCList">Cenima 1</Button> 
                <Button id="buttonCList">Cenima 2</Button> 
                <Button id="buttonCList">Cenima 3</Button>
                <Button id="buttonCList">Cenima 4</Button>
                <Button id="buttonCList">Cenima 5</Button>
                </div>

                <div id="listContainer">
                    <p>
                        
                    </p>

                </div>




            </div>
        </div>
    );
}


export default CinemaList;