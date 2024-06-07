import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import DreamFilterDisplay from './DreamFilterDisplay';


const baseUrl = "http://localhost:9120";


const DreamFilter = (props) =>{
    let dreamUrl = "";
    const [dreamcharacter,setdreamcharacter] = useState([]);
    const [dreamcharacter2,setdreamcharacter2] = useState([]);
    let dreamarray = [];

    useEffect(() =>{
        fetch(`${baseUrl}/character`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> setdreamcharacter2(data))
    },[])

    const handlefilter = (event) =>{
            dreamUrl = `${baseUrl}/dreamfilter?character=${event.target.value}`;
            fetch(dreamUrl, {method: 'GET'})
            .then((data)=>data.json())
            .then((res)=> {props.dreamfiltering(res)})


            // axios.get(dreamUrl)
            // .then((res) => {props.dreamfiltering(res.data)})
    }

    const DreamDropdown2 = () =>{
        return dreamcharacter2.map((data)=>{
            return(
            <>
                <option value={data.name}>{data.name}</option>
            </>
            )
        })
    }

    return (

        <>
        <div>Dream Filter Based On Character</div>

        <select onChange={handlefilter}>
            <option value="">Select All</option>
            {DreamDropdown2(props)}
            <option value="NA">NA</option>

        </select>

        </>
    )
}

export default DreamFilter;