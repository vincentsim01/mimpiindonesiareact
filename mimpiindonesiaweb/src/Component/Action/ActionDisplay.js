import React from 'react';
import {Link} from 'react-router-dom';


const ActionDisplay = (props) =>{
    const actionsList = ({theAction})=>{
        if (theAction){
           return theAction.map((item) =>{
                return(
                    <>
                    This is Action List<br></br>
                    {item.name}<br></br>
                    <img src={item.image}/><br></br>
                    {item.effect}
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
};

export default ActionDisplay;