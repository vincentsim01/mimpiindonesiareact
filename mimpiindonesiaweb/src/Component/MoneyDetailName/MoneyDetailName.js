import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MoneyDetailNameDisplay from './MoneyDetailNameDisplay';
import './MoneyDetailName.css';
const baseUrl = "http://localhost:9120";

const MoneyDetailName = () =>{
    let params = useParams();
    let cardnameid = params.moneyname;
    const [Moneycardname,setMoneycardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/money?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setMoneycardname(data));
    },[]);

    console.log(cardnameid);


    return(<>

    <MoneyDetailNameDisplay listData={Moneycardname}/>
    
    
    </>)
}

export default MoneyDetailName;