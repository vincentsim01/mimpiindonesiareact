import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DreamDetailDisplay from './DreamDetailDisplay';
import './DreamDetail.css';
const baseUrl = "http://localhost:9120";


const DreamDetail = () => {

    
    let navigate = useNavigate();

    const [dreamDetail,setDreamDetail] = useState([]);

    let sessionData = Number(sessionStorage.getItem('carddreamdetail'));

    useEffect(()=> {
        fetch(`${baseUrl}/dreamDetail/${sessionData}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => setDreamDetail(data))
    },[]);


    const previousbutton = () =>{

        // let navigate = useNavigate();

        function previousevent(){
            fetch(`${baseUrl}/dreamDetail/${sessionData-1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>setDreamDetail(data))
            sessionStorage.setItem('carddreamdetail',JSON.stringify(sessionData-1));

            navigate(`/dreamdetail/${sessionData-1}`)
        }


        
        return(   
            <>
            

            <button className="btn btn-primary" onClick={previousevent}>Previous</button>





 

             </>    


        )

    }


        
    const nextbutton = () =>{

        // let navigate = useNavigate();


        function nextevent(){
            fetch(`${baseUrl}/dreamDetail/${Number(sessionData)+1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>setDreamDetail(data))
            sessionStorage.setItem('carddreamdetail',JSON.stringify(Number(sessionData)+1));

            navigate(`/dreamdetail/${Number(sessionData)+1}`)

            
        }

        
        return(   
            <>



            <button className="btn btn-primary" onClick={nextevent}>Next</button>




 

             </>    


        )

    }




    return (
        <>

        <div className="dreamdetailcontainer">
            <div className="twobutton">
                <div className="previousbutton">{previousbutton()}</div>
                <div className="dreamdetaildisplay"><DreamDetailDisplay listData={dreamDetail}/></div>
                <div className="nextbutton">{nextbutton()}</div>
            </div>


        </div>
        
        
        </>
    )
}


export default DreamDetail;
