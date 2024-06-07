import React, { useState,useEffect } from 'react';
import ActionDisplay from './ActionDisplay';
import './Action.css';
import ActionFilter from '../ActionFilter/ActionFilter';
const baseUrl="http://localhost:9120";

const Actions = () =>{

    const [actions,setactions]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/actioning`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {setactions(data)})
    },[]);


    const setDataPerFilter = (data) =>{
        setactions(data);

    }

    return(
        <>
        <ActionFilter actionfiltering={(data)=>{setDataPerFilter(data)}}/>

        <ActionDisplay theAction={actions}/>

        </>
    )
}

export default Actions;