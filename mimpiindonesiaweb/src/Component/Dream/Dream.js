import React, { useState,useEffect } from 'react';
import DreamDisplay from './DreamDisplay';
import DreamFilter from '../DreamFilter/DreamFilter';
const baseUrl = "http://localhost:9120";



const Dream= () =>{
    const [dream,setdream] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/dream`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setdream(data)

        })
    },[])



    return(
        <>
        <DreamFilter/><br></br>
        <DreamDisplay thedream={dream}/>
        <br></br>
        </>
    )
}

export default Dream;