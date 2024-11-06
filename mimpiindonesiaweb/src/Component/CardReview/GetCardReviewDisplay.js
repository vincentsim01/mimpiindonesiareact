import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";

const GetCardReviewDisplay = (props) =>{

    const renderData=({CardReview})=>{
        if(CardReview){
            return CardReview.map((item)=>{
                return(
                    <div >
                        This is GetCardReviewDisplay
                        <h2>Card Name: {item.cardname}</h2>
                        <p>Name: {item.name}</p>
                        <p>Rating: {item.rating}</p>
                        <p>Testimonial: {item.testimonial}</p>

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