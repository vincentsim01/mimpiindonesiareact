import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DreamDetailDisplay from './DreamDetailDisplay';
import './DreamDetail.css';
const baseUrl = "http://localhost:9120";


const DreamDetail = () => {

    
    let navigate = useNavigate();

    const [dreamDetail,setDreamDetail] = useState([]);
    const [dreamobject,setdreamobject] = useState([]);

    let sessionData = Number(sessionStorage.getItem('carddreamdetail'));
    var dreamobjectlength;

    (function() {

        fetch(`${baseUrl}/dream`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setdreamobject(data))
        dreamobjectlength=dreamobject.length;
      })();


    console.log(dreamobjectlength);

    useEffect(()=> {
        fetch(`${baseUrl}/dreamDetail/${sessionData}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => setDreamDetail(data))
    },[]);


    const previousbutton = () =>{

        // let navigate = useNavigate();

        function previousevent(){
            if(Number(sessionData)>1){
                fetch(`${baseUrl}/dreamDetail/${sessionData-1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setDreamDetail(data))
                sessionStorage.setItem('carddreamdetail',JSON.stringify(sessionData-1));

                navigate(`/dreamdetail/${sessionData-1}`)
            }else if(Number(sessionData)<=1){
                fetch(`${baseUrl}/dreamDetail/1`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setDreamDetail(data))
                sessionStorage.setItem('carddreamdetail',JSON.stringify(1));

                navigate(`/dreamdetail/1`)

            }
        }


        
        return(   
            <>
            

            {/* <button className="btn btn-primary" onClick={previousevent}>Previous</button> */}
            <div className="previousbuttoncontainerdream" onClick={previousevent}> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img></div>





 

             </>    


        )

    }


        
    const nextbutton = () =>{

        // let navigate = useNavigate();


        function nextevent(){
            if(Number(sessionData)<dreamobjectlength){
                fetch(`${baseUrl}/dreamDetail/${Number(sessionData)+1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setDreamDetail(data))
                sessionStorage.setItem('carddreamdetail',JSON.stringify(Number(sessionData)+1));

                navigate(`/dreamdetail/${Number(sessionData)+1}`)


            }else if(Number(sessionData)>dreamobjectlength){
                fetch(`${baseUrl}/dreamDetail/${dreamobjectlength}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setDreamDetail(data))
                sessionStorage.setItem('carddreamdetail',JSON.stringify(dreamobjectlength));

                navigate(`/dreamdetail/${dreamobjectlength}`)
            }

            
        }

        
        return(   
            <>



            {/* <button className="btn btn-primary" onClick={nextevent}>Next</button> */}
            <div className="nextbuttoncontainerdream" onClick={nextevent}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img></div>




 

             </>    


        )

    }




    return (
        <>

        <div className="dreamdetailcontainer">
            <div className="twobutton">

                <div className="dreamdetaildisplay"><DreamDetailDisplay listData={dreamDetail}/></div>
                <div className="previousbuttondream">{previousbutton()}</div>
                <div className="nextbuttondream">{nextbutton()}</div>
            </div>


        </div>
        
        
        </>
    )
}


export default DreamDetail;
