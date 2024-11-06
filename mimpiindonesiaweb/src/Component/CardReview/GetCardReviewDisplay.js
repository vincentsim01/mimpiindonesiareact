import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './GetCardReview.css';
const baseUrl = "http://localhost:9120";

const GetCardReviewDisplay = (props) =>{

    const renderData=({CardReview})=>{
        if(CardReview){
            return CardReview.map((item)=>{
                return(
                    <div className="GetReviewDisplayContainer">
                        <div className="ReviewSingle">
                 
                            <h2>Card Name: {item.cardname}</h2><br></br>
                            <p>Name: {item.name}</p> <br></br>
                            <p>Rating: {item.rating}</p> <br></br>
                            <p className="reviewtestimonial">Testimonial: {item.testimonial}</p>

                        </div>
                    </div>
                )
            })

        }else{
            return(
                <div>No Data Found</div>
            )
        }

    }


    return(

        <>
        {renderData(props)}
        
        
        </>
    )
}

export default GetCardReviewDisplay;