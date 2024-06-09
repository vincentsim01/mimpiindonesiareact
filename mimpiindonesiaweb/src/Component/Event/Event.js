
import React, { useState,useEffect } from 'react';
import EventDisplay from './EventDisplay';
const baseUrl = "http://localhost:9120";

import EventFilter from '../EventFilter/EventFilter';


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
        This is Event
        <EventFilter eventFiltering={(data)=>setDataPerFilter(data)}/>
        <EventDisplay theevent={event}/>
        </>
    )
}

export default Event;