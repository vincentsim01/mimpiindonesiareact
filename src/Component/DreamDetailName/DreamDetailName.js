import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DreamDetailNameDisplay from './DreamDetailNameDisplay';
import './DreamDetailName.css';
const baseUrl = "http://localhost:9120";

const DreamDetailName = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let cardnameid = params.dreamname;
    const [Dreamcardname,setDreamcardname]= useState([]);

    console.log(cardnameid);

    useEffect(()=>{
        fetch(`${baseUrl}/dream?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setDreamcardname(data));
    },[]);


    const previousbutton = () =>{

        function previousevent(){
                sessionStorage.setItem('carddreamdetail',JSON.stringify(1));
                navigate(`/dreamdetail/1`)
        }
        return(   
            <>
            <div className="previousbuttoncontainerdream" onClick={previousevent}> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img></div>
             </>    
        )

    }

    const nextbutton = () =>{

        // let navigate = useNavigate();


        function nextevent(){
                sessionStorage.setItem('carddreamdetail',JSON.stringify(3));
                navigate(`/dreamdetail/3`) 
        }
        return(   
            <>
            <div className="nextbuttoncontainerdream" onClick={nextevent}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img></div>
            </>    
        )
    }


    return(<>
    <div className="dreamdetailcontainer">
    <DreamDetailNameDisplay listData={Dreamcardname}/>
    <div className="previousbuttondream">{previousbutton()}</div>
    <div className="nextbuttondream">{nextbutton()}</div>
    </div>
    
    
    </>)
}

export default DreamDetailName;