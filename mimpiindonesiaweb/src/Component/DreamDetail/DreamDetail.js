import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DreamDetailDisplay from './DreamDetailDisplay';
const baseUrl = "http://localhost:9120";


const DreamDetail = () => {

    const [dreamDetail,setDreamDetail] = useState([]);

    let sessionData = sessionStorage.getItem('carddreamdetail');

    useEffect(()=> {
        fetch(`${baseUrl}/dreamDetail/${sessionData}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => setDreamDetail(data))
    },[]);



    return (
        <>

        This is DreamDetail

        <DreamDetailDisplay listData={dreamDetail}/>
        
        
        </>
    )
}


export default DreamDetail;
