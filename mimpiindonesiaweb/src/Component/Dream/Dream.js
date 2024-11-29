import React, { useState,useEffect } from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import DreamDisplay from './DreamDisplay';
import DreamFilter from '../DreamFilter/DreamFilter';
import DreamFilterDisplay from '../DreamFilter/DreamFilterDisplay';
import '../Dream/dream.css';
const baseUrl = "http://localhost:9120";




const Dream= () =>{
    const [dream,setdream] = useState([]);
    const [dreamfilter, setdreamfilter] =useState([]);
    let [searchParams] = useSearchParams();

    let cardname = searchParams.getAll('cardname');

    const setDataPerFilter = (data) => {
        setdreamfilter(data)
        setdream(data)
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
        <div id="dreamfiltercontainer">        
            <DreamFilter  thedream={dream} dreamfiltering={(data) => {setDataPerFilter(data)}}/>
        </div>
<br></br>
        <h1 align="center">Dream Cards </h1><br></br><br></br>
        <div className="dreamDisplayContainer container-fluid">
            <DreamDisplay thedream={dream}/>
        </div>
        <br></br>
        </>
    )
}

export default Dream;