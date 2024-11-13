import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ActionDetailDisplay from './ActionDetailDisplay';
// import '../Action/Action.css';
import './ActionDetail.css';
const baseUrl = "http://localhost:9120";


const ActionDetail = () =>{


    const [actiondetail,setactiondetail]=useState([]);

    let sessionData = sessionStorage.getItem('cardactiondetail');

    useEffect(()=>{
        fetch(`${baseUrl}/actiondetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            setactiondetail(data);
        })

    },[])

    const Previousbutton = () =>{
        let navigate = useNavigate();

        function previousaction(){
            fetch(`${baseUrl}/actiondetail/${sessionData-1}`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>setactiondetail(data));
            sessionStorage.setItem('cardactiondetail', JSON.stringify(sessionData-1));

            navigate(`/actiondetail/${sessionData-1}`);
        }

        return(
            // <button className="btn btn-primary" onClick={previousaction}>Previous</button>
            <div className="previousbuttoncontaineraction" onClick={previousaction}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
                </div>
        )

    }

    const Nextbutton = () =>{
        let navigate = useNavigate();

        function nextaction(){
            fetch(`${baseUrl}/actiondetail/${Number(sessionData)+1}`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>setactiondetail(data));
            sessionStorage.setItem('cardactiondetail', JSON.stringify(Number(sessionData)+1));

            navigate(`/actiondetail/${Number(sessionData)+1}`);
        }

        return(
            // <button className="btn btn-primary" onClick={nextaction}>Next</button>
            <div className="nextbuttoncontaineraction" onClick={nextaction}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
            </div>
        )

    }





    return(


        <>
        <div className="ActionDetailContainer">
            <div className="ActionDetailDisplayContainerLink"><ActionDetailDisplay listData={actiondetail}/></div>
            <div className="PreviousButtonContainerAction">{Previousbutton()}</div>
            <div className="NextButtonContainerAction">{Nextbutton()}</div>
        </div>
        
        
        </>
    )
}


export default ActionDetail;
