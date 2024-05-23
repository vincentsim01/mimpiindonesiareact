import React from 'react';
import {Link} from 'react-router-dom';


const actionDisplay = (props) =>{
    const actionsList = ({theAction})=>{
        if (theAction){
           return theAction.map((item) =>{
                return(
                    <>
                    This is Action List
                    {item.name}
                    <img src={item.image}/>
                    </>
                )
            })
        }
    }
    

    return(

        <>
        This is ActionDisplay
        {actionsList(props)}
        
        </>
    )
}

export default actionDisplay;