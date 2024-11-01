import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import TriviaDetailDisplay from './TriviaDetailDisplay';
import { useNavigate } from 'react-router-dom';
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
            <button className="btn-btn-primary" onClick={previousevent}>Previous</button>
            
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
             <button className="btn-btn-primary" onClick={nextevent}>Next</button>
            
            </>
        )
    }


    return(
        <>
        TriviaDetail
        {Previousbutton()}

        <TriviaDetailDisplay listData={triviadetail}/>

        {Nextbutton()}
        
        </>
    )
}

export default TriviaDetail;