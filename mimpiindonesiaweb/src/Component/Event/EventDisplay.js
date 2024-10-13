import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EventDisplay = (props)=>{
    let navigate = useNavigate();





    const eventList=({theevent})=>{
        if(theevent){




        
            return theevent.map((item)=>{

                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }

                const saveeventdetail= () => {
                    sessionStorage.setItem('cardeventdetail',JSON.stringify(item.name));
                    navigate('/eventdetail');
    
            
                }

                return(
                    <div className="row rowi">    
                        {/* <h1>This is Event</h1>  */}
           
                        <div className="eventcontainer">  
                            <span className="eventname" onClick={saveeventdetail}>{item.name}</span><br></br>
                            <span><img className="eventimage" src={item.image} onClick={saveeventdetail}/></span><br></br>
                            <span className="eventeffect" onClick={saveeventdetail}>{item.effect}  </span>   <br></br>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
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