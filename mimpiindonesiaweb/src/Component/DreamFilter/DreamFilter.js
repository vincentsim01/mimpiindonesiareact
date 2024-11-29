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

    const handlefilterharga = (event)=>{
        if(event.target.value!=="NA"){
            dreamUrl = `${baseUrl}/dreamfilter?theharga=${Number(event.target.value)}`;
            fetch(dreamUrl, {method: 'GET'})
           .then((data)=>data.json())
           .then((res)=> {props.dreamfiltering(res)})
        }else{
            dreamUrl = `${baseUrl}/dreamfilter`;
            fetch(dreamUrl, {method: 'GET'})
           .then((data)=>data.json())
           .then((res)=> {props.dreamfiltering(res)})
        }
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
        <div><h4>Dream Filter</h4></div>

        <select onChange={handlefilter} className="dreamfilterselect">
            <option value="">Select All</option>
            {DreamDropdown2(props)}
            <option value="NA">NA</option>
        </select>


        <select onChange={handlefilterharga} className="dreamfilterselect">
            <option value="NA">All Price</option>
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
            <option value="120">120</option>
        </select>

        </>
    )
}

export default DreamFilter;