import React, { useState,useEffect } from 'react';
import TriviaDisplay from './TriviaDisplay';
import TriviaFilter from '../TriviaFilter/TriviaFilter';
import './Trivia.css';

const baseUrl="http://localhost:9120";


const Trivia = () =>{
    const [trivias,settrivias]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/trivia`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {settrivias(data)})
    },[]);

    const setDataPerFilter = (data)=>{
        settrivias(data);
    }


    return(

        <>
        <div id="triviafiltercontainer">
            <TriviaFilter className="triviafiltercontent" triviafiltering={(data)=>{setDataPerFilter(data)}}/>
        </div>
                <br></br>
         
            <TriviaDisplay thetrivias={trivias}/>
        
        
        </>
    )
}

export default Trivia;