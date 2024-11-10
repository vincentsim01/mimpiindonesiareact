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

    
    const Previousbutton = () =>{

        let Navigate = useNavigate();

        function previousevent(){
            fetch(`${baseUrl}/eventdetail2/${sessionData-1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(sessionData-1));

            Navigate(`/eventdetail/${sessionData-1}`)
        }


        
        return(   
            <>

            <button className="btn btn-primary" onClick={previousevent}>Previous</button>





 

             </>    


        )

    }


        
    const Nextbutton = () =>{

        let Navigate = useNavigate();


        function nextevent(){
            fetch(`${baseUrl}/eventdetail2/${Number(sessionData)+1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>seteventdetail(data))
            sessionStorage.setItem('cardeventdetail',JSON.stringify(Number(sessionData)+1));

            Navigate(`/eventdetail/${Number(sessionData)+1}`)

            
        }

        
        return(   
            <>



            <button className="btn btn-primary" onClick={nextevent}>Next</button>




 

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

    
        <br></br>

        <div className="eventdetailcontainer">
        <div className="twobuttons">
            <div className="previousbutton">{Previousbutton()}</div>
            <div className="eventdetaildisplay"><EventDetailDisplay listData={eventdetail}/></div>
            <div className="nextbutton">{Nextbutton()}</div>
        </div>


            {/* <div className="eventdetaildisplay"><EventDetailDisplay listData={eventdetail}/></div> */}
 

        </div>

        {/* {renderdata} */}

        
        
        </>
    )
}

export default EventDetail;


