import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

    const setDataPerNextPrevious = (data) =>{
        seteventdetail(data);


    }

    
    const twobuttons = () =>{

        let navigate = useNavigate();

        function previousevent(){
            fetch(`${baseUrl}/eventdetail2/${sessionData-1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(sessionData-1));

            navigate(`/eventdetail/${sessionData-1}`)
        }

        function nextevent(){
            fetch(`${baseUrl}/eventdetail2/${Number(sessionData)+1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(Number(sessionData)+1));

            navigate(`/eventdetail/${Number(sessionData)+1}`)

            
        }

        
        return(   
            <>
             <Link to={`/eventdetail/${sessionData-1}`}>
            <button onClick={previousevent}>Previous</button>
            </Link>
            <Link to={`/eventdetail/${Number(sessionData)+1}`}>
            <button onClick={nextevent}>Next</button>
            </Link>



 

             </>    


        )

    }


        
    



    // const renderdata = ({eventdetail}) =>{

    //     if(eventdetail){
    //         return eventdetail.map((item) => {

    //             console.log(item.name);
    //             return(
    //                 <div>

    //                 <img src={item.image} alt={item.image}/>
    //                 <br></br>
    //                 {item.name}

    //                 </div>

    //             )
                
    //         }
    //     )

    //     }else{
            
    //     return(

    //         <>
    //         No Data Found
            
    //         </>
    //     )

    //     }


        
    // }




    return(
        <>

        Card Detail
        <br></br>
        {twobuttons()}
        <br></br>
        <EventDetailDisplay listData={eventdetail}/>
        <br></br>

        {/* {renderdata} */}

        
        
        </>
    )
}

export default EventDetail;


