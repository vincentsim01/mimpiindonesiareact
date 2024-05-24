import React, { useState,useEffect } from 'react';
import ActionDisplay from './ActionDisplay';
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
        This is Action
        <ActionDisplay theAction={actions}/>
        </>
    )
}

export default Actions;