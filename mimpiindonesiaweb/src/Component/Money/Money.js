import React, { useState,useEffect } from 'react';
import MoneyDisplay from './MoneyDisplay';

const baseUrl="http://localhost:9120";


const Money = () =>{

    const [money,setmoney]= useState([]);

    fetch(`${baseUrl}/Money` ,{method:'GET'})
    .then((res) => res.json())
    .then((data) => setmoney(data))


    return(
        <>
        This is Money
        <MoneyDisplay themoney={money}/>
        
        </>
    )

}

export default Money;