import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MoneyDetailDisplay from './MoneyDetailDisplay';
const baseUrl = "http://localhost:9120";



const MoneyDetail = () =>{

    const [moneyDetail,setMoneyDetail] = useState([]);


    return(
        <>


        <MoneyDetailDisplay listData={moneyDetail}/>
        </>
    )
}


export default MoneyDetail;