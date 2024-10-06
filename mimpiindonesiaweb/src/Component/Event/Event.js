
import React, { useState,useEffect } from 'react';
import EventDisplay from './EventDisplay';
import './Event.css';
import EventFilter from '../EventFilter/EventFilter';
import Eventpromotion from '../Event/Eventpromotion';
const baseUrl = "http://localhost:9120";




const Event = () =>{

    const [event,setevent]=useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/event`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setevent(data)

        })
    },[])

    const setDataPerFilter = (data) =>{
        setevent(data);


    }


    return(
        <>
        {/* This is Event */}
        <EventFilter eventFiltering={(data)=>setDataPerFilter(data)}/>
        <EventDisplay theevent={event}/>
        <Eventpromotion thepromo="20% Off"/>
        </>
    )
}

export default Event;