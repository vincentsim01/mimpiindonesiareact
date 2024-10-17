import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EventDetailDisplay from './EventDetailDisplay';
const baseUrl = "http://localhost:9120";


const EventDetail = () =>{

    let params = useParams();
    let cardnameid = params.cardId;

    const [eventdetail,seteventdetail]=useState([]);
    let sessionData = sessionStorage.getItem('cardeventdetail');

    useEffect(() => {
        fetch(`${baseUrl}/eventdetail2/${cardnameid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            seteventdetail(data)

        })
    },[])




    return(
        <>

        This is Event Detail 
        <EventDetailDisplay listData={eventdetail}/>

        
        
        </>
    )
}

export default EventDetail;


