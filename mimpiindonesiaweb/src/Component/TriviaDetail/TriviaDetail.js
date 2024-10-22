import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import TriviaDetailDisplay from './TriviaDetailDisplay';
const baseUrl = "http://localhost:9120";


const TriviaDetail = () =>{

    const [triviadetail,settriviadetail] = useState([]);
    let sessionData = sessionStorage.getItem('cardtriviadetail');

    useEffect(()=>{
        fetch(`${baseUrl}/triviadetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{settriviadetail(data)})

    },[]);


    return(
        <>
        TriviaDetail

        <TriviaDetailDisplay listData={triviadetail}/>
        
        </>
    )
}

export default TriviaDetail;