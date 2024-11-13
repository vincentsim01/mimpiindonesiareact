import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
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
                            <div className="eventdisplaycontainerinside">
                                    <div className="eventdisplayname2"><h1>{item.name}</h1></div>
                                    <br></br>
                                    <div className="eventdisplayimagecontainer2"><img className="eventimage2" src={item.image} alt={item.image}/></div>
                                    <br>
                                    </br>
                                    <div className="effecttypedisplaycontainer2">
                                            <div className="eventeffectcontent eventdisplayeffect2"><h3>Efek:</h3> <br></br>{item.effect}<br></br><br></br></div>
                                            <div className="eventeffectcontent eventdisplaytype2">Tipe Event: {item.type}</div>
                                    </div>                
                                <br></br>
                                        <div className="buttoncontainer2">
                            
                            
                                            <Link to="/Event"><button className="btn btn-info" onClick={removesessionstorage}>Go Back Event</button></Link>
                                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                                        </div>
                                </div>
                            </div>

                                 <div className="eventdetailreviewcontainer">
                                    <GetCardReview zacardname={item.name}/>
                                    <SubmitCardReview zacardname={item.name}/> 
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