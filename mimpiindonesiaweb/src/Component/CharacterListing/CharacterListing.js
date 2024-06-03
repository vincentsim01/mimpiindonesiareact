import React, {useState, useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import CharacterListingDisplay from './CharacterListingDisplay';
const baseUrl = "http://localhost:9120";


const CharacterListing = () => {

    const [category,setcategory] = useState([]);
    let [searchParams] = useSearchParams();

    let cardname = searchParams.getAll('name');

    useEffect(()=>{
        fetch(`${baseUrl}/character?name=${cardname}`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setcategory(data))

    },[]

    )



    return(


        <>
        <CharacterListingDisplay cardname={category}/>
        
        
        
        
        </>
    )
}


export default CharacterListing;