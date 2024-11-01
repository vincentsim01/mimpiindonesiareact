import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ActionDetailDisplay from './ActionDetailDisplay';
import '../Action/Action.css';
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
            <button className="btn-btn primary" onClick={previousaction}>Previous</button>
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
            <button className="btn-btn primary" onClick={nextaction}>Next</button>
        )

    }





    return(


        <>
        <div className="ActionDetailContainer">
            <div className="PreviousButtonContainer">{Previousbutton()}</div>

            <div className="ActionDetailDisplayContainerLink"><ActionDetailDisplay listData={actiondetail}/></div>

            <div className="NextButtonContainer">{Nextbutton()}</div>
        </div>
        
        
        </>
    )
}


export default ActionDetail;
