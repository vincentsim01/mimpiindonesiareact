import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ActionDetailNameDisplay from './ActionDetailNameDisplay';
import './ActionDetailName.css';
const baseUrl = "http://localhost:9120";

const ActionDetailName = () =>{
    let params = useParams();
    let cardnameid = params.actionname;
    const [Actioncardname,setActioncardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/actioning?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setActioncardname(data));
    },[]);

    console.log(cardnameid);


    return(<>

    <ActionDetailNameDisplay listData={Actioncardname}/>
    
    
    </>)
}

export default ActionDetailName;