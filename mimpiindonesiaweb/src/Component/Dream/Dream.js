import React, { useState,useEffect } from 'react';
import DreamDisplay from './DreamDisplay';
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
        This is Dream<br></br>
        <DreamDisplay thedream={dream}/>
        </>
    )
}

export default Dream;