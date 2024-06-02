
import React, { useState,useEffect } from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
// import { useQuery } from "react-query";
import ListingDisplay from './ListingDisplay';
const baseUrl = "http://localhost:9120";


const Listing = () =>{
    const [category,setcategory]=useState([]);
    let [searchParams] = useSearchParams();
    let params = useParams();
    // let queries = useQuery();

    let cardnameparam = params.name;
    // let cardnamequery = queries.name;
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

export default Listing;