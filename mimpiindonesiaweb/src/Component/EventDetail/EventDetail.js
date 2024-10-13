import React,{useState, useEffect} from 'react';
const baseUrl = "http://localhost:9120";


const EventDetail = () =>{

    const [eventdetail,seteventdetail]=useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/event`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            seteventdetail(data)

        })
    },[])




    return(
        <>

        This is Event Detail
        
        
        </>
    )
}

export default EventDetail;


