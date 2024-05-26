import React, { useState,useEffect } from 'react';
import ActionDisplay from './ActionDisplay';
import './Action.css';
const baseUrl="http://localhost:9120";

const Actions = () =>{

    const [actions,setactions]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/actioning`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {setactions(data)})
    },[]);

    return(
        <>

        <ActionDisplay theAction={actions}/>
        </>
    )
}

export default Actions;