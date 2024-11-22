import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TriviaDetailNameDisplay from './TriviaDetailNameDisplay';
import './TriviaDetailName.css';
const baseUrl = "http://localhost:9120";

const TriviaDetailName = () =>{
    let params = useParams();
    let cardnameid = params.trivianame;
    const [Triviacardname,setTriviacardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/trivia?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setTriviacardname(data));
    },[]);

    console.log(cardnameid);


    return(<>

    <TriviaDetailNameDisplay listData={Triviacardname}/>
    
    
    </>)
}

export default TriviaDetailName;