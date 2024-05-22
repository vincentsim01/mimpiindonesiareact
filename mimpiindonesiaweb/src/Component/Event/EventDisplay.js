import React from 'react';
import {Link} from 'react-router-dom';


const EventDisplay = (props)=>{
    const eventList=({theevent})=>{
        if(theevent){
            return theevent.map((item)=>{
                return(
                    <span>    
                        This is Event List                
           
                    </span>

                )
            }
        )
        }
    }
    

    return(
        <>
        This is EventDisplay
        {eventList(props)}
        </>
    )


};

export default EventDisplay;