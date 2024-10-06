import React, { useState,useEffect } from 'react';

const Eventpromotion = (props) =>{

    const daypromotion = ["christmas", "labour day", "halloween", "national day","april fool","valentine","deepavali"];


    const eventpromo=({thepromo})=>{



        return(

   
            <span>The promotion is {thepromo}</span>
            
            
    
        )

    }

    return(
        <>
        <div className="promotioncontainer">
        {eventpromo(props)}<br></br><br></br>
        The Next promotion is {daypromotion[Math.floor(Math.random() * daypromotion.length)]}
 
        </div>
        
        
        </>
    )
};

export default Eventpromotion;