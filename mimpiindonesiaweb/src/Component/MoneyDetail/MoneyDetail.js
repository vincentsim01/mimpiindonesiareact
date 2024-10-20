import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MoneyDetailDisplay from './MoneyDetailDisplay';
const baseUrl = "http://localhost:9120";



const MoneyDetail = () =>{

    const [moneyDetail,setMoneyDetail] = useState([]);
    let sessionData = Number(sessionStorage.getItem('cardmoneydetail'));

    console.log(sessionData);

    useEffect(() => {
        fetch(`${baseUrl}/moneydetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMoneyDetail(data)
            console.log(moneyDetail);

        })
    },[])


    return(
        <>


        <MoneyDetailDisplay listData={moneyDetail}/>
        </>
    )
}


export default MoneyDetail;