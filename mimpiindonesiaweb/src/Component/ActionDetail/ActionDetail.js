import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ActionDetailDisplay from './ActionDetailDisplay';
const baseUrl = "http://localhost:9120";


const ActionDetail = () =>{


    const [actiondetail,setactiondetail]=useState([]);

    let sessionData = sessionStorage.getItem('cardactiondetail');

    useEffect(()=>{
        fetch(`${baseUrl}/actiondetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            setactiondetail(data);
        })

    },[])





    return(


        <>

        <ActionDetailDisplay listData={actiondetail}/>
        
        
        </>
    )
}


export default ActionDetail;
