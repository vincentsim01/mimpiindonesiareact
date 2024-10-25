import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const EventDetailDisplay = (props) => {

    let navigate = useNavigate();

    const removesessionstorage = () =>{
        sessionStorage.removeItem('cardeventdetail');
    }

    const sessionData = Number(sessionStorage.getItem('cardeventdetail'));





    const renderdata = ({listData}) => {
        if(listData){
            if(listData.length>0){   
                return listData.map((item)=>{
                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }
                    return(
                        <>
                        <div className="eventdisplaybigcontainer2">
                                 <div className="eventdisplayname2">{item.name}</div>
                                 <br></br>
                                 <div className="eventdisplayimagecontainer2"><img className="eventimage2" src={item.image} alt={item.image}/></div>
                                 <br>
                                 </br>
                                 <div className="effecttypedisplaycontainer2">
                                        <div className="eventdisplayeffect2">{item.effect}</div>
                                        <div className="eventdisplaytype2">{item.type}</div>
                                </div>                
                                <br></br>
                                 <div className="buttoncontainer2">
                    
                       
                                 <Link to="/Event"><button onClick={removesessionstorage}>Go Back Event</button></Link>
                                 <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                                 </div>
                                 </div>
                        </>
                    )
                })


            }else{
                return(
                    <div className="item"><h2>No Data Found</h2></div>
                )
            }


        }


    }

    return(

        <>

  


       
            {renderdata(props)}



        
        
        
        </>
    )




};


export default EventDetailDisplay;