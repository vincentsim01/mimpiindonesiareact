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

    
    const previousbutton = () =>{

        let navigate = useNavigate();

        function previousevent(){
            fetch(`${baseUrl}/eventdetail2/${sessionData-1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(sessionData-1));

            navigate(`/eventdetail/${sessionData-1}`)
        }


        
        return(   
            <>

            <button onClick={previousevent}>Previous</button>





 

             </>    


        )

    }


        
    const nextbutton = () =>{

        let navigate = useNavigate();


        function nextevent(){
            fetch(`${baseUrl}/eventdetail2/${Number(sessionData)+1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(Number(sessionData)+1));

            navigate(`/eventdetail/${Number(sessionData)+1}`)

            
        }

        
        return(   
            <>



            <button onClick={nextevent}>Next</button>




 

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
        <div className="eventdetailcontainer">
            <div className="previousbutton">{previousbutton()}</div>

            <div className="eventdetaildisplay"><EventDetailDisplay listData={eventdetail}/></div>
 
            <div className="nextbutton">{nextbutton()}</div>
        </div>

        {/* {renderdata} */}

        
        
        </>
    )
}

export default EventDetail;


