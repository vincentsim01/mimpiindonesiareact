import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EventDetailNameDisplay from './EventDetailNameDisplay';
import './EventDetailName.css';
const baseUrl = "http://localhost:9120";

const EventDetailName = () =>{
    let params = useParams();
    let cardnameid = params.eventname;
    const [Eventcardname,setEventcardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/event?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setEventcardname(data));
    },[]);

    console.log(cardnameid);


    return(<>

    <EventDetailNameDisplay listData={Eventcardname}/>
    
    
    </>)
}

export default EventDetailName;