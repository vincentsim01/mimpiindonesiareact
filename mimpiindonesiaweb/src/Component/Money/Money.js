import React, { useState,useEffect } from 'react';
import './Money.css';
import MoneyDisplay from './MoneyDisplay';

const baseUrl="http://localhost:9120";


const Money = () =>{

    const [money,setmoney]= useState([]);

    fetch(`${baseUrl}/Money` ,{method:'GET'})
    .then((res) => res.json())
    .then((data) => setmoney(data))


    return(
        <>
        <div style={{textAlign:"center"}}>This is Money<br></br></div>
        <MoneyDisplay themoney={money}/>
        
        </>
    )

}

export default Money;