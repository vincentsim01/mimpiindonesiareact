import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EventDetailNameDisplay from './EventDetailNameDisplay';
import './EventDetailName.css';
const baseUrl = "http://localhost:9120";

const EventDetailName = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let cardnameid = params.eventname;
    const [Eventcardname,setEventcardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/event?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setEventcardname(data));
    },[]);



    const Previousbutton = () =>{



        function previousevent(){
            sessionStorage.setItem('cardeventdetail',JSON.stringify(1));
                navigate(`/eventdetail/1`);
            }
        
        return(   
            <>
            <div className="previousbuttoncontainerevent" onClick={previousevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
            </div>
             </>    
        )

    }




    const Nextbutton = () =>{
        let Navigate = useNavigate();
        function nextevent(){
                sessionStorage.setItem('cardeventdetail',JSON.stringify(3));
                Navigate(`/eventdetail/3`)
            }   
        return(   
            <>
            <div className="nextbuttoncontainerevent" onClick={nextevent}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img></div>
             </>    
        )

    }










    console.log(cardnameid);


    return(<>
            <div className="eventdetailcontainer">

    <EventDetailNameDisplay listData={Eventcardname}/>
    <div className="previousbuttonevent">{Previousbutton()}</div>
    <div className="nextbuttonevent">{Nextbutton()}</div>
    </div>
    
    
    </>)
}

export default EventDetailName;