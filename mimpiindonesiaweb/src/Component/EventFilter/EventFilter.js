import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const EventFilter = (props) =>{

    const handleFilterChange = (event) =>{

        if(event.target.value!=="All"){

         fetch(`${baseUrl}/eventfilter?type=${event.target.value}`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=>props.eventFiltering(data))
        }else{
            fetch(`${baseUrl}/event`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=>props.eventFiltering(data))

        }
    };



    return(
        <>
        <div id="eventfiltercontainer">
            <h4>Card Type Filter:</h4>

            <div onChange={handleFilterChange}>
                

            <label>
                <input className="eventfiltercontent" type="radio" name="type" value="positive"/>Positive
            </label>

            <label>
                <input className="eventfiltercontent" type="radio" name="type" value="negative"/>Negative
            </label>

            <label>
                <input className="eventfiltercontent" type="radio" name="type" value="positive/negative"/>Positive/Negative
            </label>        
            
            <label>
                <input className="eventfiltercontent" type="radio" name="type" value="All"/>Reset Filter
            </label>

            </div>
        </div>
        
        
        </>
    )
}

export default EventFilter;