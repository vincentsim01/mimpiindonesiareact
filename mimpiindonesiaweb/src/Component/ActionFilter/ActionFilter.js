import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const ActionFilter = (props) =>{

    const handleChangePhase = (event) =>{
        fetch(`baseUrl/actionfilter?phase=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.actionfiltering(data))
    }

    const handleChangeDuration = (event) =>{
        fetch(`baseUrl/actionfilter?duration=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.actionfiltering(data))
    }



    return(
        <>
        Phase
        <select onChange={handleChangePhase} type="radio">
            <option value="own turn">Own Turn</option>
            <option value="anytime">anytime</option>
        </select>
        <br></br>

        Duration
        <select onChange={handleChangeDuration} type="radio">
            <option value="instant">instant</option>
            <option value="multi turn">multi turn</option>
        </select>
        
        
        
        </>
    )
}

export default ActionFilter;