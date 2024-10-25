import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EventDetailDisplay from './EventDetailDisplay';
import './EventDetail.css';
const baseUrl = "http://localhost:9120";


const EventDetail = () =>{

    let params = useParams();
    let cardnameid = params.cardId;

    const [eventdetail,seteventdetail]=useState([]);
    let sessionData = sessionStorage.getItem('cardeventdetail');

    useEffect(() => {
        fetch(`${baseUrl}/eventdetail2/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            seteventdetail(data)
            console.log(eventdetail);

        })
    },[])


    const renderdata = ({eventdetail}) =>{

        if(eventdetail){
            return eventdetail.map((item) => {

                console.log(item.name);
                return(
                    <div>

                    <img src={item.image} alt={item.image}/>
                    <br></br>
                    {item.name}

                    </div>

                )
                
            }
        )

        }else{
            
        return(

            <>
            No Data Found
            
            </>
        )

        }


        
    }




    return(
        <>

        Card Detail
        <br></br>
        <EventDetailDisplay listData={eventdetail}/>
        <br></br>

        {renderdata}

        
        
        </>
    )
}

export default EventDetail;


