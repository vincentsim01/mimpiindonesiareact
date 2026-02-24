import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import GetCardReviewDisplay from './GetCardReviewDisplay';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";


const GetCardReview = (props) =>{

    const [getCardReview,setgetCardReview] = useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/cardreview/${props.zacardname}`,{method:'GET'})
       .then((response) => response.json())
       .then((data) => setgetCardReview(data))
    })


    return(
        <>


        <GetCardReviewDisplay CardReview={getCardReview}/>
        
        
        </>
    )
}

export default GetCardReview;