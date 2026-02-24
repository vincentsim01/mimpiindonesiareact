
import React, { useState,useEffect } from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import ListingDisplay from './ListingDisplay';
const baseUrl = "http://localhost:9120";


const ActionListing = () =>{
    const [category,setcategory]=useState([]);
    let [searchParams] = useSearchParams();
    let params = useParams();


    let cardnameparam = params.name;
    let cardnamequery = searchParams.getAll('name');

    useEffect(() => {
        fetch(`${baseUrl}/actioning?name=${cardnamequery}`,{method:'GET'})
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

export default ActionListing;