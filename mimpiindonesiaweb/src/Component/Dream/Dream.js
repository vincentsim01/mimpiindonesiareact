import React, { useState,useEffect } from 'react';
import DreamDisplay from './DreamDisplay';
import DreamFilter from '../DreamFilter/DreamFilter';
import DreamFilterDisplay from '../DreamFilter/DreamFilterDisplay';
const baseUrl = "http://localhost:9120";



const Dream= () =>{
    const [dream,setdream] = useState([]);
    const [dreamfilter, setdreamfilter] =useState([]);

    const setDataPerFilter = (data) => {
        setdreamfilter(data)
    }

    useEffect(() => {
        fetch(`${baseUrl}/dream`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setdream(data)

        })
    },[])



    return(
        <>
        <DreamFilter thedream={dream} dreamfiltering={(data) => {setDataPerFilter(data)}}/><br></br>
        <DreamDisplay thedream={dream}/>


        <DreamFilterDisplay filtereddream={dreamfilter}/>
        <br></br>
        </>
    )
}

export default Dream;