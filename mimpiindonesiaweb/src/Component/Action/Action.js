import React, { useState,useEffect } from 'react';
import actionDisplay from './ActionDisplay';
const baseUrl="localhost:9120/";

const Actions = () =>{

    const [actions,setactions]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/event`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => setactions(data))


    },[]);

    return(
        <>

        This is Action
        <actionDisplay theAction={actions}/>
        </>
    )
}

export default Actions;