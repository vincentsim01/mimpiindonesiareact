import React, { useState,useEffect } from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import EventListingDisplay from './EventListingDisplay';

const baseUrl = "http://localhost:9120";



const EventListing = () =>{

    const [category,setcategory] =useState([]);
    let [searchParams] = useSearchParams();


    let cardnamequery = searchParams.getAll('name');

    useEffect(() =>{
        fetch(`${baseUrl}/event?name=${cardnamequery}`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data)=>setcategory(data))

    },[]);


    return(
        <>
        <div> This is Event Listing</div>
        <EventListingDisplay cardname={category}/>
        
        
        </>
    )
}


export default EventListing;