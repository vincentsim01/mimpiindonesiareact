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
    let navigate = useNavigate();

    const [eventdetail,seteventdetail]=useState([]);
    const [eventobject,seteventobject] = useState([]);
    let sessionData = sessionStorage.getItem('cardeventdetail');

    useEffect(() => {
        fetch(`${baseUrl}/eventdetail2/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            seteventdetail(data)
            console.log(eventdetail);

        })
    },[])

    var eventobjectlength;

    (function() {

        fetch(`${baseUrl}/event`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>seteventobject(data))
        eventobjectlength=eventobject.length;
      })();

    const setDataPerNextPrevious = (data) =>{
        seteventdetail(data);


    }

    
    const Previousbutton = () =>{

        let Navigate = useNavigate();

        function previousevent(){
            if(Number(sessionData)>1){
                fetch(`${baseUrl}/eventdetail2/${sessionData-1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>seteventdetail(data))
                sessionStorage.setItem('cardeventdetail',JSON.stringify(sessionData-1));

                Navigate(`/eventdetail/${sessionData-1}`)
            }else if(Number(sessionData)<=1){
                fetch(`${baseUrl}/eventdetail2/1`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>seteventdetail(data))
                sessionStorage.setItem('cardeventdetail',JSON.stringify(1));

                navigate(`/eventdetail/1`)

            }
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

            if(Number(sessionData)<eventobjectlength){
                fetch(`${baseUrl}/eventdetail2/${Number(sessionData)+1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>seteventdetail(data))
                sessionStorage.setItem('cardeventdetail',JSON.stringify(Number(sessionData)+1));

                Navigate(`/eventdetail/${Number(sessionData)+1}`)
            }else if(Number(sessionData)>eventobjectlength){
                fetch(`${baseUrl}/eventdetail2/${eventobjectlength}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>seteventdetail(data))
                sessionStorage.setItem('cardeventdetail',JSON.stringify(Number(eventobjectlength)));

                Navigate(`/eventdetail/${eventobjectlength}`)


            }

            
        }

        
        return(   
            <>




            <div className="nextbuttoncontainerevent" onClick={nextevent}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img></div>




 

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
        
            <div className="eventdetaildisplay"><EventDetailDisplay listData={eventdetail}/></div>
            <div className="previousbuttonevent">{Previousbutton()}</div>
            <div className="nextbuttonevent">{Nextbutton()}</div>
        </div>


            {/* <div className="eventdetaildisplay"><EventDetailDisplay listData={eventdetail}/></div> */}
 

        </div>

        {/* {renderdata} */}

        
        
        </>
    )
}

export default EventDetail;


