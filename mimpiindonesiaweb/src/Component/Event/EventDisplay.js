import React from 'react';
import {Link} from 'react-router-dom';


const EventDisplay = (props)=>{
    const eventList=({theevent})=>{
        if(theevent){
            return theevent.map((item)=>{
                return(
                    <div className="row rowi">    
                        {/* <h1>This is Event</h1>  */}
                        <div className="eventcontainer">  
                            <span className="eventname">{item.name}</span><br></br>
                            <span><img className="eventimage" src={item.image}/></span><br></br>
                            <span className="eventeffect">{item.effect}  </span>      
                        </div>   
           
                    </div>

                )
            }
        )
        }
    }
    

    return(
        <>
        {/* This is EventDisplay */}
        {eventList(props)}
        </>
    )


};

export default EventDisplay;