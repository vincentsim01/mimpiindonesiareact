import React, { useState,useEffect } from 'react';
// import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
// import CharacterListingDisplay from './CharacterListingDisplay';
const baseUrl = "http://localhost:9120";


const CharacterListing = () => {

    // const [category,setcategory] =useState([]);
    // let [searchParams] = useSearchParams();


    // let cardnamequery = searchParams.getAll('name');

    // useEffect(() => {
    //     fetch(`${baseUrl}/character?name=${cardnamequery}`,{method: 'GET'})
    //     .then((res)=>res.json())
    //     .then((data)=>setcategory(data))

    // },[]);



    return(


        
        <>This is Character Listing
        {/* <CharacterListingDisplay thecard={category}/> */}
        </>
        
        
        
        
        
    )
}


export default CharacterListing;