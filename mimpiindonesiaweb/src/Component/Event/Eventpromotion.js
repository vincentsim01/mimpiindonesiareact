import React, { useState,useEffect } from 'react';

const Eventpromotion = (props) =>{

    const eventpromo=({thepromo})=>{

        return(

   
            <div className="promotioncontainer">The promotion is {thepromo}</div>
            
            
    
        )

    }

    return(
        <>
        {eventpromo(props)}
        
        
        </>
    )
};

export default Eventpromotion;