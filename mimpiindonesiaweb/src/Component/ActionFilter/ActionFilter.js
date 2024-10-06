import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const ActionFilter = (props) =>{

    const handleChangePhase = (event) =>{
        fetch(`${baseUrl}/actionfilter?phase=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.actionfiltering(data))
    }

    const handleChangeDuration = (event) =>{
        fetch(`${baseUrl}/actionfilter?duration=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.actionfiltering(data))
    }

    const handleReset = (event) =>{
        fetch(`${baseUrl}/actioning`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.actionfiltering(data))
    }




    return(
        <>
        <div>
        Phase
        {/* <select onChange={handleChangePhase} type="radio">
            <option value="own turn">own Turn</option>
            <option value="anytime">anytime</option>
        </select> */}


        <div onChange={handleChangePhase} className="Filter">
            <label className="filterValue">
                <input type="radio" name="phase" value="own turn"/>own turn


            </label>
            <label className="filterValue">
                <input type="radio" name="phase" value="anytime"/>anytime
            </label>
        </div>


        Duration
        {/* <select onChange={handleChangeDuration} type="radio">
            <option value="instant">instant</option>
            <option value="multi turn">multi turn</option>
        </select> */}



        <div onChange={handleChangeDuration} className="Filter">
            <label className="filterValue"> 
                <input type="radio" name="duration" value="instant"/>instant
            </label>
            <label className="filterValue">
                <input type="radio" name="duration" value="multi turn"/>multi turn


            </label>
        </div>

        Reset All Filter
        <div onChange={handleReset} className="Filter">
            <label className="filterValue">
            <input type="radio" name="reset" value="reset"/>reset

            </label>
        </div>
        </div>
        
        
        
        </>
    )
}

export default ActionFilter;