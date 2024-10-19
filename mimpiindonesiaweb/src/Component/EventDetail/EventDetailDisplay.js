import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const EventDetailDisplay = (props) => {

    let navigate = useNavigate();

    const removesessionstorage = () =>{
        sessionStorage.removeItem('cardeventdetail');
    }



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
                                 {item.name}
                                 <br></br>
                                 <img src={item.image} alt={item.image}/>
                                 <br>
                                 </br>
                                 <Link to="/Event"><button onClick={removesessionstorage}>Go Back Event</button></Link>
                                 <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
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