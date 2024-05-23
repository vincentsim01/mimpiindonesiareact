import React from 'react';
import {Link} from 'react-router-dom';


const actionDisplay = (props) =>{
    const actionsList = ({theAction})=>{
        if (theAction){
            theAction.map((item) =>{
                return(
                    {item.name}
                    {item.image}
                )
            })
        }
    }
    

    return(

        <>
        This is EventDisplay
        
        </>
    )
}

export default actionDisplay;