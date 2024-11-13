import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import TriviaDetailDisplay from './TriviaDetailDisplay';
import { useNavigate } from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
const baseUrl = "http://localhost:9120";


const TriviaDetail = () =>{

    const [triviadetail,settriviadetail] = useState([]);
    let sessionData = sessionStorage.getItem('cardtriviadetail');

    useEffect(()=>{
        fetch(`${baseUrl}/triviadetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{settriviadetail(data)})

    },[]);

    const Previousbutton = () =>{

        let navigate = useNavigate();

        function previousevent(){
            fetch(`${baseUrl}/triviadetail/${sessionData}-1`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>settriviadetail(data));
            sessionStorage.setItem('cardtriviadetail', JSON.stringify(sessionData-1));

            navigate(`/triviadetail/${sessionData-1}`);

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
            fetch(`${baseUrl}/triviadetail/${Number(sessionData)+1}`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>settriviadetail(data));
            sessionStorage.setItem('cardtriviadetail', JSON.stringify(Number(sessionData)+1));

            navigate(`/triviadetail/${Number(sessionData)+1}`);

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
 
            <div className="triviapreviousbutton">{Previousbutton()}</div>

            <div className="triviadetaildisplaylink"><TriviaDetailDisplay listData={triviadetail}/></div>

            <div className="trivianextbutton">{Nextbutton()}</div>

        </div>


                    
        
        </>
    )
}

export default TriviaDetail;