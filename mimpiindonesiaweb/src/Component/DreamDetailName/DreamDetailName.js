import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DreamDetailNameDisplay from './DreamDetailNameDisplay';
import './DreamDetailName.css';
const baseUrl = "http://localhost:9120";

const DreamDetailName = () =>{
    let params = useParams();
    let cardnameid = params.dreamname;
    const [Dreamcardname,setDreamcardname]= useState([]);

    console.log(cardnameid);

    useEffect(()=>{
        fetch(`${baseUrl}/dream?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setDreamcardname(data));
    },[]);

    console.log(Dreamcardname);


    return(<>

    <DreamDetailNameDisplay listData={Dreamcardname}/>
    
    
    </>)
}

export default DreamDetailName;