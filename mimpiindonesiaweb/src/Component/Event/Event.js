
import React, { useState,useEffect } from 'react';
import EventDisplay from './EventDisplay';
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


    return(
        <>
        This is Event
        <EventDisplay theevent={event}/>
        </>
    )
}

export default Event;