import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TriviaDetailNameDisplay from './TriviaDetailNameDisplay';
import './TriviaDetailName.css';
const baseUrl = "http://localhost:9120";

const TriviaDetailName = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let cardnameid = params.trivianame;
    const [Triviacardname,setTriviacardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/trivia?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setTriviacardname(data));
    },[]);

    const Previousbutton = () =>{

        let navigate = useNavigate();

        function previousevent(){
                sessionStorage.setItem('cardtriviadetail', JSON.stringify(1));
                navigate(`/triviadetail/1`);
        };
        return(
            <>
            <div className="previousbuttoncontainertrivia" onClick={previousevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
                </div>
            
            </>
        )
    }

    const Nextbutton = () =>{

        let navigate = useNavigate();

        function nextevent(){
                sessionStorage.setItem('cardtriviadetail', JSON.stringify(3));
                navigate(`/triviadetail/${3}`);
        };

        return(
            <>
             {/* <button className="btn-btn-primary" onClick={nextevent}>Next</button> */}
             <div className="nextbuttoncontainerevent" onClick={nextevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
             </div>
            
            </>
        )
    }



    return(
    <>
        <div className="triviadetailcontainer">
            <TriviaDetailNameDisplay listData={Triviacardname}/>
            <div className="triviapreviousbutton">{Previousbutton()}</div>
            <div className="trivianextbutton">{Nextbutton()}</div>
        </div>
    </>
    )
}

export default TriviaDetailName;