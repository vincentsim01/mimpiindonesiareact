import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EventDetailDisplay from './EventDetailDisplay';
const baseUrl = "http://localhost:9120";


const EventDetail = () =>{

    let params = useParams();
    let cardnameid = params.cardId;

    const [eventdetail,seteventdetail]=useState([]);
    let sessionData = sessionStorage.getItem('cardeventdetail');

    useEffect(() => {
        fetch(`${baseUrl}/eventdetail2/${cardnameid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            seteventdetail(data)

        })
    },[])


    const renderdata = (eventdetail) =>{

        if(eventdetail){
            return listData.map((item) => {
                return(

                    <img src={item.image} alt={item.restaurant_name}/>
                    {item.name}
                )
            }

        }else{
            
        return(

            <>
            No Data Found
            
            </>

        }


        )
    }




    return(
        <>

        This is Event Detail 
        <EventDetailDisplay listData={eventdetail}/>

        {renderdate}

        
        
        </>
    )
}

export default EventDetail;


