import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Displayfavcard from './displayfavcard';
const baseUrl = "http://localhost:9120";

const Viewfavcard = () =>{

    const [favcard,setFavcard] = useState('');
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(`${baseUrl}/favcard?email=${data.email}`).then((res) => {setFavcard(res.data)})
    },[]);
    


    return(
        <>

            <Displayfavcard FavcardData={favcard}/>
        
        </>
    )
}

export default Viewfavcard;