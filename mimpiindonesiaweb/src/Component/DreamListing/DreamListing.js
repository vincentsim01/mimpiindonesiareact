import React, { useState,useEffect } from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import DreamListingDisplay from './DreamListingDisplay';

const baseUrl = "http://localhost:9120";


const DreamListing = () => {

    const [category,setcategory]=useState([]);
    let [searchParams] = useSearchParams();

    let cardnamequery = searchParams.getAll('name');

    useEffect(()=>{
        fetch(`${baseUrl}/dream?name=${cardnamequery}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setcategory(data))
},[])



    return(
        <>

        <div>This is dreamlisting</div>
        <DreamListingDisplay cardname={category}/>
        
        </>
    )
}

export default DreamListing;