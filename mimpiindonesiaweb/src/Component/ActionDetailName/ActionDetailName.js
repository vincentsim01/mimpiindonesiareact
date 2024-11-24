import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ActionDetailNameDisplay from './ActionDetailNameDisplay';
import './ActionDetailName.css';
const baseUrl = "http://localhost:9120";

const ActionDetailName = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let cardnameid = params.actionname;
    const [Actioncardname,setActioncardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/actioning?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setActioncardname(data));
    },[]);

    console.log(cardnameid);

    const Previousbutton = () =>{
        let navigate = useNavigate();

        function previousaction(){
                sessionStorage.setItem('cardactiondetail', JSON.stringify(1));
                navigate(`/actiondetail/1`);
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
                sessionStorage.setItem('cardactiondetail', JSON.stringify(3));
                navigate(`/actiondetail/${3}`);
        }

        return(
            <div className="nextbuttoncontaineraction" onClick={nextaction}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
            </div>
        )

    }


    return(<>
            <div className="ActionDetailContainer">
                <ActionDetailNameDisplay listData={Actioncardname}/>
                <div className="PreviousButtonContainerAction">{Previousbutton()}</div>
                <div className="NextButtonContainerAction">{Nextbutton()}</div>
            </div>
    
    
    </>)
}

export default ActionDetailName;