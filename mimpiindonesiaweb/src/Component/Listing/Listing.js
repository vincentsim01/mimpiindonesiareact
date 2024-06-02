
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingDisplay from './ListingDisplay';
const baseUrl = "http://localhost:9120";


const Listing = () =>{
    const [category,setcategory]=useState([]);
    let params = useParams();

    let cardname = params.name;

    useEffect(() => {
        fetch(`${baseUrl}/actioning?name=${cardname}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setcategory(data)

        })
    },[])


    return(
        <>
        <div>This is Listing</div>
        <ListingDisplay thecard={category}/>
        </>
    )
}

export default Listing;